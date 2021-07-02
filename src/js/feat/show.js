import { mingyan } from "../../mingyan";
import { $main, $myInfo, $page, hashName, ua } from "../init";
import { db } from "../log";
import { htmlTemp } from "../templete";
import { _hmt } from "../tongji";
import { randomNumber, qs, loadJs } from "../tools";
import { MY_checkConj } from "./checkConj";
import { MY_checkPic } from "./checkPic";
import { checkProbability } from "./checkProbability";
import { MY_initfancybox } from "./initFancybox";
import { MY_loadMyType } from "./showFrom";

window["skipCheckHash"] = window["skipCheckHash"] || false;

/**
 * 名言显示主函数
 * @param {Num} id 名言ID（可不传入）
 */
export let MY_show = function (id) {
    // db(mingyan);
    // db(mingyanPicUrl);
    // db(specialVerbList);

    // 加载Fancybox插件
    MY_initfancybox();

    // 延迟获取名言信息
    setTimeout(() => {
        MY_loadMyType();
    }, 1);

    let _id = function (id) {
        if (id) return id;
        if (qs("id") != "") return qs("id"); // 如果有传入?id=xx就用传入的ID
        if (location.hash != "" && hashName[location.hash] != true /* 排除保留的hash路由地址 */) return location.hash.replace("#", "");
        if (localStorage.getItem("___mingyan_id__")) return localStorage.getItem("___mingyan_id__"); // 如果有储存上一次看到哪一条就用这个id
        return randomNumber(0, mingyan.length - 1); // 否则就随机生成
    };

    try {
        // 先隐藏其它元素
        if (location.hash == "" && hashName[location.hash] != true /* 排除保留的hash路由地址 */) $($page).hide();
        $($main).hide();
        if (mingyan.length != 0) {
            // db("加载名言列表成功");
            let n = _id(id);
            let _my = mingyan[n];
            // _my = _checkMingyan(_my); // 调整名言概率
            if (hashName[location.hash]) return; // 若有触发hash路由的地址就返回
            // hash路由
            window["skipCheckHash"] = true;
            location.hash = "#" + n;
            window["skipCheckHash"] = false; // 再调回来
            // 储存看到哪一条下一次继续
            localStorage.setItem("___mingyan_id__", n);
            let name = _my.split("：")[0];
            // db(name);
            let my = _my.split("：")[1] + (_my.split("：")[2] ? "：" : "") + (_my.split("：")[2] || "");
            // db("已选取第" + n + "条名言：" + my);
            _hmt.push(["_trackEvent", "名言", "查看", "自动", name + "：" + my]);
            // 查看和分享（已废弃 2021-01-24）
            $($myInfo).html(htmlTemp.MY_INFO);
            /**
             * 图片彩蛋
             */
            $("span.my--mingyan-text").html(MY_checkPic(name + "：" + my)); // 若有触发图片彩蛋就显示彩蛋
            // 根据名言长度调整图片位置
            if (ua.device == "PC") {
                $(".my--mingyan-pic").css({
                    "min-width": 28 * my.split("").length - 50, // 每个字大概28px
                    "margin-left": "25px",
                    "margin-right": "25px"
                });
            } else {
                $(".my--mingyan-pic").css({
                    "min-width": 28 * my.split("").length - 50, // 每个字大概28px
                    "margin-left": "5px",
                    "margin-right": "5px"
                });
            }
            /**
             * 文字彩蛋
             */
            let verb = MY_checkConj(name + "：" + my);  // 若有触发文字彩蛋就显示彩蛋
            $("span.my--mingyan-verb").html(verb);

            $("span.my--mingyan-name").text(name);
            $($main).fadeIn();
            // 等待加载完后再检查名言概率
            $("#reload").attr("href", "#" + checkProbability());

            if ($(".my--mingyan-text").text().indexOf("来一起唱啊！！") != -1) { // 若有触发音乐彩蛋就加载播放器
                loadJs("https://cdn.jsdelivr.net/npm/aplayer@1.10.0/dist/APlayer.min.js");
            }
            // let title = "ERSS名言 · ERSS " + my;
            // if (navigator.userAgent.toString().indexOf("bot") == -1 && navigator.userAgent.toString().indexOf("spider") == -1 /* 防止搜索引擎激活 */) {
            //     document.title = title;
            //     let description = name + verb + "：" + my;
            //     $("meta[name='description']").attr("content", description);
            //     $("meta[property='og:description']").attr("content", description);
            //     $("meta[name='og:description']").attr("content", description);
            //     $("meta[property='og:title']").attr("content", title);
            //     $("meta[name='og:title']").attr("content", title);
            // }
            lazyload(); // 图片懒加载
        } else {
            return false;
        }
    } catch (err) {
        // 解决：防止看隐藏名言后错误的问题
        if (sessionStorage.getItem("___mingyan_is_special_mode__")) location.href = "#0";
        console.error("名言加载失败");
        $(".my--mingyan-text").text("名言加载失败");
        $($myInfo).html("错误信息：</br>" + err + "</br>建议：<a id=\"reload\">点我刷新页面</a>");
        $($main).fadeIn();
        $($myInfo).fadeIn();
        db(err);
        //location.href = "http://" + location.hostname + ":" + location.port + location.pathname;
    }
};