import test from "node:test";
import assert from "node:assert/strict";
import { classifyType, detectCity, extractFields, normalizeDate, parseListing, stripHtml } from "../worker/src/index.js";

test("stripHtml removes markup and decodes common entities", () => {
  assert.equal(stripHtml("<p>招录&nbsp;<b>100</b>人 &amp; 报名</p>"), "招录 100 人 & 报名");
});

test("classifyType identifies common notice categories", () => {
  assert.equal(classifyType("2027年度考试录用公务员报名公告"), "报名提醒");
  assert.equal(classifyType("公务员资格复审通知"), "资格审查");
  assert.equal(classifyType("公务员公共科目笔试安排"), "考试安排");
  assert.equal(classifyType("考试录用公务员公告"), "招考公告");
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
