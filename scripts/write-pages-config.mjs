import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const apiBaseUrl = process.env.WORKER_API_URL?.replace(/\/$/, "");

if (!apiBaseUrl || !/^https:\/\//.test(apiBaseUrl)) {
  throw new Error("请在 GitHub 仓库变量 WORKER_API_URL 中填写 https://...workers.dev 地址");
}

const output = `window.GONGKAO_CONFIG = ${JSON.stringify({ API_BASE_URL: apiBaseUrl }, null, 2)};\n`;
await writeFile(resolve("public/config.js"), output, "utf8");
console.log(`Pages API 地址已写入：${apiBaseUrl}`);
