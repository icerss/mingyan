/*
 * ©2020-2021 xhemj
 * 2021/05/14
 */

import "./main.css";
import "./js/sw";
import "./js/feat/onHashChange";
import "./js/feat/specialMode";
import "./js/feat/search";
import "./js/feat/star";
import "./js/feat/checkFaceClickTime";
import "./js/feat/reloadMingyan";
import "./js/feat/createSiteTime";
import { MY_show } from "./js/feat/show";
import { getUid, NotyfAlert, qs } from "./js/tools";
import { _hmt } from "./js/tongji";
import { MY_initfancybox } from "./js/feat/initFancybox";
import { MY_initLogo } from "./js/feat/initLogo";
import { MY_console } from "./js/feat/mingyanConsole";
import { MY_testPage } from "./js/feat/testPage";
import { MY_installPwa } from "./js/feat/installPWA";
import { MY_ranking } from "./js/feat/ranking";
// import { MY_writeSpecialMingyan } from "./js/feat/specialMode";
import { headroom } from "./js/init";
import { MY_star_format } from "./js/feat/star";
import { db } from "./js/log";
import { mingyan } from "./mingyan";

(async function () {
    window["v"] = window["v"] || ["", "202103211846"]; // eslint-disable-line
    window["_hmt"] = window["_hmt"] || _hmt;

    // // 隐藏名言
    // await MY_writeSpecialMingyan();

    /**
     * 初始化
     */
    let MY_init = function () {
        MY_show();
        if (qs("force_action") == "2020" || !localStorage.getItem("___mingyan_2021_ranking_data__")) { // 如果是新用户
            MY_ranking();
        }
        MY_installPwa();
        MY_initLogo();
        headroom.init();
        function Animation() {
            MY_testPage();
            requestAnimationFrame(Animation);
        };
        lazyload();
        requestAnimationFrame(Animation);
        MY_initfancybox();
        MY_console();
        getUid();
        MY_star_format();

        window["db"] = db;
        window["mingyan"] = mingyan;
        window["NotyfAlert"] = NotyfAlert;
    };

    $(document).ready(MY_init);

    /**
     * 耶！！写完啦！！
     * 从2020-04-30 到  现在，
     * 这个网最初只是我们几个人开玩笑着说一说，
     * 谁知道真的能成功呢？
     * 还是要感谢一下的：
     * 感谢英语俞老师给了我们这个灵感，
     * 感谢数学潘老师给我们提供了那么多搞笑的名言，
     * 感谢Oranjezelf和骚骚恪提供的已经失传的数学老王的名言，
     * 感谢BlackToy画的背景图片和其它素材，
     * 感谢2018级8班的所有同学，
     * 感谢Xhemj做了这个网站，
     * 感谢看完了这段文字的你。
     *     —— Xhemj 2021-01-01
     */
})();