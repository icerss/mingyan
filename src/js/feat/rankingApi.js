/**
 * 2021彩蛋!!!
 * 打卡系统
 * 2020/12/31
 * 于 2021/08/09 重写
 */

import { apiUrls, normalPostHeader } from "../init";

let apiUrl = apiUrls["2021_ranking"];
// apiUrl = "http://localhost:3000/api/v2/2021-ranking";

export let MY_rankingApi = {
  add: function(name, ip) {
    return new Promise(function(resolve, reject) {
      fetch(apiUrl, {
        ...normalPostHeader,
        body: JSON.stringify({
          event: "add",
          data: {
            name: name || "",
            ip: ip || "",
            t: new Date().getTime(),
          },
        }),
      })
        .then((r) => r.json())
        .then(function(res) {
          if (res.code !== 0) reject(res.msg);
          resolve(res.data);
        })
        .catch(function(err) {
          reject(err);
        });
    });
  },
  update: function(id, name, rank) {
    return new Promise(function(resolve, reject) {
      fetch(apiUrl, {
        ...normalPostHeader,
        body: JSON.stringify({
          event: "update",
          data: {
            name: name || "",
            rid: id || "",
            rank: rank || "",
            t: new Date().getTime(),
          },
        }),
      })
        .then((r) => r.json())
        .then(function(res) {
          if (res.code !== 0) reject(res.msg);
          resolve(res.data);
        })
        .catch(function(err) {
          reject(err);
        });
    });
  },
  getIp: function() {
    if (!Promise) return;
    return new Promise(function(resolve, reject) {
      fetch(apiUrls.ip)
        .then((r) => r.json())
        .then(function(json) {
          // log("获取成功");
          let res = {
            ip: json.ip,
          };
          resolve(res);
        })
        .catch(function(e) {
          reject(e);
        });
    });
  },
  getNum: function() {
    return new Promise(function(resolve, reject) {
      fetch(apiUrl, {
        ...normalPostHeader,
        body: JSON.stringify({
          event: "getnum",
          data: {
            t: new Date().getTime(),
          },
        }),
      })
        .then((r) => r.json())
        .then(function(res) {
          if (res.code !== 0) reject(res.msg);
          resolve(res.data);
        })
        .catch(function(err) {
          reject(err);
        });
    });
  },
};
