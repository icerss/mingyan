<template>
  <div class="my--debug-page">
    <div class="debug-loading-mask">
      <h2 class="debug-loading-tip">请稍等，我们正在收集所需的信息……</h2>
      <code class="debug-show-all" @click="isShowAll = !isShowAll">{{
        !isShowAll ? "点击显示全部信息" : "点击只显示错误信息"
      }}</code>
    </div>
    <div
      class="debug-show-info-box"
      v-for="item of debugInfo"
      v-show="item.iserr || isShowAll"
      :key="item.title"
      :class="item.iserr ? 'error' : ''"
    >
      <h2 class="title">{{ item.title }}</h2>
      <code class="info">{{ item.info }}</code>
    </div>
  </div>
</template>

<script>
import { loadCaptcha } from "../js/feat/loadCaptcha";
import { apiUrls, reCaptchaKey } from "../js/init";
import { kv, kvName, loadJs } from "../js/tools";

let getFailed = "获取失败";
export default {
  name: "MYDebugPage",
  data() {
    return {
      debugInfo: [],
      isShowAll: false,
    };
  },
  mounted() {
    this.getVersionInfo();
    this.getSwInfo();
    this.getOtherInfo();
    this.getCfInfo();
    this.getTcbInfo();
    this.getServerInfo();
  },
  methods: {
    pushInfo(title, info, iserr) {
      if (info === "未启用" || info.indexOf("失败") !== -1)
        iserr = iserr || true;
      this.debugInfo.push({ title, info, iserr });
    },
    getCfInfo() {
      let root = this;
      fetch("https://raw.erssmy.com/cdn-cgi/trace?t=_" + new Date().getTime())
        .then((r) => r.text())
        .then(function(res) {
          res = res.split("\n");
          let o = {};
          for (let item of res) {
            o[item.split("=")[0]] = item.split("=")[1];
          }
          root.pushInfo("User Agent", o["uag"] ? o["uag"] : getFailed);
          root.pushInfo(
            "CF 节点",
            `命中节点：${o["colo"] ? o["colo"] : getFailed}\n位置：${
              o["loc"] ? o["loc"] : getFailed
            }`
          );
          root.pushInfo("IP", o["ip"] ? o["ip"] : getFailed);
        })
        .catch(function(err) {
          root.pushInfo("CF 信息", `${getFailed}\n` + err, true);
        });
    },
    getSwInfo() {
      let root = this;
      navigator.serviceWorker
        .getRegistration()
        .then((registration) => {
          root.pushInfo(
            "Service Worker 状态",
            registration ? "正常" : "未启用"
          );
        })
        .catch((err) => {
          root.pushInfo("Service Worker 状态", `${getFailed}\n` + err);
        });
    },
    getOtherInfo() {
      this.pushInfo("Local Storage 状态", localStorage ? "正常" : "未启用");
      this.pushInfo("本地信息", `UID：${kv.get("MY_TOKEN") || getFailed}`);
    },
    getVersionInfo() {
      this.pushInfo("当前时间", new Date().toLocaleString());
      if (window.my_cfg.buildTime)
        this.pushInfo(
          "构建时间",
          new Date(window.my_cfg.buildTime).toLocaleString() || getFailed
        );
      this.pushInfo(
        "本地版本",
        window.my_cfg.version
          ? window.my_cfg.version + "\n" + kv.get(kvName.shaVersion) ||
              getFailed
          : getFailed
      );
    },
    getTcbInfo() {
      let localData = JSON.parse(
        kv.get("user_info_xhemj-0gjckebwf7276129") || {}
      ).content;
      this.pushInfo(
        "TCB 信息",
        `登录时间：${new Date(localData.createTime).toLocaleString() ||
          getFailed}\nTCB_ID：${localData.uid || getFailed}`
      );
    },
    getServerInfo() {
      let root = this;
      for (let key in apiUrls) {
        fetch(apiUrls[key] + `?t=_${new Date().getTime()}&from=debug`)
          .then((r) => r.text())
          .then(function() {
            root.pushInfo(`API 连接测试`, `${apiUrls[key]}\n成功`);
          })
          .catch(function(err) {
            root.pushInfo(`API 连接测试`, `${apiUrls[key]}\n失败\n` + err);
          });
      }
      loadJs(
        `https://recaptcha.net/recaptcha/api.js?onload=grecaptchaready&render=${reCaptchaKey}`
      )
        .then(function() {
          root.pushInfo(
            `人机验证加载测试`,
            `https://recaptcha.net/recaptcha/api.js\n成功`
          );
        })
        .catch(function(err) {
          root.pushInfo(
            `人机验证加载测试`,
            `https://recaptcha.net/recaptcha/api.js\n失败\n` + err
          );
        });
      setTimeout(() => {
        loadCaptcha("debugtest")
          .then(function() {
            root.pushInfo(`人机验证测试`, `验证加载通过`);
          })
          .catch(function(err) {
            root.pushInfo(`人机验证测试`, `验证加载失败\n${err}`);
          });
      }, 1000);
      fetch(
        `https://tcb-api.tencentcloudapi.com/web?env=xhemj-0gjckebwf7276129&t=_${new Date().getTime()}`
      )
        .then((r) => r.text())
        .then(function() {
          root.pushInfo(
            `API 连接测试`,
            `https://tcb-api.tencentcloudapi.com/web\n成功`
          );
        })
        .catch(function() {
          root.pushInfo(
            `API 连接测试`,
            `https://tcb-api.tencentcloudapi.com/web\n失败`
          );
        });
    },
  },
};
</script>

<style scoped>
.my--debug-page {
  font-family: Google Sans, Ubuntu, Roboto, Noto Sans SC, sans-serif;
  text-align: center;
}

.debug-show-info-box {
  background-color: #e6f4ea;
  padding: 2rem;
  margin: 1rem;
  min-height: 3rem;
  border-radius: 9px;
  flex-grow: 1;
}

.debug-show-info-box.error {
  background-color: #ffb70091;
}

.debug-show-info-box > * {
  white-space: pre-wrap;
}
</style>
