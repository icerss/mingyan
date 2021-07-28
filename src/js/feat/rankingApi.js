/**
 * 2021彩蛋!!!
 * 打卡系统
 * 2020/12/31
 */

import cloudbase from "@cloudbase/js-sdk";
import { apiUrls } from "../init";

export let MY_rankingApi = (async function() {
  // 初始化tcb
  let app = null;
  // 匿名登录
  let auth = null;
  async function login() {
    await auth.anonymousAuthProvider().signIn();
    let loginState = await auth.getLoginState();
    // log("登陆成功");
    console.log(loginState);
  }
  app = cloudbase.init({ env: "xhemj-0gjckebwf7276129" });
  auth = app.auth();
  login(); // 云开发

  setTimeout(() => {
    window.doRanking();
  }, 500);
  // 基础函数
  return {
    // 添加
    add: function(name, ip) {
      if (!Promise) return;
      return new Promise(function(resolve, reject) {
        app
          .callFunction({
            name: "mingyan",
            data: {
              event: "add",
              name: name.toString(),
              ip: ip,
              ua: navigator.userAgent.toString() || "",
            },
          })
          .then((res) => {
            // log("添加成功");
            // log(res);
            resolve(res);
          })
          .catch(function(e) {
            reject(e);
          });
      });
    },
    // 更新呢
    update: function(id, name, num) {
      if (!Promise) return;
      return new Promise(function(resolve, reject) {
        app
          .callFunction({
            name: "mingyan",
            data: {
              event: "update",
              id: id,
              data: {
                name: name,
              },
              num: num,
            },
          })
          .then((res) => {
            // log("获取成功");
            // log(res);
            resolve(res);
          })
          .catch(function(e) {
            reject(e);
          });
      });
    },
    // 获取IP
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
    //获取当前排名人数
    getNum: function() {
      if (!Promise) return;
      return new Promise(function(resolve, reject) {
        app
          .callFunction({
            name: "mingyan",
            data: {
              event: "getnum",
            },
          })
          .then((res) => {
            // log("获取成功");
            // log(res);
            resolve(res);
          })
          .catch(function(e) {
            reject(e);
          });
      });
    },
  };
})();
