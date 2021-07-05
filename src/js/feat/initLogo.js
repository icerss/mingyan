import { ua } from "../init";
/**
 * 右下角小人彩蛋
 */
export let MY_initLogo = function () {
    if (!/\#\d/.test(location.hash)) {
        $(".my--mingyan-boy").css({ "opacity": 0.5 });
    } else {
        $(".my--mingyan-boy").css({ "opacity": 1 });
    }
    // if (ua.device != "Mobile") {
    //     $(".my--mingyan-boy").css({
    //         "width": "150px",
    //         "height": "260px"
    //     });
    // }
    $(".my--mingyan-boy").css({
        "display": "block"
    });
};

$(document).on("click", "#reload_buttom", function() {
    MY_initLogo();
});