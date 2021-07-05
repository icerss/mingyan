import { mingyan } from "../mingyan";
import { db } from "./log";

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
export let $main = ".my--main";
export let $search = ".my--search";
export let $page = ".my--page";
export let $footer = ".my--footer-html";
export let $myInfo = ".my--mingyan-info";

/* 常量 */
// Hash路由保留地址
export let hashName = {
    "#/search": true,
    "#/more": true,
    "#/about": true,
    "#/ranking": true,
    "#/submit": true,
    "#/faq": true,
    "#/sponsor": true
};
export let picBaseUrl = "https://s-sh-1943-pic1.oss.dogecdn.com"; // 图片cdn链接

export let apiUrls = {
    "star": "https://api.erss.club/api/star",
    "star_v2": "https://api.erss.club/api/v2/star",
    "submit": "https://api.erss.club/api/contribute",
    "showfrom": "https://api.erss.club/api/info",
    "ip": "https://ip-api.erss.club/api/ip"
};

String.prototype.trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, "");
};

/**
 * 初始化
 */
export let ua = new Browser(); // Broswer.js初始化
export let footer = $($footer).html().replace("999+", mingyan.length); // 首页Footer初始化
if (location.hash == "" && hashName[location.hash] != true /* 排除保留的hash路由地址 */) $($page).hide();   // 隐藏文字区域
$($search).hide();  // 隐藏搜索区域
$($footer).html(footer);  // 运用Footer
$("h1").fontFlex(30, 50, 70); // fontFlex初始化
$("h3").fontFlex(30, 50, 70);

export let lazypic = "./src/loading.svg"; // 懒加载图片地址

/**
 * 初始化Headroom.js
 */
let headroom = null;
if (Headroom.cutsTheMustard) {
    let myElement = document.getElementById("my--header");
    headroom = new Headroom(myElement, {
        "offset": 300,
        "tolerance": 5
    });
}
export { headroom };

export let normalPostHeader = {
    method: "POST",
    mode: "cors",
    headers: {
        "Content-Type": "application/json"
    }
};

export let reCaptchaKey = "6LdOb_gaAAAAAAIQpvSd_6a5yjeneoVlvM159zwH";
export let MingyanLOGO = "https://s-sh-1943-pic1.oss.dogecdn.com/2021/05/23/ldzxMt9PYQ3LNyU.png";