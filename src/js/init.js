let { mingyan } = require("../mingyan");
let { db } = require("./log");

/**
 * 加载耗时
 */
window.onload = function () {
    let loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    db("Page load time is " + loadTime + "ms");
};

/**
 * 界面元素定义
 */
let $main = ".my--main";
let $search = ".my--search";
let $page = ".my--page";
let $footer = ".my--footer-html";
let $myInfo = ".my--mingyan-info";

/* 常量 */
// Hash路由保留地址
let hashName = {
    "#/search": true,
    "#/more": true,
    "#/about": true,
    "#/ranking": true,
    "#/submit": true,
    "#/faq": true,
    "#/sponsor": true
};
let picBaseUrl = "https://s-sh-1943-pic1.oss.dogecdn.com"; // 图片cdn链接

let apiUrls = {
    "star": "https://api.erss.club/api/star",
    "submit": "https://api.erss.club/api/contribute",
    "showfrom": "https://api.erss.club/api/info"
};

String.prototype.trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, "");
};

/**
 * 初始化
 */
let ua = new Browser(); // Broswer.js初始化
let footer = $($footer).html().replace("999+", mingyan.length); // 首页Footer初始化
let faceClickTime = ""; // 初始化头像彩蛋点击数
if (location.hash == "" && hashName[location.hash] != true /* 排除保留的hash路由地址 */) $($page).hide();   // 隐藏文字区域
$($search).hide();  // 隐藏搜索区域
$($footer).html(footer);  // 运用Footer
$("h1").fontFlex(30, 50, 70); // fontFlex初始化
$("h3").fontFlex(30, 50, 70);

module.exports = {
    $main,
    $search,
    $page,
    $footer,
    $myInfo,
    hashName,
    picBaseUrl,
    apiUrls,
    ua,
    faceClickTime,
    footer
};