import { $main, $search, $page, $footer, hashName, footer } from "../init";

/**
 * 隐藏搜索列表和文字区域
 */
export let MY_hideElement = function () {
    if (location.hash == "" && hashName[location.hash] != true /* 排除保留的hash路由地址 */) $($page).hide();
    $($search).hide();
    $($main).fadeIn();
    $($footer).html(footer);
};

$(document).on("click", "#reload_buttom", function() {
    MY_hideElement();
});
$(document).on("click", "#showall_item", function() {
    MY_hideElement();
});