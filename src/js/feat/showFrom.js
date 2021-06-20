import { MY_showFromApi } from "./showFromApi";
import { db } from "../log";

let showFromData = "";
let isReady = false;

/**
 * 获取名言来源主函数
 */
export let MY_loadMyType = function () {
    db("触发loadMyType");
    showFromData = "";
    MY_showFromApi.getinfo()
        .then(function (info) {
            showFromData = info.data;
            db("showFromData", showFromData);
            let submit_type = showFromData.from.type;
            if (showFromData.from.submit_school == "厦门市音乐学校") submit_type = "音校馆";
            $(".my--showfrom-text").text(submit_type);
            isReady = true;
        });
};

/**
 * 显示名言来源主函数
 * @param {object} res 获取到的名言信息
 */
export let MY_showMyType = function (res) {
    if (!showFromData && !res) {
        showFromData = "";
        MY_showFromApi.getinfo()
            .then(function (info) {
                showFromData = info.data;
                db(showFromData);
                return MY_showMyType(info.data);
            });
    } else {
        let fetchData = res || showFromData;
        let name = fetchData.from.submit_name || "耳斯名言团队";
        let conefrom = fetchData.from.submit_school || "地球";
        swal({
            title: "",
            text: `提供者：${name}\n出自：${conefrom}`,
            icon: "https://s-sh-1943-pic1.oss.dogecdn.com/2021/05/23/ldzxMt9PYQ3LNyU.png",
            button: "关闭"
        });
        $(".swal-icon.swal-icon--custom>img").css({
            "max-width": "150px"
        });
        $(".swal-text").css({
            "font-size": "26px",
            "text-align": "center"
        });
    }
};

$(document).on("click", ".my--showfrom", function () {
    if (isReady) MY_showMyType();
});