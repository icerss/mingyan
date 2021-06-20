import { $search, $page, $main } from "../init";
import { MY_hideElement } from "./hideElement";
import { MY_initLogo } from "./initLogo";
import { MY_show } from "./show";

window["skipCheckHash"] = window["skipCheckHash"] || false;

/**
 * 清除hash路由（回到首页）
 */
export let MY_clearHash = function () {
    document.title = "ERSS名言 · ERSS";
    skipCheckHash = false;
    location.hash = localStorage.getItem("___mingyan_id__") || "";
    location.reload();
    MY_hideElement();
    MY_initLogo();
    let isShow = function (el) {
        return !$(el).is(":hidden");
    };
    if (isShow($search) || isShow($page) || !isShow($main)) MY_show();
    // db("s3");
};

$(document).on("click", "#clearhash_btn", function() {
    MY_clearHash();
});
