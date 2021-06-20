import { mingyan } from "../../mingyan";
import { ___date_version___ } from "./config";

/* 下载功能 */
export let MY_download = function () {
    let blob = new Blob([mingyan.join("\n")], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "名言列表（" + ___date_version___ + "）");
};

$(document).on("click", "#download_btn", function() {
    MY_download();
});