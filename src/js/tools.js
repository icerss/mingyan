/**
 * 动态加载JS
 */
function loadJs(url) {
    let su = document.createElement("script");
    su.src = url;
    let s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(su, s);
}

/**
 * 检测是否支持Webp
 */
function isSupportWebp() {
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
function qs(qs) {
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
function randomNumber(minNum, maxNum) {
    return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
}

/**
 * 弹窗
 * @param {Object} opt 选项
 */
function showPop(opt) {
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

module.exports = {
    loadJs,
    isSupportWebp,
    randomNumber,
    showPop,
    qs
};