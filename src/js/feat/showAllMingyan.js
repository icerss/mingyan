import { mingyan } from "../../mingyan";
import { $main, $page, $search } from "../init";

/**
 * Markdown名言列表
 */
export let MY_showAllMingyan = function () {
    $($page).hide();
    $($main).hide();
    $($search).hide();
    let out = "<div style='line-height: 1.5;'>";
    for (let i in mingyan) {
        out += mingyan[i] + "</br>";
    }
    out += "</div>";
    $($page).html(marked(out));
    $($page).fadeIn();
};