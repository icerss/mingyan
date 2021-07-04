import { reCaptchaKey } from "../init";
import { db } from "../log";
import { loadJs } from "../tools";

loadJs("https://recaptcha.net/recaptcha/api.js?onload=grecaptchaready&render=6LdOb_gaAAAAAAIQpvSd_6a5yjeneoVlvM159zwH", {
    "async": true,
    "defer": true
});
let isAlready = false;
let grecaptchaready = function () {
    db("人机验证加载成功！");
    isAlready = true;
};
window["grecaptchaready"] = grecaptchaready;

export let getCaptcha = function () {
    return new Promise(function (resolve, reject) {
        if (!isAlready) {
            reject("人机验证正在加载中，请稍后再试");
        };
        window.grecaptcha.execute(reCaptchaKey, { action: 'addstar' }).then(function (tk) {
            resolve(tk);
        })
    })
};
