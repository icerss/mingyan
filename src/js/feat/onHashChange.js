import { MY_initfancybox } from "./initFancybox";
import { MY_initLogo } from "./initLogo";
import { MY_hideElement } from "./hideElement";
import { $footer, $main, $page, hashName } from "../init";
import { MY_page} from "./page";
import { mingyan } from "../../mingyan";
import { MY_starRanking } from "./starRanking";
import { MY_show } from "./show";
import { MY_showAll } from "./showAll";

window["skipCheckHash"] = window["skipCheckHash"] || false;

/**
 * hash路由主函数
 */
export let MY_onHashChange = function () {
    MY_initfancybox();
    MY_initLogo();
    let _hide = function () {
        location.pathname = "/";
        MY_hideElement();
        $($main).hide();
        if (!/\#\d/.test(location.hash)) {
            $("#logo").css("opacity", 0.5);
        } else {
            $("#logo").css("opacity", "");
        }
    };
    if (hashName[location.hash] == true) { // 如果在hash保留路径中
        switch (location.hash) {
        case "#/about":
            _hide();
            document.title = "ERSS名言 · 关于";
            MY_page.about();
            break;
        case "#/search":
            _hide();
            document.title = "ERSS名言 · 搜索";
            MY_showAll();
            break;
        case "#/more":
            _hide();
            document.title = "ERSS名言 · 更多";
            MY_page.more();
            break;
        case "#/ranking":
            _hide();
            document.title = "ERSS名言 · 排行榜";
            MY_starRanking();
            $($page).show();
            break;
        case "#/submit":
            _hide();
            document.title = "ERSS名言 · 名言投稿";
            MY_page.contribute();
            break;
        case "#/faq":
            _hide();
            document.title = "ERSS名言 · FAQ";
            MY_page.faq();
            break;
        case "#/sponsor":
            _hide();
            document.title = "ERSS名言 · 鼓励我们";
            MY_page.sponsor();
            break;
        default:
            break;
        }
    } else if (location.hash.split("#").length > 1 && !skipCheckHash && /\#\d|/.test(location.hash)) { // 否则就显示名言
        MY_show((location.hash.split("#")[1] || null));
        let footer = $($footer).html().replace("999+", mingyan.length); // 首页Footer初始化
        $($footer).html(footer);  // 运用Footer
    }
};
MY_onHashChange();
window.addEventListener("hashchange", MY_onHashChange);