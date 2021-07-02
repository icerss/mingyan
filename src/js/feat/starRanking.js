import { mingyan } from "../../mingyan";
import { $footer, $main, $page, $search, ua } from "../init";
import { MY_backFooter } from "./backFooter";
import { MY_findmingyan } from "./findMingyan";
import { MY_starApi } from "./starApi";

window["skipCheckHash"] = window["skipCheckHash"] || false;

/**
 * 名言点赞排行榜
 */
window["rankingOnclick"] = function (el) {
    location.hash = "#" + MY_findmingyan(el.innerText);
    MY_backFooter();
    $($page).hide();
};

if (ua.device == "PC") $("#ranking-btn").show();

export let MY_starRanking = function () {
    window["skipCheckHash"] = true;
    location.hash = "#/ranking";
    window["skipCheckHash"] = false;

    $($main).hide();
    $($search).hide();
    $($footer).html("当前名言数量：" + mingyan.length + "</br><a class=\"aline\" id=\"clearhash_btn\" href=javascript:;>返回<\/a>"); // 更改footer

    $($page).html("<strong>" + "<div style=\"text-align: center\" class=\"mdui-ripple\"><style>h1{font-size:30px}</style><h1>加载中……</h1></div></strong></br></br></br></br>");
    $($page).fadeIn();
    MY_starApi.getRanking().then(function (data) {
        let o = `
    <h1 style="text-align: center;">排行榜</h1>
    <div class="container">
    `;
        let res = data.data;
        let width = [];
        if (ua.device == "PC") {
            width = [2, 8, 2];
        } else {
            width = [2, 7, 3];
        }
        // // db(res);
        for (let i in res) {
            if (!res[i].text) continue;
            o += `
<!-- ${res[i].text} -->
<div id="star-ranking-item">
  <div class="columns">
    <div class="column col-${width[0]}" id="star-ranking-num">${new Number(i) + 1}</div>
    <div class="column col-${width[1]} my--star-ranking-text" id="star-ranking-text" onclick="rankingOnclick(this)">${res[i].text}</div>
    <div class="column col-${width[2]}">
      <i class="mdui-icon material-icons" id="star-ranking-thumb" style="color: rgba(0,0,0,0.64)">&#xe8dc;</i>
      <span id="star-ranking-thumb-num">
        ${res[i].num}
      </span>
    </div>
  </div>
</div>
`;
        }
        o += "</div></br></br></br>";
        $($page).html(o);
    });
};