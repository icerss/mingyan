import { mingyanPicUrl, solvePicUrl } from "../../mingyan";
import { lazypic, picBaseUrl } from "../init";
import { isSupportWebp } from "../tools";
import { MY_checkText } from "./checkText";

/**
 * 图片彩蛋
 * @param {String} my 完整名言
 */
export let MY_checkPic = function (my) {
    let name = my.split("：")[0];
    let my_out = my.split("：")[1] + (my.split("：")[2] ? "：" : "") + (my.split("：")[2] || "");
    let special = "";
    if (my_out == "解" || mingyanPicUrl[my_out]) {
        let pic = null;
        if (my_out == "解") {
            pic = solvePicUrl[name];
        } else if (mingyanPicUrl[my_out]) {
            pic = mingyanPicUrl[my_out];
        }
        // 支持WEBP格式
        if (isSupportWebp()) {
            pic = pic + "/webp";
        }
        lazyload();
        return `<div ${special}>${my_out}</div><div class="my--mingyan-pic">
                        <img src="${lazypic}" alt="${my}" title="${my}" data-src="${picBaseUrl}${pic}" data-pic-id=${my_out} id="pic" class="lazyload mdui-hoverable mdui-img-rounded fancybox" data-fancybox-group="ERSS_mingyan_pic"></img>
                    </div>`;
    } else {
        lazyload();
        return `<div ${special}>${my_out}</div>`;
    }
};