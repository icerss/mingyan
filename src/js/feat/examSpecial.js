import { db } from "../log";
import { randomNumber } from "../tools";

/**
 * 中考加油名言（未公开）
 */
let zk_mingyan = localStorage.getItem("zkmy") || "";
export default (function () {
    let count = 0;
    if (!zk_mingyan) return;
    zk_mingyan = zk_mingyan.split("&");
    // function inArr(arr, str) {
    //     for (let i in arr) {
    //         if (arr[i] == str) return true;
    //     }
    //     return false;
    // }
    window.addEventListener("hashchange", function () {
        count++;
        db(count);
        // let name = $(".my--mingyan-name").text().trim();
        // let my = $(".my--mingyan-text").text().trim();
        if (count == 15) {
            let m = zk_mingyan[randomNumber(0, zk_mingyan.length - 1)];
            $(".my--mingyan-text").text(m.split("：")[1]);
            $(".my--mingyan-name").text(m.split("：")[0]);
            $(".my--mingyan-verb").text("也许想要说");
            db("中考名言");
            $(".my--mingyan-text").removeClass("label-secondary");
            $(".my--mingyan-text").addClass("label-error");
            count = 0;
        } else {
            $(".my--mingyan-text").removeClass("label-error");
            $(".my--mingyan-text").addClass("label-secondary");
        }
    });
})();