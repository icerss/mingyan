/* 分享功能（现已废弃） */

import { mingyan } from "../../mingyan";

/**
 * 名言分享链接计算
 * @param {String} name 老师或学生的名字
 * @param {String} my 名言
 */
export let MY_encodeMingyan = function (name, my) {
    // db(name);
    // db(my);
    return md5("1" + md5(encodeURI(name + "||" + my + "ERSS MINGYAN (c) xhemj")));
};

/**
 * 名言分享链接解密
 * @param {String} id 传入的分享ID
 */
export let MY_decodeMingyan = function (id) {
    for (let i in mingyan) {
        let name = mingyan[i].split("：")[0];
        // db(name);
        let my = mingyan[i].split("：")[1];
        // db(my);
        if (id == MY_encodeMingyan(name, my)) {
            // db("encode:" + id);
            // db(i);
            return i;
        }
    }
};

/**
 * 分享的主函数
 */
export let MY_share = function () {
    let name = $(".my--mingyan-name").text();
    let my = $(".my--mingyan-text").text().replace(/\s*/g, "");
    swal({
        title: "分享当前名言",
        text: "请手动复制下面的链接，把他发给别人吧",
        icon: "info",
        content: {
            element: "input",
            attributes: {
                placeholder: "加载出错了？刷新试试吧",
                value: location.protocol + "//" + location.host + "/" + MY_encodeMingyan(name, my),
                type: "text"
            }
        }
    });
    $(".swal-content__input").attr("value", location.protocol + "//" + location.host + "/" + MY_encodeMingyan(name, my)); // 显示分享链接
    // $(".swal-content__input").attr("onclick", "this.select()");
    // $(".swal-content__input").select();
};

$(document).on("click", ".my--share-btn", function() {
    MY_share();
});