/**
 * 名言主配置
 */
let defaultCfg = {
  isSpecifyMingyanId: true,
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

/**
 * 界面元素定义
 */
export let $main = ".my--main";
export let $search = ".my--search";
export let $page = ".my--page";
export let $footer = ".my--footer-html";
export let $myInfo = ".my--mingyan-info";

/* 常量 */
export let picBaseUrl = "https://cdn.erssmy.com/image"; // 图片cdn链接

export let apiUrls = {
  "2021_ranking": "https://api.erss.club/api/v2/2021-ranking",
  star: "https://api.erss.club/api/star",
  star_v2: "https://api.erss.club/api/v2/star",
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
export let MingyanLOGO =
  "https://cdn.erssmy.com/image/2021/05/23/ldzxMt9PYQ3LNyU.png";

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
