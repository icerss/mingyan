/**
 * 名言点赞功能！！v2.0
 *   —— 2021年寒假
 * @since 2021/06/20
 */

import { apiUrls, normalPostHeader } from "../init";
import { db } from "../log";
import { getUid } from "../tools";

let starApiUrl = apiUrls.star_v2;
// starApiUrl = "http://localhost:3000/api/v2/star";
// 感谢Vercel的服务！！
// 感谢MongoDB提供免费的数据库！！

export let MY_starApi = {
    /**
     * 获取当前点赞数
     * @param {String} my 完整名言
     */
    "getNum": function (my) {
        if (!Promise) return;
        if (!my) my = $(".my--mingyan-name").text().trim() + "：" + $(".my--mingyan-text").text().trim();
        return new Promise(function (resolve, reject) {
            fetch(starApiUrl, {
                ...normalPostHeader,
                body: JSON.stringify({
                    "event": "getnum",
                    "data": {
                        MY_text: my,
                        MY_token: getUid(),
                        t: new Date().getTime()
                    }
                })
            }).then(res => res.json()).then(json => {
                resolve(json);
            }).catch(function (e) {
                reject(e);
            });
        });
    },

    /**
     * 点赞
     * @param {String} my 完整名言
     */
    "addStar": function (my, id) {
        if (!Promise) return;
        if (!my && !id) my = $(".my--mingyan-name").text().trim() + "：" + $(".my--mingyan-text").text().trim();
        let _find = {};
        if (id && my) _find = { MY_text: my };
        if (id && !my) _find = { MY_ID: id };
        if (!id && my) _find = { MY_text: my };
        return new Promise(function (resolve, reject) {
            fetch(starApiUrl, {
                ...normalPostHeader,
                body: JSON.stringify({
                    "event": "addstar",
                    "data": {
                        ..._find,
                        MY_token: getUid(),
                        t: new Date().getTime()
                    }
                })
            }).then(res => res.json()).then(json => {
                resolve(json);
            }).catch(function (e) {
                reject(e);
            });
        });
    },

    /**
     * 取消点赞
     * @param {String} my 完整名言
     */
    "removeStar": function (my) {
        if (!Promise) return;
        if (!my) my = $(".my--mingyan-name").text().trim() + "：" + $(".my--mingyan-text").text().trim();
        return new Promise(function (resolve, reject) {
            fetch(starApiUrl, {
                ...normalPostHeader,
                body: JSON.stringify({
                    "event": "removestar",
                    "data": {
                        MY_text: my,
                        MY_token: getUid(),
                        t: new Date().getTime()
                    }
                })
            }).then(res => res.json()).then(json => {
                resolve(json);
            }).catch(function (e) {
                reject(e);
            });
        });
    },

    /**
     * 获取排行榜
     */
    "getRanking": function () {
        if (!Promise) return;
        return new Promise(function (resolve, reject) {
            fetch(starApiUrl, {
                ...normalPostHeader,
                body: JSON.stringify({
                    "event": "ranking",
                    "data": {
                        "t": new Date().getTime()
                    }
                })
            }).then(res => res.json()).then(json => {
                resolve(json);
            }).catch(function (e) {
                reject(e);
            });
        });
    },

    /**
     * 获取临时排行榜数据
     */
    "getHistoryRanking": function () {
        if (!Promise) return;
        return new Promise(function (resolve, reject) {
            fetch("./api/get-ranking-history?_t=" + new Date().getTime())
                .then(res => res.json())
                .then(json => {
                    db(json);
                    if (json.msg == "请求成功") resolve(json.data);
                    reject(json.msg);
                });
        });
    }
};

window["MY_starApi"] = MY_starApi;