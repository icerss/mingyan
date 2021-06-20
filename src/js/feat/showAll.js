import { mingyan } from "../../mingyan";
import { $footer, $main, $page, $search, ua } from "../init";
import { htmlTemp } from "../templete";
import { randomNumber } from "../tools";
import { MY_clearHash } from "./clearHash";
import { MY_findmingyan } from "./findMingyan";
import { MY_initLogo } from "./initLogo";
import { MY_starApi } from "./starApi";

let randID = randomNumber(0, 9999);

/**
 * 显示搜索列表
 * 为什么叫showAll我也不知道
 */
export let MY_showAll = function () {
    //location.hash = "#/search";
    $($page).hide();
    $($main).hide();
    // $("input#searchbar").val("");
    let loadingHtml = htmlTemp.BIG_LOADING_SVG;
    loadingHtml += "<h2>搜索加载中……</h2>";
    $($search).html(loadingHtml);
    // 搜索框
    let showall = `<input type="search" id="searchbar" class="my--search-bar" placeholder="搜索……" results="5"></input>
        </br></br>
        <span class="e"></span>`;
    showall += "<div class=\"search-list\" style=\"display:none;\">";
    for (let i in mingyan) {
        showall += `<div class="search-item"><a style="color:black" id="showall_item" class="${i}" href="#${i}">${mingyan[i]}</a></div>`;
    }
    showall += "</div>";
    $($search).show();
    // 每日精选名言
    let width = [];
    if (ua.device == "PC") {
        width = [2, 8, 2];
    } else {
        width = [2, 8, 2];
    }
    MY_starApi.getHistoryRanking()
        .then(function (res) {
            showall += "<div class=\"search-history-list\"><div class=\"search-history-list-tip\" style=\"font-size:30px;\">每日精选名言：</div>";
            for (let i = 0; i < 15; i++) {
                showall += `<div class="columns" style="padding-top:5px;padding-bottom:5px;">
                <div class="column col-${width[0]}" id="star-ranking-num">${new Number(i) + 1}</div>
                <div class="column col-${width[1]} my--star-ranking-text" id="star-ranking-text" onclick="location.hash='#${MY_findmingyan(res[i].text)}';$('.my--search').hide()">${res[i].text}</div>
                <div class="column col-${width[2]}">
                <!-- 
                  <i class="mdui-icon material-icons" id="star-ranking-thumb" style="color: rgba(0,0,0,0.64)"></i>
                  <span id="star-ranking-thumb-num">
                    ${res[i].num}
                  </span>
                  -->
                </div>
              </div>`;
            }
            showall += "</div>";
            showall += "</br></br></br>"; // 加换行比较好看
            $(".search-list").hide();
            $($search).html(showall);
            $($search).fadeIn();
        })
        .catch(function () {
            $(".search-history-list").hide();
            $(".search-list").show();
            $($search).html(showall);
            $($search).fadeIn();
        });
    setTimeout(() => {
        if (!$(".search-history-list").html()) {
            $(".search-history-list").hide();
            $(".search-list").show();
            $($search).html(showall);
            $($search).fadeIn();
        }
    }, 2000);
    $($footer).html(`当前名言数量：${mingyan.length}</br><a class="aline" href="javascript:;" data-id="${randID}">返回</a>`);
    MY_initLogo();
    $("#searchbar").focus();
};

$(document).on("click", `a[data-id=${randID}]`, function () {
    MY_clearHash();
});