/**
 * 名言点赞功能！！v2.0
 *   —— 2021年寒假
 * @since 2021/06/20
 */

import { apiUrls, normalPostHeader } from "../init";
import { recordEvent, recordEventId } from "../log";
import { getUid, NotyfAlert, log, querySelector } from "../utils";
import { loadCaptcha } from "./loadCaptcha";

let starApiUrl = apiUrls.star_v3;
// starApiUrl = "http://localhost:3000/api/v3/star";
// 感谢Vercel的服务！！
// 感谢MongoDB提供免费的数据库！！

export let MY_starApi = {
  /**
   * 获取当前点赞数
   * @param {String} my 完整名言
   */
  getNum: function (my) {
    if (!Promise) return;
    if (!my)
      my =
        querySelector(".my--mingyan-name").innerText.trim() +
        "：" +
        querySelector(".my--mingyan-text").innerText.trim();
    return new Promise(function (resolve, reject) {
      fetch(starApiUrl, {
        ...normalPostHeader,
        body: JSON.stringify({
          event: "getnum",
          data: {
            MY_text: my,
            MY_token: getUid(),
            t: new Date().getTime(),
          },
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          resolve(json);
        })
        .catch(function (e) {
          reject(e);
        });
    });
  },

  /**
   * 点赞
   * @param {String} my 完整名言
   */
  addStar: async function (my, id, recaptcha_token) {
    if (!Promise) return;
    if (!my && !id)
      my =
        querySelector(".my--mingyan-name").innerText.trim() +
        "：" +
        querySelector(".my--mingyan-text").innerText.trim();
    let _find = {};
    if (id && my) _find = { MY_text: my };
    if (id && !my) _find = { MY_ID: id };
    if (!id && my) _find = { MY_text: my };
    // 接入recaptcha 验证
    try {
      recaptcha_token = recaptcha_token || (await loadCaptcha());
      return new Promise(function (resolve, reject) {
        fetch(starApiUrl, {
          ...normalPostHeader,
          body: JSON.stringify({
            event: "addstar",
            data: {
              ..._find,
              MY_token: getUid(),
              re_token: recaptcha_token,
              t: new Date().getTime(),
            },
          }),
        })
          .then((res) => res.json())
          .then((json) => {
            resolve(json);
            if (json.code === 0) recordEvent(recordEventId.addStarEvent);
          })
          .catch(function (e) {
            reject(e);
          });
      });
    } catch (e) {
      NotyfAlert.err("点赞失败：" + e);
    }
  },

  /**
   * 取消点赞
   * @param {String} my 完整名言
   */
  removeStar: async function (my, id, recaptcha_token) {
    if (!Promise) return;
    if (!my)
      my =
        querySelector(".my--mingyan-name").innerText.trim() +
        "：" +
        querySelector(".my--mingyan-text").innerText.trim();
    id = id || "";
    // 接入recaptcha 验证
    try {
      recaptcha_token = recaptcha_token || (await loadCaptcha());
      return new Promise(function (resolve, reject) {
        fetch(starApiUrl, {
          ...normalPostHeader,
          body: JSON.stringify({
            event: "removestar",
            data: {
              MY_text: my,
              MY_token: getUid(),
              re_token: recaptcha_token,
              t: new Date().getTime(),
            },
          }),
        })
          .then((res) => res.json())
          .then((json) => {
            resolve(json);
            if (json.code === 0) recordEvent(recordEventId.removeStarEvent);
          })
          .catch(function (e) {
            reject(e);
          });
      });
    } catch (e) {
      NotyfAlert.err("点赞失败：" + e);
    }
  },

  /**
   * 获取排行榜
   */
  getRanking: function () {
    if (!Promise) return;
    return new Promise(function (resolve, reject) {
      fetch(starApiUrl, {
        ...normalPostHeader,
        body: JSON.stringify({
          event: "ranking",
          data: {
            t: new Date().getTime(),
          },
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          resolve(json);
          recordEvent(recordEventId.getCurrentRanking);
        })
        .catch(function (e) {
          reject(e);
        });
    });
  },

  /**
   * 获取临时排行榜数据
   */
  getHistoryRanking: function (source) {
    if (!Promise) return;
    return new Promise(function (resolve, reject) {
      // 若加载时间超过 2s，自动 reject
      setTimeout(() => {
        reject("请求超时");
      }, 2000);
      fetch(
        `${apiUrls.ranking_history}?t=_${new Date().getTime()}&source=${source}`
      )
        .then((res) => res.json())
        .then((json) => {
          log(json);
          if (json.msg == "请求成功") {
            resolve(json.data);
            recordEvent(recordEventId.getHistoryRanking);
          }
          reject(json.msg);
        });
    });
  },

  /**
   * 兼容 V1 数据格式
   * @param {String} my 完整名言
   */
  update: function (my, id) {
    if (!Promise) return;
    if (!my && !id)
      my =
        querySelector(".my--mingyan-name").innerText.trim() +
        "：" +
        querySelector(".my--mingyan-text").innerText.trim();
    let _find = {};
    if (id && my) _find = { MY_text: my };
    if (id && !my) _find = { MY_ID: id };
    if (!id && my) _find = { MY_text: my };
    return new Promise(function (resolve, reject) {
      fetch(starApiUrl, {
        ...normalPostHeader,
        body: JSON.stringify({
          event: "update",
          data: {
            ..._find,
            MY_token: getUid(),
            t: new Date().getTime(),
          },
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          resolve(json);
        })
        .catch(function (e) {
          reject(e);
        });
    });
  },
};

// window["MY_starApi"] = MY_starApi;
