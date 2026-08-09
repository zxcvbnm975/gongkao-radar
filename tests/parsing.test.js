import test from "node:test";
import assert from "node:assert/strict";
import { canonicalAnnouncementKey, classifyTrack, classifyType, collectSource, detectCity, extractFields, isAllowedPublicUrl, normalizeAiAnalysis, normalizeBarkUrl, normalizeDate, normalizeSourceInput, parseListing, stripHtml } from "../worker/src/index.js";

test("stripHtml removes markup and decodes common entities", () => {
  assert.equal(stripHtml("<p>招录&nbsp;<b>100</b>人 &amp; 报名</p>"), "招录 100 人 & 报名");
});

test("AI analysis normalization clamps scores and limits untrusted output", () => {
  const normalized = normalizeAiAnalysis({
    priority: "unexpected",
    score: 180.4,
    summary: "重点公告".repeat(100),
    reasons: ["报名即将截止", "岗位多", "官方发布", "需要复核", "多余原因"],
    confidence: -3,
    isRelevant: false
  });
  assert.equal(normalized.priority, "medium");
  assert.equal(normalized.score, 100);
  assert.equal(normalized.summary.length, 280);
  assert.equal(normalized.reasons.length, 4);
  assert.equal(normalized.confidence, 0);
  assert.equal(normalized.isRelevant, false);
});

test("AI analysis keeps priority and score internally consistent", () => {
  assert.equal(normalizeAiAnalysis({ priority: "medium", score: 0 }).score, 40);
  assert.equal(normalizeAiAnalysis({ priority: "high", score: 12 }).score, 70);
  assert.equal(normalizeAiAnalysis({ priority: "urgent", score: 88 }).score, 90);
});

test("source management blocks local and private network addresses", () => {
  assert.equal(isAllowedPublicUrl("https://www.gansu.gov.cn/"), true);
  assert.equal(isAllowedPublicUrl("http://127.0.0.1/admin"), false);
  assert.equal(isAllowedPublicUrl("http://192.168.1.20/list"), false);
  assert.equal(isAllowedPublicUrl("http://localhost:8787/"), false);
});

test("source management normalizes ordered fallback endpoints", () => {
  const source = normalizeSourceInput({
    name: "兰州市人社局",
    region: "甘肃",
    city: "兰州市",
    url: "https://example.gov.cn/",
    track: "事业单位",
    endpoints: [
      { label: "主入口", url: "https://example.gov.cn/notices/" },
      { label: "年度专题", urlTemplate: "https://example.gov.cn/{year}/", yearOffsets: [1, 0] }
    ],
    adapter: { titlePattern: "事业单位|公开招聘" }
  }, { id: "lanzhou-institutions" });
  assert.equal(source.id, "lanzhou-institutions");
  assert.equal(source.track, "事业单位");
  assert.equal(source.endpoints.length, 2);
  assert.equal(source.endpoints[1].urlTemplate, "https://example.gov.cn/{year}/");
});

test("announcement deduplication ignores punctuation and spacing", () => {
  const first = canonicalAnnouncementKey({ title: "关于 2027 年事业单位公开招聘公告", region: "甘肃", track: "事业单位" });
  const second = canonicalAnnouncementKey({ title: "关于2027年事业单位公开招聘《公告》", region: "甘肃", track: "事业单位" });
  assert.equal(first, second);
});

test("Bark delivery accepts only the official HTTPS endpoint", () => {
  assert.equal(normalizeBarkUrl("abcDEF_123456"), "https://api.day.app/abcDEF_123456");
  assert.equal(normalizeBarkUrl("https://api.day.app/abcDEF_123456/test"), "https://api.day.app/abcDEF_123456");
  assert.throws(() => normalizeBarkUrl("http://api.day.app/abcDEF_123456"));
  assert.throws(() => normalizeBarkUrl("https://example.com/abcDEF_123456"));
});

test("classifyType identifies common notice categories", () => {
  assert.equal(classifyType("2027年度考试录用公务员报名公告"), "报名提醒");
  assert.equal(classifyType("公务员资格复审通知"), "资格审查");
  assert.equal(classifyType("公务员公共科目笔试安排"), "考试安排");
  assert.equal(classifyType("考试录用公务员公告"), "招考公告");
});

test("classifyTrack separates civil service, institutions and state-owned employers", () => {
  assert.equal(classifyTrack("甘肃省事业单位公开招聘工作人员公告"), "事业单位");
  assert.equal(classifyTrack("国家电网有限公司高校毕业生招聘公告"), "国家电网");
  assert.equal(classifyTrack("甘肃省烟草专卖局招聘公告"), "烟草系统");
  assert.equal(classifyTrack("中央机关考试录用公务员公告"), "公务员");
  assert.equal(classifyTrack("公开招聘工作人员公告", "事业单位"), "事业单位");
  assert.equal(classifyTrack("考试录用公务员公告", "事业单位"), "公务员");
});

test("detectCity prioritizes the three configured Gansu cities", () => {
  assert.equal(detectCity("武威市2026年度公开遴选公务员公告"), "武威市");
  assert.equal(detectCity("张掖考区资格复审通知"), "张掖市");
  assert.equal(detectCity("甘肃省考公告"), null);
});

test("normalizeDate converts Chinese dates to Shanghai ISO time", () => {
  assert.equal(normalizeDate("2026年10月15日8:30"), "2026-10-15T08:30:00+08:00");
  assert.equal(normalizeDate("10月24日18时00分", 2026), "2026-10-24T18:00:00+08:00");
});

test("extractFields reads count, registration window and exam date", () => {
  const text = "本次计划招录3,810人。报名时间为2026年10月15日8:00至10月24日18:00。公共科目笔试时间为2026年11月30日。";
  assert.deepEqual(extractFields(text, "2026-10-14T00:00:00+08:00"), {
    recruitmentCount: 3810,
    registrationStart: "2026-10-15T08:00:00+08:00",
    registrationEnd: "2026-10-24T18:00:00+08:00",
    examDate: "2026-11-30T00:00:00+08:00"
  });
});

test("parseListing keeps relevant official links and resolves relative URLs", () => {
  const html = `
    <ul>
      <li><a href="/notice/2027.html">中央机关2027年度考试录用公务员公告</a><span>2026-10-14</span></li>
      <li><a href="/news/meeting.html">全省工作会议召开</a><span>2026-10-13</span></li>
    </ul>`;
  const source = { name: "测试公务员局", region: "全国", url: "https://example.gov.cn/list/", official: true };
  const items = parseListing(html, source);
  assert.equal(items.length, 1);
  assert.equal(items[0].articleUrl, "https://example.gov.cn/notice/2027.html");
  assert.equal(items[0].region, "全国");
});

test("parseListing marks a configured Gansu city as priority", () => {
  const html = '<a href="/notice.html">金昌市2027年度考试录用公务员公告</a><span>2026-12-01</span>';
  const source = { name: "金昌党建网", region: "甘肃", city: "金昌市", url: "https://example.gov.cn/", official: true };
  const [item] = parseListing(html, source);
  assert.equal(item.city, "金昌市");
  assert.equal(item.priority, true);
});

test("parseListing accepts institution notices from a dedicated official source", () => {
  const html = '<a href="/notice.html">2026年公开引进高层次和急需紧缺人才公告</a><span>2026-06-26</span>';
  const source = { name: "张掖市人社局", region: "甘肃", city: "张掖市", track: "事业单位", url: "https://example.gov.cn/", official: true };
  const [item] = parseListing(html, source);
  assert.equal(item.track, "事业单位");
  assert.equal(item.city, "张掖市");
});

test("parseListing tags State Grid and tobacco recruitment notices", () => {
  const gridSource = { name: "国家电网招聘平台", region: "全国", track: "国家电网", url: "https://example.com/", official: true };
  const tobaccoSource = { name: "烟草招聘平台", region: "全国", track: "烟草系统", url: "https://example.com/", official: true };
  assert.equal(parseListing('<a href="/grid.html">2027年高校毕业生招聘公告</a>', gridSource)[0].track, "国家电网");
  assert.equal(parseListing('<a href="/tobacco.html">2027年度招聘岗位公告</a>', tobaccoSource)[0].track, "烟草系统");
});

test("parseListing applies a source adapter and reads title attributes", () => {
  const source = {
    name: "金昌市人社局",
    region: "甘肃",
    city: "金昌市",
    track: "事业单位",
    url: "https://example.gov.cn/list/",
    adapter: { titlePattern: "金昌.*(事业单位|公开招聘)" },
    official: true
  };
  const html = `
    <a href="/meeting.html" title="全市工作会议召开"><span>查看详情</span></a>
    <a data-href="/recruit.html" title="金昌市2027年事业单位公开招聘工作人员公告"><span>查看详情</span></a>`;
  const items = parseListing(html, source);
  assert.equal(items.length, 1);
  assert.equal(items[0].title, "金昌市2027年事业单位公开招聘工作人员公告");
  assert.equal(items[0].articleUrl, "https://example.gov.cn/recruit.html");
});

test("parseListing extracts announcements from embedded page data", () => {
  const source = {
    name: "江苏省公务员局",
    region: "江苏",
    url: "https://example.gov.cn/list/",
    adapter: { titlePattern: "公务员|考试录用" },
    official: true
  };
  const html = `<script>window.__LIST__ = [{
    "articleTitle":"江苏省2027年度考试录用公务员公告",
    "detailUrl":"\\/notice\\/2027.html",
    "publishTime":"2026-10-30"
  }];</script>`;
  const [item] = parseListing(html, source);
  assert.equal(item.title, "江苏省2027年度考试录用公务员公告");
  assert.equal(item.articleUrl, "https://example.gov.cn/notice/2027.html");
  assert.equal(item.publishedAt, "2026-10-30T00:00:00+08:00");
  assert.equal(item.parseMethod, "embedded-data");
});

test("collectSource switches to an official fallback when the primary endpoint fails", async () => {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async (url) => {
    if (String(url).includes("primary")) return new Response("upstream error", { status: 503 });
    return new Response(`
      <a href="/other.html">武威市2027年事业单位公开招聘工作人员公告</a>
      <a href="/notice.html">金昌市2027年事业单位公开招聘工作人员公告</a>`, {
      status: 200,
      headers: { "Content-Type": "text/html" }
    });
  };
  try {
    const result = await collectSource({
      name: "金昌市人社局",
      region: "甘肃",
      city: "金昌市",
      track: "事业单位",
      url: "https://primary.example.gov.cn/",
      endpoints: [
        { url: "https://primary.example.gov.cn/", label: "主入口" },
        { url: "https://backup.example.gov.cn/list/", label: "省级备用入口", titlePattern: "金昌.*(事业单位|公开招聘)" }
      ],
      adapter: { titlePattern: "事业单位|公开招聘" },
      official: true
    }, { lightweight: true });
    assert.equal(result.items.length, 1);
    assert.equal(result.fallbackUsed, true);
    assert.equal(result.endpointLabel, "省级备用入口");
    assert.equal(result.attemptedEndpoints.length, 2);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("collectSource identifies an accessible client-rendered official portal", async () => {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async () => new Response("<main><div id=app></div><script src=/assets/app.js></script></main>", { status: 200 });
  try {
    const result = await collectSource({
      name: "年度公务员考录专题",
      region: "全国",
      url: "https://example.gov.cn/topic/",
      endpoints: [{ url: "https://example.gov.cn/topic/", label: "年度专题", dynamicPortal: true }],
      adapter: { titlePattern: "公务员|考试录用" },
      official: true
    }, { lightweight: true });
    assert.equal(result.items.length, 0);
    assert.equal(result.dynamicPortal, true);
    assert.equal(result.endpointLabel, "年度专题");
  } finally {
    globalThis.fetch = originalFetch;
  }
});
