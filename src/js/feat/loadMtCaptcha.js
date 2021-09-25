import { mtCaptchaKey } from "../init";
import { loadJs, log } from "../utils";

/**
 * 加载 mtCaptcha
 */
window.mtcaptchaConfig = {
  sitekey: mtCaptchaKey,
  theme: "neowhite",
  lang: "zh",
  customLangText: {
    zh: {
      loading: "加载中……",
      verifying: "验证中……",
    },
  },
  "jsloaded-callback": "mtcaptchaready",
  render: "explicit",
  renderQueue: [],
};

let isAlready = false;
window.mtcaptchaready = function() {
  isAlready = true;
};

Promise.all([
  loadJs("https://service.mtcaptcha.com/mtcv1/client/mtcaptcha.min.js"),
  loadJs("https://service2.mtcaptcha.com/mtcv1/client/mtcaptcha2.min.js"),
]).then(function() {
  log("人机验证（mtCaptcha）加载成功！");
  isAlready = true;
});

/**
 * 获取 reCaptcha
 * @param id Element id
 * @param action 时间名
 */
export let loadMtCaptcha = function(id, action) {
  action = action || "addstar";
  return new Promise(function(resolve, reject) {
    if (!isAlready) {
      reject("人机验证正在加载中，请稍后再试");
    }
    window.mtcaptchaConfig["action"] = action;
    window.mtcaptchaConfig.renderQueue.push(id);
    resolve();
  });
};
