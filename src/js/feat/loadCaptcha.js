import { reCaptchaKey } from "../init";
import { db } from "../log";
import { loadJs, NotyfAlert, randomNumber } from "../tools";

loadJs("https://recaptcha.net/recaptcha/api.js?onload=grecaptchaready&render=6LdOb_gaAAAAAAIQpvSd_6a5yjeneoVlvM159zwH", {
    "async": true,
    "defer": true
});
let isAlready = false;
let grecaptchaready = function () {
    db("[点赞系统 v2.1] 人机验证加载成功！");
    isAlready = true;
};
window["grecaptchaready"] = grecaptchaready;

/**
 * 获取 reCaptcha
 */
export let getCaptcha = function () {
    return new Promise(function (resolve, reject) {
        // db("[点赞系统 v2.1] 正在进行人机验证……");
        NotyfAlert.info("正在进行人机验证……");
        if (!isAlready) {
            reject("人机验证正在加载中，请稍后再试");
        };
        window.grecaptcha.execute(reCaptchaKey, { action: 'addstar' }).then(function (tk) {
            // db("[点赞系统 v2.1] 人机验证成功");
            setTimeout(() => {
                $($(".notyf__message:contains(正在进行人机验证)")[0]).text("人机验证成功！")
            }, randomNumber(300, 500));
            resolve(tk);
        })
    })
};
