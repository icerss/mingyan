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

export let apiUrls = {
  "2021_ranking": "https://api.erss.club/api/v2/2021-ranking",
  star_v2: "https://api.erss.club/api/v2/star",
  star_v3: "https://api.erss.club/api/v3/star",
  submit: "https://api.erss.club/api/contribute",
  comment: "https://api.erss.club/api/comment",
  showfrom: "https://api.erss.club/api/info",
  ip: "https://api.erss.club/api/ip",
  update: "https://api.erss.club/api/getupdate",
  ranking_history: "https://api.erss.club/api/get-ranking-history",
  donate_list: "https://api.erss.club/api/get-donate-info",
  image: "https://api.erss.club/api/image",
};

String.prototype.trim = function() {
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
export let MingyanLOGO = "https://static-cdn.erssmy.com/public/web-logo.png";

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
