# 公考雷达

一个可以从 GitHub 自动部署到 Cloudflare Workers + Pages 的公务员、事业单位和重点国企招录资讯聚合站。

- Cloudflare Pages：静态响应式前端
- Cloudflare Worker：资讯 API、每日定时采集、字段提取
- SQLite Durable Object：免手工建库的持久化存储
- GitHub Actions：推送 `main` 后自动测试并部署前后端

> 本项目只聚合公开信息。正式报名前，请始终以公告原文和官方报名系统为准。

## 当前监测范围

- 国家公务员局（国考）
- 上海市公务员局
- 江苏省委组织部
- 浙江省公务员考试录用网
- 甘肃组工网、甘肃人事考试网
- 甘肃省及金昌市、武威市、张掖市事业单位公开招聘入口
- 国家电网有限公司人力资源招聘平台
- 国家烟草专卖局人才招聘平台

来源配置位于 `worker/src/index.js` 的 `SOURCES`。政府网站经常改版或启用反爬策略；接口的 `/api/stats` 会保留最近一次采集报告，方便发现失效来源。

甘肃重点城市资讯会写入 `city` 字段并设置 `priority`，在首页优先展示。前端可用“金昌市 / 武威市 / 张掖市”快捷按钮单独筛选；省级公告中只要正文或标题出现这些城市，也会自动归入对应重点城市。

资讯还会写入 `track` 字段，区分“公务员 / 事业单位 / 国家电网 / 烟草系统”。国家电网和烟草系统属于国企招聘方向，不标记为事业编。

## 一、部署到 Cloudflare

### 1. 推送到 GitHub

在 GitHub 创建空仓库，将本项目提交并推送到 `main` 分支。

### 2. 创建 Cloudflare API Token

在 Cloudflare 控制台进入 **My Profile → API Tokens → Create Token**，使用 **Edit Cloudflare Workers** 模板，并限制到准备部署的账户。

在 GitHub 仓库进入 **Settings → Secrets and variables → Actions**，添加两个 Repository secrets：

| 名称 | 内容 |
| --- | --- |
| `CLOUDFLARE_API_TOKEN` | 刚创建的 API Token |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare Account ID |

### 3. 配置仓库变量

在同一页面的 **Variables** 选项卡添加：

| 名称 | 示例 | 是否必填 |
| --- | --- | --- |
| `PAGES_PROJECT_NAME` | `gongkao-radar` | 否 |

Worker 名称已在 `worker/wrangler.jsonc` 中设为 `gongkao-radar-api`。部署工作流会自动读取 Worker 发布地址并写入 Pages 前端，无需手工配置 `WORKER_API_URL`。

### 4. 运行部署

打开 GitHub 仓库的 **Actions → Deploy to Cloudflare → Run workflow**。工作流会：

1. 运行语法检查和字段提取测试；
2. 部署 Worker 和 SQLite Durable Object；
3. 自动创建（或复用）Pages 项目；
4. 将 Worker 地址写入前端配置并部署 Pages。

此后每次推送 `main` 都会自动重新部署。

### 5. 配置手工刷新密钥（可选）

定时采集无需密钥。只有手工调用 `POST /api/refresh` 才需要配置：

```powershell
npx wrangler secret put ADMIN_TOKEN --config worker/wrangler.jsonc
```

调用方式：

```powershell
curl.exe -X POST "https://gongkao-radar-api.<你的子域>.workers.dev/api/refresh" -H "Authorization: Bearer <ADMIN_TOKEN>"
```

## 二、本地开发

要求 Node.js 20 或更高版本。

```powershell
npm install
Copy-Item public/config.example.js public/config.js
npm run dev:worker
```

另开一个终端，在项目根目录启动任意静态服务器，例如：

```powershell
npx wrangler pages dev public --port 3000
```

然后访问 `http://localhost:3000`。前端默认连接 `http://localhost:8787` 的 Worker；如果 Worker 未启动，会自动进入内置官方样例模式，不会出现空白页。

## 三、来源运行状态

首次打开网页时，如果系统还没有完成过真实采集，Worker 会自动启动一次轻量来源检测：只读取列表页、单次快速探测并尽快生成状态；每日定时任务再执行失败重试并提取最新公告详情。网页“官方来源”区域会显示每个来源的当前状态：检测中、正常、暂无新公告、访问失败或动态平台官方入口。

`GET /api/stats` 会返回 `collecting`、`refreshStartedAt`、`refreshFinishedAt` 和 `lastReport`。首次检测通过 Durable Object 后台闹钟逐个来源执行并增量保存，不依赖网页请求保持连接；系统使用采集租约避免定时任务、首次检测和手工刷新重复运行。单个来源失败不会中断其他来源，失败来源会在下次定时任务中重新检测。

国家电网和烟草招聘平台属于动态招聘系统，当前显示并核验官方入口，不把它们误报为可自动解析的静态公告来源。

## 四、定时更新机制

`worker/wrangler.jsonc` 中的 Cron 为：

```text
15 23 * * *
```

Cloudflare Cron 使用 UTC，因此任务会在北京时间每天 07:15 执行。采集器只访问已配置的官方列表页；每个来源最多收录 5 条公告，并只深入解析最新 1 个详情页，以控制请求量和降低对官方站点的压力。

对外接口：

| 接口 | 用途 |
| --- | --- |
| `GET /api/health` | 健康检查 |
| `GET /api/news?limit=100` | 资讯列表 |
| `GET /api/sources` | 官方来源 |
| `GET /api/stats` | 数量、同步时间和采集报告 |
| `GET /api/calendar` | 已提取的报名及考试节点 |
| `POST /api/refresh` | 使用管理员密钥手工刷新 |

## 五、生产环境建议

1. 把 `ALLOWED_ORIGINS` 从 `*` 改成你的 Pages 正式域名；多个域名以英文逗号分隔。
2. 定期查看 `/api/stats` 的 `lastReport`，发现来源失效时更新 `SOURCES`。
3. 不要提高抓取频率；遵守各官方站点的 robots、访问频控和使用条款。
4. 对报名时间、招录人数等关键字段保留“待公布”状态，不要用往年日期自动补全。

## 六、验证

```powershell
npm run check
```

该命令会检查前后端 JavaScript 语法，并运行公告解析单元测试。
