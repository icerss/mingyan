import { apiUrls } from "../init";
import { db } from "../log";

/**
 * 显示名言来源Api
 */
export let MY_showFromApi = {
    getinfo: function () {
        if (!Promise) return;
        return new Promise(function (resolve, reject) {
            fetch(apiUrls.showfrom, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "mingyan": $(".my--mingyan-name").text().trim() + "：" + $(".my--mingyan-text").text().trim(),
                    "t": new Date().getTime()
                })
            }).then(res => res.json()).then(json => {
                db(json);
                resolve(json);
            }).catch(function (e) {
                reject(e);
            });
        });
    }
};