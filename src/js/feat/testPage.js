import { $main, $page, $search, hashName } from "../init";
import { isShow } from "../tools";
import { MY_clearHash } from "./clearHash";
import { MY_hideElement } from "./hideElement";
import { MY_page } from "./page";
import { MY_showAll } from "./showAll";
import { MY_starRanking } from "./starRanking";

/**
 * 防止显示界面出问题（测试功能）
 */
export let MY_testPage = function () {
    // 看hash路由有没有记录页面
    let checkHash = function () {
        let hash = location.hash;
        if (hashName[hash]) {
            // 有的话就按照路由的走
            switch (hash) {
            case "#/more":
                MY_page.more();
                break;
            case "#/search":
                MY_showAll();
                break;
            case "#/about":
                MY_page.about();
                break;
            case "#/ranking":
                MY_starRanking();
                break;
            case "#/submit":
                MY_page.contribute();
                break;
            default:
                return;
            }
        } else {
            // if (!/\#\d/.test(hash)) _mingyan.clearHash();
            if (/(\#\d)|()/.test(hash)) {
                MY_clearHash();
                MY_hideElement();
            }
        }
    };
    // 如果既显示名言又显示搜索界面
    if (isShow($main) && isShow($search)) {
        checkHash();
    }
    // 如果既显示名言又显示更多界面
    if (isShow($main) && isShow($page)) {
        checkHash();
    }
    // 如果既显示搜索又显示更多界面
    if (isShow($search) && isShow($page)) {
        checkHash();
    }
    // ……待添加
};