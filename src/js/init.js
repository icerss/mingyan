// import { mingyan } from "./mingyan";
import { log } from "./tools";


/**
 * 加载耗时
 */
window.onload = function () {
    let loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    log("Page load time is " + loadTime + "ms");
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
export let picBaseUrl = "https://cdn.erssmy.com/image"; // 图片cdn链接

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

export let lazypic = "./src/loading.svg"; // 懒加载图片地址

export let normalPostHeader = {
    method: "POST",
    mode: "cors",
    headers: {
        "Content-Type": "application/json"
    }
};

export let reCaptchaKey = "6LdOb_gaAAAAAAIQpvSd_6a5yjeneoVlvM159zwH";
export let MingyanLOGO = "https://cdn.erssmy.com/image/2021/05/23/ldzxMt9PYQ3LNyU.png";