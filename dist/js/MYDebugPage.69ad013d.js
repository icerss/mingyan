/*!
 * ERSS SAYING
 * (c) 2020-2022 Xhemj
 * Build: 2022-4-5 11:43:40
 * Version: 3.1.1
 * ====
 * o(〃＾▽＾〃)o
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([["MYDebugPage"],{"0ee6":function(t,n,e){"use strict";e("a894")},"543b":function(t,n,e){"use strict";e.r(n);var o=e("435f"),c=(e("cb6e"),e("89a8"),e("865d"),e("4c1e"),e("fee8"),e("b3d9"),e("cb0a"),e("2e83")),i=e("1b2a"),a=e("9944"),s={name:"MYDebugPage",data:function(){return{debugInfo:[],isShowAll:!1}},mounted:function(){this.getVersionInfo(),this.getSwInfo(),this.getOtherInfo(),this.getCfInfo(),this.getTcbInfo(),this.getServerInfo()},methods:{pushInfo:function(t,n,e){"未启用"!==n&&-1===n.indexOf("失败")||(e=e||!0),this.debugInfo.push({title:t,info:n,iserr:e})},getCfInfo:function(){var t=this;fetch("https://raw.erssmy.com/cdn-cgi/trace?t=_"+(new Date).getTime()).then((function(t){return t.text()})).then((function(n){n=n.split("\n");var e,c={},i=Object(o.a)(n);try{for(i.s();!(e=i.n()).done;){var a=e.value;c[a.split("=")[0]]=a.split("=")[1]}}catch(t){i.e(t)}finally{i.f()}t.pushInfo("User Agent",c.uag?c.uag:"获取失败"),t.pushInfo("CF 节点","命中节点：".concat(c.colo?c.colo:"获取失败","\n位置：").concat(c.loc?c.loc:"获取失败")),t.pushInfo("IP",c.ip?c.ip:"获取失败")})).catch((function(n){t.pushInfo("CF 信息","".concat("获取失败","\n")+n,!0)}))},getSwInfo:function(){var t=this;navigator.serviceWorker.getRegistration().then((function(n){t.pushInfo("Service Worker 状态",n?"正常":"未启用")})).catch((function(n){t.pushInfo("Service Worker 状态","".concat("获取失败","\n")+n)}))},getOtherInfo:function(){this.pushInfo("Local Storage 状态",localStorage?"正常":"未启用"),this.pushInfo("本地信息","UID：".concat(a.h.get("MY_TOKEN")||"获取失败"))},getVersionInfo:function(){this.pushInfo("当前时间",(new Date).toLocaleString()),window.my_cfg.buildTime&&this.pushInfo("构建时间",new Date(window.my_cfg.buildTime).toLocaleString()||"获取失败"),this.pushInfo("本地版本",window.my_cfg.version&&window.my_cfg.version+"\n"+a.h.get(a.i.shaVersion)||"获取失败")},getTcbInfo:function(){var t=JSON.parse(a.h.get("user_info_xhemj-0gjckebwf7276129")||{}).content;this.pushInfo("TCB 信息","登录时间：".concat(new Date(t.createTime).toLocaleString()||"获取失败","\nTCB_ID：").concat(t.uid||"获取失败"))},getServerInfo:function(){var t=this,n=function(n){fetch(i.b[n]+"?t=_".concat((new Date).getTime(),"&from=debug")).then((function(t){return t.text()})).then((function(){t.pushInfo("API 连接测试","".concat(i.b[n],"\n成功"))})).catch((function(e){t.pushInfo("API 连接测试","".concat(i.b[n],"\n失败\n")+e)}))};for(var e in i.b)n(e);Object(a.j)("https://recaptcha.net/recaptcha/api.js?onload=grecaptchaready&render=".concat(i.h)).then((function(){t.pushInfo("人机验证加载测试","https://recaptcha.net/recaptcha/api.js\n成功")})).catch((function(n){t.pushInfo("人机验证加载测试","https://recaptcha.net/recaptcha/api.js\n失败\n"+n)})),setTimeout((function(){Object(c.a)("debugtest").then((function(){t.pushInfo("人机验证测试","验证加载通过")})).catch((function(n){t.pushInfo("人机验证测试","验证加载失败\n".concat(n))}))}),1e3),fetch("https://tcb-api.tencentcloudapi.com/web?env=xhemj-0gjckebwf7276129&t=_".concat((new Date).getTime())).then((function(t){return t.text()})).then((function(){t.pushInfo("API 连接测试","https://tcb-api.tencentcloudapi.com/web\n成功")})).catch((function(){t.pushInfo("API 连接测试","https://tcb-api.tencentcloudapi.com/web\n失败")}))}}},h=(e("0ee6"),e("cba8")),f=Object(h.a)(s,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"my--debug-page"},[e("div",{staticClass:"debug-loading-mask"},[e("h2",{staticClass:"debug-loading-tip"},[t._v("请稍等，我们正在收集所需的信息……")]),e("code",{staticClass:"debug-show-all",on:{click:function(n){t.isShowAll=!t.isShowAll}}},[t._v(t._s(t.isShowAll?"点击只显示错误信息":"点击显示全部信息"))])]),t._l(t.debugInfo,(function(n){return e("div",{directives:[{name:"show",rawName:"v-show",value:n.iserr||t.isShowAll,expression:"item.iserr || isShowAll"}],key:n.title,staticClass:"debug-show-info-box",class:n.iserr?"error":""},[e("h2",{staticClass:"title"},[t._v(t._s(n.title))]),e("code",{staticClass:"info"},[t._v(t._s(n.info))])])}))],2)}),[],!1,null,"7ad9dbdc",null);n.default=f.exports},a894:function(t,n,e){}}]);