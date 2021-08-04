import Vue from "vue";
import router from "./router";
// import i18n from "./i18n/i18n";
import App from "./App.vue";
import VueLazyload from "vue-lazyload";
import {
  Row,
  Col,
  Table,
  FormModel,
  Input,
  Button,
  Icon,
  Tooltip,
  List,
  Avatar,
  // Popover,
  Comment,
  Divider,
  Pagination,
} from "ant-design-vue";
import { kv } from "./js/tools";
import { getConfig } from "./js/init";

Vue.use(Row);
Vue.use(Col);
Vue.use(Table);
Vue.use(FormModel);
Vue.use(Input);
Vue.use(Button);
Vue.use(Icon);
Vue.use(Tooltip);
Vue.use(List);
Vue.use(Avatar);
// Vue.use(Popover);
Vue.use(Comment);
Vue.use(Divider);
Vue.use(Pagination);
Vue.use(VueLazyload, {
  loading: "assets/loading.svg",
});

let aegis;
if (getConfig("isInsertAegis")) {
  let aegisUin = {};
  if (kv.get("MY_TOKEN")) aegisUin = { uin: kv.get("MY_TOKEN") };
  let Aegis = window.Aegis;
  aegis = new Aegis({
    // eslint-disable-line
    id: "jYr96KM75PZJAq3LvV",
    ...aegisUin,
    reportApiSpeed: true,
    reportAssetSpeed: true,
    spa: true,
    version: "3.0.0",
  });
}

Vue.config.productionTip = false;
Vue.config.errorHandler = function(err, vm, info) {
  if (getConfig("isInsertAegis"))
    aegis.error(`Error: ${err.toString()}\nInfo: ${info}`);
  if (getConfig("isShowError"))
    console.error(`Error: ${err.toString()}\nInfo: ${info}`);
};

if (getConfig("isInsertBaidu")) {
  let _hmt = [];
  (function() {
    let hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?0673dbbe4e6ea51a92a74e3ba2bc051b";
    let s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  })();
  window._hmt = _hmt;

  (function() {
    var bp = document.createElement("script");
    var curProtocol = window.location.protocol.split(":")[0];
    if (curProtocol === "https") {
      bp.src = "https://zz.bdstatic.com/linksubmit/push.js";
    } else {
      bp.src = "http://push.zhanzhang.baidu.com/push.js";
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
  })();
}

new Vue({
  router,
  // i18n,
  render: (h) => h(App),
}).$mount("#app");

/**
 * 耶！！写完啦！！
 * 从2020-04-30 到  现在，
 * 这个网最初只是我们几个人开玩笑着说一说，
 * 谁知道真的能成功呢？
 * 还是要感谢一下的：
 * 感谢英语俞老师给了我们这个灵感，
 * 感谢数学潘老师给我们提供了那么多搞笑的名言，
 * 感谢Oranjezelf和骚骚恪提供的已经失传的数学老王的名言，
 * 感谢BlackToy画的背景图片和其它素材，
 * 感谢2018级8班的所有同学，
 * 感谢Xhemj做了这个网站，
 * 感谢看完了这段文字的你。
 *     —— Xhemj 2021-01-01
 */
