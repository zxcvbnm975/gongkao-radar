const FALLBACK_DATA = {
  items: [
    {
      id: "js-2027-catalog",
      title: "关于征求对《江苏省2027年度考试录用公务员专业参考目录（征求意见稿）》意见的公告",
      summary: "江苏省公务员局已启动2027年度专业参考目录意见征集，征求意见截止至2026年8月11日。",
      sourceName: "江苏省委组织部",
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
      id: "national-2027-plan",
      title: "中央机关及其直属机构2027年度考试录用公务员笔试列入下半年考试计划",
      summary: "官方年度考试计划已列出2027年度国考笔试，具体日期仍待中央公务员主管部门公布。",
      sourceName: "湖北省人事考试网",
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
      id: "national-2026-supplement",
      title: "中央机关及其直属机构2026年度补充录用公务员公告",
      summary: "补录报名时间为2026年5月8日8:00至5月10日18:00，职位、人数及资格条件以专题网站为准。",
      sourceName: "重庆市人民政府",
      articleUrl: "https://www.cq.gov.cn/ywdt/tzgg/202605/t20260509_15664281.html",
      region: "全国",
      type: "招考公告",
      publishedAt: "2026-05-09T00:00:00+08:00",
      registrationStart: "2026-05-08T08:00:00+08:00",
      registrationEnd: "2026-05-10T18:00:00+08:00",
      examDate: null,
      recruitmentCount: null,
      official: true
    },
    {
      id: "shanghai-2026",
      title: "上海市2026年度考试录用公务员公告",
      summary: "计划招录2393人，网上报名时间为2025年11月1日0时至11月7日12时，笔试于12月7日举行。",
      sourceName: "上海市人民政府",
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
      id: "jiangsu-2026",
      title: "江苏省2026年度考试录用公务员公告",
      summary: "江苏省各级机关和参照公务员法管理单位计划招录8179人。",
      sourceName: "江苏省委组织部",
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
      id: "zhejiang-2026",
      title: "浙江省各级机关单位2026年度考试录用公务员公告",
      summary: "全省计划招考公务员5712名，详细岗位与资格条件请前往浙江省公务员考试录用网核对。",
      sourceName: "浙江省公务员考试录用网",
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
      id: "gansu-2026",
      title: "甘肃省2026年度考试录用机关公务员和参照公务员法管理单位工作人员公告",
      summary: "报名时间为2026年2月2日8:30至2月8日18:00，职位及资格条件以甘肃组工网职位简表为准。",
      sourceName: "甘肃组工网",
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
      id: "wuwei-2026-selection",
      title: "武威市2026年度市直机关公开遴选公务员公告",
      summary: "设置遴选职位20个、计划20名，报名时间为2026年7月10日8:30至7月12日18:00。",
      sourceName: "甘肃党建武威市平台",
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
      id: "jinchang-2026-selection",
      title: "金昌市2026年度公开遴选和公开选调公务员公告",
      summary: "金昌市委组织部开展2026年度公开遴选和公开选调，职位表及后续安排请在金昌党建网核对。",
      sourceName: "金昌党建网",
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
      id: "zhangye-2026-selection",
      title: "张掖市2026年度市直机关及参照公务员法管理单位公开遴选公务员公告",
      summary: "张掖市2026年度市直机关公开遴选相关公告已发布，后续资格复审、面试及体检信息将持续监测。",
      sourceName: "张掖市人民政府",
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
    },
    {
      id: "gansu-institutions-2026-h1",
      title: "甘肃省2026年上半年事业单位公开招聘分类考试公告汇总",
      summary: "汇总省直、中央在甘单位及市州事业单位招聘公告，其中包含金昌市事业单位公开招聘入口。",
      sourceName: "甘肃人事考试网",
      articleUrl: "https://ks.rst.gansu.gov.cn/ncms/article_94c932a06035be27985b208aedc5ea79.shtml",
      region: "甘肃",
      city: "金昌市",
      priority: true,
      track: "事业单位",
      type: "招考公告",
      publishedAt: "2026-02-14T00:00:00+08:00",
      registrationStart: null,
      registrationEnd: null,
      examDate: null,
      recruitmentCount: null,
      official: true
    },
    {
      id: "wuwei-institutions-2026",
      title: "甘肃省武威市2026年事业单位公开招聘工作人员公告",
      summary: "武威市计划公开招聘事业单位工作人员568名，后续资格复审、面试及拟聘用信息将在武威市人民政府网发布。",
      sourceName: "武威市人民政府",
      articleUrl: "https://www.gswuwei.gov.cn/",
      region: "甘肃",
      city: "武威市",
      priority: true,
      track: "事业单位",
      type: "招考公告",
      publishedAt: "2026-04-03T00:00:00+08:00",
      registrationStart: "2026-04-08T09:00:00+08:00",
      registrationEnd: "2026-04-14T18:00:00+08:00",
      examDate: "2026-05-10T00:00:00+08:00",
      recruitmentCount: 568,
      official: true
    },
    {
      id: "zhangye-institutions-2026",
      title: "张掖市2026年市直事业单位公开引进高层次人才公告（第二批）",
      summary: "张掖市面向社会公开引进一批高层次人才，资格条件、岗位计划和后续考试考核安排以市人社局原文为准。",
      sourceName: "张掖市人力资源和社会保障局",
      articleUrl: "https://www.zhangye.gov.cn/rsj/dzdt/tzgg/202606/t20260626_1558191.html",
      region: "甘肃",
      city: "张掖市",
      priority: true,
      track: "事业单位",
      type: "招考公告",
      publishedAt: "2026-06-26T00:00:00+08:00",
      registrationStart: null,
      registrationEnd: null,
      examDate: null,
      recruitmentCount: null,
      official: true
    },
    {
      id: "state-grid-recruitment-portal",
      title: "国家电网有限公司人力资源招聘平台（官方入口）",
      summary: "国家电网招聘公告、单位信息、职位申请、考试通知及录用公示的官方统一入口。",
      sourceName: "国家电网有限公司",
      articleUrl: "https://zhaopin.sgcc.com.cn/sgcchr/static/home.html",
      region: "全国",
      city: null,
      priority: false,
      track: "国家电网",
      type: "官方入口",
      publishedAt: null,
      registrationStart: null,
      registrationEnd: null,
      examDate: null,
      recruitmentCount: null,
      official: true
    },
    {
      id: "tobacco-recruitment-portal",
      title: "国家烟草专卖局人才招聘平台（官方入口）",
      summary: "烟草行业各直属单位招聘公告、岗位计划、资格审查和录用公示的官方发布入口。",
      sourceName: "国家烟草专卖局",
      articleUrl: "https://www.tobacco.gov.cn/gjyc/rczp/list.shtml",
      region: "全国",
      city: null,
      priority: false,
      track: "烟草系统",
      type: "官方入口",
      publishedAt: null,
      registrationStart: null,
      registrationEnd: null,
      examDate: null,
      recruitmentCount: null,
      official: true
    }
  ],
  sources: [
    { name: "国家公务员局", region: "全国", url: "https://www.scs.gov.cn/", badge: "国" },
    { name: "上海市公务员局", region: "上海", url: "https://www.shacs.gov.cn/", badge: "沪" },
    { name: "江苏省委组织部", region: "江苏", url: "https://www.jszzb.gov.cn/", badge: "苏" },
    { name: "浙江公务员考试录用网", region: "浙江", url: "https://gwy.zjks.gov.cn/", badge: "浙" },
    { name: "甘肃组工网", region: "甘肃", url: "https://www.gszg.gov.cn/26gsgwy/index.htm", badge: "甘" },
    { name: "甘肃人事考试网", region: "甘肃", url: "https://ks.rst.gansu.gov.cn/", badge: "考" },
    { name: "金昌党建网", region: "甘肃", city: "金昌市", url: "https://www.jczzb.cn/", badge: "金" },
    { name: "甘肃党建武威市平台", region: "甘肃", city: "武威市", url: "https://ww.gsdj.gov.cn/", badge: "武" },
    { name: "张掖市人民政府", region: "甘肃", city: "张掖市", url: "https://www.zhangye.gov.cn/zyszfxxgk/fdzdgknr_5657/rsxx_5667/ghb.html", badge: "张" },
    { name: "甘肃人事考试网·事业单位考试", region: "甘肃", track: "事业单位", url: "https://ks.rst.gansu.gov.cn/ncms/wzlb.shtml?mkbh=gwysydwks", badge: "事" },
    { name: "金昌市人力资源和社会保障局", region: "甘肃", city: "金昌市", track: "事业单位", url: "http://rsj.jcs.gov.cn/", badge: "金" },
    { name: "武威市人民政府", region: "甘肃", city: "武威市", track: "事业单位", url: "https://www.gswuwei.gov.cn/", badge: "武" },
    { name: "张掖市人力资源和社会保障局", region: "甘肃", city: "张掖市", track: "事业单位", url: "https://www.zhangye.gov.cn/rsj/dzdt/tzgg/", badge: "张" },
    { name: "国家电网有限公司人力资源招聘平台", region: "全国", track: "国家电网", mode: "portal", url: "https://zhaopin.sgcc.com.cn/sgcchr/static/home.html", badge: "电" },
    { name: "国家烟草专卖局人才招聘平台", region: "全国", track: "烟草系统", mode: "portal", url: "https://www.tobacco.gov.cn/gjyc/rczp/list.shtml", badge: "烟" }
  ],
  syncedAt: null,
  fallback: true
};

const state = {
  allItems: [],
  visibleCount: 6,
  sources: [],
  sourceReport: [],
  syncedAt: null,
  collecting: false,
  pollCount: 0,
  pollTimer: null,
  usingFallback: false,
  focusCity: ""
};

const els = {
  newsList: document.querySelector("#news-list"),
  resultCount: document.querySelector("#result-count"),
  keyword: document.querySelector("#keyword"),
  region: document.querySelector("#region"),
  track: document.querySelector("#track"),
  type: document.querySelector("#type"),
  loadMore: document.querySelector("#load-more"),
  calendarList: document.querySelector("#calendar-list"),
  calendarMonth: document.querySelector("#calendar-month"),
  sourceList: document.querySelector("#source-list"),
  sourceHealth: document.querySelector("#source-health"),
  heroEvents: document.querySelector("#hero-events"),
  refreshButton: document.querySelector("#refresh-button"),
  toast: document.querySelector("#toast"),
  headerStatus: document.querySelector("#header-status"),
  statusDot: document.querySelector(".status-dot")
};

const configuredBase = window.GONGKAO_CONFIG?.API_BASE_URL?.replace(/\/$/, "");
const API_BASE = configuredBase || (location.hostname === "localhost" ? "http://localhost:8787" : location.origin);

function escapeHtml(value = "") {
  return String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
}

function safeUrl(value) {
  try {
    const url = new URL(value);
    return ["http:", "https:"].includes(url.protocol) ? url.href : "#";
  } catch {
    return "#";
  }
}

function trackForItem(item) {
  if (item.track) return item.track;
  const text = `${item.title || ""} ${item.sourceName || ""}`;
  if (/国家电网|国网/.test(text)) return "国家电网";
  if (/烟草专卖局|烟草公司|中烟|中国烟草/.test(text)) return "烟草系统";
  if (/事业单位|事业编制|事业岗位|公开引进.{0,15}人才/.test(text)) return "事业单位";
  return "公务员";
}

function formatDate(value, options = {}) {
  if (!value) return "待公布";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "待公布";
  return new Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai", month: "2-digit", day: "2-digit", ...options }).format(date);
}

function formatPublished(value) {
  if (!value) return "日期待核对";
  return new Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date(value));
}

function newsDateParts(value) {
  if (!value) return { day: "--", month: "待定" };
  const date = new Date(value);
  const monthText = new Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai", month: "2-digit" }).format(date);
  return {
    day: new Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai", day: "2-digit" }).format(date),
    month: monthText.endsWith("月") ? monthText : `${monthText}月`
  };
}

function deadlineLabel(item) {
  const target = item.registrationEnd || item.examDate;
  if (!target) return { value: "待定", label: "等待官方时间" };
  const diff = Math.ceil((new Date(target).getTime() - Date.now()) / 86400000);
  if (diff > 0) return { value: `${diff}天`, label: item.registrationEnd ? "距离报名截止" : "距离考试" };
  return { value: item.recruitmentCount ? item.recruitmentCount.toLocaleString("zh-CN") : "已结束", label: item.recruitmentCount ? "计划招录人数" : "节点已结束" };
}

function filteredItems() {
  const keyword = els.keyword.value.trim().toLowerCase();
  return state.allItems.filter((item) => {
    const text = `${item.title} ${item.summary || ""} ${item.sourceName} ${item.region}`.toLowerCase();
    return (!keyword || text.includes(keyword))
      && (!els.region.value || item.region === els.region.value)
      && (!els.track.value || trackForItem(item) === els.track.value)
      && (!els.type.value || item.type === els.type.value)
      && (!state.focusCity || item.city === state.focusCity);
  }).sort((a, b) => Number(Boolean(b.priority)) - Number(Boolean(a.priority)) || new Date(b.publishedAt || 0) - new Date(a.publishedAt || 0));
}

function renderNews() {
  const items = filteredItems();
  const visible = items.slice(0, state.visibleCount);
  els.resultCount.textContent = `共 ${items.length} 条匹配资讯`;
  els.loadMore.hidden = visible.length >= items.length;

  if (!visible.length) {
    els.newsList.innerHTML = '<div class="empty">没有找到匹配的官方资讯，请更换筛选条件。</div>';
    return;
  }

  els.newsList.innerHTML = visible.map((item, index) => {
    const date = newsDateParts(item.publishedAt);
    const deadline = deadlineLabel(item);
    const summary = item.summary || "详细报名条件、职位要求及时间节点请查看官方原文。";
    return `
      <article class="news-card ${index === 0 ? "featured" : ""} ${item.priority ? "priority" : ""}">
        ${item.official ? '<span class="verified">✓ 官方来源</span>' : ""}
        <div class="news-date"><strong>${date.day}</strong><span>${date.month}</span></div>
        <div class="news-body">
          <div class="news-meta">
            <span class="tag ${item.type === "招考公告" ? "accent" : ""}">${escapeHtml(item.region)}</span>
            ${item.city ? `<span class="tag accent">${escapeHtml(item.city)}</span>` : ""}
            <span class="tag">${escapeHtml(trackForItem(item))}</span>
            <span class="tag">${escapeHtml(item.type)}</span>
            <time datetime="${escapeHtml(item.publishedAt || "")}">${formatPublished(item.publishedAt)}</time>
          </div>
          <h3><a href="${safeUrl(item.articleUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.title)}</a></h3>
          <p class="news-summary">${escapeHtml(summary)}</p>
          <span class="news-source">来源：${escapeHtml(item.sourceName)}</span>
        </div>
        <div class="news-data"><strong>${escapeHtml(deadline.value)}</strong><span>${escapeHtml(deadline.label)}</span></div>
      </article>`;
  }).join("");
}

function buildCalendar(items) {
  const events = [];
  for (const item of items) {
    if (item.registrationStart) events.push({ date: item.registrationStart, title: item.title, label: "报名开始", region: item.region });
    if (item.registrationEnd) events.push({ date: item.registrationEnd, title: item.title, label: "报名截止", region: item.region });
    if (item.examDate) events.push({ date: item.examDate, title: item.title, label: "笔试", region: item.region });
  }
  const future = events.filter((event) => new Date(event.date).getTime() >= Date.now() - 86400000).sort((a, b) => new Date(a.date) - new Date(b.date));
  const pending = items.filter((item) => !item.registrationStart && !item.registrationEnd && !item.examDate).slice(0, 3).map((item) => ({ date: null, title: item.title, label: "时间待公布", region: item.region }));
  return [...future, ...pending].slice(0, 5);
}

function renderCalendar() {
  const events = buildCalendar(state.allItems);
  els.calendarMonth.textContent = new Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai", year: "numeric", month: "long" }).format(new Date());
  els.calendarList.innerHTML = events.length ? events.map((event) => {
    const parts = event.date ? newsDateParts(event.date) : { day: "待", month: "公布" };
    return `<article class="calendar-item">
      <div class="calendar-day ${event.date ? "" : "pending"}"><strong>${parts.day}</strong><span>${parts.month}</span></div>
      <div class="calendar-copy"><h3>${escapeHtml(event.title)}</h3><p>${escapeHtml(event.region)} · ${escapeHtml(event.label)}</p></div>
    </article>`;
  }).join("") : '<div class="empty">暂无已公布的考试节点</div>';
}

function renderHeroEvents() {
  const events = buildCalendar(state.allItems).slice(0, 2);
  els.heroEvents.innerHTML = events.map((event) => {
    const parts = event.date ? newsDateParts(event.date) : { day: "--", month: "待定" };
    return `<article class="hero-event"><div class="event-date"><strong>${parts.day}</strong><span>${parts.month}</span></div><div class="event-copy"><p>${escapeHtml(event.title)}</p><span>${escapeHtml(event.region)} · ${escapeHtml(event.label)}</span></div></article>`;
  }).join("");
}

function renderSources() {
  const reports = new Map();
  for (const report of state.sourceReport) {
    if (report.sourceId) reports.set(report.sourceId, report);
    if (report.source) reports.set(report.source, report);
  }

  const automaticSources = state.sources.filter((source) => source.mode !== "portal");
  const healthyCount = automaticSources.filter((source) => {
    const report = reports.get(source.id) || reports.get(source.name);
    return report?.ok;
  }).length;
  const failedCount = automaticSources.filter((source) => {
    const report = reports.get(source.id) || reports.get(source.name);
    return report && !report.ok;
  }).length;

  if (state.collecting) {
    els.sourceHealth.textContent = "正在检测全部官方来源，结果会自动更新";
  } else if (!state.syncedAt) {
    els.sourceHealth.textContent = "等待首次自动检测";
  } else {
    els.sourceHealth.textContent = `${healthyCount}/${automaticSources.length} 个自动来源正常${failedCount ? ` · ${failedCount} 个待重试` : ""} · ${formatPublished(state.syncedAt)}`;
  }

  els.sourceList.innerHTML = state.sources.map((source) => `
    <a class="source-item" href="${safeUrl(source.url)}" target="_blank" rel="noopener noreferrer">
      <span class="source-badge">${escapeHtml(source.badge || source.region.slice(0, 1))}</span>
      <span class="source-copy"><strong>${escapeHtml(source.name)}</strong>${renderSourceStatus(source, reports.get(source.id) || reports.get(source.name))}</span>
      <span class="source-arrow">↗</span>
    </a>`).join("");
}

function renderSourceStatus(source, report) {
  const scope = escapeHtml(source.city || source.region);
  if (source.mode === "portal" || report?.status === "portal") {
    return `<span class="source-status portal"><i></i>${scope} · 动态平台官方入口</span>`;
  }
  if (state.collecting && !report) {
    return `<span class="source-status checking"><i></i>${scope} · 检测中</span>`;
  }
  if (!report) {
    return `<span class="source-status pending"><i></i>${scope} · 等待检测</span>`;
  }
  if (!report.ok) {
    return `<span class="source-status error"><i></i>${scope} · 访问失败，稍后重试</span>`;
  }
  const endpointNote = report.fallbackUsed ? ` · 已切换${escapeHtml(report.endpointLabel || "备用入口")}` : "";
  const detail = report.found > 0 ? `收录 ${report.found} 条${endpointNote}` : `可访问，暂无新公告${endpointNote}`;
  return `<span class="source-status ready"><i></i>${scope} · ${detail}</span>`;
}

function updateStats() {
  const weekAgo = Date.now() - 7 * 86400000;
  const recent = state.allItems.filter((item) => item.publishedAt && new Date(item.publishedAt).getTime() >= weekAgo).length;
  const regions = new Set(state.allItems.map((item) => item.region)).size;
  const syncDate = state.syncedAt ? new Date(state.syncedAt) : null;
  const syncLabel = syncDate && !Number.isNaN(syncDate.getTime())
    ? new Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai", hour: "2-digit", minute: "2-digit", hour12: false }).format(syncDate)
    : state.collecting ? "检测中" : "演示数据";
  document.querySelector("#stat-total").textContent = state.allItems.length.toLocaleString("zh-CN");
  document.querySelector("#stat-new").textContent = recent;
  document.querySelector("#stat-regions").textContent = regions;
  document.querySelector("#stat-updated").textContent = syncLabel;
  document.querySelector("#footer-updated").textContent = state.syncedAt ? `最近同步 ${formatPublished(state.syncedAt)}` : "当前显示内置官方样例";
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => els.toast.classList.remove("show"), 3200);
}

async function request(path) {
  const response = await fetch(`${API_BASE}${path}`, { headers: { Accept: "application/json" } });
  if (!response.ok) throw new Error(`API ${response.status}`);
  return response.json();
}

async function loadData({ notify = false, background = false } = {}) {
  if (!background) {
    els.refreshButton.disabled = true;
    els.refreshButton.textContent = "加载中…";
  }
  try {
    const [news, sources, stats] = await Promise.all([
      request("/api/news?limit=100"),
      request("/api/sources"),
      request("/api/stats")
    ]);
    state.allItems = news.items || [];
    state.sources = sources.items || FALLBACK_DATA.sources;
    state.sourceReport = stats.lastReport || [];
    state.syncedAt = stats.syncedAt || null;
    state.collecting = Boolean(stats.collecting);
    state.usingFallback = false;
    els.headerStatus.textContent = state.collecting ? "正在检测官方来源" : "官方数据已连接";
    els.statusDot.className = "status-dot ready";
    if (notify) showToast("资讯已刷新");
  } catch (error) {
    state.allItems = FALLBACK_DATA.items;
    state.sources = FALLBACK_DATA.sources;
    state.sourceReport = [];
    state.syncedAt = FALLBACK_DATA.syncedAt;
    state.collecting = false;
    state.usingFallback = true;
    els.headerStatus.textContent = "演示数据模式";
    els.statusDot.className = "status-dot error";
    if (notify) showToast("暂未连接 Worker，当前显示内置官方样例");
  } finally {
    if (!background) {
      els.refreshButton.disabled = false;
      els.refreshButton.textContent = "重新加载";
    }
  }

  renderNews();
  renderCalendar();
  renderHeroEvents();
  renderSources();
  updateStats();

  window.clearTimeout(state.pollTimer);
  if (state.collecting && state.pollCount < 12) {
    state.pollCount += 1;
    state.pollTimer = window.setTimeout(() => loadData({ background: true }), 12000);
  } else if (!state.collecting) {
    state.pollCount = 0;
  }
}

document.querySelector("#filters").addEventListener("input", () => {
  state.visibleCount = 6;
  renderNews();
});

document.querySelector("#focus-filter").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-city]");
  if (!button) return;
  state.focusCity = button.dataset.city;
  els.region.value = state.focusCity ? "甘肃" : els.region.value;
  for (const item of document.querySelectorAll("#focus-filter button")) item.setAttribute("aria-pressed", String(item === button));
  state.visibleCount = 6;
  renderNews();
});

els.loadMore.addEventListener("click", () => {
  state.visibleCount += 6;
  renderNews();
});

els.refreshButton.addEventListener("click", () => loadData({ notify: true }));

loadData();
