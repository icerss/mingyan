const puppeteer = require("puppeteer");
const { writeFile, rmdir, mkdir } = require("fs").promises;
const path = require("path");
const cheerio = require("cheerio");
const mainInfo = require("debug")("info:main");
const writeInfo = require("debug")("info:write");
const axios = require("axios");
const outputDir = "../dist"; // "../../mingyan-page/public";
const { mingyan } = require("../src/js/rawMingyan");

let formatMingyan = function(input) {
  let _my = "";
  if (String(Number(input)) === "NaN") {
    _my = input;
  } else {
    _my = mingyan[input];
  }
  let teacher = _my.split("：")[0];
  let text =
    _my.split("：")[1] +
    (_my.split("：")[2] ? "：" : "") +
    (_my.split("：")[2] || "");
  return { teacher, text };
};

let findMingyan = function(text) {
  for (let i in mingyan) {
    if (mingyan[i] === text) return i;
  }
  return 0;
};

(async () => {
  // try {
  //   await rmdir(path.resolve(__dirname, outputDir), { recursive: true });
  // } catch {}
  // await mkdir(path.resolve(__dirname, outputDir));
  mainInfo("开始处理……");
  mainInfo("正在获取名言列表");
  let res = await axios.get("https://api.erss.club/api/uid?token=xhemj-public");
  let mingyanList = res.data.data;
  mainInfo("获取名言列表成功");
  const browser = await puppeteer.launch({
    headless: true,
  });
  mainInfo("浏览器打开成功");
  const page = await browser.newPage();
  await page.goto("http://localhost:5000");
  mainInfo("等待页面加载");
  await page.waitForSelector(".my--mingyan-raw");
  const tempFile = await page.evaluate(() => {
    return document.documentElement.innerHTML;
  });
  await browser.close();
  mainInfo("开始准备写入文件");
  const $ = cheerio.load(tempFile);

  for (let item of mingyanList) {
    await writeMingyanTemp(
      $,
      formatMingyan(item.text).teacher,
      formatMingyan(item.text).text,
      item.rid
    );
  }

  mainInfo("完成");
})();

async function writeMingyanTemp($, name, my, rid) {
  $("meta[name=description]").attr("content", `${name}曾经说过：${my}`);
  $(".my--mingyan-raw").text(my);
  $(".my--mingyan-name").text(name);
  const INNER_CSS = /<style (type="text\/css")?>(.*?)<\/style>/gi;
  let html = $.html().replace(INNER_CSS, "");
  html = html.replace(/      /g, "").replace(/\n/g, "");
  html = html.replace(
    /\/\* ::CONFIG:: \*\//g,
    `window["my_cfg"].specifyId = ${findMingyan(name + "：" + my)};`
  );
  await writeFile(
    path.resolve(__dirname, `${outputDir}/${rid}.html`),
    html,
    "utf-8"
  );
  writeInfo("写入成功 ", { name, my });
}
