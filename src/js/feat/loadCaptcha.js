import { reCaptchaKey } from "../init";
import { loadJs, log } from "../tools";

loadJs("https://recaptcha.net/recaptcha/api.js?onload=grecaptchaready&render=6LdOb_gaAAAAAAIQpvSd_6a5yjeneoVlvM159zwH", {
    "async": true,
    "defer": true
});
let isAlready = false;
let grecaptchaready = function () {
    log("[点赞系统 v2.1] 人机验证加载成功！");
    isAlready = true;
};
window["grecaptchaready"] = grecaptchaready;

/**
 * 获取 reCaptcha
 */
export let loadCaptcha = function () {
    return new Promise(function (resolve, reject) {
        // log("[点赞系统 v2.1] 正在进行人机验证……");
        // NotyfAlert.info("正在进行人机验证……");
        if (!isAlready) {
            reject("人机验证正在加载中，请稍后再试");
        }
        window.grecaptcha.execute(reCaptchaKey, { action: 'addstar' }).then(function (tk) {
            // log("[点赞系统 v2.1] 人机验证成功");
            // setTimeout(function(){
            //     $($(".notyf__message:contains(正在进行人机验证)")[0]).text("人机验证成功！");
            // }, randomNumber(300, 500));
            // let tft, tsk, ttd, tfs, tff;
            // tft = tk.slice(0, 100);
            // tsk = tk.slice(100, 200);
            // ttd = tk.slice(200, 300);
            // tfs = tk.slice(300, 400);
            // tff = tk.slice(400, tk.split("").length);

            // resolve({ tft, tsk, ttd, tfs, tff });
            resolve(tk);
        })
    })
};