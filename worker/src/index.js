const SOURCES = [
  {
    id: "scs",
    name: "国家公务员局",
    region: "全国",
    badge: "国",
    url: "https://www.scs.gov.cn/",
    official: true
  },
  {
    id: "shanghai",
    name: "上海市公务员局",
    region: "上海",
    badge: "沪",
    url: "https://www.shacs.gov.cn/",
    official: true
  },
  {
    id: "jiangsu",
    name: "江苏省委组织部",
    region: "江苏",
    badge: "苏",
    url: "https://www.jszzb.gov.cn/tzgg/",
    official: true
  },
  {
    id: "zhejiang",
    name: "浙江省公务员考试录用网",
    region: "浙江",
    badge: "浙",
    url: "https://gwy.zjks.gov.cn/",
    official: true
  },
  {
    id: "gansu",
    name: "甘肃组工网",
    region: "甘肃",
    badge: "甘",
    url: "https://www.gszg.gov.cn/26gsgwy/index.htm",
    official: true
  },
  {
    id: "gansu-exams",
    name: "甘肃人事考试网",
    region: "甘肃",
    badge: "考",
    url: "https://ks.rst.gansu.gov.cn/",
    official: true
  },
  {
    id: "jinchang",
    name: "金昌党建网",
    region: "甘肃",
    city: "金昌市",
    badge: "金",
    url: "https://www.jczzb.cn/",
    official: true
  },
  {
    id: "wuwei",
    name: "甘肃党建武威市平台",
    region: "甘肃",
    city: "武威市",
    badge: "武",
    url: "https://ww.gsdj.gov.cn/",
    official: true
  },
  {
    id: "zhangye",
    name: "张掖市人民政府",
    region: "甘肃",
    city: "张掖市",
    badge: "张",
    url: "https://www.zhangye.gov.cn/zyszfxxgk/fdzdgknr_5657/rsxx_5667/ghb.html",
    official: true
  }
];

const FOCUS_CITIES = ["金昌市", "武威市", "张掖市"];
const SEED_VERSION = "2";

const SEED_ITEMS = [
  {
    id: "seed-js-2027-catalog",
    title: "关于征求对《江苏省2027年度考试录用公务员专业参考目录（征求意见稿）》意见的公告",
    summary: "江苏省公务员局已启动2027年度专业参考目录意见征集，征求意见截止至2026年8月11日。",
    sourceName: "江苏省委组织部",
    sourceUrl: "https://www.jszzb.gov.cn/",
    articleUrl: "https://www.jszzb.gov.cn/tzgg/art/2026/art_2cd76f601ab84b7bbb6164e1168a13ff.html",
    region: "江苏",
    type: "考试安排",
    publishedAt: "2026-07-27T00:00:00+08:00",
    registrationStart: null,
    registrationEnd: "2026-08-11T23:59:59+08:00",
    examDate: null,
    recruitmentCount: null,
    official: true
  },
  {
    id: "seed-national-2027-plan",
    title: "中央机关及其直属机构2027年度考试录用公务员笔试列入下半年考试计划",
    summary: "官方年度考试计划已列出2027年度国考笔试，具体日期仍待中央公务员主管部门公布。",
    sourceName: "湖北省人事考试网",
    sourceUrl: "https://rst.hubei.gov.cn/",
    articleUrl: "https://rst.hubei.gov.cn/hbrsksw/ksfw/ksjh/202602/t20260228_5882366.shtml",
    region: "全国",
    type: "考试安排",
    publishedAt: "2026-02-28T00:00:00+08:00",
    registrationStart: null,
    registrationEnd: null,
    examDate: null,
    recruitmentCount: null,
    official: true
  },
  {
    id: "seed-shanghai-2026",
    title: "上海市2026年度考试录用公务员公告",
    summary: "计划招录2393人，网上报名时间为2025年11月1日0时至11月7日12时，笔试于12月7日举行。",
    sourceName: "上海市人民政府",
    sourceUrl: "https://www.shanghai.gov.cn/",
    articleUrl: "https://www.shanghai.gov.cn/nw4411/20251101/8125a84774ca4c219b7dc4a3e91e4eee.html",
    region: "上海",
    type: "招考公告",
    publishedAt: "2025-11-01T00:00:00+08:00",
    registrationStart: "2025-11-01T00:00:00+08:00",
    registrationEnd: "2025-11-07T12:00:00+08:00",
    examDate: "2025-12-07T00:00:00+08:00",
    recruitmentCount: 2393,
    official: true
  },
  {
    id: "seed-jiangsu-2026",
    title: "江苏省2026年度考试录用公务员公告",
    summary: "江苏省各级机关和参照公务员法管理单位计划招录8179人。",
    sourceName: "江苏省委组织部",
    sourceUrl: "https://www.jszzb.gov.cn/",
    articleUrl: "https://www.jszzb.gov.cn/tzgg/art/2025/art_0b70c8f3fb4f2c5d852180928e946634.html",
    region: "江苏",
    type: "招考公告",
    publishedAt: "2025-10-31T00:00:00+08:00",
    registrationStart: null,
    registrationEnd: null,
    examDate: null,
    recruitmentCount: 8179,
    official: true
  },
  {
    id: "seed-zhejiang-2026",
    title: "浙江省各级机关单位2026年度考试录用公务员公告",
    summary: "全省计划招考公务员5712名，详细岗位与资格条件请前往浙江省公务员考试录用网核对。",
    sourceName: "浙江省公务员考试录用网",
    sourceUrl: "https://gwy.zjks.gov.cn/",
    articleUrl: "https://gwy.zjks.gov.cn/",
    region: "浙江",
    type: "招考公告",
    publishedAt: "2025-11-03T00:00:00+08:00",
    registrationStart: "2025-11-06T09:00:00+08:00",
    registrationEnd: "2025-11-11T17:00:00+08:00",
    examDate: "2025-12-07T00:00:00+08:00",
    recruitmentCount: 5712,
    official: true
  },
  {
    id: "seed-gansu-2026",
    title: "甘肃省2026年度考试录用机关公务员和参照公务员法管理单位工作人员公告",
    summary: "报名时间为2026年2月2日8:30至2月8日18:00，职位及资格条件以甘肃组工网职位简表为准。",
    sourceName: "甘肃组工网",
    sourceUrl: "https://www.gszg.gov.cn/",
    articleUrl: "https://www.gszg.gov.cn/20260130/63be26d75f2f4f85afc576e8b887df9a/c.html",
    region: "甘肃",
    city: null,
    priority: false,
    type: "招考公告",
    publishedAt: "2026-01-30T17:00:02+08:00",
    registrationStart: "2026-02-02T08:30:00+08:00",
    registrationEnd: "2026-02-08T18:00:00+08:00",
    examDate: null,
    recruitmentCount: 4854,
    official: true
  },
  {
    id: "seed-wuwei-2026-selection",
    title: "武威市2026年度市直机关公开遴选公务员公告",
    summary: "设置遴选职位20个、计划20名，报名时间为2026年7月10日8:30至7月12日18:00。",
    sourceName: "甘肃党建武威市平台",
    sourceUrl: "https://ww.gsdj.gov.cn/",
    articleUrl: "https://ww.gsdj.gov.cn/#/artical/665550?index1=1&index2=-1",
    region: "甘肃",
    city: "武威市",
    priority: true,
    type: "招考公告",
    publishedAt: "2026-07-07T00:00:00+08:00",
    registrationStart: "2026-07-10T08:30:00+08:00",
    registrationEnd: "2026-07-12T18:00:00+08:00",
    examDate: null,
    recruitmentCount: 20,
    official: true
  },
  {
    id: "seed-jinchang-2026-selection",
    title: "金昌市2026年度公开遴选和公开选调公务员公告",
    summary: "金昌市委组织部开展2026年度公开遴选和公开选调，职位表及后续安排请在金昌党建网核对。",
    sourceName: "金昌党建网",
    sourceUrl: "https://www.jczzb.cn/",
    articleUrl: "https://www.jczzb.cn/",
    region: "甘肃",
    city: "金昌市",
    priority: true,
    type: "招考公告",
    publishedAt: "2026-05-11T00:00:00+08:00",
    registrationStart: null,
    registrationEnd: null,
    examDate: null,
    recruitmentCount: null,
    official: true
  },
  {
    id: "seed-zhangye-2026-selection",
    title: "张掖市2026年度市直机关及参照公务员法管理单位公开遴选公务员公告",
    summary: "张掖市2026年度市直机关公开遴选相关公告已发布，后续资格复审、面试及体检信息将持续监测。",
    sourceName: "张掖市人民政府",
    sourceUrl: "https://www.zhangye.gov.cn/",
    articleUrl: "https://www.zhangye.gov.cn/swj/dzdt/tzgg/ghb.html",
    region: "甘肃",
    city: "张掖市",
    priority: true,
    type: "招考公告",
    publishedAt: "2026-05-12T00:00:00+08:00",
    registrationStart: null,
    registrationEnd: null,
    examDate: null,
    recruitmentCount: null,
    official: true
  }
];

const RELEVANT_TITLE = /(公务员|国考|省考|选调生).{0,18}(招录|考录|考试|报名|职位|公告|调剂|补录|面试|笔试|资格|目录)|(招录|考录|考试|报名|职位|公告|调剂|补录|面试|笔试|资格|目录).{0,18}(公务员|国考|省考|选调生)/;

export function decodeHtml(value = "") {
  return value
    .replace(/&nbsp;|&#160;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)));
}

export function stripHtml(value = "") {
  return decodeHtml(value)
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function classifyType(title = "") {
  if (/资格审查|资格复审|审核/.test(title)) return "资格审查";
  if (/报名|确认|缴费|准考证/.test(title)) return "报名提醒";
  if (/笔试|面试|考试计划|考试安排|时间安排|专业参考目录/.test(title)) return "考试安排";
  return "招考公告";
}

export function detectCity(text = "", fallback = null) {
  return FOCUS_CITIES.find((city) => String(text).includes(city) || String(text).includes(city.replace(/市$/, ""))) || fallback;
}

function isoInShanghai(year, month, day, hour = 0, minute = 0) {
  const y = Number(year);
  const m = Number(month);
  const d = Number(day);
  if (!y || m < 1 || m > 12 || d < 1 || d > 31) return null;
  return `${String(y).padStart(4, "0")}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}T${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:00+08:00`;
}

export function normalizeDate(value, fallbackYear = new Date().getUTCFullYear()) {
  if (!value) return null;
  const match = String(value).match(/(?:(20\d{2})[年\-/.])?\s*(\d{1,2})[月\-/.]\s*(\d{1,2})日?(?:\s*(\d{1,2})(?:[:时]\s*(\d{1,2}))?分?)?/);
  if (!match) return null;
  return isoInShanghai(match[1] || fallbackYear, match[2], match[3], match[4] || 0, match[5] || 0);
}

export function extractFields(text = "", publishedAt = null) {
  const clean = stripHtml(text);
  const fallbackYear = publishedAt ? new Date(publishedAt).getUTCFullYear() : new Date().getUTCFullYear();
  const countMatch = clean.match(/(?:计划|拟|共)?(?:考试)?招录(?:公务员|工作人员)?\s*([\d,，]+)\s*[人名]/);
  const registration = clean.match(/(?:报名|提交报考申请)(?:时间|期间)?[^。；]{0,55}?((?:20\d{2}年)?\s*\d{1,2}月\d{1,2}日(?:\s*\d{1,2}(?:[:时]\d{1,2})?)?)[^。；]{0,20}?(?:至|到|-)[^。；]{0,20}?((?:20\d{2}年)?\s*\d{1,2}月\d{1,2}日(?:\s*\d{1,2}(?:[:时]\d{1,2})?)?)/);
  const exam = clean.match(/(?:公共科目)?笔试(?:时间)?(?:为|：|:|定于)?\s*((?:20\d{2}年)?\s*\d{1,2}月\d{1,2}日)/);
  return {
    recruitmentCount: countMatch ? Number(countMatch[1].replace(/[,，]/g, "")) : null,
    registrationStart: registration ? normalizeDate(registration[1], fallbackYear) : null,
    registrationEnd: registration ? normalizeDate(registration[2], fallbackYear) : null,
    examDate: exam ? normalizeDate(exam[1], fallbackYear) : null
  };
}

function extractMetaDescription(html) {
  const match = html.match(/<meta[^>]+(?:name=["']description["'][^>]+content|content=["']([^"']*)["'][^>]+name=["']description)[^>]*>/i);
  if (!match) {
    const simple = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i);
    return simple ? stripHtml(simple[1]).slice(0, 220) : "";
  }
  const content = match[1] || match[0].match(/content=["']([^"']*)["']/i)?.[1] || "";
  return stripHtml(content).slice(0, 220);
}

function extractNearbyDate(html, index) {
  const nearby = stripHtml(html.slice(Math.max(0, index - 160), index + 320));
  const match = nearby.match(/20\d{2}[年\-/.]\d{1,2}[月\-/.]\d{1,2}日?/);
  return match ? normalizeDate(match[0]) : null;
}

export function parseListing(html, source) {
  const items = [];
  const seen = new Set();
  const anchorPattern = /<a\b[^>]*href\s*=\s*["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let match;
  while ((match = anchorPattern.exec(html)) && items.length < 20) {
    const title = stripHtml(match[2]);
    if (title.length < 8 || title.length > 150 || !RELEVANT_TITLE.test(title)) continue;
    let articleUrl;
    try {
      articleUrl = new URL(match[1], source.url).href;
    } catch {
      continue;
    }
    if (!/^https?:/.test(articleUrl) || seen.has(articleUrl)) continue;
    seen.add(articleUrl);
    items.push({
      title,
      articleUrl,
      publishedAt: extractNearbyDate(html, match.index),
      sourceName: source.name,
      sourceUrl: source.url,
      region: source.region,
      city: detectCity(title, source.city || null),
      priority: Boolean(detectCity(title, source.city || null)),
      type: classifyType(title),
      official: source.official
    });
  }
  return items;
}

async function hash(value) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(digest)].slice(0, 12).map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function fetchText(url, timeoutMs = 12000) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      redirect: "follow",
      headers: {
        Accept: "text/html,application/xhtml+xml",
        "User-Agent": "GongkaoRadar/1.0 (+official-information-monitor; low-frequency)"
      }
    });
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
    return response.text();
  } finally {
    clearTimeout(timeout);
  }
}

async function enrichItem(item) {
  try {
    const html = await fetchText(item.articleUrl, 10000);
    const fields = extractFields(html, item.publishedAt);
    const fullText = stripHtml(html);
    const titleIndex = fullText.indexOf(item.title.slice(0, 20));
    const contextual = titleIndex >= 0 ? fullText.slice(titleIndex + item.title.length, titleIndex + item.title.length + 240) : "";
    return {
      ...item,
      id: await hash(item.articleUrl),
      summary: extractMetaDescription(html) || contextual || "详细报考条件和时间节点请查看官方原文。",
      city: detectCity(`${item.title} ${fullText}`, item.city || null),
      priority: Boolean(detectCity(`${item.title} ${fullText}`, item.city || null)),
      ...fields
    };
  } catch {
    return {
      ...item,
      id: await hash(item.articleUrl),
      summary: "详细报考条件和时间节点请查看官方原文。",
      city: item.city || null,
      priority: Boolean(item.city),
      registrationStart: null,
      registrationEnd: null,
      examDate: null,
      recruitmentCount: null
    };
  }
}

async function collectSource(source) {
  const html = await fetchText(source.url);
  const links = parseListing(html, source).slice(0, 10);
  const output = [];
  for (let index = 0; index < links.length; index += 3) {
    const batch = await Promise.all(links.slice(index, index + 3).map(enrichItem));
    output.push(...batch);
  }
  return output;
}

function getStore(env) {
  return env.NEWS_STORE.get(env.NEWS_STORE.idFromName("main"));
}

async function ensureSeeded(env) {
  return getStore(env).fetch("https://store.internal/seed", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ items: SEED_ITEMS, version: SEED_VERSION })
  });
}

async function refreshAll(env) {
  await ensureSeeded(env);
  const report = [];
  const collected = [];
  for (const source of SOURCES) {
    try {
      const items = await collectSource(source);
      collected.push(...items);
      report.push({ source: source.name, ok: true, found: items.length });
    } catch (error) {
      report.push({ source: source.name, ok: false, error: error instanceof Error ? error.message : String(error) });
    }
  }
  const syncedAt = new Date().toISOString();
  const response = await getStore(env).fetch("https://store.internal/ingest", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ items: collected, syncedAt, report })
  });
  const stored = await response.json();
  return { ...stored, report };
}

function corsHeaders(request, env) {
  const origin = request.headers.get("Origin") || "*";
  const allowed = (env.ALLOWED_ORIGINS || "*").split(",").map((item) => item.trim());
  const selected = allowed.includes("*") || allowed.includes(origin) ? origin : allowed[0];
  return {
    "Access-Control-Allow-Origin": selected || "null",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin"
  };
}

function json(data, init = {}, request = new Request("https://internal"), env = {}) {
  return Response.json(data, {
    ...init,
    headers: {
      "Cache-Control": "no-store",
      ...corsHeaders(request, env),
      ...(init.headers || {})
    }
  });
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: corsHeaders(request, env) });

    if (url.pathname === "/" || url.pathname === "/api/health") {
      return json({ ok: true, service: "gongkao-radar-api", now: new Date().toISOString() }, {}, request, env);
    }

    if (url.pathname === "/api/sources" && request.method === "GET") {
      return json({ items: SOURCES.map(({ id, ...source }) => source) }, { headers: { "Cache-Control": "public, max-age=3600" } }, request, env);
    }

    if (["/api/news", "/api/stats", "/api/calendar"].includes(url.pathname) && request.method === "GET") {
      await ensureSeeded(env);
      const internalPath = url.pathname.replace("/api", "") + url.search;
      const response = await getStore(env).fetch(`https://store.internal${internalPath}`);
      return new Response(response.body, {
        status: response.status,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Cache-Control": "public, max-age=300, stale-while-revalidate=3600",
          ...corsHeaders(request, env)
        }
      });
    }

    if (url.pathname === "/api/refresh" && request.method === "POST") {
      if (!env.ADMIN_TOKEN) return json({ error: "ADMIN_TOKEN 尚未配置" }, { status: 503 }, request, env);
      const token = request.headers.get("Authorization")?.replace(/^Bearer\s+/i, "");
      if (token !== env.ADMIN_TOKEN) return json({ error: "无权执行刷新" }, { status: 401 }, request, env);
      const result = await refreshAll(env);
      return json(result, {}, request, env);
    }

    return json({ error: "Not found" }, { status: 404 }, request, env);
  },

  async scheduled(_controller, env, ctx) {
    ctx.waitUntil(refreshAll(env));
  }
};

export class NewsStore {
  constructor(ctx) {
    this.ctx = ctx;
    this.ctx.blockConcurrencyWhile(async () => {
      this.ctx.storage.sql.exec(`
        CREATE TABLE IF NOT EXISTS articles (
          id TEXT PRIMARY KEY,
          title TEXT NOT NULL,
          summary TEXT,
          source_name TEXT NOT NULL,
          source_url TEXT NOT NULL,
          article_url TEXT NOT NULL UNIQUE,
          region TEXT NOT NULL,
          city TEXT,
          priority INTEGER NOT NULL DEFAULT 0,
          type TEXT NOT NULL,
          published_at TEXT,
          registration_start TEXT,
          registration_end TEXT,
          exam_date TEXT,
          recruitment_count INTEGER,
          official INTEGER NOT NULL DEFAULT 1,
          fetched_at TEXT NOT NULL
        );
        CREATE INDEX IF NOT EXISTS idx_articles_published ON articles(published_at DESC);
        CREATE INDEX IF NOT EXISTS idx_articles_region ON articles(region);
        CREATE TABLE IF NOT EXISTS metadata (key TEXT PRIMARY KEY, value TEXT);
      `);
      const articleColumns = this.ctx.storage.sql.exec("PRAGMA table_info(articles)").toArray().map((column) => column.name);
      if (!articleColumns.includes("city")) this.ctx.storage.sql.exec("ALTER TABLE articles ADD COLUMN city TEXT");
      if (!articleColumns.includes("priority")) this.ctx.storage.sql.exec("ALTER TABLE articles ADD COLUMN priority INTEGER NOT NULL DEFAULT 0");
      this.ctx.storage.sql.exec("CREATE INDEX IF NOT EXISTS idx_articles_priority ON articles(priority DESC, published_at DESC)");
    });
  }

  rowToItem(row) {
    return {
      id: row.id,
      title: row.title,
      summary: row.summary,
      sourceName: row.source_name,
      sourceUrl: row.source_url,
      articleUrl: row.article_url,
      region: row.region,
      city: row.city,
      priority: Boolean(row.priority),
      type: row.type,
      publishedAt: row.published_at,
      registrationStart: row.registration_start,
      registrationEnd: row.registration_end,
      examDate: row.exam_date,
      recruitmentCount: row.recruitment_count,
      official: Boolean(row.official),
      fetchedAt: row.fetched_at
    };
  }

  upsert(items) {
    const now = new Date().toISOString();
    let changed = 0;
    for (const item of items) {
      if (!item?.id || !item?.title || !item?.articleUrl) continue;
      this.ctx.storage.sql.exec(
        `INSERT INTO articles (
          id, title, summary, source_name, source_url, article_url, region, city, priority, type,
          published_at, registration_start, registration_end, exam_date,
          recruitment_count, official, fetched_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(id) DO UPDATE SET
          title = excluded.title,
          summary = CASE WHEN length(excluded.summary) > 20 THEN excluded.summary ELSE articles.summary END,
          source_name = excluded.source_name,
          source_url = excluded.source_url,
          article_url = excluded.article_url,
          region = excluded.region,
          city = excluded.city,
          priority = excluded.priority,
          type = excluded.type,
          published_at = COALESCE(excluded.published_at, articles.published_at),
          registration_start = COALESCE(excluded.registration_start, articles.registration_start),
          registration_end = COALESCE(excluded.registration_end, articles.registration_end),
          exam_date = COALESCE(excluded.exam_date, articles.exam_date),
          recruitment_count = COALESCE(excluded.recruitment_count, articles.recruitment_count),
          official = excluded.official,
          fetched_at = excluded.fetched_at`,
        item.id,
        item.title,
        item.summary || null,
        item.sourceName || "官方来源",
        item.sourceUrl || item.articleUrl,
        item.articleUrl,
        item.region || "全国",
        item.city || null,
        item.priority ? 1 : 0,
        item.type || classifyType(item.title),
        item.publishedAt || null,
        item.registrationStart || null,
        item.registrationEnd || null,
        item.examDate || null,
        Number.isFinite(item.recruitmentCount) ? item.recruitmentCount : null,
        item.official === false ? 0 : 1,
        now
      );
      changed += 1;
    }
    return changed;
  }

  async fetch(request) {
    const url = new URL(request.url);

    if ((url.pathname === "/seed" || url.pathname === "/ingest") && request.method === "POST") {
      const body = await request.json();
      if (url.pathname === "/seed") {
        const seeded = this.ctx.storage.sql.exec("SELECT value FROM metadata WHERE key = 'seed_version'").toArray();
        if (seeded[0]?.value === body.version) return Response.json({ ok: true, seeded: false });
      }
      const changed = this.upsert(Array.isArray(body.items) ? body.items : []);
      if (url.pathname === "/seed") {
        this.ctx.storage.sql.exec("INSERT OR REPLACE INTO metadata(key, value) VALUES ('seed_version', ?)", body.version || "1");
      } else {
        this.ctx.storage.sql.exec("INSERT OR REPLACE INTO metadata(key, value) VALUES ('synced_at', ?)", body.syncedAt || new Date().toISOString());
        this.ctx.storage.sql.exec("INSERT OR REPLACE INTO metadata(key, value) VALUES ('last_report', ?)", JSON.stringify(body.report || []));
      }
      return Response.json({ ok: true, changed });
    }

    if (url.pathname === "/news" && request.method === "GET") {
      const limit = Math.min(Math.max(Number(url.searchParams.get("limit")) || 50, 1), 200);
      const rows = this.ctx.storage.sql.exec("SELECT * FROM articles ORDER BY priority DESC, COALESCE(published_at, fetched_at) DESC LIMIT ?", limit).toArray();
      let items = rows.map((row) => this.rowToItem(row));
      const region = url.searchParams.get("region");
      const type = url.searchParams.get("type");
      const city = url.searchParams.get("city");
      const keyword = url.searchParams.get("keyword")?.toLowerCase();
      if (region) items = items.filter((item) => item.region === region);
      if (type) items = items.filter((item) => item.type === type);
      if (city) items = items.filter((item) => item.city === city);
      if (keyword) items = items.filter((item) => `${item.title} ${item.summary || ""}`.toLowerCase().includes(keyword));
      return Response.json({ items, total: items.length });
    }

    if (url.pathname === "/calendar" && request.method === "GET") {
      const rows = this.ctx.storage.sql.exec(`
        SELECT id, title, region, registration_start, registration_end, exam_date
        FROM articles
        WHERE registration_start IS NOT NULL OR registration_end IS NOT NULL OR exam_date IS NOT NULL
        ORDER BY COALESCE(registration_start, registration_end, exam_date) ASC
        LIMIT 100
      `).toArray();
      return Response.json({ items: rows });
    }

    if (url.pathname === "/stats" && request.method === "GET") {
      const total = this.ctx.storage.sql.exec("SELECT COUNT(*) AS count FROM articles").one().count;
      const regions = this.ctx.storage.sql.exec("SELECT COUNT(DISTINCT region) AS count FROM articles").one().count;
      const synced = this.ctx.storage.sql.exec("SELECT value FROM metadata WHERE key = 'synced_at'").toArray();
      const report = this.ctx.storage.sql.exec("SELECT value FROM metadata WHERE key = 'last_report'").toArray();
      return Response.json({
        total,
        regions,
        syncedAt: synced[0]?.value || null,
        lastReport: report[0]?.value ? JSON.parse(report[0].value) : []
      });
    }

    return Response.json({ error: "Not found" }, { status: 404 });
  }
}
