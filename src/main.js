import Vue from "vue";
import router from "./router";
// import i18n from "./i18n/i18n";
import App from "./App.vue";
import VueLazyload from "vue-lazyload";
/* ant design */
import Row from "ant-design-vue/lib/row";
import Col from "ant-design-vue/lib/col";
import Table from "ant-design-vue/lib/table";
import FormModel from "ant-design-vue/lib/form-model";
import Input from "ant-design-vue/lib/input";
import Button from "ant-design-vue/lib/button";
import Icon from "ant-design-vue/lib/icon";
import Tooltip from "ant-design-vue/lib/tooltip";
import List from "ant-design-vue/lib/list";
import Avatar from "ant-design-vue/lib/avatar";
import Spin from "ant-design-vue/lib/spin";
import Popover from "ant-design-vue/lib/popover";
import Comment from "ant-design-vue/lib/comment";
import "ant-design-vue/lib/row/style";
import "ant-design-vue/lib/col/style";
import "ant-design-vue/lib/table/style";
import "ant-design-vue/lib/form-model/style";
import "ant-design-vue/lib/input/style";
import "ant-design-vue/lib/button/style";
import "ant-design-vue/lib/icon/style";
import "ant-design-vue/lib/tooltip/style";
import "ant-design-vue/lib/list/style";
import "ant-design-vue/lib/avatar/style";
import "ant-design-vue/lib/spin/style";
import "ant-design-vue/lib/popover/style";
import "ant-design-vue/lib/comment/style";

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
Vue.use(Spin);
Vue.use(Popover);
Vue.use(Comment);
Vue.use(VueLazyload, {
  loading: "assets/loading.svg"
});

let aegisUin = {};
if (localStorage.getItem("MY_TOKEN")) aegisUin = { uin: localStorage.getItem("MY_TOKEN") };
export const aegis = new Aegis({ // eslint-disable-line
  id: "jYr96KM75PZJAq3LvV",
  ...aegisUin,
  reportApiSpeed: true,
  reportAssetSpeed: true,
  spa: true,
  version: "3.0.0"
});

Vue.config.productionTip = false
Vue.config.errorHandler = function (err, vm, info) {
  aegis.error(`Error: ${err.toString()}\nInfo: ${info}`);
  console.error(`Error: ${err.toString()}\nInfo: ${info}`);
};

let _hmt = [];
(function () {
  let hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?0673dbbe4e6ea51a92a74e3ba2bc051b";
  let s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
window._hmt = _hmt;

(function () {
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

new Vue({
  router,
  // i18n,
  render: h => h(App),
}).$mount("#app");