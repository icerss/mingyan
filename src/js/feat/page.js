import { mingyan } from "../../mingyan";
import { $page, $main, $search, $footer } from "../init";
import { MY_initLogo as _initLogo } from "./initLogo";
import { ___date_version___ } from "./config";

import MORE_MD from "../../page/more.md";

/**
 * Markdown转成网页
 * @param {String} id 要放的元素id
 * @param {String} url Markdown地址
 */
let _mdToHtml = function (id, name) {
    $($page).hide();
    $($main).hide();
    $($search).hide();
    $(id).html("<strong>" + "<div style=\"text-align: center\" class=\"mdui-ripple\"><style>h1{font-size:30px}</style><h1>加载中……</h1></div></strong></br></br></br></br>");
    marked.setOptions({
        breaks: true
    });
    let html = marked(name); // 使用marked.js转换
    html = html.replace(/<a /g, "<a target=\"_blank\" rel=\"nofollow ugc\" "); // 外链新页面打开
    $(id).html("<strong>" + html + "</strong></br></br></br></br>");  // 加换行比较好看
    $(id).fadeIn();
    $($footer).html("当前名言数量：" + mingyan.length + "</br><a class=\"aline\" id=\"clearhash_btn\" href=javascript:;>返回<\/a>"); // 更改footer
    _initLogo();
    $($page).fadeIn();
};

/**
 * 更多页面
 */
export let MY_page = {
    "more": function () {
        return _mdToHtml($page, MORE_MD);
    },
    "about": function () {
        return _mdToHtml($page, "./src/page/about.md?t=" + ___date_version___);
    },
    "contribute": function () {
        return _mdToHtml($page, "./src/page/contribute.md?t=" + ___date_version___);
    },
    "faq": function () {
        return _mdToHtml($page, "./src/page/faq.md?t=" + ___date_version___);
    },
    "sponsor": function () {
        return _mdToHtml($page, "./src/page/sponsor.md?t=" + ___date_version___);
    }
};
