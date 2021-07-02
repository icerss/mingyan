import { db } from "../log";
import { htmlTemp } from "../templete";
import { NotyfAlert, throttle } from "../tools";
import { MY_starApi } from "./starApi";

let starEvent = "addstar";

/**
 * 名言点赞系统主函数 v2.0
 * @since 2021/06/20
 */
export let MY_star = function () {
    let loadingHtml = `
    <!-- 点赞 -->
    <i class="mdui-icon material-icons" id="star-logo" style="cursor: pointer;">&#xe8dc;</i>
    <span class="my--star-num">
    ${htmlTemp.SMAILL_LOADING_SVG}
    </span>
    `;

    swal({
        title: $(".my--mingyan-text").text(),
        text: "加载出错了？刷新试试？",
        icon: "",
        button: "关闭"
    }).then(function () {
        starEvent = "addstar";
    });
    $("#star-logo").css({ "color": "#000000A3" });
    $(".swal-text").html(loadingHtml); // 默认显示加载动画
    switch (starEvent) {
    case "addstar": {
        $("#star-logo").css({ "color": "#000000A3" });
        MY_starApi.addStar().then(function (addStar_res) {
            let statusCode = addStar_res.code;
            if (statusCode != 0) {
                NotyfAlert.err(addStar_res.msg);
                $(".my--star-num").html(addStar_res.data.starNum);
                if (addStar_res.data.isStar) {
                    $("#star-logo").css({ "color": "red" });
                    starEvent = "removestar";
                }
            } else {
                NotyfAlert.su(addStar_res.msg);
                $(".my--star-num").html(addStar_res.data.starNum);
                if (addStar_res.data.isStar) {
                    $("#star-logo").css({ "color": "red" });
                    starEvent = "removestar";
                }
            }
        }).catch(function (err) {
            NotyfAlert.err("错误：\n" + err);
        });
    }
        break;

    case "removestar": {
        $("#star-logo").css({ "color": "#000000A3" });
        MY_starApi.removeStar().then(function (addStar_res) {
            let statusCode = addStar_res.code;
            if (statusCode != 0) {
                NotyfAlert.err(addStar_res.msg);
                $(".my--star-num").html(addStar_res.data.starNum);
                if (!addStar_res.data.isStar) {
                    $("#star-logo").css({ "color": "#000000A3" });
                    starEvent = "addstar";
                }
            } else {
                NotyfAlert.su(addStar_res.msg);
                $(".my--star-num").html(addStar_res.data.starNum);
                if (!addStar_res.data.isStar) {
                    $("#star-logo").css({ "color": "#000000A3" });
                    starEvent = "addstar";
                }
            }
        }).catch(function (err) {
            NotyfAlert.err("错误：\n" + err);
        });
    }
        break;

    }
};

export let MY_star_format = function () {
    // 兼容内测时的数据格式
    if (localStorage.getItem("___mingyan_star_data__") && localStorage.getItem("___mingyan_star_data__").indexOf("，") != -1) {
        let oData = localStorage.getItem("___mingyan_star_data__");
        oData = oData.split("，");
        // db(oData);
        let nData = "";
        for (let i = 0; i < oData.length; i++) {
            if (oData[i]) {
                nData += "<" + oData[i] + ">";
            }
        }
        // db(nData);
        localStorage.setItem("___mingyan_star_data__", nData);
    }

    if (localStorage.getItem("___mingyan_star_data__")) {
        // 兼容 v1 时的数据格式
        let oldData = localStorage.getItem("___mingyan_star_data__") || "";
        oldData = oldData.replace(/></g, "|").replace(/<|>/g, "").split("|");

        for (let id of oldData) {
            MY_starApi.update(null, id).then(function () {
                localStorage.setItem("___mingyan_star_data__", (localStorage.getItem("___mingyan_star_data__").replace("<" + id + ">", "") || ""));
                db("[starApi v2] 数据更新成功！");
            });
        }
    }
};



$(document).on("click", ".my--star-btn", function () {
    throttle(MY_star(), 1000);

});

$(document).on("click", "#star-logo", function () {
    throttle(MY_star(), 1000);
});
