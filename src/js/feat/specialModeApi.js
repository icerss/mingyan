import { db } from "../log";

/**
 * 隐藏名言Api
 */
export let MY_specialModeApi = {
    "gettoken": function () {
        if (!Promise) return;
        return new Promise(function (resolve, reject) {
            fetch("https://star-api.erss.club/api/gettoken", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "key": "xhemj"
                })
            }).then(json => json.json()).then((res) => {
                db(res);
                if (res.code == 0) resolve(res.data.refreshtoken);
                reject(res.msg);
            }).catch(function (err) {
                reject(err);
            });
        });
    },
    "getquestion": function (token) {
        if (!Promise) return;
        return new Promise(function (resolve, reject) {
            fetch("https://star-api.erss.club/api/getquestion", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "token": token
                })
            }).then(json => json.json()).then((res) => {
                db(res);
                if (res.code == 0) resolve(res.data);
                reject(res.msg);
            }).catch(function (err) {
                reject(err);
            });
        });
    },
    "verify": function (token, question, answer) {
        if (!Promise) return;
        return new Promise(function (resolve, reject) {
            fetch("https://star-api.erss.club/api/verify", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "token": token,
                    "q": question,
                    "a": answer
                })
            }).then(json => json.json()).then((res) => {
                db(res);
                if (res.code == 0) resolve(res.info);
                reject(res.msg);
            }).catch(function (err) {
                reject(err);
            });
        });
    }
};