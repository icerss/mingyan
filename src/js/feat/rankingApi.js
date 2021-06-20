/**
 * 2021彩蛋!!!
 * 打卡系统
 * 2020/12/31
 */

import { apiUrls } from "../init";
import { db } from "../log";

// 初始化tcb
let app = null;
// 匿名登录
let auth = null;
async function login() {
    await auth.anonymousAuthProvider().signIn();
    let loginState = await auth.getLoginState();
    // db("登陆成功");
    db(loginState);
}
app = cloudbase.init({ env: "xhemj-0gjckebwf7276129" });
auth = app.auth();
login(); // 云开发

// 基础函数
export let MY_rankingApi = {
    // 添加
    add: function (name, ip) {
        if (!Promise) return;
        return new Promise(function (resolve, reject) {
            app
                .callFunction({
                    name: "mingyan",
                    data: {
                        event: "add",
                        name: name.toString(),
                        ip: ip,
                        ua: navigator.userAgent.toString() || ""
                    }
                })
                .then((res) => {
                    // db("添加成功");
                    // db(res);
                    resolve(res);
                })
                .catch(function (e) {
                    reject(e);
                });
        });
    },
    // 更新呢
    update: function (id, name, num) {
        if (!Promise) return;
        return new Promise(function (resolve, reject) {
            app
                .callFunction({
                    name: "mingyan",
                    data: {
                        event: "update",
                        id: id,
                        data: {
                            "name": name
                        },
                        "num": num
                    }
                })
                .then((res) => {
                    // db("获取成功");
                    // db(res);
                    resolve(res);
                })
                .catch(function (e) {
                    reject(e);
                });
        });

    },
    // 获取IP
    getIp: function () {
        if (!Promise) return;
        return new Promise(function (resolve, reject) {
            $.getJSON(apiUrls.ip,
                function (json) {
                    // db("获取成功");
                    let res = {
                        "ip": json.ip
                    };
                    resolve(res);
                }).catch(function (e) {
                reject(e);
            });
        });
    },
    //获取当前排名人数
    getNum: function () {
        if (!Promise) return;
        return new Promise(function (resolve, reject) {
            app
                .callFunction({
                    name: "mingyan",
                    data: {
                        event: "getnum"
                    }
                })
                .then((res) => {
                    // db("获取成功");
                    // db(res);
                    resolve(res);
                })
                .catch(function (e) {
                    reject(e);
                });

        });
    }
};