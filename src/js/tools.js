import { Notyf } from "notyf";
import "notyf/notyf.min.css";

/**
 * 动态加载JS
 */
export function loadJs(src, opt) {
  return new Promise(function(resolve) {
    let script = document.createElement("script"),
      head = document.getElementsByTagName("head")[0];
    script.type = "text/javascript";
    script.src = src;
    if (opt) {
      for (let key in opt) {
        script[key] = opt[key];
      }
    }
    if (script.addEventListener) {
      script.addEventListener(
        "load",
        function() {
          resolve();
        },
        false
      );
    } else if (script.attachEvent) {
      script.attachEvent("onreadystatechange", function() {
        let target = window.event.srcElement;
        if (target.readyState == "loaded") {
          resolve();
        }
      });
    }
    head.appendChild(script);
  });
}

/**
 * 检测是否支持Webp
 */
export function isSupportWebp() {
  try {
    return (
      document
        .createElement("canvas")
        .toDataURL("image/webp", 0.5)
        .indexOf("data:image/webp") === 0
    );
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
 * 元素是否显示
 */
export let isShow = function(el) {
  try {
    return (
      document.querySelector(el).style === "none" ||
      document.querySelector(el).style.visibility === "hidden"
    );
  } catch {
    return false;
  }
};

import { v4 as uuidv4 } from "uuid";
import { apiUrls, getConfig, normalPostHeader } from "./init";

/**
 * 获取 UID
 * @returns MY_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
 */
export let getUid = function() {
  if (kv.get(kvName.MY_TOKEN)) return kv.get(kvName.MY_TOKEN);
  let tk =
    "MY_" +
    uuidv4()
      .replace(/-/g, "")
      .toLocaleUpperCase();
  kv.put(kvName.MY_TOKEN, tk);
  return tk;
};

export let notyf = new Notyf({
  position: {
    x: "right",
    y: "top",
  },
  duration: 1500,
  dismissible: true,
  ripple: false,
  types: [
    {
      type: "warning",
      background: "orange",
    },
    {
      type: "error",
      background: "indianred",
      duration: 2000,
    },
    {
      type: "info",
      background: "#5676dc",
      icon: false,
    },
    {
      type: "test",
      background: "#5676dc",
      icon: false,
      duration: 999999999,
    },
    {
      type: "15s",
      background: "#5676dc",
      icon: false,
      duration: 15000,
    },
  ],
});

/**
 * Notyf 弹窗
 */
export let NotyfAlert = {
  su: function(text) {
    return notyf.success(text);
  },
  warn: function(text) {
    return notyf.open({
      type: "warning",
      message: text,
    });
  },
  err: function(text) {
    return notyf.open({
      type: "error",
      message: text,
    });
  },
  info: function(text) {
    return notyf.open({
      type: "info",
      message: text,
    });
  },
  test: function(text) {
    return notyf.open({
      type: "test",
      message: text,
    });
  },
};

/**
 * 看是不是手机（测试中……）
 */
export let deviceIsPhone = function() {
  return window.innerWidth <= 480;
};

export let kv = {
  get(name) {
    return localStorage.getItem(name) || null;
  },
  put(name, value = "") {
    return localStorage.setItem(name, value);
  },
};

export let kvName = {
  mingyanId: "___mingyan_id__",
  commentUser: "___mingyan_comment_user_",
  shaVersion: "sha_version",
  rankingIp: "___mingyan_2021_ranking_data__",
  rankingName: "___mingyan_2021_ranking_name__",
  MY_TOKEN: "MY_TOKEN",
};

export let fadeIn = function(el) {
  document.querySelector(el).classList.add("fadeIn");
  setTimeout(function() {
    document.querySelector(el).style.display = "";
    document.querySelector(el).classList.remove("fadeIn");
  }, 500);
};

export let fadeOut = function(el) {
  document.querySelector(el).classList.add("fadeOut");
  setTimeout(function() {
    document.querySelector(el).style.display = "none";
    document.querySelector(el).classList.remove("fadeOut");
  }, 500);
};

/**
 * 控制台输出
 */
function _log() {
  if (!getConfig("isDebugLog")) return function() {};
  let dn = 1;
  return function(...str) {
    let special1 = "";
    let special2 = "";
    console.log(
      `[耳斯名言]${new Date().getHours()}:${new Date().getMinutes()} #${dn} -> ${special1}`,
      ...str,
      special2
    );
    dn++;
  };
}
export let log = _log();
window["log"] = log;

export let addClickEvent = function(el, callback) {
  try {
    document.addEventListener("click", function(event) {
      let path = event.path;
      for (let item of path) {
        let classname, id;
        try {
          classname = (
            "." + (item.className || "").replaceAll(" ", " .")
          ).split(" ");
          id = ("#" + (item.id || "").replaceAll(" ", " #")).split(" ");
        } catch {} // eslint-disable-line
        if (!classname && !id) return;
        classname.map((e) => {
          if (el === e) {
            typeof callback === "function" && callback(event);
          }
        });
        id.map((e) => {
          if (el === e) {
            typeof callback === "function" && callback(event);
          }
        });
      }
    });
  } catch {} // eslint-disable-line
};

export let SaveAs = function(data, type, name) {
  let link = document.createElement("a");
  let exportName = name ? name : "data";
  let url = "data:text/" + type + ";charset=utf-8,\uFEFF" + encodeURI(data);
  link.href = url;
  link.download = exportName + "." + type;
  link.click();
};

export let getImageLink = function(path) {
  return new Promise(function(resolve, reject) {
    fetch(apiUrls.image, {
      ...normalPostHeader,
      body: JSON.stringify({
        picPath: path,
        t: new Date().getTime(),
      }),
    })
      .then((r) => r.json())
      .then(function(res) {
        resolve(res);
      })
      .catch(function(err) {
        reject(err);
      });
  });
};

export let getImageSize = function(url) {
  let image = new Image();
  image.src = url;
  return {
    height: image.height,
    width: image.width,
  };
};
