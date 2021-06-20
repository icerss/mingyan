import { db } from "../log";

let faceClickTime = ""; // 初始化头像彩蛋点击数

/**
 * 三人头像点击量
 * @param {String} i 名字
 */
export let checkFaceClickTime = function (i) {
    if (i == "xhemj") {
        faceClickTime += "1";
    }
    if (i == "BlackToy") {
        faceClickTime += "2";
    }
    if (i == "Oranjezelv") {
        faceClickTime += "3";
    }
    // db(faceClickTime);
    // 如果三人都点了一下
    if (faceClickTime.indexOf("1") != -1 && faceClickTime.indexOf("2") != -1 && faceClickTime.indexOf("3") != -1) {
        swal({
            title: "获得成就",
            text: "[]~(￣▽￣)~*]",
            icon: "info",
            button: "关闭",
        })
            .then(function () {
                $("body").css({ "transition": "transform 1s ease 0s", "transform": "rotateY(180deg)" });
                faceClickTime = "";
            });
    }
};

$(document).on("click", ".my--avatar", function (el) {
    db($($(el)[0].currentTarget).attr("data-id"));
    checkFaceClickTime($($(el)[0].currentTarget).attr("data-id"));
});