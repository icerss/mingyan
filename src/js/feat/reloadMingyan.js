import { mingyan } from "../../mingyan";
import { randomNumber } from "../tools";

/**
 * 刷新名言
 */
export let MY_reload = function () {
    if ($("#reload").attr("href")) {
        location.href = "/#" + $("#reload").attr("href").split("#")[1];
    } else {
        location.href = "/#" + randomNumber(0, mingyan.length - 1);
    }
};

$(document).on("click", "#reload_buttom", function() {
    MY_reload();
});