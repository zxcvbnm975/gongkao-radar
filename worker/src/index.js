const DEFAULT_SOURCES = [
  {
    id: "scs",
    name: "国家公务员局",
    region: "全国",
    badge: "国",
    url: "https://www.scs.gov.cn/",
    endpoints: [
      { url: "https://www.scs.gov.cn/", label: "国家公务员局" },
      { urlTemplate: "http://bm.scs.gov.cn/kl{year}", yearOffsets: [1, 0], label: "{year}年度国考专题", dynamicPortal: true },
      { url: "https://www.beijing.gov.cn/fuwu/bmfw/sy/jrts/tzxx/", label: "首都之窗·国家公务员局消息", titlePattern: "中央机关.{0,20}(考试录用公务员|公开遴选|公开选调)|国家公务员局.{0,20}(调剂|补充录用|面试|资格复审)" }
    ],
    adapter: { id: "scs", titlePattern: "公务员|国考|考试录用|公开遴选|公开选调|调剂|补充录用|面试|资格复审" },
    official: true
  },
  {
    id: "shanghai",
    name: "上海市公务员局",
    region: "上海",
    badge: "沪",
    url: "https://www.shacs.gov.cn/",
    endpoints: [
      { url: "https://www.shacs.gov.cn/", label: "上海市公务员局", dynamicPortal: true },
      { url: "https://www.shacs.gov.cn/?pc=1", label: "上海市公务员局电脑版", dynamicPortal: true },
      { url: "https://bm.shacs.gov.cn/zlxt", label: "上海公务员考录专题", dynamicPortal: true },
      { url: "https://www.shanghai.gov.cn/nw4411/index.html", label: "上海市政府·上海要闻", titlePattern: "上海.{0,16}(公务员|选调生).{0,18}(考试录用|招录|公告|报名)|公务员考试.{0,18}(报名|招录|公告)" }
    ],
    adapter: { id: "shanghai", titlePattern: "公务员|考试录用|公开遴选|公开选调|选调生|面试|资格复审" },
    official: true
  },
  {
    id: "jiangsu",
    name: "江苏省委组织部",
    region: "江苏",
    badge: "苏",
    url: "https://www.jszzb.gov.cn/tzgg/",
    endpoints: [
      { url: "https://www.jszzb.gov.cn/tzgg/", label: "江苏通知公告" },
      { url: "https://www.jszzb.gov.cn/", label: "江苏先锋首页" }
    ],
    adapter: { id: "jiangsu", titlePattern: "公务员|考试录用|公开遴选|公开选调|选调生|面试|资格复审" },
    official: true
  },
  {
    id: "zhejiang",
    name: "浙江省公务员考试录用网",
    region: "浙江",
    badge: "浙",
    url: "https://gwy.zjks.gov.cn/",
    endpoints: [
      { url: "https://gwy.zjks.gov.cn/", label: "浙江公务员考试录用网" },
      { url: "https://gwy.zjks.gov.cn/zjgwy/website/queryMore.htm", label: "浙江重要通知列表" },
      { url: "https://www.zjzzgz.gov.cn/col/col1413011/index.html", label: "浙江组织工作网·公示公告" },
      { url: "https://www.zjzzgz.gov.cn/", label: "浙江组织工作网首页" }
    ],
    adapter: { id: "zhejiang", titlePattern: "公务员|考试录用|公开遴选|公开选调|选调生|面试|资格复审" },
    official: true
  },
  {
    id: "gansu",
    name: "甘肃组工网",
    region: "甘肃",
    badge: "甘",
    url: "https://www.gszg.gov.cn/26gsgwy/index.htm",
    endpoints: [
      { url: "https://www.gszg.gov.cn/26gsgwy/index.htm", label: "甘肃组工网" },
      { url: "https://ks.rst.gansu.gov.cn/ncms/wzlb.shtml?mkbh=gwysydwks", label: "甘肃人事考试网" }
    ],
    adapter: { id: "gansu-civil", titlePattern: "公务员|考试录用|公开遴选|公开选调|选调生|面试|资格复审" },
    official: true
  },
  {
    id: "gansu-exams",
    name: "甘肃人事考试网",
    region: "甘肃",
    badge: "考",
    url: "https://ks.rst.gansu.gov.cn/",
    endpoints: [
      { url: "https://ks.rst.gansu.gov.cn/ncms/wzlb.shtml?mkbh=gwysydwks", label: "公务员事业单位考试栏目" },
      { url: "https://ks.rst.gansu.gov.cn/ncms/index.shtml", label: "甘肃人事考试网首页" }
    ],
    adapter: { id: "gansu-exams", titlePattern: "公务员|事业单位|公开招聘|公开选聘|选调生|资格复审|笔试|面试" },
    official: true
  },
  {
    id: "jinchang",
    name: "金昌党建网",
    region: "甘肃",
    city: "金昌市",
    badge: "金",
    url: "https://www.jczzb.cn/",
    endpoints: [
      { url: "https://www.jczzb.cn/", label: "金昌党建网" },
      { url: "https://ks.rst.gansu.gov.cn/ncms/wzlb.shtml?mkbh=gwysydwks", label: "甘肃人事考试网", titlePattern: "金昌.*(公务员|遴选|选调)|公务员.*金昌|遴选.*金昌|选调.*金昌" }
    ],
    adapter: { id: "jinchang-civil", titlePattern: "公务员|遴选|选调" },
    official: true
  },
  {
    id: "wuwei",
    name: "甘肃党建武威市平台",
    region: "甘肃",
    city: "武威市",
    badge: "武",
    url: "https://ww.gsdj.gov.cn/",
    endpoints: [
      { url: "https://ww.gsdj.gov.cn/", label: "甘肃党建武威平台" },
      { url: "https://ks.rst.gansu.gov.cn/ncms/wzlb.shtml?mkbh=gwysydwks", label: "甘肃人事考试网", titlePattern: "武威.*(公务员|遴选|选调)|公务员.*武威|遴选.*武威|选调.*武威" }
    ],
    adapter: { id: "wuwei-civil", titlePattern: "公务员|遴选|选调" },
    official: true
  },
  {
    id: "zhangye",
    name: "张掖市人民政府",
    region: "甘肃",
    city: "张掖市",
    badge: "张",
    url: "https://www.zhangye.gov.cn/zyszfxxgk/fdzdgknr_5657/rsxx_5667/ghb.html",
    endpoints: [
      { url: "https://www.zhangye.gov.cn/zyszfxxgk/fdzdgknr_5657/rsxx_5667/ghb.html", label: "张掖市政府人事信息" },
      { url: "https://www.gszg.gov.cn/26gsgwy/index.htm", label: "甘肃组工网", titlePattern: "张掖.*(公务员|遴选|选调)|公务员.*张掖|遴选.*张掖|选调.*张掖" }
    ],
    adapter: { id: "zhangye-civil", titlePattern: "公务员|遴选|选调" },
    official: true
  },
  {
    id: "gansu-institutions",
    name: "甘肃人事考试网·事业单位考试",
    region: "甘肃",
    badge: "事",
    url: "https://ks.rst.gansu.gov.cn/ncms/wzlb.shtml?mkbh=gwysydwks",
    track: "事业单位",
    endpoints: [
      { url: "https://ks.rst.gansu.gov.cn/ncms/wzlb.shtml?mkbh=gwysydwks", label: "公务员事业单位考试栏目" },
      { url: "https://ks.rst.gansu.gov.cn/ncms/index.shtml", label: "甘肃人事考试网首页" }
    ],
    adapter: { id: "gansu-institutions", titlePattern: "事业单位|事业编制|公开招聘|公开选聘|人才引进|引进.{0,15}(高层次|急需紧缺)|资格复审" },
    official: true
  },
  {
    id: "jinchang-institutions",
    name: "金昌市人力资源和社会保障局",
    region: "甘肃",
    city: "金昌市",
    badge: "金",
    url: "http://rsj.jcs.gov.cn/",
    track: "事业单位",
    endpoints: [
      { url: "http://rsj.jcs.gov.cn/", label: "金昌市人社局" },
      { url: "https://ks.rst.gansu.gov.cn/ncms/wzlb.shtml?mkbh=gwysydwks", label: "甘肃人事考试网", titlePattern: "金昌.*(事业单位|事业编制|公开招聘|公开选聘|人才引进)|事业单位.*金昌|公开招聘.*金昌" }
    ],
    adapter: { id: "jinchang-institutions", titlePattern: "事业单位|事业编制|公开招聘|公开选聘|人才引进|引进.{0,15}(高层次|急需紧缺)" },
    official: true
  },
  {
    id: "wuwei-institutions",
    name: "武威市人民政府",
    region: "甘肃",
    city: "武威市",
    badge: "武",
    url: "https://www.gswuwei.gov.cn/",
    track: "事业单位",
    endpoints: [
      { url: "https://www.gswuwei.gov.cn/", label: "武威市人民政府" },
      { url: "https://ks.rst.gansu.gov.cn/ncms/wzlb.shtml?mkbh=gwysydwks", label: "甘肃人事考试网", titlePattern: "武威.*(事业单位|事业编制|公开招聘|公开选聘|人才引进)|事业单位.*武威|公开招聘.*武威" }
    ],
    adapter: { id: "wuwei-institutions", titlePattern: "事业单位|事业编制|公开招聘|公开选聘|人才引进|引进.{0,15}(高层次|急需紧缺)" },
    official: true
  },
  {
    id: "zhangye-institutions",
    name: "张掖市人力资源和社会保障局",
    region: "甘肃",
    city: "张掖市",
    badge: "张",
    url: "https://www.zhangye.gov.cn/rsj/dzdt/tzgg/",
    track: "事业单位",
    endpoints: [
      { url: "https://www.zhangye.gov.cn/rsj/dzdt/tzgg/", label: "张掖市人社局通知公告" },
      { url: "https://www.zhangye.gov.cn/zyszfxxgk/fdzdgknr_5657/rsxx_5667/ghb.html", label: "张掖市政府人事信息" },
      { url: "https://ks.rst.gansu.gov.cn/ncms/wzlb.shtml?mkbh=gwysydwks", label: "甘肃人事考试网", titlePattern: "张掖.*(事业单位|事业编制|公开招聘|公开选聘|人才引进|引进.{0,15}(高层次|急需紧缺))|事业单位.*张掖|公开招聘.*张掖" }
    ],
    adapter: { id: "zhangye-institutions", titlePattern: "事业单位|事业编制|公开招聘|公开选聘|人才引进|引进.{0,15}(高层次|急需紧缺)" },
    official: true
  },
  {
    id: "state-grid",
    name: "国家电网有限公司人力资源招聘平台",
    region: "全国",
    badge: "电",
    url: "https://zhaopin.sgcc.com.cn/sgcchr/static/home.html",
    track: "国家电网",
    mode: "portal",
    official: true
  },
  {
    id: "tobacco",
    name: "国家烟草专卖局人才招聘平台",
    region: "全国",
    badge: "烟",
    url: "https://www.tobacco.gov.cn/gjyc/rczp/list.shtml",
    track: "烟草系统",
    mode: "portal",
    official: true
  }
];

const FOCUS_CITIES = ["金昌市", "武威市", "张掖市"];
const MAX_ITEMS_PER_SOURCE = 5;
const MAX_DETAIL_PAGES_PER_SOURCE = 1;
const SOURCE_BATCH_SIZE = 4;
const INITIAL_SOURCE_BATCH_SIZE = 6;
const INITIAL_SOURCE_TIMEOUT_MS = 3500;
const REFRESH_LEASE_MS = 3 * 60 * 1000;
const SOURCE_ALARM_STRATEGY = "source-alarm-v1";
const SOURCE_CONFIG_VERSION = "2026-08-09-push-health-v1";
const SEED_VERSION = "4";
const SOURCE_TRACKS = new Set(["公务员", "事业单位", "国家电网", "烟草系统"]);
const SOURCE_RETRY_DELAYS_MS = [250, 750];
const PUSH_RETRY_LIMIT = 3;

function validatePattern(value, label) {
  const pattern = String(value || "").trim();
  if (!pattern) return "";
  if (pattern.length > 400) throw new Error(`${label}不能超过 400 个字符`);
  try {
    new RegExp(pattern, "i");
  } catch {
    throw new Error(`${label}不是有效的匹配规则`);
  }
  return pattern;
}

export function isAllowedPublicUrl(value, { template = false } = {}) {
  const raw = String(value || "").trim();
  if (!raw || raw.length > 500) return false;
  const candidate = template ? raw.replaceAll("{year}", String(new Date().getUTCFullYear())) : raw;
  let parsed;
  try {
    parsed = new URL(candidate);
  } catch {
    return false;
  }
  if (!["http:", "https:"].includes(parsed.protocol) || parsed.username || parsed.password) return false;
  const hostname = parsed.hostname.toLowerCase().replace(/^\[|\]$/g, "");
  if (!hostname || hostname === "localhost" || hostname.endsWith(".localhost") || hostname.endsWith(".local") || !hostname.includes(".")) return false;
  if (hostname.includes(":")) return false;
  const ipv4 = hostname.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);
  if (!ipv4) return true;
  const octets = ipv4.slice(1).map(Number);
  if (octets.some((part) => part > 255)) return false;
  const [a, b] = octets;
  return !(a === 0 || a === 10 || a === 127 || (a === 169 && b === 254) || (a === 172 && b >= 16 && b <= 31) || (a === 192 && b === 168) || a >= 224);
}

function cleanText(value, label, max, { required = false } = {}) {
  const text = String(value || "").trim();
  if (required && !text) throw new Error(`请填写${label}`);
  if (text.length > max) throw new Error(`${label}不能超过 ${max} 个字符`);
  return text;
}

export function normalizeSourceInput(input, { id, builtIn = false } = {}) {
  if (!input || typeof input !== "object" || Array.isArray(input)) throw new Error("来源配置格式不正确");
  const name = cleanText(input.name, "来源名称", 60, { required: true });
  const region = cleanText(input.region, "地区", 20, { required: true });
  const city = cleanText(input.city, "城市", 20);
  const badge = cleanText(input.badge || name.slice(0, 1), "来源标识", 2) || "源";
  const track = SOURCE_TRACKS.has(input.track) ? input.track : "公务员";
  const mode = input.mode === "portal" ? "portal" : undefined;
  const url = cleanText(input.url, "官方网址", 500, { required: true });
  if (!isAllowedPublicUrl(url)) throw new Error("官方网址必须是可公开访问的 HTTP/HTTPS 地址");

  const rawEndpoints = Array.isArray(input.endpoints) && input.endpoints.length ? input.endpoints : [{ url, label: "主入口" }];
  if (rawEndpoints.length > 8) throw new Error("每个来源最多配置 8 个入口");
  const endpoints = rawEndpoints.map((endpoint, index) => {
    const rawUrl = cleanText(endpoint?.urlTemplate || endpoint?.url, `入口 ${index + 1} 地址`, 500, { required: true });
    const template = rawUrl.includes("{year}");
    if (!isAllowedPublicUrl(rawUrl, { template })) throw new Error(`入口 ${index + 1} 必须是可公开访问的 HTTP/HTTPS 地址`);
    const normalized = {
      label: cleanText(endpoint?.label || (index ? `备用入口 ${index}` : "主入口"), `入口 ${index + 1} 名称`, 60),
      titlePattern: validatePattern(endpoint?.titlePattern, `入口 ${index + 1} 标题规则`),
      linkPattern: validatePattern(endpoint?.linkPattern, `入口 ${index + 1} 链接规则`),
      dynamicPortal: Boolean(endpoint?.dynamicPortal)
    };
    if (template) {
      normalized.urlTemplate = rawUrl;
      const offsets = Array.isArray(endpoint?.yearOffsets) ? endpoint.yearOffsets.map(Number).filter(Number.isFinite).slice(0, 4) : [1, 0];
      normalized.yearOffsets = offsets.length ? offsets : [0];
    } else {
      normalized.url = rawUrl;
    }
    return Object.fromEntries(Object.entries(normalized).filter(([, value]) => value !== "" && value !== false));
  });

  const source = {
    id: id || cleanText(input.id, "来源编号", 80) || `custom-${crypto.randomUUID()}`,
    name,
    region,
    badge,
    url,
    track,
    endpoints,
    adapter: {
      id: cleanText(input.adapter?.id || id || "custom", "适配器编号", 80),
      titlePattern: validatePattern(input.adapter?.titlePattern || input.titlePattern || "公务员|事业单位|招聘|招录|考试|报名|公告|公示|选调|遴选", "标题规则"),
      linkPattern: validatePattern(input.adapter?.linkPattern || input.linkPattern, "链接规则")
    },
    official: input.official !== false
  };
  if (city) source.city = city;
  if (mode) source.mode = mode;
  if (builtIn) source.builtIn = true;
  return source;
}

export function canonicalAnnouncementKey(item = {}) {
  const normalizedTitle = String(item.title || "")
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[\s\u3000·•，。；：、“”‘’（）()【】\[\]《》<>—_-]+/g, "")
    .replace(/^(关于|转发|转载)/, "")
    .replace(/(通知|公告)$/, "");
  return `${item.region || "全国"}|${item.track || classifyTrack(item.title)}|${normalizedTitle}`.slice(0, 700);
}

function normalizeSubscriptionFilters(input = {}) {
  const allowedCities = new Set(["金昌市", "武威市", "张掖市"]);
  const allowedTypes = new Set(["new", "updated", "deadline"]);
  const cities = Array.isArray(input.cities) ? [...new Set(input.cities.filter((value) => allowedCities.has(value)))].slice(0, 3) : [];
  const tracks = Array.isArray(input.tracks) ? [...new Set(input.tracks.filter((value) => SOURCE_TRACKS.has(value)))].slice(0, 4) : [];
  const eventTypes = Array.isArray(input.eventTypes) ? [...new Set(input.eventTypes.filter((value) => allowedTypes.has(value)))].slice(0, 3) : ["new", "updated", "deadline"];
  const keywords = Array.isArray(input.keywords)
    ? [...new Set(input.keywords.map((value) => String(value).trim()).filter(Boolean))].slice(0, 10).map((value) => value.slice(0, 30))
    : String(input.keywords || "").split(/[，,\s]+/).map((value) => value.trim()).filter(Boolean).slice(0, 10).map((value) => value.slice(0, 30));
  const deadlineDays = Math.min(Math.max(Number(input.deadlineDays) || 3, 1), 14);
  return { cities, tracks, eventTypes: eventTypes.length ? eventTypes : ["new", "updated", "deadline"], keywords, deadlineDays };
}

export function normalizeBarkUrl(value) {
  const raw = String(value || "").trim();
  if (!raw) return null;
  let parsed;
  try {
    parsed = new URL(raw.includes("://") ? raw : `https://api.day.app/${raw}`);
  } catch {
    throw new Error("Bark 地址格式不正确");
  }
  const key = parsed.pathname.split("/").filter(Boolean)[0] || "";
  if (parsed.protocol !== "https:" || parsed.hostname !== "api.day.app" || !/^[A-Za-z0-9_-]{6,160}$/.test(key)) {
    throw new Error("请填写 Bark 提供的 https://api.day.app/推送密钥 地址");
  }
  return `https://api.day.app/${key}`;
}

function normalizeSubscriptionDelivery(input = {}, { update = false } = {}) {
  const barkEnabled = Boolean(input.barkEnabled);
  const emailEnabled = Boolean(input.emailEnabled);
  const email = String(input.email || "").trim().toLowerCase();
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("邮箱地址格式不正确");
  const delivery = { barkEnabled, emailEnabled };
  if (email) delivery.email = email;
  else if (!update || !emailEnabled) delivery.email = null;
  if (input.barkUrl) delivery.barkUrl = normalizeBarkUrl(input.barkUrl);
  else if (!update || !barkEnabled) delivery.barkUrl = null;
  if (!update && barkEnabled && !delivery.barkUrl) throw new Error("启用 Bark 时需要填写推送地址");
  if (!update && emailEnabled && !delivery.email) throw new Error("启用邮件时需要填写邮箱地址");
  return delivery;
}

function redactDelivery(delivery = {}, env = {}) {
  const email = delivery.email || "";
  return {
    barkEnabled: Boolean(delivery.barkEnabled && delivery.barkUrl),
    barkConfigured: Boolean(delivery.barkUrl),
    emailEnabled: Boolean(delivery.emailEnabled && delivery.email),
    email: email ? email.replace(/^(.{1,2}).*(@.*)$/, "$1***$2") : null,
    emailAvailable: Boolean(env.RESEND_API_KEY && env.EMAIL_FROM && env.EMAIL_SUBSCRIPTIONS_ENABLED === "true")
  };
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function hashSecret(value) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(String(value)));
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

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
  },
  {
    id: "seed-gansu-institutions-2026-h1",
    title: "甘肃省2026年上半年事业单位公开招聘分类考试公告汇总",
    summary: "汇总省直、中央在甘单位及市州事业单位招聘公告，其中包含金昌市事业单位公开招聘入口。",
    sourceName: "甘肃人事考试网",
    sourceUrl: "https://ks.rst.gansu.gov.cn/",
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
    id: "seed-wuwei-institutions-2026",
    title: "甘肃省武威市2026年事业单位公开招聘工作人员公告",
    summary: "武威市计划公开招聘事业单位工作人员568名，后续资格复审、面试及拟聘用信息将在武威市人民政府网发布。",
    sourceName: "武威市人民政府",
    sourceUrl: "https://www.gswuwei.gov.cn/",
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
    id: "seed-zhangye-institutions-2026",
    title: "张掖市2026年市直事业单位公开引进高层次人才公告（第二批）",
    summary: "张掖市面向社会公开引进一批高层次人才，资格条件、岗位计划和后续考试考核安排以市人社局原文为准。",
    sourceName: "张掖市人力资源和社会保障局",
    sourceUrl: "https://www.zhangye.gov.cn/rsj/",
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
    id: "seed-state-grid-recruitment-portal",
    title: "国家电网有限公司人力资源招聘平台（官方入口）",
    summary: "国家电网招聘公告、单位信息、职位申请、考试通知及录用公示的官方统一入口。",
    sourceName: "国家电网有限公司",
    sourceUrl: "https://zhaopin.sgcc.com.cn/",
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
    id: "seed-tobacco-recruitment-portal",
    title: "国家烟草专卖局人才招聘平台（官方入口）",
    summary: "烟草行业各直属单位招聘公告、岗位计划、资格审查和录用公示的官方发布入口。",
    sourceName: "国家烟草专卖局",
    sourceUrl: "https://www.tobacco.gov.cn/",
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
];

const RELEVANT_TITLE = /(公务员|国考|省考|选调生|事业单位|事业编制|事业岗位|国家电网|国网|烟草专卖局|烟草公司|中烟).{0,30}(招录|考录|招聘|招考|选聘|引进|报名|职位|岗位|公告|调剂|补录|面试|笔试|资格|目录|公示)|(招录|考录|招聘|招考|选聘|引进|报名|职位|岗位|公告|调剂|补录|面试|笔试|资格|目录|公示).{0,30}(公务员|国考|省考|选调生|事业单位|事业编制|事业岗位|国家电网|国网|烟草专卖局|烟草公司|中烟)/;

function isRelevantTitle(title, source = {}) {
  if (RELEVANT_TITLE.test(title)) return true;
  if (source.track === "事业单位") return /(公开招聘|公开选聘|拟聘用|招聘工作人员|人才引进|引进.{0,15}(高层次|急需紧缺)人才|资格复审|考试考核)/.test(title);
  if (source.track === "国家电网") return /(招聘|应聘|录用|高校毕业生|校园招聘)/.test(title);
  if (source.track === "烟草系统") return /(招聘|招录|应聘|录用|高校毕业生|校园招聘)/.test(title);
  return false;
}

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

export function classifyTrack(title = "", fallback = null) {
  if (/国家电网|国网/.test(title)) return "国家电网";
  if (/烟草专卖局|烟草公司|中烟|中国烟草/.test(title)) return "烟草系统";
  if (/事业单位|事业编制|事业岗位|公开引进.{0,15}人才|引进.{0,15}(高层次|急需紧缺)人才/.test(title)) return "事业单位";
  if (/公务员|国考|省考|选调生/.test(title)) return "公务员";
  return fallback || "公务员";
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

function extractAttribute(attributes, name) {
  const pattern = new RegExp(`(?:^|\\s)${name}\\s*=\\s*(?:["']([^"']*)["']|([^\\s>]+))`, "i");
  const match = String(attributes).match(pattern);
  return decodeHtml(match?.[1] || match?.[2] || "").trim();
}

function matchesConfiguredPattern(value, pattern) {
  if (!pattern) return true;
  try {
    return new RegExp(pattern, "i").test(value);
  } catch {
    return true;
  }
}

function extractAnchorTitle(attributes, body, source) {
  const imageAlt = body.match(/<img\b[^>]*\balt\s*=\s*["']([^"']+)["']/i)?.[1] || "";
  const candidates = [
    stripHtml(body),
    stripHtml(extractAttribute(attributes, "title")),
    stripHtml(extractAttribute(attributes, "aria-label")),
    stripHtml(imageAlt)
  ].filter(Boolean);
  return candidates.find((title) => matchesConfiguredPattern(title, source.adapter?.titlePattern) && isRelevantTitle(title, source)) || candidates[0] || "";
}

function decodeEmbeddedString(value = "") {
  try {
    return JSON.parse(`"${value}"`);
  } catch {
    return decodeHtml(value)
      .replace(/\\\//g, "/")
      .replace(/\\u([0-9a-f]{4})/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
      .replace(/\\(["'])/g, "$1");
  }
}

function extractObjectString(objectText, keys) {
  const names = keys.join("|");
  const doubleQuoted = objectText.match(new RegExp(`["']?(?:${names})["']?\\s*:\\s*"((?:\\\\.|[^"\\\\])*)"`, "i"));
  if (doubleQuoted) return decodeEmbeddedString(doubleQuoted[1]);
  const singleQuoted = objectText.match(new RegExp(`["']?(?:${names})["']?\\s*:\\s*'((?:\\\\.|[^'\\\\])*)'`, "i"));
  return singleQuoted ? decodeEmbeddedString(singleQuoted[1]) : "";
}

function buildListingItem(title, articleUrl, publishedAt, source, parseMethod) {
  const city = detectCity(title, source.city || null);
  return {
    title,
    articleUrl,
    publishedAt,
    sourceName: source.name,
    sourceUrl: source.url,
    region: source.region,
    city,
    priority: Boolean(city),
    track: classifyTrack(title, source.track || null),
    type: classifyType(title),
    official: source.official,
    parseMethod
  };
}

function parseEmbeddedListings(html, source, seen) {
  const items = [];
  const objectPattern = /\{[^{}]{0,2400}\}/g;
  let match;
  while ((match = objectPattern.exec(html)) && items.length < 20) {
    const objectText = match[0];
    const title = stripHtml(extractObjectString(objectText, ["title", "articleTitle", "newsTitle", "name", "bt"]));
    if (title.length < 8 || title.length > 150 || !matchesConfiguredPattern(title, source.adapter?.titlePattern) || !isRelevantTitle(title, source)) continue;
    const href = extractObjectString(objectText, ["url", "href", "link", "articleUrl", "detailUrl", "contentUrl"]);
    if (!href || /^javascript:/i.test(href)) continue;
    let articleUrl;
    try {
      articleUrl = new URL(href, source.listingUrl || source.url).href;
    } catch {
      continue;
    }
    if (!/^https?:/.test(articleUrl) || !matchesConfiguredPattern(articleUrl, source.adapter?.linkPattern) || seen.has(articleUrl)) continue;
    const dateValue = extractObjectString(objectText, ["publishTime", "publishDate", "pubDate", "releaseTime", "date", "time"]);
    seen.add(articleUrl);
    items.push(buildListingItem(title, articleUrl, normalizeDate(dateValue), source, "embedded-data"));
  }
  return items;
}

export function parseListing(html, source) {
  const items = [];
  const seen = new Set();
  const anchorPattern = /<a\b([^>]*)>([\s\S]*?)<\/a>/gi;
  let match;
  while ((match = anchorPattern.exec(html)) && items.length < 20) {
    const attributes = match[1];
    const title = extractAnchorTitle(attributes, match[2], source);
    if (title.length < 8 || title.length > 150 || !matchesConfiguredPattern(title, source.adapter?.titlePattern) || !isRelevantTitle(title, source)) continue;
    const href = ["href", "data-href", "data-url"].map((name) => extractAttribute(attributes, name)).find((value) => value && !/^javascript:/i.test(value));
    if (!href) continue;
    let articleUrl;
    try {
      articleUrl = new URL(href, source.listingUrl || source.url).href;
    } catch {
      continue;
    }
    if (!/^https?:/.test(articleUrl) || !matchesConfiguredPattern(articleUrl, source.adapter?.linkPattern) || seen.has(articleUrl)) continue;
    seen.add(articleUrl);
    items.push(buildListingItem(title, articleUrl, extractNearbyDate(html, match.index), source, "html-link"));
  }
  if (items.length < 20) items.push(...parseEmbeddedListings(html, source, seen).slice(0, 20 - items.length));
  return items;
}

async function hash(value) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(digest)].slice(0, 12).map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function fetchText(url, timeoutMs = 12000, attempts = 2) {
  let lastError;
  for (let attempt = 0; attempt < attempts; attempt += 1) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), timeoutMs);
    try {
      let currentUrl = url;
      let response;
      for (let redirectCount = 0; redirectCount <= 5; redirectCount += 1) {
        if (!isAllowedPublicUrl(currentUrl)) throw new Error("目标地址不是可公开访问的网址");
        response = await fetch(currentUrl, {
          signal: controller.signal,
          redirect: "manual",
          headers: {
            Accept: "text/html,application/xhtml+xml",
            "Accept-Language": "zh-CN,zh;q=0.9",
            "User-Agent": "Mozilla/5.0 (compatible; GongkaoRadar/1.1; +official-information-monitor)"
          }
        });
        if (![301, 302, 303, 307, 308].includes(response.status)) break;
        const location = response.headers.get("Location");
        if (!location || redirectCount === 5) throw new Error("官网重定向次数过多");
        currentUrl = new URL(location, currentUrl).href;
      }
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.text();
    } catch (error) {
      lastError = error;
      if (attempt + 1 < attempts) await new Promise((resolve) => setTimeout(resolve, 400));
    } finally {
      clearTimeout(timeout);
    }
  }
  throw lastError || new Error("来源访问失败");
}

async function enrichItem(item) {
  try {
    const html = await fetchText(item.articleUrl, 10000, 1);
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

function sourceEndpoints(source) {
  const endpoints = Array.isArray(source.endpoints) && source.endpoints.length ? source.endpoints : [{ url: source.url, label: "主入口" }];
  const currentYear = new Date().getUTCFullYear();
  return endpoints.flatMap((endpoint, index) => {
    if (typeof endpoint === "string") return [{ url: endpoint, label: index ? `备用入口 ${index}` : "主入口" }];
    if (!endpoint.urlTemplate) return [{ ...endpoint, url: endpoint.url, label: endpoint.label || (index ? `备用入口 ${index}` : "主入口") }];
    const offsets = Array.isArray(endpoint.yearOffsets) && endpoint.yearOffsets.length ? endpoint.yearOffsets : [0];
    return offsets.map((offset) => {
      const year = currentYear + Number(offset || 0);
      return {
        ...endpoint,
        url: endpoint.urlTemplate.replaceAll("{year}", String(year)),
        label: (endpoint.label || `${year}年度专题`).replaceAll("{year}", String(year))
      };
    });
  });
}

export async function collectSource(source, { lightweight = false } = {}) {
  const endpoints = sourceEndpoints(source);
  const attemptedEndpoints = [];
  let selected = null;
  let candidates = [];
  let lastError = null;
  let accessibleEndpoint = null;

  for (let index = 0; index < endpoints.length; index += 1) {
    const endpoint = endpoints[index];
    const started = Date.now();
    try {
      const html = await fetchText(endpoint.url, lightweight ? INITIAL_SOURCE_TIMEOUT_MS : 12000, lightweight ? 1 : 2);
      const parsed = parseListing(html, {
        ...source,
        listingUrl: endpoint.url,
        adapter: {
          ...(source.adapter || {}),
          ...(endpoint.titlePattern ? { titlePattern: endpoint.titlePattern } : {}),
          ...(endpoint.linkPattern ? { linkPattern: endpoint.linkPattern } : {})
        }
      });
      attemptedEndpoints.push({ url: endpoint.url, label: endpoint.label, ok: true, found: parsed.length, durationMs: Date.now() - started });
      accessibleEndpoint ||= { ...endpoint, index };
      if (parsed.length) {
        selected = { ...endpoint, index };
        candidates = parsed;
        break;
      }
    } catch (error) {
      lastError = error;
      attemptedEndpoints.push({
        url: endpoint.url,
        label: endpoint.label,
        ok: false,
        found: 0,
        durationMs: Date.now() - started,
        error: error instanceof Error ? error.message : String(error)
      });
    }
  }

  selected ||= accessibleEndpoint;
  if (!selected) {
    const error = new Error(lastError instanceof Error ? lastError.message : "全部官方入口访问失败");
    error.attemptedEndpoints = attemptedEndpoints;
    throw error;
  }

  const links = candidates.slice(0, MAX_ITEMS_PER_SOURCE);
  const output = await Promise.all(links.map(async (item, index) => {
    if (!lightweight && index < MAX_DETAIL_PAGES_PER_SOURCE) return enrichItem(item);
    return {
      ...item,
      id: await hash(item.articleUrl),
      summary: "详细报考条件和时间节点请查看官方原文。",
      registrationStart: null,
      registrationEnd: null,
      examDate: null,
      recruitmentCount: null
    };
  }));
  return {
    items: output,
    candidates: candidates.length,
    parseMethod: candidates[0]?.parseMethod || "none",
    endpoint: selected.url,
    endpointLabel: selected.label,
    dynamicPortal: Boolean(selected.dynamicPortal && !candidates.length),
    fallbackUsed: selected.index > 0,
    attemptedEndpoints
  };
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

async function ensureSourcesSeeded(env) {
  return getStore(env).fetch("https://store.internal/sources/seed", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      items: DEFAULT_SOURCES.map((source) => normalizeSourceInput(source, { id: source.id, builtIn: true })),
      version: SOURCE_CONFIG_VERSION
    })
  });
}

async function getManagedSources(env, { includeInactive = false } = {}) {
  await ensureSourcesSeeded(env);
  const response = await getStore(env).fetch(`https://store.internal/sources${includeInactive ? "?all=1" : ""}`);
  if (!response.ok) throw new Error("读取来源配置失败");
  return response.json();
}

async function acquireRefreshLease(env) {
  const response = await getStore(env).fetch("https://store.internal/refresh-lease", { method: "POST" });
  return response.json();
}

async function collectSourceWithRetry(source, options = {}) {
  let lastError;
  for (let attempt = 0; attempt <= SOURCE_RETRY_DELAYS_MS.length; attempt += 1) {
    try {
      const result = await collectSource(source, options);
      return { ...result, retryCount: attempt };
    } catch (error) {
      lastError = error;
      if (attempt < SOURCE_RETRY_DELAYS_MS.length) await delay(SOURCE_RETRY_DELAYS_MS[attempt]);
    }
  }
  if (lastError && typeof lastError === "object") lastError.retryCount = SOURCE_RETRY_DELAYS_MS.length;
  throw lastError;
}

async function collectAllSources(sources, { lightweight = false } = {}) {
  const reportById = new Map();
  const collected = [];
  const automaticSources = sources.filter((source) => source.mode !== "portal");
  const batchSize = lightweight ? INITIAL_SOURCE_BATCH_SIZE : SOURCE_BATCH_SIZE;
  for (let index = 0; index < automaticSources.length; index += batchSize) {
    const batch = automaticSources.slice(index, index + batchSize);
    const batchResults = await Promise.all(batch.map(async (source) => {
      const started = Date.now();
      try {
        const result = await collectSourceWithRetry(source, { lightweight });
        return {
          source,
          items: result.items,
          report: {
            sourceId: source.id,
            source: source.name,
            status: result.items.length ? "success" : result.dynamicPortal ? "dynamic" : "empty",
            ok: true,
            found: result.items.length,
            candidates: result.candidates,
            parseMethod: result.parseMethod,
            endpoint: result.endpoint,
            endpointLabel: result.endpointLabel,
            dynamicPortal: result.dynamicPortal,
            fallbackUsed: result.fallbackUsed,
            retryCount: result.retryCount,
            attemptedEndpoints: result.attemptedEndpoints,
            durationMs: Date.now() - started,
            checkedAt: new Date().toISOString()
          }
        };
      } catch (error) {
        return {
          source,
          items: [],
          report: {
            sourceId: source.id,
            source: source.name,
            status: "error",
            ok: false,
            found: 0,
            durationMs: Date.now() - started,
            checkedAt: new Date().toISOString(),
            error: error instanceof Error ? error.message : String(error),
            retryCount: Number(error?.retryCount) || SOURCE_RETRY_DELAYS_MS.length,
            attemptedEndpoints: error?.attemptedEndpoints || []
          }
        };
      }
    }));
    for (const result of batchResults) {
      collected.push(...result.items);
      reportById.set(result.source.id, result.report);
    }
  }

  for (const source of sources.filter((item) => item.mode === "portal")) {
    reportById.set(source.id, {
      sourceId: source.id,
      source: source.name,
      status: "portal",
      ok: true,
      found: 0,
      durationMs: 0,
      checkedAt: new Date().toISOString()
    });
  }

  const report = sources.map((source) => reportById.get(source.id));
  return { collected, report };
}

async function refreshAll(env, { lease: existingLease = null, lightweight = false } = {}) {
  await ensureSeeded(env);
  const sourceSet = await getManagedSources(env);
  const lease = existingLease?.granted ? existingLease : await acquireRefreshLease(env);
  if (!lease.granted) return { ok: true, skipped: true, reason: "已有采集任务正在运行" };

  const { collected, report } = await collectAllSources(sourceSet.items, { lightweight });
  const syncedAt = new Date().toISOString();
  const response = await getStore(env).fetch("https://store.internal/ingest", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ items: collected, syncedAt, startedAt: lease.startedAt, report, sourceConfigVersion: sourceSet.version })
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
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Subscription-Token",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin"
  };
}

function adminAuthError(request, env) {
  if (!env.ADMIN_TOKEN) return json({ error: "管理密钥尚未配置" }, { status: 503 }, request, env);
  const token = request.headers.get("Authorization")?.replace(/^Bearer\s+/i, "");
  if (token !== env.ADMIN_TOKEN) return json({ error: "管理密钥不正确" }, { status: 401 }, request, env);
  return null;
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
      return json({ ok: true, service: "gongkao-radar-api", adminConfigured: Boolean(env.ADMIN_TOKEN), now: new Date().toISOString() }, {}, request, env);
    }

    if (url.pathname === "/api/sources" && request.method === "GET") {
      const sourceSet = await getManagedSources(env);
      return json(sourceSet, { headers: { "Cache-Control": "public, max-age=60" } }, request, env);
    }

    if (url.pathname === "/api/admin/sources" && request.method === "GET") {
      const authError = adminAuthError(request, env);
      if (authError) return authError;
      return json(await getManagedSources(env, { includeInactive: true }), {}, request, env);
    }

    if (url.pathname === "/api/admin/health" && request.method === "GET") {
      const authError = adminAuthError(request, env);
      if (authError) return authError;
      const response = await getStore(env).fetch("https://store.internal/health");
      return json(await response.json(), { status: response.status }, request, env);
    }

    if (url.pathname === "/api/admin/sources/test" && request.method === "POST") {
      const authError = adminAuthError(request, env);
      if (authError) return authError;
      try {
        const source = normalizeSourceInput(await request.json());
        if (source.mode === "portal") {
          const started = Date.now();
          const result = await collectSource(source, { lightweight: true });
          return json({
            ok: true,
            accessible: true,
            mode: "portal",
            endpoint: result.endpoint,
            endpointLabel: result.endpointLabel,
            fallbackUsed: result.fallbackUsed,
            attemptedEndpoints: result.attemptedEndpoints,
            preview: [],
            durationMs: Date.now() - started
          }, {}, request, env);
        }
        const started = Date.now();
        const result = await collectSource(source, { lightweight: true });
        return json({
          ok: true,
          accessible: true,
          mode: result.dynamicPortal ? "dynamic" : "automatic",
          endpoint: result.endpoint,
          endpointLabel: result.endpointLabel,
          fallbackUsed: result.fallbackUsed,
          candidates: result.candidates,
          preview: result.items.slice(0, 5),
          attemptedEndpoints: result.attemptedEndpoints,
          durationMs: Date.now() - started
        }, {}, request, env);
      } catch (error) {
        return json({
          ok: false,
          accessible: false,
          error: error instanceof Error ? error.message : String(error),
          attemptedEndpoints: error?.attemptedEndpoints || []
        }, { status: 422 }, request, env);
      }
    }

    if (url.pathname === "/api/admin/sources" && request.method === "POST") {
      const authError = adminAuthError(request, env);
      if (authError) return authError;
      try {
        const source = normalizeSourceInput(await request.json());
        const response = await getStore(env).fetch("https://store.internal/sources", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ source })
        });
        return json(await response.json(), { status: response.status }, request, env);
      } catch (error) {
        return json({ error: error instanceof Error ? error.message : String(error) }, { status: 400 }, request, env);
      }
    }

    const managedSourceMatch = url.pathname.match(/^\/api\/admin\/sources\/([^/]+)$/);
    if (managedSourceMatch && ["PUT", "DELETE"].includes(request.method)) {
      const authError = adminAuthError(request, env);
      if (authError) return authError;
      const id = decodeURIComponent(managedSourceMatch[1]);
      try {
        let body = null;
        if (request.method === "PUT") {
          const currentResponse = await getStore(env).fetch(`https://store.internal/sources/${encodeURIComponent(id)}`);
          if (!currentResponse.ok) return json({ error: "来源不存在" }, { status: 404 }, request, env);
          const current = await currentResponse.json();
          body = { source: normalizeSourceInput(await request.json(), { id, builtIn: current.item.builtIn }), enabled: current.item.enabled };
        }
        const response = await getStore(env).fetch(`https://store.internal/sources/${encodeURIComponent(id)}`, {
          method: request.method,
          headers: { "Content-Type": "application/json" },
          body: body ? JSON.stringify(body) : undefined
        });
        return json(await response.json(), { status: response.status }, request, env);
      } catch (error) {
        return json({ error: error instanceof Error ? error.message : String(error) }, { status: 400 }, request, env);
      }
    }

    const sourceActionMatch = url.pathname.match(/^\/api\/admin\/sources\/([^/]+)\/(enable|disable|restore|reset)$/);
    if (sourceActionMatch && request.method === "POST") {
      const authError = adminAuthError(request, env);
      if (authError) return authError;
      const [, rawId, action] = sourceActionMatch;
      const response = await getStore(env).fetch(`https://store.internal/sources/${encodeURIComponent(decodeURIComponent(rawId))}/${action}`, { method: "POST" });
      return json(await response.json(), { status: response.status }, request, env);
    }

    const sourceRevisionsMatch = url.pathname.match(/^\/api\/admin\/sources\/([^/]+)\/revisions$/);
    if (sourceRevisionsMatch && request.method === "GET") {
      const authError = adminAuthError(request, env);
      if (authError) return authError;
      const id = decodeURIComponent(sourceRevisionsMatch[1]);
      const response = await getStore(env).fetch(`https://store.internal/sources/${encodeURIComponent(id)}/revisions`);
      return json(await response.json(), { status: response.status }, request, env);
    }

    const sourceRollbackMatch = url.pathname.match(/^\/api\/admin\/sources\/([^/]+)\/rollback\/(\d+)$/);
    if (sourceRollbackMatch && request.method === "POST") {
      const authError = adminAuthError(request, env);
      if (authError) return authError;
      const id = decodeURIComponent(sourceRollbackMatch[1]);
      const response = await getStore(env).fetch(`https://store.internal/sources/${encodeURIComponent(id)}/rollback/${sourceRollbackMatch[2]}`, { method: "POST" });
      return json(await response.json(), { status: response.status }, request, env);
    }

    if (url.pathname === "/api/subscriptions" && request.method === "POST") {
      try {
        const body = await request.json().catch(() => ({}));
        if (body.delivery?.emailEnabled && !(env.RESEND_API_KEY && env.EMAIL_FROM && env.EMAIL_SUBSCRIPTIONS_ENABLED === "true")) throw new Error("邮件提醒尚未开放，请先使用 Bark 推送");
        const filters = normalizeSubscriptionFilters(body);
        const delivery = normalizeSubscriptionDelivery(body.delivery);
        const subscriptionId = crypto.randomUUID();
        const editToken = `${crypto.randomUUID()}${crypto.randomUUID().replaceAll("-", "")}`;
        const response = await getStore(env).fetch("https://store.internal/subscriptions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ subscriptionId, tokenHash: await hashSecret(editToken), filters, delivery })
        });
        return json({ ...(await response.json()), editToken }, { status: response.status }, request, env);
      } catch (error) {
        return json({ error: error instanceof Error ? error.message : String(error) }, { status: 400 }, request, env);
      }
    }

    const subscriptionActionMatch = url.pathname.match(/^\/api\/subscriptions\/([^/]+)\/(reminders|seen|test)$/);
    if (subscriptionActionMatch && ((subscriptionActionMatch[2] === "reminders" && request.method === "GET") || (["seen", "test"].includes(subscriptionActionMatch[2]) && request.method === "POST"))) {
      await ensureSeeded(env);
      const editToken = request.headers.get("X-Subscription-Token");
      if (!editToken) return json({ error: "缺少订阅凭证" }, { status: 401 }, request, env);
      const id = decodeURIComponent(subscriptionActionMatch[1]);
      const body = request.method === "POST" ? await request.json().catch(() => ({})) : {};
      const tokenHash = await hashSecret(editToken);
      const response = await getStore(env).fetch(`https://store.internal/subscriptions/${encodeURIComponent(id)}/${subscriptionActionMatch[2]}`, {
        method: request.method,
        headers: { "Content-Type": "application/json", "X-Token-Hash": tokenHash },
        body: request.method === "POST" ? JSON.stringify({ eventKeys: body.eventKeys }) : undefined
      });
      return json(await response.json(), { status: response.status }, request, env);
    }

    const subscriptionMatch = url.pathname.match(/^\/api\/subscriptions\/([^/]+)$/);
    if (subscriptionMatch && ["GET", "PUT", "DELETE"].includes(request.method)) {
      const editToken = request.headers.get("X-Subscription-Token");
      if (!editToken) return json({ error: "缺少订阅凭证" }, { status: 401 }, request, env);
      const id = decodeURIComponent(subscriptionMatch[1]);
      const body = request.method === "PUT" ? await request.json().catch(() => ({})) : {};
      const tokenHash = await hashSecret(editToken);
      let updateBody;
      try {
        if (body.delivery?.emailEnabled && !(env.RESEND_API_KEY && env.EMAIL_FROM && env.EMAIL_SUBSCRIPTIONS_ENABLED === "true")) throw new Error("邮件提醒尚未开放，请先使用 Bark 推送");
        updateBody = request.method === "PUT" ? { filters: normalizeSubscriptionFilters(body), delivery: normalizeSubscriptionDelivery(body.delivery, { update: true }) } : null;
      } catch (error) {
        return json({ error: error instanceof Error ? error.message : String(error) }, { status: 400 }, request, env);
      }
      const response = await getStore(env).fetch(`https://store.internal/subscriptions/${encodeURIComponent(id)}`, {
        method: request.method,
        headers: { "Content-Type": "application/json", "X-Token-Hash": tokenHash },
        body: updateBody ? JSON.stringify(updateBody) : undefined
      });
      return json(await response.json(), { status: response.status }, request, env);
    }

    if (url.pathname === "/api/stats" && request.method === "GET") {
      await ensureSeeded(env);
      const sourceSet = await getManagedSources(env);
      const response = await getStore(env).fetch("https://store.internal/stats");
      const stats = await response.json();
      if ((!stats.syncedAt || stats.sourceConfigVersion !== sourceSet.version) && !stats.collecting) {
        const scheduledResponse = await getStore(env).fetch("https://store.internal/schedule-refresh", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sources: sourceSet.items, sourceConfigVersion: sourceSet.version })
        });
        const scheduled = await scheduledResponse.json();
        if (scheduled.granted) {
          stats.collecting = true;
          stats.refreshStartedAt = scheduled.startedAt;
        }
      }
      return json({
        ...stats,
        deliveryCapabilities: {
          bark: true,
          email: Boolean(env.RESEND_API_KEY && env.EMAIL_FROM && env.EMAIL_SUBSCRIPTIONS_ENABLED === "true")
        }
      }, { headers: { "Cache-Control": "no-store" } }, request, env);
    }

    if (["/api/news", "/api/calendar"].includes(url.pathname) && request.method === "GET") {
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
      const authError = adminAuthError(request, env);
      if (authError) return authError;
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
  constructor(ctx, env) {
    this.ctx = ctx;
    this.env = env;
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
          track TEXT NOT NULL DEFAULT '公务员',
          type TEXT NOT NULL,
          published_at TEXT,
          registration_start TEXT,
          registration_end TEXT,
          exam_date TEXT,
          recruitment_count INTEGER,
          official INTEGER NOT NULL DEFAULT 1,
          canonical_key TEXT,
          version_count INTEGER NOT NULL DEFAULT 1,
          last_changed_at TEXT,
          change_fields TEXT,
          fetched_at TEXT NOT NULL
        );
        CREATE INDEX IF NOT EXISTS idx_articles_published ON articles(published_at DESC);
        CREATE INDEX IF NOT EXISTS idx_articles_region ON articles(region);
        CREATE TABLE IF NOT EXISTS metadata (key TEXT PRIMARY KEY, value TEXT);
        CREATE TABLE IF NOT EXISTS sources (
          id TEXT PRIMARY KEY,
          config_json TEXT NOT NULL,
          built_in INTEGER NOT NULL DEFAULT 0,
          customized INTEGER NOT NULL DEFAULT 0,
          enabled INTEGER NOT NULL DEFAULT 1,
          deleted_at TEXT,
          created_at TEXT NOT NULL,
          updated_at TEXT NOT NULL
        );
        CREATE INDEX IF NOT EXISTS idx_sources_active ON sources(enabled, deleted_at);
        CREATE TABLE IF NOT EXISTS source_revisions (
          revision_id INTEGER PRIMARY KEY AUTOINCREMENT,
          source_id TEXT NOT NULL,
          action TEXT NOT NULL,
          config_json TEXT,
          created_at TEXT NOT NULL
        );
        CREATE INDEX IF NOT EXISTS idx_source_revisions_source ON source_revisions(source_id, revision_id DESC);
        CREATE TABLE IF NOT EXISTS article_versions (
          version_id INTEGER PRIMARY KEY AUTOINCREMENT,
          article_id TEXT NOT NULL,
          version_number INTEGER NOT NULL,
          snapshot_json TEXT NOT NULL,
          change_fields TEXT NOT NULL,
          created_at TEXT NOT NULL,
          UNIQUE(article_id, version_number)
        );
        CREATE INDEX IF NOT EXISTS idx_article_versions_article ON article_versions(article_id, version_number DESC);
        CREATE TABLE IF NOT EXISTS article_events (
          event_key TEXT PRIMARY KEY,
          article_id TEXT NOT NULL,
          event_type TEXT NOT NULL,
          change_fields TEXT,
          created_at TEXT NOT NULL
        );
        CREATE INDEX IF NOT EXISTS idx_article_events_created ON article_events(created_at DESC);
        CREATE TABLE IF NOT EXISTS article_sources (
          article_url TEXT PRIMARY KEY,
          article_id TEXT NOT NULL,
          source_name TEXT NOT NULL,
          source_url TEXT,
          first_seen_at TEXT NOT NULL,
          last_seen_at TEXT NOT NULL
        );
        CREATE INDEX IF NOT EXISTS idx_article_sources_article ON article_sources(article_id);
        CREATE TABLE IF NOT EXISTS subscriptions (
          subscription_id TEXT PRIMARY KEY,
          token_hash TEXT NOT NULL,
          filters_json TEXT NOT NULL,
          delivery_json TEXT NOT NULL DEFAULT '{}',
          enabled INTEGER NOT NULL DEFAULT 1,
          created_at TEXT NOT NULL,
          updated_at TEXT NOT NULL
        );
        CREATE TABLE IF NOT EXISTS subscription_deliveries (
          subscription_id TEXT NOT NULL,
          event_key TEXT NOT NULL,
          seen_at TEXT NOT NULL,
          PRIMARY KEY(subscription_id, event_key)
        );
        CREATE INDEX IF NOT EXISTS idx_subscription_deliveries_subscription ON subscription_deliveries(subscription_id, seen_at DESC);
        CREATE TABLE IF NOT EXISTS push_deliveries (
          subscription_id TEXT NOT NULL,
          event_key TEXT NOT NULL,
          channel TEXT NOT NULL,
          status TEXT NOT NULL,
          attempt_count INTEGER NOT NULL DEFAULT 0,
          last_error TEXT,
          attempted_at TEXT NOT NULL,
          sent_at TEXT,
          PRIMARY KEY(subscription_id, event_key, channel)
        );
        CREATE INDEX IF NOT EXISTS idx_push_deliveries_pending ON push_deliveries(status, attempted_at);
        CREATE TABLE IF NOT EXISTS source_health (
          source_id TEXT PRIMARY KEY,
          source_name TEXT NOT NULL,
          consecutive_failures INTEGER NOT NULL DEFAULT 0,
          total_failures INTEGER NOT NULL DEFAULT 0,
          last_success_at TEXT,
          last_failure_at TEXT,
          last_error TEXT,
          last_alert_at TEXT,
          updated_at TEXT NOT NULL
        );
        CREATE TABLE IF NOT EXISTS health_events (
          event_id INTEGER PRIMARY KEY AUTOINCREMENT,
          source_id TEXT NOT NULL,
          event_type TEXT NOT NULL,
          details_json TEXT NOT NULL,
          created_at TEXT NOT NULL
        );
        CREATE INDEX IF NOT EXISTS idx_health_events_created ON health_events(created_at DESC);
      `);
      const articleColumns = this.ctx.storage.sql.exec("PRAGMA table_info(articles)").toArray().map((column) => column.name);
      if (!articleColumns.includes("city")) this.ctx.storage.sql.exec("ALTER TABLE articles ADD COLUMN city TEXT");
      if (!articleColumns.includes("priority")) this.ctx.storage.sql.exec("ALTER TABLE articles ADD COLUMN priority INTEGER NOT NULL DEFAULT 0");
      if (!articleColumns.includes("track")) this.ctx.storage.sql.exec("ALTER TABLE articles ADD COLUMN track TEXT NOT NULL DEFAULT '公务员'");
      if (!articleColumns.includes("canonical_key")) this.ctx.storage.sql.exec("ALTER TABLE articles ADD COLUMN canonical_key TEXT");
      if (!articleColumns.includes("version_count")) this.ctx.storage.sql.exec("ALTER TABLE articles ADD COLUMN version_count INTEGER NOT NULL DEFAULT 1");
      if (!articleColumns.includes("last_changed_at")) this.ctx.storage.sql.exec("ALTER TABLE articles ADD COLUMN last_changed_at TEXT");
      if (!articleColumns.includes("change_fields")) this.ctx.storage.sql.exec("ALTER TABLE articles ADD COLUMN change_fields TEXT");
      const subscriptionColumns = this.ctx.storage.sql.exec("PRAGMA table_info(subscriptions)").toArray().map((column) => column.name);
      if (!subscriptionColumns.includes("delivery_json")) this.ctx.storage.sql.exec("ALTER TABLE subscriptions ADD COLUMN delivery_json TEXT NOT NULL DEFAULT '{}'");
      this.ctx.storage.sql.exec("CREATE INDEX IF NOT EXISTS idx_articles_priority ON articles(priority DESC, published_at DESC)");
      this.ctx.storage.sql.exec("CREATE INDEX IF NOT EXISTS idx_articles_canonical ON articles(canonical_key)");
      for (const row of this.ctx.storage.sql.exec("SELECT id, title, region, track FROM articles WHERE canonical_key IS NULL OR canonical_key = ''").toArray()) {
        this.ctx.storage.sql.exec("UPDATE articles SET canonical_key = ?, last_changed_at = COALESCE(last_changed_at, fetched_at) WHERE id = ?", canonicalAnnouncementKey(row), row.id);
      }
      this.ctx.storage.sql.exec("PRAGMA optimize");
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
      track: row.track || classifyTrack(row.title),
      type: row.type,
      publishedAt: row.published_at,
      registrationStart: row.registration_start,
      registrationEnd: row.registration_end,
      examDate: row.exam_date,
      recruitmentCount: row.recruitment_count,
      official: Boolean(row.official),
      versionCount: Number(row.version_count) || 1,
      lastChangedAt: row.last_changed_at || null,
      changeFields: row.change_fields ? JSON.parse(row.change_fields) : [],
      mirrorCount: Number(row.mirror_count) || undefined,
      fetchedAt: row.fetched_at
    };
  }

  rowToSource(row) {
    return {
      ...JSON.parse(row.config_json),
      builtIn: Boolean(row.built_in),
      customized: Boolean(row.customized),
      enabled: Boolean(row.enabled),
      deletedAt: row.deleted_at || null,
      createdAt: row.created_at,
      updatedAt: row.updated_at
    };
  }

  sourceVersion() {
    return this.ctx.storage.sql.exec("SELECT value FROM metadata WHERE key = 'source_revision'").toArray()[0]?.value || SOURCE_CONFIG_VERSION;
  }

  bumpSourceVersion() {
    const version = `${new Date().toISOString()}-${crypto.randomUUID().slice(0, 8)}`;
    this.ctx.storage.sql.exec("INSERT OR REPLACE INTO metadata(key, value) VALUES ('source_revision', ?)", version);
    return version;
  }

  recordSourceRevision(id, action, config = null) {
    this.ctx.storage.sql.exec(
      "INSERT INTO source_revisions(source_id, action, config_json, created_at) VALUES (?, ?, ?, ?)",
      id,
      action,
      config ? JSON.stringify(config) : null,
      new Date().toISOString()
    );
  }

  subscriptionRow(id, tokenHash) {
    const row = this.ctx.storage.sql.exec("SELECT * FROM subscriptions WHERE subscription_id = ? AND enabled = 1", id).toArray()[0];
    return row && row.token_hash === tokenHash ? row : null;
  }

  subscriptionView(row) {
    const recentDeliveries = this.ctx.storage.sql.exec(
      "SELECT channel, status, attempt_count, last_error, attempted_at, sent_at FROM push_deliveries WHERE subscription_id = ? ORDER BY attempted_at DESC LIMIT 5",
      row.subscription_id
    ).toArray().map((delivery) => ({
      channel: delivery.channel,
      status: delivery.status,
      attemptCount: delivery.attempt_count,
      lastError: delivery.last_error,
      attemptedAt: delivery.attempted_at,
      sentAt: delivery.sent_at
    }));
    return {
      subscriptionId: row.subscription_id,
      filters: JSON.parse(row.filters_json),
      delivery: redactDelivery(JSON.parse(row.delivery_json || "{}"), this.env),
      recentDeliveries,
      updatedAt: row.updated_at
    };
  }

  notificationText(reminder) {
    const labels = { new: "新公告", updated: "公告已更新", deadline: "报名即将截止" };
    const item = reminder.item || {};
    const changeText = reminder.eventType === "updated" && reminder.changeFields?.length
      ? `\n变更字段：${reminder.changeFields.join("、")}`
      : "";
    return {
      title: `公考雷达 · ${labels[reminder.eventType] || "招录提醒"}`,
      body: `${item.title || "发现一条匹配动态"}${changeText}`.slice(0, 900),
      url: item.articleUrl || "https://gongkao-radar.pages.dev/"
    };
  }

  async sendChannel(channel, delivery, reminder) {
    const message = this.notificationText(reminder);
    if (channel === "bark") {
      const barkUrl = normalizeBarkUrl(delivery.barkUrl);
      const deviceKey = new URL(barkUrl).pathname.split("/").filter(Boolean)[0];
      const response = await fetch("https://api.day.app/push", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({ device_key: deviceKey, title: message.title, body: message.body, url: message.url, group: "公考雷达", level: "timeSensitive" })
      });
      if (!response.ok) throw new Error(`Bark HTTP ${response.status}`);
      const result = await response.json().catch(() => ({}));
      if (result.code !== undefined && Number(result.code) !== 200) throw new Error(`Bark ${result.message || result.code}`);
      return;
    }
    if (channel === "email") {
      if (!this.env.RESEND_API_KEY || !this.env.EMAIL_FROM || this.env.EMAIL_SUBSCRIPTIONS_ENABLED !== "true") throw new Error("邮件服务尚未配置");
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
          "Idempotency-Key": `${reminder.eventKey}:${delivery.email}`.slice(0, 250)
        },
        body: JSON.stringify({ from: this.env.EMAIL_FROM, to: [delivery.email], subject: message.title, text: `${message.body}\n\n查看官方公告：${message.url}` })
      });
      if (!response.ok) throw new Error(`邮件 HTTP ${response.status}`);
    }
  }

  async dispatchPushNotifications() {
    const rows = this.ctx.storage.sql.exec("SELECT * FROM subscriptions WHERE enabled = 1").toArray();
    let sent = 0;
    let failed = 0;
    for (const row of rows) {
      const delivery = JSON.parse(row.delivery_json || "{}");
      const channels = [delivery.barkEnabled && delivery.barkUrl ? "bark" : null, delivery.emailEnabled && delivery.email ? "email" : null].filter(Boolean);
      if (!channels.length) continue;
      const reminders = this.subscriptionReminders(row.subscription_id, row).items.slice(0, 8);
      for (const reminder of reminders) {
        for (const channel of channels) {
          const previous = this.ctx.storage.sql.exec(
            "SELECT * FROM push_deliveries WHERE subscription_id = ? AND event_key = ? AND channel = ?",
            row.subscription_id,
            reminder.eventKey,
            channel
          ).toArray()[0];
          if (previous?.status === "sent" || Number(previous?.attempt_count) >= PUSH_RETRY_LIMIT) continue;
          const previousAt = previous?.attempted_at ? new Date(previous.attempted_at).getTime() : 0;
          const backoffMs = 15 * 60 * 1000 * (2 ** Math.max(Number(previous?.attempt_count) - 1, 0));
          if (previousAt && Date.now() - previousAt < backoffMs) continue;
          const attemptedAt = new Date().toISOString();
          const attemptCount = (Number(previous?.attempt_count) || 0) + 1;
          try {
            await this.sendChannel(channel, delivery, reminder);
            this.ctx.storage.sql.exec(
              "INSERT OR REPLACE INTO push_deliveries(subscription_id, event_key, channel, status, attempt_count, last_error, attempted_at, sent_at) VALUES (?, ?, ?, 'sent', ?, NULL, ?, ?)",
              row.subscription_id, reminder.eventKey, channel, attemptCount, attemptedAt, attemptedAt
            );
            sent += 1;
          } catch (error) {
            this.ctx.storage.sql.exec(
              "INSERT OR REPLACE INTO push_deliveries(subscription_id, event_key, channel, status, attempt_count, last_error, attempted_at, sent_at) VALUES (?, ?, ?, 'failed', ?, ?, ?, NULL)",
              row.subscription_id, reminder.eventKey, channel, attemptCount, String(error?.message || error).slice(0, 500), attemptedAt
            );
            failed += 1;
          }
        }
      }
    }
    return { sent, failed };
  }

  recordSourceHealth(report = []) {
    const events = [];
    const now = new Date().toISOString();
    for (const item of report.filter(Boolean)) {
      const previous = this.ctx.storage.sql.exec("SELECT * FROM source_health WHERE source_id = ?", item.sourceId).toArray()[0];
      if (item.ok) {
        if (Number(previous?.consecutive_failures) >= 2) {
          const details = { source: item.source, previousFailures: Number(previous.consecutive_failures), checkedAt: item.checkedAt || now };
          this.ctx.storage.sql.exec("INSERT INTO health_events(source_id, event_type, details_json, created_at) VALUES (?, 'recovered', ?, ?)", item.sourceId, JSON.stringify(details), now);
          events.push({ sourceId: item.sourceId, eventType: "recovered", details });
        }
        this.ctx.storage.sql.exec(
          `INSERT INTO source_health(source_id, source_name, consecutive_failures, total_failures, last_success_at, last_failure_at, last_error, last_alert_at, updated_at)
           VALUES (?, ?, 0, 0, ?, NULL, NULL, NULL, ?)
           ON CONFLICT(source_id) DO UPDATE SET source_name = excluded.source_name, consecutive_failures = 0, last_success_at = excluded.last_success_at, last_error = NULL, updated_at = excluded.updated_at`,
          item.sourceId, item.source, item.checkedAt || now, now
        );
        continue;
      }
      const consecutive = (Number(previous?.consecutive_failures) || 0) + 1;
      const total = (Number(previous?.total_failures) || 0) + 1;
      this.ctx.storage.sql.exec(
        `INSERT INTO source_health(source_id, source_name, consecutive_failures, total_failures, last_success_at, last_failure_at, last_error, last_alert_at, updated_at)
         VALUES (?, ?, ?, ?, NULL, ?, ?, NULL, ?)
         ON CONFLICT(source_id) DO UPDATE SET source_name = excluded.source_name, consecutive_failures = excluded.consecutive_failures, total_failures = excluded.total_failures, last_failure_at = excluded.last_failure_at, last_error = excluded.last_error, updated_at = excluded.updated_at`,
        item.sourceId, item.source, consecutive, total, item.checkedAt || now, String(item.error || "采集失败").slice(0, 500), now
      );
      const eventType = consecutive >= 2 ? "alert" : "failure";
      if (consecutive <= 2) {
        const details = { source: item.source, consecutiveFailures: consecutive, error: item.error || "采集失败", retryCount: item.retryCount || 0, checkedAt: item.checkedAt || now };
        this.ctx.storage.sql.exec("INSERT INTO health_events(source_id, event_type, details_json, created_at) VALUES (?, ?, ?, ?)", item.sourceId, eventType, JSON.stringify(details), now);
        events.push({ sourceId: item.sourceId, eventType, details });
      }
    }
    return events;
  }

  async dispatchAdminHealthAlerts(events) {
    const actionable = events.filter((event) => event.eventType === "alert" || event.eventType === "recovered");
    if (!actionable.length || !this.env.ADMIN_BARK_URL) return;
    const delivery = { barkUrl: normalizeBarkUrl(this.env.ADMIN_BARK_URL) };
    for (const event of actionable) {
      const recovered = event.eventType === "recovered";
      await this.sendChannel("bark", delivery, {
        eventKey: `health:${event.sourceId}:${event.eventType}:${Date.now()}`,
        eventType: "updated",
        item: {
          title: recovered ? `${event.details.source}采集已恢复` : `${event.details.source}连续采集失败`,
          articleUrl: "https://gongkao-radar.pages.dev/admin"
        }
      }).catch(() => {});
    }
  }

  matchesSubscription(item, filters) {
    if (filters.cities?.length && !filters.cities.includes(item.city)) return false;
    if (filters.tracks?.length && !filters.tracks.includes(item.track)) return false;
    if (filters.keywords?.length) {
      const haystack = `${item.title || ""} ${item.summary || ""}`.toLowerCase();
      if (!filters.keywords.some((keyword) => haystack.includes(String(keyword).toLowerCase()))) return false;
    }
    return true;
  }

  subscriptionReminders(id, row) {
    const filters = JSON.parse(row.filters_json);
    const seenRows = this.ctx.storage.sql.exec("SELECT event_key FROM subscription_deliveries WHERE subscription_id = ?", id).toArray();
    const seen = new Set(seenRows.map((item) => item.event_key));
    const reminders = [];
    if (filters.eventTypes.includes("new") || filters.eventTypes.includes("updated")) {
      const eventRows = this.ctx.storage.sql.exec(`
        SELECT a.*, e.event_key AS reminder_event_key, e.event_type AS reminder_event_type,
          e.change_fields AS reminder_change_fields, e.created_at AS reminder_created_at,
          (SELECT COUNT(*) FROM article_sources mirrors WHERE mirrors.article_id = a.id) AS mirror_count
        FROM article_events e
        JOIN articles a ON a.id = e.article_id
        WHERE julianday(e.created_at) >= julianday('now', '-45 days')
        ORDER BY e.created_at DESC
        LIMIT 150
      `).toArray();
      for (const eventRow of eventRows) {
        if (!filters.eventTypes.includes(eventRow.reminder_event_type) || seen.has(eventRow.reminder_event_key)) continue;
        const item = this.rowToItem(eventRow);
        if (!this.matchesSubscription(item, filters)) continue;
        reminders.push({
          eventKey: eventRow.reminder_event_key,
          eventType: eventRow.reminder_event_type,
          eventAt: eventRow.reminder_created_at,
          changeFields: eventRow.reminder_change_fields ? JSON.parse(eventRow.reminder_change_fields) : [],
          item
        });
      }
    }
    if (filters.eventTypes.includes("deadline")) {
      const deadlineRows = this.ctx.storage.sql.exec(`
        SELECT articles.*, (SELECT COUNT(*) FROM article_sources mirrors WHERE mirrors.article_id = articles.id) AS mirror_count
        FROM articles
        WHERE registration_end IS NOT NULL
          AND julianday(registration_end) >= julianday('now')
          AND julianday(registration_end) <= julianday('now', '+' || ? || ' days')
        ORDER BY registration_end ASC
        LIMIT 100
      `, filters.deadlineDays).toArray();
      for (const deadlineRow of deadlineRows) {
        const eventKey = `${deadlineRow.id}:deadline:${deadlineRow.registration_end}`;
        if (seen.has(eventKey)) continue;
        const item = this.rowToItem(deadlineRow);
        if (!this.matchesSubscription(item, filters)) continue;
        reminders.push({ eventKey, eventType: "deadline", eventAt: item.registrationEnd, changeFields: [], item });
      }
    }
    reminders.sort((a, b) => new Date(b.eventAt || 0) - new Date(a.eventAt || 0));
    return { items: reminders.slice(0, 30), total: reminders.length, filters };
  }

  managedSources({ all = false } = {}) {
    this.ctx.storage.sql.exec("DELETE FROM sources WHERE built_in = 0 AND deleted_at IS NOT NULL AND julianday(deleted_at) < julianday('now', '-30 days')");
    const rows = this.ctx.storage.sql.exec(
      all
        ? "SELECT * FROM sources ORDER BY deleted_at IS NOT NULL, enabled DESC, built_in DESC, created_at ASC"
        : "SELECT * FROM sources WHERE enabled = 1 AND deleted_at IS NULL ORDER BY built_in DESC, created_at ASC"
    ).toArray();
    return { items: rows.map((row) => this.rowToSource(row)), version: this.sourceVersion() };
  }

  upsert(items) {
    const now = new Date().toISOString();
    let changed = 0;
    for (const item of items) {
      if (!item?.id || !item?.title || !item?.articleUrl) continue;
      const track = item.track || classifyTrack(item.title);
      const canonicalKey = canonicalAnnouncementKey({ ...item, track });
      const existingByUrl = this.ctx.storage.sql.exec("SELECT * FROM articles WHERE article_url = ? LIMIT 1", item.articleUrl).toArray()[0];
      const existingByCanonical = existingByUrl || this.ctx.storage.sql.exec("SELECT * FROM articles WHERE canonical_key = ? LIMIT 1", canonicalKey).toArray()[0];
      const existing = existingByUrl || existingByCanonical;
      const effectiveId = existing?.id || item.id;
      const meaningfulSummary = item.summary && !item.summary.startsWith("详细报考条件和时间节点请查看官方原文") ? item.summary : null;
      const comparableFields = [
        ["title", "title", item.title],
        ["summary", "summary", meaningfulSummary],
        ["publishedAt", "published_at", item.publishedAt],
        ["registrationStart", "registration_start", item.registrationStart],
        ["registrationEnd", "registration_end", item.registrationEnd],
        ["examDate", "exam_date", item.examDate],
        ["recruitmentCount", "recruitment_count", Number.isFinite(item.recruitmentCount) ? item.recruitmentCount : null]
      ];
      const changeFields = existing
        ? comparableFields.filter(([, column, nextValue]) => nextValue !== null && nextValue !== undefined && String(existing[column] ?? "") !== String(nextValue)).map(([field]) => field)
        : [];
      const versionCount = existing ? (Number(existing.version_count) || 1) + (changeFields.length ? 1 : 0) : 1;
      const lastChangedAt = existing ? (changeFields.length ? now : existing.last_changed_at) : now;
      this.ctx.storage.sql.exec(
        `INSERT INTO articles (
          id, title, summary, source_name, source_url, article_url, region, city, priority, track, type,
          published_at, registration_start, registration_end, exam_date,
          recruitment_count, official, canonical_key, version_count, last_changed_at, change_fields, fetched_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(id) DO UPDATE SET
          title = excluded.title,
          summary = CASE WHEN length(excluded.summary) > 20 THEN excluded.summary ELSE articles.summary END,
          region = excluded.region,
          city = excluded.city,
          priority = excluded.priority,
          track = excluded.track,
          type = excluded.type,
          published_at = COALESCE(excluded.published_at, articles.published_at),
          registration_start = COALESCE(excluded.registration_start, articles.registration_start),
          registration_end = COALESCE(excluded.registration_end, articles.registration_end),
          exam_date = COALESCE(excluded.exam_date, articles.exam_date),
          recruitment_count = COALESCE(excluded.recruitment_count, articles.recruitment_count),
          official = excluded.official,
          canonical_key = excluded.canonical_key,
          version_count = excluded.version_count,
          last_changed_at = COALESCE(excluded.last_changed_at, articles.last_changed_at),
          change_fields = excluded.change_fields,
          fetched_at = excluded.fetched_at`,
        effectiveId,
        item.title,
        meaningfulSummary || item.summary || null,
        item.sourceName || "官方来源",
        item.sourceUrl || item.articleUrl,
        item.articleUrl,
        item.region || "全国",
        item.city || null,
        item.priority ? 1 : 0,
        track,
        item.type || classifyType(item.title),
        item.publishedAt || null,
        item.registrationStart || null,
        item.registrationEnd || null,
        item.examDate || null,
        Number.isFinite(item.recruitmentCount) ? item.recruitmentCount : null,
        item.official === false ? 0 : 1,
        canonicalKey,
        versionCount,
        lastChangedAt,
        JSON.stringify(changeFields),
        now
      );

      this.ctx.storage.sql.exec(
        `INSERT INTO article_sources(article_url, article_id, source_name, source_url, first_seen_at, last_seen_at)
         VALUES (?, ?, ?, ?, ?, ?)
         ON CONFLICT(article_url) DO UPDATE SET article_id = excluded.article_id, source_name = excluded.source_name, source_url = excluded.source_url, last_seen_at = excluded.last_seen_at`,
        item.articleUrl,
        effectiveId,
        item.sourceName || "官方来源",
        item.sourceUrl || item.articleUrl,
        now,
        now
      );

      if (!existing || changeFields.length) {
        const updatedRow = this.ctx.storage.sql.exec("SELECT * FROM articles WHERE id = ?", effectiveId).one();
        this.ctx.storage.sql.exec(
          "INSERT OR IGNORE INTO article_versions(article_id, version_number, snapshot_json, change_fields, created_at) VALUES (?, ?, ?, ?, ?)",
          effectiveId,
          versionCount,
          JSON.stringify(this.rowToItem(updatedRow)),
          JSON.stringify(changeFields),
          now
        );
        const eventType = existing ? "updated" : "new";
        this.ctx.storage.sql.exec(
          "INSERT OR IGNORE INTO article_events(event_key, article_id, event_type, change_fields, created_at) VALUES (?, ?, ?, ?, ?)",
          `${effectiveId}:${eventType}:${versionCount}`,
          effectiveId,
          eventType,
          JSON.stringify(changeFields),
          now
        );
      }
      changed += 1;
    }
    return changed;
  }

  async alarm() {
    const strategy = this.ctx.storage.sql.exec("SELECT value FROM metadata WHERE key = 'refresh_strategy'").toArray()[0]?.value;
    if (strategy !== SOURCE_ALARM_STRATEGY) return;

    const refreshSourcesValue = this.ctx.storage.sql.exec("SELECT value FROM metadata WHERE key = 'refresh_sources'").toArray()[0]?.value;
    const refreshSources = refreshSourcesValue ? JSON.parse(refreshSourcesValue) : this.managedSources().items;
    const automaticSources = refreshSources.filter((source) => source.mode !== "portal");
    const indexValue = this.ctx.storage.sql.exec("SELECT value FROM metadata WHERE key = 'refresh_source_index'").toArray()[0]?.value;
    const index = Math.max(Number(indexValue) || 0, 0);
    const source = automaticSources[index];
    if (!source) return;

    const started = Date.now();
    let items = [];
    let sourceReport;
    try {
      const result = await collectSourceWithRetry(source, { lightweight: true });
      items = result.items;
      sourceReport = {
        sourceId: source.id,
        source: source.name,
        status: result.items.length ? "success" : result.dynamicPortal ? "dynamic" : "empty",
        ok: true,
        found: result.items.length,
        candidates: result.candidates,
        parseMethod: result.parseMethod,
        endpoint: result.endpoint,
        endpointLabel: result.endpointLabel,
        dynamicPortal: result.dynamicPortal,
        fallbackUsed: result.fallbackUsed,
        retryCount: result.retryCount,
        attemptedEndpoints: result.attemptedEndpoints,
        durationMs: Date.now() - started,
        checkedAt: new Date().toISOString()
      };
    } catch (error) {
      sourceReport = {
        sourceId: source.id,
        source: source.name,
        status: "error",
        ok: false,
        found: 0,
        durationMs: Date.now() - started,
        checkedAt: new Date().toISOString(),
        error: error instanceof Error ? error.message : String(error),
        retryCount: Number(error?.retryCount) || SOURCE_RETRY_DELAYS_MS.length,
        attemptedEndpoints: error?.attemptedEndpoints || []
      };
    }

    this.upsert(items);
    const pendingValue = this.ctx.storage.sql.exec("SELECT value FROM metadata WHERE key = 'pending_report'").toArray()[0]?.value;
    const pendingReport = pendingValue ? JSON.parse(pendingValue) : [];
    const nextReport = [...pendingReport.filter((report) => report.sourceId !== source.id), sourceReport];
    const nextIndex = index + 1;
    this.ctx.storage.sql.exec("INSERT OR REPLACE INTO metadata(key, value) VALUES ('pending_report', ?)", JSON.stringify(nextReport));
    this.ctx.storage.sql.exec("INSERT OR REPLACE INTO metadata(key, value) VALUES ('refresh_source_index', ?)", String(nextIndex));

    if (nextIndex < automaticSources.length) {
      await this.ctx.storage.setAlarm(Date.now() + 100);
      return;
    }

    const checkedAt = new Date().toISOString();
    const portalReports = refreshSources.filter((item) => item.mode === "portal").map((item) => ({
      sourceId: item.id,
      source: item.name,
      status: "portal",
      ok: true,
      found: 0,
      durationMs: 0,
      checkedAt
    }));
    const reportsById = new Map([...nextReport, ...portalReports].map((report) => [report.sourceId, report]));
    const report = refreshSources.map((item) => reportsById.get(item.id));
    const syncedAt = new Date().toISOString();
    const scheduledVersion = this.ctx.storage.sql.exec("SELECT value FROM metadata WHERE key = 'refresh_config_version'").toArray()[0]?.value || "unknown";
    this.ctx.storage.sql.exec("INSERT OR REPLACE INTO metadata(key, value) VALUES ('synced_at', ?)", syncedAt);
    this.ctx.storage.sql.exec("INSERT OR REPLACE INTO metadata(key, value) VALUES ('last_report', ?)", JSON.stringify(report));
    this.ctx.storage.sql.exec("INSERT OR REPLACE INTO metadata(key, value) VALUES ('source_config_version', ?)", scheduledVersion);
    this.ctx.storage.sql.exec("INSERT OR REPLACE INTO metadata(key, value) VALUES ('refresh_finished_at', ?)", syncedAt);
    this.ctx.storage.sql.exec("DELETE FROM metadata WHERE key IN ('pending_report', 'refresh_source_index', 'refresh_sources')");
    const healthEvents = this.recordSourceHealth(report);
    await Promise.all([this.dispatchPushNotifications(), this.dispatchAdminHealthAlerts(healthEvents)]);
  }

  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/subscriptions" && request.method === "POST") {
      const body = await request.json();
      const now = new Date().toISOString();
      this.ctx.storage.sql.exec(
        "INSERT INTO subscriptions(subscription_id, token_hash, filters_json, delivery_json, enabled, created_at, updated_at) VALUES (?, ?, ?, ?, 1, ?, ?)",
        body.subscriptionId,
        body.tokenHash,
        JSON.stringify(body.filters),
        JSON.stringify(body.delivery || {}),
        now,
        now
      );
      return Response.json({ ok: true, subscriptionId: body.subscriptionId, filters: body.filters, delivery: redactDelivery(body.delivery || {}, this.env) }, { status: 201 });
    }

    const subscriptionActionMatch = url.pathname.match(/^\/subscriptions\/([^/]+)\/(reminders|seen|test)$/);
    if (subscriptionActionMatch) {
      const id = decodeURIComponent(subscriptionActionMatch[1]);
      const body = await request.json().catch(() => ({}));
      const row = this.subscriptionRow(id, request.headers.get("X-Token-Hash"));
      if (!row) return Response.json({ error: "订阅不存在或凭证无效" }, { status: 401 });
      if (subscriptionActionMatch[2] === "reminders" && request.method === "GET") return Response.json(this.subscriptionReminders(id, row));
      if (subscriptionActionMatch[2] === "seen" && request.method === "POST") {
        const now = new Date().toISOString();
        for (const eventKey of Array.isArray(body.eventKeys) ? body.eventKeys.slice(0, 100) : []) {
          if (!eventKey || String(eventKey).length > 500) continue;
          this.ctx.storage.sql.exec("INSERT OR REPLACE INTO subscription_deliveries(subscription_id, event_key, seen_at) VALUES (?, ?, ?)", id, String(eventKey), now);
        }
        return Response.json({ ok: true });
      }
      if (subscriptionActionMatch[2] === "test" && request.method === "POST") {
        const delivery = JSON.parse(row.delivery_json || "{}");
        const channels = [delivery.barkEnabled && delivery.barkUrl ? "bark" : null, delivery.emailEnabled && delivery.email ? "email" : null].filter(Boolean);
        if (!channels.length) return Response.json({ error: "请先启用 Bark 或邮件推送" }, { status: 400 });
        const results = [];
        for (const channel of channels) {
          try {
            await this.sendChannel(channel, delivery, { eventKey: `test:${Date.now()}`, eventType: "new", item: { title: "推送测试成功：公考雷达后台提醒已启用", articleUrl: "https://gongkao-radar.pages.dev/" } });
            results.push({ channel, ok: true });
          } catch (error) {
            results.push({ channel, ok: false, error: String(error?.message || error) });
          }
        }
        return Response.json({ ok: results.every((result) => result.ok), results }, { status: results.every((result) => result.ok) ? 200 : 502 });
      }
    }

    const subscriptionMatch = url.pathname.match(/^\/subscriptions\/([^/]+)$/);
    if (subscriptionMatch) {
      const id = decodeURIComponent(subscriptionMatch[1]);
      const body = await request.json().catch(() => ({}));
      const row = this.subscriptionRow(id, request.headers.get("X-Token-Hash"));
      if (!row) return Response.json({ error: "订阅不存在或凭证无效" }, { status: 401 });
      if (request.method === "GET") return Response.json(this.subscriptionView(row));
      if (request.method === "PUT") {
        const now = new Date().toISOString();
        const currentDelivery = JSON.parse(row.delivery_json || "{}");
        const nextDelivery = { ...currentDelivery, ...(body.delivery || {}) };
        if (!nextDelivery.barkEnabled) nextDelivery.barkUrl = null;
        if (!nextDelivery.emailEnabled) nextDelivery.email = null;
        if (nextDelivery.barkEnabled && !nextDelivery.barkUrl) return Response.json({ error: "启用 Bark 时需要填写推送地址" }, { status: 400 });
        if (nextDelivery.emailEnabled && !nextDelivery.email) return Response.json({ error: "启用邮件时需要填写邮箱地址" }, { status: 400 });
        this.ctx.storage.sql.exec("UPDATE subscriptions SET filters_json = ?, delivery_json = ?, updated_at = ? WHERE subscription_id = ?", JSON.stringify(body.filters), JSON.stringify(nextDelivery), now, id);
        return Response.json({ ok: true, ...this.subscriptionView(this.ctx.storage.sql.exec("SELECT * FROM subscriptions WHERE subscription_id = ?", id).one()) });
      }
      if (request.method === "DELETE") {
        this.ctx.storage.sql.exec("DELETE FROM subscription_deliveries WHERE subscription_id = ?", id);
        this.ctx.storage.sql.exec("DELETE FROM push_deliveries WHERE subscription_id = ?", id);
        this.ctx.storage.sql.exec("DELETE FROM subscriptions WHERE subscription_id = ?", id);
        return Response.json({ ok: true });
      }
    }

    if (url.pathname === "/sources/seed" && request.method === "POST") {
      const body = await request.json();
      const currentVersion = this.ctx.storage.sql.exec("SELECT value FROM metadata WHERE key = 'source_seed_version'").toArray()[0]?.value;
      let changed = 0;
      if (currentVersion !== body.version) {
        const now = new Date().toISOString();
        for (const source of Array.isArray(body.items) ? body.items : []) {
          const existing = this.ctx.storage.sql.exec("SELECT customized FROM sources WHERE id = ?", source.id).toArray()[0];
          if (!existing) {
            this.ctx.storage.sql.exec(
              "INSERT INTO sources(id, config_json, built_in, customized, enabled, deleted_at, created_at, updated_at) VALUES (?, ?, 1, 0, 1, NULL, ?, ?)",
              source.id,
              JSON.stringify(source),
              now,
              now
            );
            this.recordSourceRevision(source.id, "seed", source);
            changed += 1;
          } else if (!existing.customized) {
            this.ctx.storage.sql.exec("UPDATE sources SET config_json = ?, built_in = 1, updated_at = ? WHERE id = ?", JSON.stringify(source), now, source.id);
            this.recordSourceRevision(source.id, "seed-update", source);
            changed += 1;
          }
        }
        this.ctx.storage.sql.exec("INSERT OR REPLACE INTO metadata(key, value) VALUES ('source_seed_version', ?)", body.version || "1");
        if (changed) this.bumpSourceVersion();
      }
      return Response.json({ ok: true, changed, ...this.managedSources() });
    }

    if (url.pathname === "/sources" && request.method === "GET") {
      return Response.json(this.managedSources({ all: url.searchParams.get("all") === "1" }));
    }

    if (url.pathname === "/sources" && request.method === "POST") {
      const { source } = await request.json();
      if (!source?.id) return Response.json({ error: "来源配置不完整" }, { status: 400 });
      const exists = this.ctx.storage.sql.exec("SELECT id FROM sources WHERE id = ?", source.id).toArray()[0];
      if (exists) return Response.json({ error: "来源编号已存在" }, { status: 409 });
      const now = new Date().toISOString();
      this.ctx.storage.sql.exec(
        "INSERT INTO sources(id, config_json, built_in, customized, enabled, deleted_at, created_at, updated_at) VALUES (?, ?, 0, 1, 1, NULL, ?, ?)",
        source.id,
        JSON.stringify(source),
        now,
        now
      );
      this.recordSourceRevision(source.id, "create", source);
      const version = this.bumpSourceVersion();
      return Response.json({ ok: true, item: this.rowToSource(this.ctx.storage.sql.exec("SELECT * FROM sources WHERE id = ?", source.id).one()), version }, { status: 201 });
    }

    const sourceMatch = url.pathname.match(/^\/sources\/([^/]+)$/);
    if (sourceMatch) {
      const id = decodeURIComponent(sourceMatch[1]);
      const row = this.ctx.storage.sql.exec("SELECT * FROM sources WHERE id = ?", id).toArray()[0];
      if (!row) return Response.json({ error: "来源不存在" }, { status: 404 });
      if (request.method === "GET") return Response.json({ item: this.rowToSource(row), version: this.sourceVersion() });
      if (request.method === "PUT") {
        const body = await request.json();
        const source = body.source;
        const now = new Date().toISOString();
        this.ctx.storage.sql.exec(
          "UPDATE sources SET config_json = ?, customized = 1, enabled = ?, deleted_at = NULL, updated_at = ? WHERE id = ?",
          JSON.stringify(source),
          body.enabled === false ? 0 : 1,
          now,
          id
        );
        this.recordSourceRevision(id, "update", source);
        const version = this.bumpSourceVersion();
        return Response.json({ ok: true, item: this.rowToSource(this.ctx.storage.sql.exec("SELECT * FROM sources WHERE id = ?", id).one()), version });
      }
      if (request.method === "DELETE") {
        const now = new Date().toISOString();
        if (row.built_in) {
          this.ctx.storage.sql.exec("UPDATE sources SET enabled = 0, updated_at = ? WHERE id = ?", now, id);
          this.recordSourceRevision(id, "disable", this.rowToSource(row));
        } else {
          this.ctx.storage.sql.exec("UPDATE sources SET enabled = 0, deleted_at = ?, updated_at = ? WHERE id = ?", now, now, id);
          this.recordSourceRevision(id, "delete", this.rowToSource(row));
        }
        const version = this.bumpSourceVersion();
        return Response.json({ ok: true, action: row.built_in ? "disabled" : "deleted", version });
      }
    }

    const sourceActionMatch = url.pathname.match(/^\/sources\/([^/]+)\/(enable|disable|restore|reset)$/);
    if (sourceActionMatch && request.method === "POST") {
      const id = decodeURIComponent(sourceActionMatch[1]);
      const action = sourceActionMatch[2];
      const row = this.ctx.storage.sql.exec("SELECT * FROM sources WHERE id = ?", id).toArray()[0];
      if (!row) return Response.json({ error: "来源不存在" }, { status: 404 });
      const now = new Date().toISOString();
      if (action === "reset") {
        const defaultSource = DEFAULT_SOURCES.find((source) => source.id === id);
        if (!row.built_in || !defaultSource) return Response.json({ error: "只有系统默认来源可以恢复默认配置" }, { status: 400 });
        const normalizedDefault = normalizeSourceInput(defaultSource, { id, builtIn: true });
        this.ctx.storage.sql.exec("UPDATE sources SET config_json = ?, customized = 0, enabled = 1, deleted_at = NULL, updated_at = ? WHERE id = ?", JSON.stringify(normalizedDefault), now, id);
        this.recordSourceRevision(id, "reset", normalizedDefault);
      } else if (action === "disable") {
        this.ctx.storage.sql.exec("UPDATE sources SET enabled = 0, updated_at = ? WHERE id = ?", now, id);
        this.recordSourceRevision(id, "disable", this.rowToSource(row));
      } else {
        this.ctx.storage.sql.exec("UPDATE sources SET enabled = 1, deleted_at = NULL, updated_at = ? WHERE id = ?", now, id);
        this.recordSourceRevision(id, action, this.rowToSource(row));
      }
      const version = this.bumpSourceVersion();
      return Response.json({ ok: true, item: this.rowToSource(this.ctx.storage.sql.exec("SELECT * FROM sources WHERE id = ?", id).one()), version });
    }

    const sourceRevisionsMatch = url.pathname.match(/^\/sources\/([^/]+)\/revisions$/);
    if (sourceRevisionsMatch && request.method === "GET") {
      const id = decodeURIComponent(sourceRevisionsMatch[1]);
      const exists = this.ctx.storage.sql.exec("SELECT id FROM sources WHERE id = ?", id).toArray()[0];
      if (!exists) return Response.json({ error: "来源不存在" }, { status: 404 });
      const rows = this.ctx.storage.sql.exec("SELECT revision_id, action, config_json, created_at FROM source_revisions WHERE source_id = ? ORDER BY revision_id DESC LIMIT 30", id).toArray();
      return Response.json({ items: rows.map((revision) => ({
        revisionId: revision.revision_id,
        action: revision.action,
        config: revision.config_json ? JSON.parse(revision.config_json) : null,
        createdAt: revision.created_at
      })) });
    }

    const sourceRollbackMatch = url.pathname.match(/^\/sources\/([^/]+)\/rollback\/(\d+)$/);
    if (sourceRollbackMatch && request.method === "POST") {
      const id = decodeURIComponent(sourceRollbackMatch[1]);
      const row = this.ctx.storage.sql.exec("SELECT * FROM sources WHERE id = ?", id).toArray()[0];
      if (!row) return Response.json({ error: "来源不存在" }, { status: 404 });
      const revision = this.ctx.storage.sql.exec("SELECT config_json FROM source_revisions WHERE source_id = ? AND revision_id = ?", id, Number(sourceRollbackMatch[2])).toArray()[0];
      if (!revision?.config_json) return Response.json({ error: "该历史版本无法恢复" }, { status: 400 });
      let restored;
      try {
        restored = normalizeSourceInput(JSON.parse(revision.config_json), { id, builtIn: Boolean(row.built_in) });
      } catch (error) {
        return Response.json({ error: `历史配置已失效：${error instanceof Error ? error.message : String(error)}` }, { status: 400 });
      }
      const now = new Date().toISOString();
      this.ctx.storage.sql.exec("UPDATE sources SET config_json = ?, customized = 1, enabled = 1, deleted_at = NULL, updated_at = ? WHERE id = ?", JSON.stringify(restored), now, id);
      this.recordSourceRevision(id, `rollback:${sourceRollbackMatch[2]}`, restored);
      const version = this.bumpSourceVersion();
      return Response.json({ ok: true, item: this.rowToSource(this.ctx.storage.sql.exec("SELECT * FROM sources WHERE id = ?", id).one()), version });
    }

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
        this.ctx.storage.sql.exec("INSERT OR REPLACE INTO metadata(key, value) VALUES ('source_config_version', ?)", body.sourceConfigVersion || "unknown");
        this.ctx.storage.sql.exec("INSERT OR REPLACE INTO metadata(key, value) VALUES ('refresh_started_at', ?)", body.startedAt || body.syncedAt || new Date().toISOString());
        this.ctx.storage.sql.exec("INSERT OR REPLACE INTO metadata(key, value) VALUES ('refresh_finished_at', ?)", body.syncedAt || new Date().toISOString());
        const healthEvents = this.recordSourceHealth(body.report || []);
        const delivery = await this.dispatchPushNotifications();
        await this.dispatchAdminHealthAlerts(healthEvents);
        return Response.json({ ok: true, changed, delivery });
      }
      return Response.json({ ok: true, changed });
    }

    if (url.pathname === "/refresh-lease" && request.method === "POST") {
      const now = Date.now();
      const started = this.ctx.storage.sql.exec("SELECT value FROM metadata WHERE key = 'refresh_started_at'").toArray()[0]?.value || null;
      const finished = this.ctx.storage.sql.exec("SELECT value FROM metadata WHERE key = 'refresh_finished_at'").toArray()[0]?.value || null;
      const strategy = this.ctx.storage.sql.exec("SELECT value FROM metadata WHERE key = 'refresh_strategy'").toArray()[0]?.value || null;
      const startedAt = started ? new Date(started).getTime() : 0;
      const finishedAt = finished ? new Date(finished).getTime() : 0;
      const collecting = Boolean(strategy) && startedAt > finishedAt && now - startedAt < REFRESH_LEASE_MS;
      if (collecting) return Response.json({ granted: false, startedAt: started });
      const nextStartedAt = new Date(now).toISOString();
      this.ctx.storage.sql.exec("INSERT OR REPLACE INTO metadata(key, value) VALUES ('refresh_started_at', ?)", nextStartedAt);
      this.ctx.storage.sql.exec("INSERT OR REPLACE INTO metadata(key, value) VALUES ('refresh_strategy', 'bulk')");
      return Response.json({ granted: true, startedAt: nextStartedAt });
    }

    if (url.pathname === "/schedule-refresh" && request.method === "POST") {
      const body = await request.json().catch(() => ({}));
      const now = Date.now();
      const started = this.ctx.storage.sql.exec("SELECT value FROM metadata WHERE key = 'refresh_started_at'").toArray()[0]?.value || null;
      const finished = this.ctx.storage.sql.exec("SELECT value FROM metadata WHERE key = 'refresh_finished_at'").toArray()[0]?.value || null;
      const strategy = this.ctx.storage.sql.exec("SELECT value FROM metadata WHERE key = 'refresh_strategy'").toArray()[0]?.value || null;
      const startedAt = started ? new Date(started).getTime() : 0;
      const finishedAt = finished ? new Date(finished).getTime() : 0;
      const collecting = Boolean(strategy) && startedAt > finishedAt && now - startedAt < REFRESH_LEASE_MS;
      if (collecting) return Response.json({ granted: false, startedAt: started });
      const nextStartedAt = new Date(now).toISOString();
      this.ctx.storage.sql.exec("INSERT OR REPLACE INTO metadata(key, value) VALUES ('refresh_started_at', ?)", nextStartedAt);
      this.ctx.storage.sql.exec("INSERT OR REPLACE INTO metadata(key, value) VALUES ('refresh_strategy', ?)", SOURCE_ALARM_STRATEGY);
      const refreshSources = Array.isArray(body.sources) ? body.sources : this.managedSources().items;
      const refreshConfigVersion = body.sourceConfigVersion || this.sourceVersion();
      this.ctx.storage.sql.exec("INSERT OR REPLACE INTO metadata(key, value) VALUES ('refresh_config_version', ?)", refreshConfigVersion);
      this.ctx.storage.sql.exec("INSERT OR REPLACE INTO metadata(key, value) VALUES ('refresh_sources', ?)", JSON.stringify(refreshSources));
      this.ctx.storage.sql.exec("INSERT OR REPLACE INTO metadata(key, value) VALUES ('pending_report', '[]')");
      this.ctx.storage.sql.exec("INSERT OR REPLACE INTO metadata(key, value) VALUES ('refresh_source_index', '0')");
      if (!refreshSources.some((source) => source.mode !== "portal")) {
        const checkedAt = new Date().toISOString();
        const report = refreshSources.map((source) => ({ sourceId: source.id, source: source.name, status: "portal", ok: true, found: 0, durationMs: 0, checkedAt }));
        this.ctx.storage.sql.exec("INSERT OR REPLACE INTO metadata(key, value) VALUES ('last_report', ?)", JSON.stringify(report));
        this.ctx.storage.sql.exec("INSERT OR REPLACE INTO metadata(key, value) VALUES ('source_config_version', ?)", refreshConfigVersion);
        this.ctx.storage.sql.exec("INSERT OR REPLACE INTO metadata(key, value) VALUES ('refresh_finished_at', ?)", checkedAt);
        this.ctx.storage.sql.exec("DELETE FROM metadata WHERE key IN ('pending_report', 'refresh_source_index', 'refresh_sources')");
        return Response.json({ granted: true, startedAt: nextStartedAt, completed: true });
      }
      await this.ctx.storage.setAlarm(now + 100);
      return Response.json({ granted: true, startedAt: nextStartedAt });
    }

    if (url.pathname === "/health" && request.method === "GET") {
      const sources = this.ctx.storage.sql.exec("SELECT * FROM source_health ORDER BY consecutive_failures DESC, updated_at DESC").toArray().map((row) => ({
        sourceId: row.source_id,
        source: row.source_name,
        consecutiveFailures: Number(row.consecutive_failures) || 0,
        totalFailures: Number(row.total_failures) || 0,
        lastSuccessAt: row.last_success_at,
        lastFailureAt: row.last_failure_at,
        lastError: row.last_error,
        updatedAt: row.updated_at
      }));
      const events = this.ctx.storage.sql.exec("SELECT * FROM health_events ORDER BY created_at DESC LIMIT 30").toArray().map((row) => ({
        eventId: row.event_id,
        sourceId: row.source_id,
        eventType: row.event_type,
        details: JSON.parse(row.details_json),
        createdAt: row.created_at
      }));
      return Response.json({
        summary: {
          healthy: sources.filter((source) => source.consecutiveFailures === 0).length,
          warning: sources.filter((source) => source.consecutiveFailures === 1).length,
          alert: sources.filter((source) => source.consecutiveFailures >= 2).length
        },
        sources,
        events,
        adminPushConfigured: Boolean(this.env.ADMIN_BARK_URL)
      });
    }

    if (url.pathname === "/news" && request.method === "GET") {
      const limit = Math.min(Math.max(Number(url.searchParams.get("limit")) || 50, 1), 200);
      const rows = this.ctx.storage.sql.exec(`
        SELECT articles.*, (SELECT COUNT(*) FROM article_sources mirrors WHERE mirrors.article_id = articles.id) AS mirror_count
        FROM articles
        ORDER BY priority DESC, COALESCE(published_at, fetched_at) DESC
        LIMIT ?
      `, limit).toArray();
      let items = rows.map((row) => this.rowToItem(row));
      const region = url.searchParams.get("region");
      const track = url.searchParams.get("track");
      const type = url.searchParams.get("type");
      const city = url.searchParams.get("city");
      const keyword = url.searchParams.get("keyword")?.toLowerCase();
      if (region) items = items.filter((item) => item.region === region);
      if (track) items = items.filter((item) => item.track === track);
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
      const pendingReport = this.ctx.storage.sql.exec("SELECT value FROM metadata WHERE key = 'pending_report'").toArray();
      const strategy = this.ctx.storage.sql.exec("SELECT value FROM metadata WHERE key = 'refresh_strategy'").toArray()[0]?.value || null;
      const sourceConfigVersion = this.ctx.storage.sql.exec("SELECT value FROM metadata WHERE key = 'source_config_version'").toArray()[0]?.value || null;
      const started = this.ctx.storage.sql.exec("SELECT value FROM metadata WHERE key = 'refresh_started_at'").toArray();
      const finished = this.ctx.storage.sql.exec("SELECT value FROM metadata WHERE key = 'refresh_finished_at'").toArray();
      const refreshStartedAt = started[0]?.value || null;
      const refreshFinishedAt = finished[0]?.value || null;
      const startedTime = refreshStartedAt ? new Date(refreshStartedAt).getTime() : 0;
      const finishedTime = refreshFinishedAt ? new Date(refreshFinishedAt).getTime() : 0;
      return Response.json({
        total,
        regions,
        syncedAt: synced[0]?.value || null,
        collecting: Boolean(strategy) && startedTime > finishedTime && Date.now() - startedTime < REFRESH_LEASE_MS,
        sourceConfigVersion,
        refreshStartedAt,
        refreshFinishedAt,
        lastReport: pendingReport[0]?.value && startedTime > finishedTime
          ? JSON.parse(pendingReport[0].value)
          : report[0]?.value ? JSON.parse(report[0].value) : []
      });
    }

    return Response.json({ error: "Not found" }, { status: 404 });
  }
}
