import { mingyan } from "../../mingyan";
import { $footer } from "../init";
import { MY_initLogo } from "./initLogo";

/**
 * 还原footer
 */
export let MY_backFooter = function () {
    document.title = "ERSS名言 · ERSS";
    MY_initLogo();
    $($footer).html(`<div id="footer">当前名言数量：${mingyan.length}<br><a class="my-el-a" href="#/submit" onclick="_hmt.push(['_trackEvent', '名言', '投稿', '手动' , '投稿']);">投稿</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a class="my-el-a" href="#/search" onclick="_hmt.push(['_trackEvent', '名言', '搜索', '手动' , '搜索']);">搜索</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a class="my-el-a" href="https://jq.qq.com/?_wv=1027&amp;k=jKy2qW7R" onclick="_hmt.push(['_trackEvent', '名言', '交流群', '手动' , '交流群']);">交流群</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a class="my-el-a" href="#/more" onclick="_hmt.push(['_trackEvent', '名言', '更多', '手动' , '更多']);">更多</a>
        </div>`);
};

$(document).on("click", "#star-ranking-text", function() {
    MY_backFooter();
});