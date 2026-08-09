const configuredBase = window.GONGKAO_CONFIG?.API_BASE_URL?.replace(/\/$/, "");
const API_BASE = configuredBase || (location.hostname === "localhost" ? "http://localhost:8787" : location.origin);
const state = {
  token: sessionStorage.getItem("gongkao-admin-token") || "",
  sources: [],
  reports: [],
  health: null,
  ai: null,
  editingId: null,
  busy: false
};

const els = {
  authPanel: document.querySelector("#auth-panel"),
  authForm: document.querySelector("#auth-form"),
  authMessage: document.querySelector("#auth-message"),
  token: document.querySelector("#admin-token"),
  dashboard: document.querySelector("#source-dashboard"),
  status: document.querySelector("#admin-status"),
  dot: document.querySelector("#admin-dot"),
  list: document.querySelector("#managed-source-list"),
  search: document.querySelector("#source-search"),
  dialog: document.querySelector("#source-dialog"),
  form: document.querySelector("#source-form"),
  dialogTitle: document.querySelector("#dialog-title"),
  endpointList: document.querySelector("#endpoint-list"),
  formMessage: document.querySelector("#source-form-message"),
  testPanel: document.querySelector("#test-panel"),
  testTitle: document.querySelector("#test-title"),
  testDuration: document.querySelector("#test-duration"),
  testSummary: document.querySelector("#test-summary"),
  testPreview: document.querySelector("#test-preview"),
  historyDialog: document.querySelector("#history-dialog"),
  historyTitle: document.querySelector("#history-title"),
  historyList: document.querySelector("#history-list"),
  healthSummary: document.querySelector("#health-summary"),
  healthEvents: document.querySelector("#health-events"),
  aiSummary: document.querySelector("#ai-summary"),
  aiList: document.querySelector("#ai-analysis-list"),
  runAiButton: document.querySelector("#run-ai-monitor"),
  saveButton: document.querySelector("#save-source"),
  testButton: document.querySelector("#test-source"),
  toast: document.querySelector("#toast")
};

function escapeHtml(value = "") {
  return String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
}

function safeUrl(value) {
  try {
    const url = new URL(value, location.origin);
    return ["http:", "https:"].includes(url.protocol) ? escapeHtml(url.href) : "#";
  } catch {
    return "#";
  }
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => els.toast.classList.remove("show"), 3000);
}

async function request(path, options = {}) {
  const headers = { Accept: "application/json", ...(options.body ? { "Content-Type": "application/json" } : {}), ...(options.headers || {}) };
  if (state.token) headers.Authorization = `Bearer ${state.token}`;
  const response = await fetch(`${API_BASE}${path}`, { ...options, headers });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const error = new Error(data.error || `请求失败（${response.status}）`);
    error.status = response.status;
    error.data = data;
    throw error;
  }
  return data;
}

function reportMap() {
  return new Map(state.reports.map((report) => [report.sourceId, report]));
}

function reportLabel(source, report) {
  if (source.deletedAt) return { label: "已删除，可恢复", tone: "error" };
  if (!source.enabled) return { label: "已停用，不参与采集", tone: "" };
  if (!report) return { label: "配置已更新，等待检测", tone: "" };
  if (!report.ok) return { label: `访问失败：${report.error || "等待系统重试"}`, tone: "error" };
  if (report.status === "portal") return { label: "官方入口模式", tone: "ok" };
  if (report.status === "dynamic") return { label: "官网可访问，公告列表为动态页面", tone: "ok" };
  if (report.found > 0) return { label: `运行正常，最近收录 ${report.found} 条${report.retryCount ? ` · 重试 ${report.retryCount} 次后恢复` : ""}`, tone: "ok" };
  return { label: "官网可访问，当前无匹配公告", tone: "ok" };
}

function renderSources() {
  const keyword = els.search.value.trim().toLowerCase();
  const reports = reportMap();
  const filtered = state.sources.filter((source) => `${source.name} ${source.region} ${source.city || ""} ${source.track}`.toLowerCase().includes(keyword));
  if (!filtered.length) {
    els.list.innerHTML = `<div class="empty-admin">${keyword ? "没有匹配的来源" : "还没有来源，请先新增"}</div>`;
  } else {
    els.list.innerHTML = filtered.map((source) => {
      const health = reportLabel(source, reports.get(source.id));
      const classes = ["managed-source", !source.enabled ? "disabled" : "", source.deletedAt ? "deleted" : ""].filter(Boolean).join(" ");
      const endpoints = source.endpoints?.length || 1;
      const actions = source.deletedAt
        ? `<button class="small-button" data-action="restore" data-id="${escapeHtml(source.id)}">恢复</button>`
        : `<button class="small-button" data-action="edit" data-id="${escapeHtml(source.id)}">编辑</button>
           <button class="small-button" data-action="history" data-id="${escapeHtml(source.id)}">历史</button>
           <button class="small-button" data-action="${source.enabled ? "disable" : "enable"}" data-id="${escapeHtml(source.id)}">${source.enabled ? "停用" : "启用"}</button>
           ${source.builtIn && source.customized ? `<button class="small-button" data-action="reset" data-id="${escapeHtml(source.id)}">恢复默认</button>` : ""}
           <button class="small-button danger" data-action="delete" data-id="${escapeHtml(source.id)}">${source.builtIn ? "停用" : "删除"}</button>`;
      return `<article class="${classes}">
        <span class="source-badge">${escapeHtml(source.badge || source.name.slice(0, 1))}</span>
        <div class="managed-copy">
          <div class="managed-title"><h3>${escapeHtml(source.name)}</h3><span class="source-kind ${source.builtIn ? "" : "custom"}">${source.builtIn ? "系统来源" : "手动添加"}</span></div>
          <div class="managed-meta"><span>${escapeHtml(source.city || source.region)}</span><span>${escapeHtml(source.track)}</span><span>${source.mode === "portal" ? "仅展示入口" : `自动采集 · ${endpoints} 个入口`}</span></div>
          <div class="managed-health ${health.tone}">${escapeHtml(health.label)}</div>
        </div>
        <div class="managed-actions">${actions}</div>
      </article>`;
    }).join("");
  }
  const active = state.sources.filter((source) => source.enabled && !source.deletedAt).length;
  const custom = state.sources.filter((source) => !source.builtIn && !source.deletedAt).length;
  const errors = state.sources.filter((source) => reports.get(source.id) && !reports.get(source.id).ok).length;
  document.querySelector("#metric-total").textContent = state.sources.filter((source) => !source.deletedAt).length;
  document.querySelector("#metric-active").textContent = active;
  document.querySelector("#metric-custom").textContent = custom;
  document.querySelector("#metric-errors").textContent = errors;
}

function renderHealth() {
  const health = state.health;
  if (!health) return;
  const summary = health.summary || {};
  els.healthSummary.textContent = `${summary.healthy || 0} 个正常 · ${summary.warning || 0} 个首次失败 · ${summary.alert || 0} 个连续失败${health.adminPushConfigured ? " · 管理员 Bark 告警已启用" : ""}`;
  const labels = { failure: "首次失败", alert: "连续失败告警", recovered: "采集已恢复" };
  els.healthEvents.innerHTML = health.events?.length ? health.events.slice(0, 6).map((event) => {
    const detail = event.details || {};
    return `<article class="health-event ${escapeHtml(event.eventType)}"><strong>${escapeHtml(detail.source || event.sourceId)} · ${escapeHtml(labels[event.eventType] || event.eventType)}</strong><span>${escapeHtml(new Date(event.createdAt).toLocaleString("zh-CN"))}${detail.error ? ` · ${escapeHtml(detail.error)}` : ""}</span></article>`;
  }).join("") : '<div class="health-empty">暂无失败记录</div>';
}

function renderAiMonitor() {
  const ai = state.ai;
  if (!ai) return;
  const completed = (ai.counts || []).filter((item) => item.status === "complete").reduce((sum, item) => sum + Number(item.count || 0), 0);
  const important = (ai.counts || []).filter((item) => item.status === "complete" && ["high", "urgent"].includes(item.priority)).reduce((sum, item) => sum + Number(item.count || 0), 0);
  const lastRun = ai.runs?.[0];
  els.aiSummary.textContent = ai.enabled
    ? `${ai.provider === "openai" ? "OpenAI" : "Workers AI"} · 已分析 ${completed} 条 · 重点 ${important} 条${lastRun ? ` · 最近运行 ${new Date(lastRun.startedAt).toLocaleString("zh-CN")}` : ""}`
    : "AI 服务尚未启用";
  els.runAiButton.disabled = !ai.enabled;
  els.aiList.innerHTML = ai.analyses?.length ? ai.analyses.slice(0, 8).map((item) => {
    const analysis = item.analysis || {};
    const priorityLabel = { low: "一般", medium: "关注", high: "重点", urgent: "紧急" }[analysis.priority] || "已分析";
    return `<article class="ai-analysis-item ${escapeHtml(analysis.priority)}"><div class="ai-score"><strong>${escapeHtml(analysis.score ?? "-")}</strong><span>${escapeHtml(priorityLabel)}</span></div><div><a href="${safeUrl(item.articleUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.title)}</a><p>${escapeHtml(analysis.summary || "暂无摘要")}</p><small>${escapeHtml(item.city || item.region || "未知地区")} · ${escapeHtml(item.track || "未知分类")} · 置信度 ${Math.round(Number(analysis.confidence || 0) * 100)}%</small></div></article>`;
  }).join("") : '<div class="health-empty">等待首次 AI 分析</div>';
}

async function loadDashboard() {
  const [sourceData, stats, health, ai] = await Promise.all([request("/api/admin/sources"), request("/api/stats"), request("/api/admin/health"), request("/api/admin/ai")]);
  state.sources = sourceData.items || [];
  state.reports = stats.lastReport || [];
  state.health = health;
  state.ai = ai;
  els.authPanel.hidden = true;
  els.dashboard.hidden = false;
  els.status.textContent = "管理权限已验证";
  els.dot.className = "status-dot ready";
  renderSources();
  renderHealth();
  renderAiMonitor();
}

function endpointTemplate(endpoint = {}, index = 0) {
  const url = endpoint.urlTemplate || endpoint.url || "";
  return `<div class="endpoint-row" data-endpoint>
    <span class="endpoint-index">${index + 1}</span>
    <div class="endpoint-fields">
      <input data-field="label" maxlength="60" value="${escapeHtml(endpoint.label || (index ? `备用入口 ${index}` : "主入口"))}" aria-label="入口名称" placeholder="入口名称" />
      <input data-field="url" maxlength="500" value="${escapeHtml(url)}" aria-label="入口地址" placeholder="https://example.gov.cn/list/" />
    </div>
    <div class="endpoint-options">
      <input data-field="titlePattern" maxlength="400" value="${escapeHtml(endpoint.titlePattern || "")}" aria-label="此入口的标题规则" placeholder="单独标题规则（可留空）" />
      <input data-field="linkPattern" maxlength="400" value="${escapeHtml(endpoint.linkPattern || "")}" aria-label="此入口的链接规则" placeholder="单独链接规则（可留空）" />
      <label><input data-field="dynamicPortal" type="checkbox" ${endpoint.dynamicPortal ? "checked" : ""} /> 动态页面</label>
    </div>
    <div class="endpoint-actions">
      <button type="button" data-move="up" aria-label="上移">↑</button><button type="button" data-move="down" aria-label="下移">↓</button><button type="button" data-move="remove" aria-label="删除入口">×</button>
    </div>
  </div>`;
}

function renumberEndpoints() {
  [...els.endpointList.querySelectorAll("[data-endpoint]")].forEach((row, index) => { row.querySelector(".endpoint-index").textContent = index + 1; });
}

function addEndpoint(endpoint = {}) {
  els.endpointList.insertAdjacentHTML("beforeend", endpointTemplate(endpoint, els.endpointList.children.length));
}

function openEditor(source = null) {
  state.editingId = source?.id || null;
  els.form.reset();
  els.dialogTitle.textContent = source ? `编辑：${source.name}` : "新增来源";
  els.form.elements.name.value = source?.name || "";
  els.form.elements.region.value = source?.region || "";
  els.form.elements.city.value = source?.city || "";
  els.form.elements.url.value = source?.url || "";
  els.form.elements.track.value = source?.track || "公务员";
  els.form.elements.mode.value = source?.mode === "portal" ? "portal" : "auto";
  els.form.elements.badge.value = source?.badge || "";
  els.form.elements.official.checked = source?.official !== false;
  els.form.elements.titlePattern.value = source?.adapter?.titlePattern || "";
  els.form.elements.linkPattern.value = source?.adapter?.linkPattern || "";
  els.endpointList.innerHTML = "";
  const endpoints = source?.endpoints?.length ? source.endpoints : [{ url: source?.url || "", label: "主入口" }];
  endpoints.forEach(addEndpoint);
  els.testPanel.hidden = true;
  els.formMessage.textContent = "";
  els.dialog.showModal();
}

function formSource() {
  const data = new FormData(els.form);
  const mainUrl = String(data.get("url") || "").trim();
  const endpoints = [...els.endpointList.querySelectorAll("[data-endpoint]")].map((row, index) => {
    const url = row.querySelector('[data-field="url"]').value.trim() || (index === 0 ? mainUrl : "");
    const endpoint = {
      label: row.querySelector('[data-field="label"]').value.trim(),
      titlePattern: row.querySelector('[data-field="titlePattern"]').value.trim(),
      linkPattern: row.querySelector('[data-field="linkPattern"]').value.trim(),
      dynamicPortal: row.querySelector('[data-field="dynamicPortal"]').checked
    };
    if (url.includes("{year}")) {
      endpoint.urlTemplate = url;
      endpoint.yearOffsets = [1, 0];
    } else endpoint.url = url;
    return endpoint;
  });
  return {
    name: String(data.get("name") || "").trim(),
    region: String(data.get("region") || "").trim(),
    city: String(data.get("city") || "").trim(),
    url: mainUrl,
    track: String(data.get("track") || "公务员"),
    mode: data.get("mode") === "portal" ? "portal" : undefined,
    badge: String(data.get("badge") || "").trim(),
    official: data.get("official") === "on",
    adapter: { titlePattern: String(data.get("titlePattern") || "").trim(), linkPattern: String(data.get("linkPattern") || "").trim() },
    endpoints
  };
}

function setBusy(busy) {
  state.busy = busy;
  els.testButton.disabled = busy;
  els.saveButton.disabled = busy;
  els.testButton.textContent = busy ? "正在检测…" : "测试并预览";
  els.saveButton.textContent = busy ? "请稍候…" : "测试后保存";
}

function renderTest(result, failed = false) {
  els.testPanel.hidden = false;
  els.testPanel.classList.toggle("failed", failed);
  els.testTitle.textContent = failed ? "检测未通过" : "检测通过";
  els.testDuration.textContent = result.durationMs ? `${(result.durationMs / 1000).toFixed(1)} 秒` : "";
  if (failed) {
    els.testSummary.textContent = result.error || "官网暂时无法访问，请检查地址或备用入口。";
    els.testPreview.innerHTML = "";
    return;
  }
  const modeLabel = result.mode === "portal" ? "官方入口可访问" : result.mode === "dynamic" ? "动态官网可访问" : `识别到 ${result.candidates || 0} 条公告`;
  els.testSummary.textContent = `${modeLabel}${result.fallbackUsed ? `，已切换到${result.endpointLabel || "备用入口"}` : ""}。`;
  els.testPreview.innerHTML = result.preview?.length
    ? result.preview.map((item) => `<div class="preview-item">${escapeHtml(item.title)}</div>`).join("")
    : `<div class="preview-item">当前没有匹配公告；来源仍可保存并继续定时检测。</div>`;
}

async function testCurrentSource() {
  if (!els.form.reportValidity()) return null;
  const source = formSource();
  if (!source.endpoints.length || source.endpoints.some((endpoint) => !(endpoint.url || endpoint.urlTemplate))) {
    els.formMessage.textContent = "请为每个官网入口填写地址。";
    return null;
  }
  setBusy(true);
  els.formMessage.textContent = "";
  try {
    const result = await request("/api/admin/sources/test", { method: "POST", body: JSON.stringify(source) });
    renderTest(result, false);
    return result;
  } catch (error) {
    renderTest(error.data || { error: error.message }, true);
    els.formMessage.textContent = "检测失败，暂未保存。你可以修正地址或增加备用入口后重试。";
    return null;
  } finally {
    setBusy(false);
  }
}

async function saveSource() {
  const tested = await testCurrentSource();
  if (!tested) return;
  setBusy(true);
  try {
    const source = formSource();
    await request(state.editingId ? `/api/admin/sources/${encodeURIComponent(state.editingId)}` : "/api/admin/sources", {
      method: state.editingId ? "PUT" : "POST",
      body: JSON.stringify(source)
    });
    els.dialog.close();
    showToast(state.editingId ? "来源已更新，系统将重新检测" : "来源已添加，系统将开始检测");
    await loadDashboard();
  } catch (error) {
    els.formMessage.textContent = error.message;
  } finally {
    setBusy(false);
  }
}

async function sourceAction(id, action) {
  const source = state.sources.find((item) => item.id === id);
  if (!source) return;
  if (action === "edit") return openEditor(source);
  if (action === "history") return openHistory(source);
  if (action === "delete" && !confirm(source.builtIn ? `停用“${source.name}”？它不会被永久删除。` : `删除“${source.name}”？30 天内仍可从本页恢复。`)) return;
  if (action === "reset" && !confirm(`将“${source.name}”恢复为系统默认配置？手动修改将被覆盖。`)) return;
  try {
    if (action === "delete") await request(`/api/admin/sources/${encodeURIComponent(id)}`, { method: "DELETE" });
    else await request(`/api/admin/sources/${encodeURIComponent(id)}/${action}`, { method: "POST" });
    showToast({ enable: "来源已启用", disable: "来源已停用", restore: "来源已恢复", reset: "已恢复系统默认配置", delete: source.builtIn ? "系统来源已停用" : "来源已软删除" }[action]);
    await loadDashboard();
  } catch (error) {
    showToast(error.message);
  }
}

async function openHistory(source) {
  els.historyTitle.textContent = `${source.name} · 修改历史`;
  els.historyList.innerHTML = '<div class="empty-admin">正在读取历史版本…</div>';
  els.historyDialog.showModal();
  try {
    const data = await request(`/api/admin/sources/${encodeURIComponent(source.id)}/revisions`);
    const actionLabels = { create: "创建来源", update: "修改配置", seed: "写入系统默认", "seed-update": "更新系统默认", disable: "停用来源", enable: "启用来源", restore: "恢复来源", reset: "恢复系统默认", delete: "删除来源" };
    els.historyList.innerHTML = data.items?.length ? data.items.map((revision, index) => {
      const action = revision.action.startsWith("rollback:") ? "回滚历史版本" : actionLabels[revision.action] || revision.action;
      const name = revision.config?.name || source.name;
      const endpoints = revision.config?.endpoints?.length || 0;
      return `<article class="history-item"><div><strong>${escapeHtml(action)}</strong><span>${escapeHtml(new Date(revision.createdAt).toLocaleString("zh-CN"))} · ${escapeHtml(name)}${endpoints ? ` · ${endpoints} 个入口` : ""}</span></div>${revision.config && index > 0 ? `<button class="small-button" data-rollback="${revision.revisionId}" data-id="${escapeHtml(source.id)}">恢复此版本</button>` : ""}</article>`;
    }).join("") : '<div class="empty-admin">暂无历史版本</div>';
  } catch (error) {
    els.historyList.innerHTML = `<div class="empty-admin">${escapeHtml(error.message)}</div>`;
  }
}

els.authForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  state.token = els.token.value.trim();
  els.authMessage.textContent = "正在验证…";
  try {
    await loadDashboard();
    sessionStorage.setItem("gongkao-admin-token", state.token);
    els.authMessage.textContent = "";
  } catch (error) {
    state.token = "";
    sessionStorage.removeItem("gongkao-admin-token");
    els.authMessage.textContent = error.status === 503 ? "管理密钥尚未在服务器中配置，请先配置 ADMIN_TOKEN。" : error.message;
  }
});

document.querySelector("#add-source").addEventListener("click", () => openEditor());
document.querySelector("#reload-sources").addEventListener("click", () => loadDashboard().then(() => showToast("来源状态已刷新")).catch((error) => showToast(error.message)));
document.querySelector("#close-dialog").addEventListener("click", () => els.dialog.close());
document.querySelector("#close-history").addEventListener("click", () => els.historyDialog.close());
document.querySelector("#add-endpoint").addEventListener("click", () => addEndpoint());
els.search.addEventListener("input", renderSources);
els.list.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (button) sourceAction(button.dataset.id, button.dataset.action);
});
els.endpointList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-move]");
  if (!button) return;
  const row = button.closest("[data-endpoint]");
  if (button.dataset.move === "remove") {
    if (els.endpointList.children.length > 1) row.remove();
    else showToast("至少保留一个官网入口");
  } else if (button.dataset.move === "up" && row.previousElementSibling) row.parentNode.insertBefore(row, row.previousElementSibling);
  else if (button.dataset.move === "down" && row.nextElementSibling) row.parentNode.insertBefore(row.nextElementSibling, row);
  renumberEndpoints();
});
els.historyList.addEventListener("click", async (event) => {
  const button = event.target.closest("button[data-rollback]");
  if (!button || !confirm("恢复到这个历史版本？当前配置仍会保留在历史记录中。")) return;
  try {
    await request(`/api/admin/sources/${encodeURIComponent(button.dataset.id)}/rollback/${button.dataset.rollback}`, { method: "POST" });
    els.historyDialog.close();
    showToast("历史版本已恢复，系统将重新检测");
    await loadDashboard();
  } catch (error) {
    showToast(error.message);
  }
});
els.testButton.addEventListener("click", testCurrentSource);
els.form.addEventListener("submit", (event) => { event.preventDefault(); if (!state.busy) saveSource(); });
els.runAiButton.addEventListener("click", async () => {
  if (els.runAiButton.disabled) return;
  els.runAiButton.disabled = true;
  els.runAiButton.textContent = "AI 正在分析…";
  try {
    const result = await request("/api/admin/ai/run", { method: "POST" });
    showToast(result.busy ? "已有 AI 监控任务正在运行" : `AI 监控完成：分析 ${result.analyzed} 条${result.failed ? `，失败 ${result.failed} 条` : ""}`);
    await loadDashboard();
  } catch (error) {
    showToast(error.message);
  } finally {
    els.runAiButton.textContent = "立即运行 AI 监控";
    els.runAiButton.disabled = !state.ai?.enabled;
  }
});

if (state.token) {
  els.token.value = state.token;
  loadDashboard().catch(() => {
    state.token = "";
    sessionStorage.removeItem("gongkao-admin-token");
    els.authPanel.hidden = false;
  });
}
