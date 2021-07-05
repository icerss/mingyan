/**
 * 动态加载JS
 */
export function loadJs(url, opt) {
    let su = document.createElement("script");
    su.src = url;
    if (opt) {
        for (let key in opt) {
            su[key] = opt[key]
        };
    };
    let s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(su, s);
}

/**
 * 检测是否支持Webp
 */
export function isSupportWebp() {
    try {
        return document.createElement("canvas").toDataURL("image/webp", 0.5).indexOf("data:image/webp") === 0;
    } catch (err) {
        return false;
    }
}

/**
 * 获取url参数
 * @param {String} qs 要获取的参数名
 */
export function qs(qs) {
    let s = location.href;
    s = s.replace("?", "?&").split("&");
    let re = "";
    for (let i = 1; i < s.length; i++) {
        if (s[i].indexOf(qs + "=") == 0) {
            re = s[i].replace(qs + "=", "");
        }
    }
    return re;
}

/**
 * 生成随机整数
 * @param {Num} minNum 最小值
 * @param {Num} maxNum 最大值
 */
export function randomNumber(minNum, maxNum) {
    return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
}

/**
 * 弹窗
 * @deprecated 已更换为 Notyf
 * @param {Object} opt 选项
 */
export function showPop(opt) {
    let pop_elements = {};
    opt.time = opt.time || 5000;
    opt.url = opt.url || "";
    pop_elements.container = document.createElement("div");
    pop_elements.container.id = "pop";
    pop_elements.container.style.cssText = "z-index:10000;";
    pop_elements.modal = document.createElement("div");
    pop_elements.modal.style.cssText = "z-index:99999;position:fixed;box-shadow: 0 5px 15px -5px rgba(0,0,0,0.8);display:inline-block;color:black;padding:24px;background-color:white;top:12px;right:12px;border-radius:12px;font-size:18px;transition:all 250ms ease;opacity:0";
    pop_elements.a = document.createElement("a");
    pop_elements.a.innerText = opt.url;
    pop_elements.a.href = opt.url;
    pop_elements.a.addEventListener("click", (e) => {
        e.preventDefault();
    });
    pop_elements.p = document.createElement("p");
    pop_elements.p.style.cssText = "padding:0;margin:0;";
    pop_elements.p.innerHTML = opt.text;
    pop_elements.modal.appendChild(pop_elements.p);
    pop_elements.modal.appendChild(pop_elements.a);
    pop_elements.container.appendChild(pop_elements.modal);
    let pop_body = document.querySelector("body");
    pop_body.appendChild(pop_elements.container);
    requestAnimationFrame(function () {
        requestAnimationFrame(function () {
            pop_elements.modal.style.opacity = 1;
        });
    });

    setTimeout(function () {
        pop_elements.modal.style.opacity = 0;
        setTimeout(function () {
            pop_elements.container.remove();
        }, 260);
    }, opt.time);
}

/**
 * 元素是否显示
 */
export let isShow = function (el) {
    return !$(el).is(":hidden");
};

/**
 * 节流
 */
export let throttle = function (func, delay) {
    let prev = Date.now();
    return function () {
        let context = this;
        let args = arguments;
        let now = Date.now();
        if (now - prev >= delay) {
            func.apply(context, args);
            prev = Date.now();
        }
    };
};

import { v4 as uuidv4 } from "uuid";

/**
 * 获取 UID
 * @returns MY_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
 */
export let getUid = function () {
    if (localStorage.getItem("MY_TOKEN")) return localStorage.getItem("MY_TOKEN");
    let tk = "MY_" + uuidv4().replace(/-/g, "").toLocaleUpperCase();
    localStorage.setItem("MY_TOKEN", tk);
    return tk;
};

import { Notyf } from "notyf";
import "notyf/notyf.min.css";

let notyf = new Notyf({
    position: {
        x: "right",
        y: "top"
    },
    duration: 1500,
    dismissible: true,
    ripple: false,
    types: [
        {
            type: "warning",
            background: "orange"
        },
        {
            type: "error",
            background: "indianred",
            duration: 2000,
        },
        {
            type: "info",
            background: "#5676dc",
            icon: false
        },
        {
            type: "test",
            background: "#5676dc",
            icon: false,
            duration: 999999999
        }
    ]
});

/**
 * Notyf 弹窗
 */
export let NotyfAlert = {
    su: function (text) {
        return notyf.success(text);
    },
    warn: function (text) {
        return notyf.open({
            type: "warning",
            message: text
        });
    },
    err: function (text) {
        return notyf.open({
            type: "error",
            message: text
        });
    },
    info: function (text) {
        return notyf.open({
            type: "info",
            message: text
        });
    },
    test: function(text) {
        return notyf.open({
            type: "test",
            message: text
        });
    }
};

/**
 * 看是不是手机（测试中……）
 */
export let deviceIsPhone = function () {
    return window.innerWidth <= 480
};