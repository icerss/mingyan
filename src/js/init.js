/**
 * 名言主配置
 */
let defaultCfg = {
  specifyId: null,
  isAutoShowMingyan: true,
  isInsertBaidu: true,
  isInsertAegis: true,
  isShowError: true,
  isDebugLog: true,
};
window["my_cfg"] = window["my_cfg"] || {};
for (let key in defaultCfg) {
  if (!window["my_cfg"][key]) window["my_cfg"][key] = defaultCfg[key];
}
export function getConfig(key) {
  // console.log("getConfig：", { key, value: window["my_cfg"][key] });
  return window["my_cfg"][key] || undefined;
}

/* 常量 */
export let picBaseUrl = "https://cdn.erssmy.com/image"; // 图片cdn链接

let apiUrlBase = "https://api.xmsyyxx.com/api";
export let apiUrls = {
  "2022_ranking": `${apiUrlBase}/v2/2022-ranking`,
  star_v2: `${apiUrlBase}/v2/star`,
  star_v3: `${apiUrlBase}/v3/star`,
  submit: `${apiUrlBase}/contribute`,
  comment: `${apiUrlBase}/comment`,
  showfrom: `${apiUrlBase}/info`,
  ip: `${apiUrlBase}/ip`,
  update: `${apiUrlBase}/getupdate`,
  ranking_history: `${apiUrlBase}/get-ranking-history`,
  donate_list: `${apiUrlBase}/get-donate-info`,
  image: `${apiUrlBase}/image`,
  twikoo: `${apiUrlBase}/twikoo`,
  performance_report: `${apiUrlBase}/report/web`,
  announce: `https://api.erssmy.com/api/getannounce`,
};

String.prototype.trim = function () {
  return this.replace(/(^\s*)|(\s*$)/g, "");
};

export let lazypic = "./src/loading.svg"; // 懒加载图片地址

export let normalPostHeader = {
  method: "POST",
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
  },
};

export let reCaptchaKey = "6LdOb_gaAAAAAAIQpvSd_6a5yjeneoVlvM159zwH";
export let mtCaptchaKey = "MTPublic-hOK4QMED5";
export let MingyanLOGO =
  "https://s-sh-1943-mingyan-static.oss.dogecdn.com/image/public/web-logo.png";
export let MingyanLogoBase64 = `data:image/png;base64,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`;

export function doConsole() {
  // 控制台彩蛋
  let purple = "font-weight: 900;color: #9b4dca;font-size: 15px";
  let yellow = "font-weight: 900;color: #ffb700;font-size: 15px";
  console.log(
    "\n" +
      "%c诗曰：                  %c________\n%c" +
      "  王颢维尼熊猫，        %c| ERSS |\n%c" +
      "  老杜金门菜刀，        %c| 名言 |\n%c" +
      "  老王还在抠脚。        %c|______|\n%c" +
      "  三天之内，\n" +
      "  抠出一根面条。\n" +
      "      ————— 天净沙·梗" +
      "\n",
    purple,
    yellow,
    purple,
    yellow,
    purple,
    yellow,
    purple,
    yellow,
    purple
  );
}

export let loadingImg =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7IGRpc3BsYXk6IGJsb2NrOyBzaGFwZS1yZW5kZXJpbmc6IGF1dG87IiB3aWR0aD0iMjAwcHgiIGhlaWdodD0iMjAwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOWI0ZGNhIiBzdHJva2Utd2lkdGg9IjgiIHN0cm9rZS1kYXNoYXJyYXk9IjQyLjc2NDgyMTM3MDQ0MjcxIDQyLjc2NDgyMTM3MDQ0MjcxIiBkPSJNMjQuMyAzMEMxMS40IDMwIDUgNDMuMyA1IDUwczYuNCAyMCAxOS4zIDIwYzE5LjMgMCAzMi4xLTQwIDUxLjQtNDAgQzg4LjYgMzAgOTUgNDMuMyA5NSA1MHMtNi40IDIwLTE5LjMgMjBDNTYuNCA3MCA0My42IDMwIDI0LjMgMzB6IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0eWxlPSJ0cmFuc2Zvcm06c2NhbGUoMC44KTt0cmFuc2Zvcm0tb3JpZ2luOjUwcHggNTBweCI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ic3Ryb2tlLWRhc2hvZmZzZXQiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjFzIiBrZXlUaW1lcz0iMDsxIiB2YWx1ZXM9IjA7MjU2LjU4ODkyODIyMjY1NjI1Ij48L2FuaW1hdGU+PC9wYXRoPg0KPCEtLSBbbGRpb10gZ2VuZXJhdGVkIGJ5IGh0dHBzOi8vbG9hZGluZy5pby8gLS0+PC9zdmc+";
