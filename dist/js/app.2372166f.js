(function(e){function t(t){for(var a,r,c=t[0],u=t[1],s=t[2],l=0,p=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},o={app:0},i=[];function c(e){return u.p+"js/"+({"action-page~main~page~search":"action-page~main~page~search","action-page":"action-page","main~page":"main~page",main:"main",page:"page",search:"search"}[e]||e)+"."+{"action-page~main~page~search":"82f0eb85","action-page":"80945a6b","main~page":"30da7c1a",main:"7637b20e",page:"f3cd78d0",search:"1dc734f4"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"action-page~main~page~search":1,"action-page":1,"main~page":1,main:1,page:1,search:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({"action-page~main~page~search":"action-page~main~page~search","action-page":"action-page","main~page":"main~page",main:"main",page:"page",search:"search"}[e]||e)+"."+{"action-page~main~page~search":"5982dd3f","action-page":"d88f51ab","main~page":"0f3af376",main:"7968b976",page:"bc7e598c",search:"66ffad3c"}[e]+".css",o=u.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===o))return t()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){s=p[c],l=s.getAttribute("data-href");if(l===a||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],d.parentNode.removeChild(d),n(i)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var p=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",p.name="ChunkLoadError",p.type=a,p.request=r,n[1](p)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("1fb7")},"1b2a":function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"e",(function(){return c})),n.d(t,"a",(function(){return u}));n("57d2"),n("2769"),n("0756");var a=n("6a79");window.onload=function(){var e=window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart;Object(a["l"])("Page load time is "+e+"ms")};var r="https://s-sh-1943-pic1.oss.dogecdn.com",o={star:"https://api.erss.club/api/star",star_v2:"https://api.erss.club/api/v2/star",submit:"https://api.erss.club/api/contribute",showfrom:"https://api.erss.club/api/info",ip:"https://ip-api.erss.club/api/ip"};String.prototype.trim=function(){return this.replace(/(^\s*)|(\s*$)/g,"")};var i={method:"POST",mode:"cors",headers:{"Content-Type":"application/json"}},c="6LdOb_gaAAAAAAIQpvSd_6a5yjeneoVlvM159zwH",u="https://s-sh-1943-pic1.oss.dogecdn.com/2021/05/23/ldzxMt9PYQ3LNyU.png"},"1c04":function(e,t,n){},"1d61":function(e,t){e.exports=marked},"1fb7":function(e,t,n){},"32b4":function(e,t,n){"use strict";n("c45b")},3493:function(e,t,n){},"391a":function(e,t,n){"use strict";n("3493")},"41cb":function(e,t,n){"use strict";n("b1fa"),n("2e6f"),n("af21");var a=n("8bbf"),r=n.n(a),o=n("a5e49"),i=function(){return Promise.all([n.e("action-page~main~page~search"),n.e("main~page"),n.e("main")]).then(n.bind(null,"2e06"))},c=function(){return Promise.all([n.e("action-page~main~page~search"),n.e("search")]).then(n.bind(null,"048b"))},u=function(){return Promise.all([n.e("action-page~main~page~search"),n.e("main~page"),n.e("page")]).then(n.bind(null,"67e2"))},s=function(){return Promise.all([n.e("action-page~main~page~search"),n.e("main~page"),n.e("page")]).then(n.bind(null,"27dd"))},l=function(){return Promise.all([n.e("action-page~main~page~search"),n.e("main~page"),n.e("page")]).then(n.bind(null,"5078"))},p=function(){return Promise.all([n.e("action-page~main~page~search"),n.e("main~page"),n.e("page")]).then(n.bind(null,"599a"))},d=function(){return Promise.all([n.e("action-page~main~page~search"),n.e("action-page")]).then(n.bind(null,"671f"))},f=function(){return Promise.all([n.e("action-page~main~page~search"),n.e("action-page")]).then(n.bind(null,"1ceb"))};r.a.use(o["a"]);var m=[{path:"/",name:"main",component:i,alias:"/@*"},{path:"/search",name:"search",component:c},{path:"/more",name:"more",component:u},{path:"/about",name:"about",component:s},{path:"/faq",name:"faq",component:l},{path:"/ranking",name:"ranking",component:d},{path:"/donate",name:"donate",component:p},{path:"/submit",name:"submit",component:f},{path:"/sponsor",redirect:"/donate"},{path:"*",redirect:"/"}],g=new o["a"]({mode:"hash",base:"/",routes:m});t["a"]=g},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"aegis",(function(){return de}));var a=n("1c03"),r=(n("6ece"),n("8000"),n("8441"),n("d14b"),n("a5c9"),n("e3c1"),n("b1fa"),n("c5ce"),n("2769"),n("8639"),n("8bbf")),o=n.n(r),i=n("41cb"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("MYHeader"),n("router-view")],1)},u=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"my--header",attrs:{id:"my--header"}},[n("a-row",{staticClass:"container"},[n("a-col",{attrs:{span:2}},[n("router-link",{attrs:{to:"/more",id:"el-a",title:"更多"}},[n("Tooltip",{attrs:{tip:"更多"}},[n("div",{staticClass:"header-icon"},[n("a-icon",{attrs:{type:"more"}})],1)])],1)],1),n("a",{attrs:{href:"./"}},[n("span",{staticClass:"my--title",attrs:{title:"ERSS名言"}},[n("i",{staticClass:"icon my--header-logo"})])]),n("a-col",{attrs:{span:16}}),n("a-col",{attrs:{span:2}},[n("router-link",{attrs:{to:"/search",id:"el-a",title:"搜索"}},[n("Tooltip",{attrs:{tip:"搜索"}},[n("div",{staticClass:"header-icon"},[n("a-icon",{attrs:{type:"search"}})],1)])],1)],1),n("a-col",{attrs:{span:2}},[n("a",{attrs:{id:"reload_buttom el-a",title:"刷新"},on:{click:e.reload}},[n("Tooltip",{attrs:{tip:"刷新"}},[n("div",{staticClass:"header-icon icon-reload"},[n("a-icon",{attrs:{type:"reload"}})],1)])],1)]),n("a-col",{attrs:{span:2}},[n("router-link",{attrs:{to:"ranking",id:"ranking-btn el-a",title:"排行榜"}},[n("Tooltip",{attrs:{tip:"排行榜"}},[n("div",{staticClass:"header-icon"},[n("i",{staticClass:"mdui-icon material-icons"},[e._v("")])])])],1)],1)],1)],1)},l=[],p=n("a4b3"),d=n.n(p),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-tooltip",{attrs:{placement:"bottom"}},[n("template",{slot:"title"},[n("span",[e._v(e._s(e.tip))])]),e._t("default")],2)},m=[],g={name:"Tooltip",props:{tip:String}},h=g,b=(n("a4fe"),n("4ac2")),v=Object(b["a"])(h,f,m,!1,null,null,null),y=v.exports,_={name:"MYHeader",components:{Tooltip:y},mounted:function(){var e=null;if(d.a.cutsTheMustard){var t=document.querySelector(".my--header");e=new d.a(t,{offset:300,tolerance:5})}e.init()},methods:{reload:function(){/\/$|\/@\d/.test(location.pathname)?document.querySelector("#reload").click():location.pathname="/"}}},w=_,S=(n("391a"),n("32b4"),Object(b["a"])(w,s,l,!1,null,"656acc44",null)),k=S.exports,E=n("6a79"),O=(n("9b24"),n("99a5")),j=(n("6a61"),n("1b2a")),P=n("911a"),T=null,x=null;function I(){return A.apply(this,arguments)}function A(){return A=Object(O["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x.anonymousAuthProvider().signIn();case 2:return e.next=4,x.getLoginState();case 4:t=e.sent,Object(E["l"])(t);case 6:case"end":return e.stop()}}),e)}))),A.apply(this,arguments)}T=P["a"].init({env:"xhemj-0gjckebwf7276129"}),x=T.auth(),I();var C={add:function(e,t){if(Promise)return new Promise((function(n,a){T.callFunction({name:"mingyan",data:{event:"add",name:e.toString(),ip:t,ua:navigator.userAgent.toString()||""}}).then((function(e){n(e)}))["catch"]((function(e){a(e)}))}))},update:function(e,t,n){if(Promise)return new Promise((function(a,r){T.callFunction({name:"mingyan",data:{event:"update",id:e,data:{name:t},num:n}}).then((function(e){a(e)}))["catch"]((function(e){r(e)}))}))},getIp:function(){if(Promise)return new Promise((function(e,t){fetch(j["b"].ip).then((function(e){return e.json()})).then((function(t){var n={ip:t.ip};e(n)}))["catch"]((function(e){t(e)}))}))},getNum:function(){if(Promise)return new Promise((function(e,t){T.callFunction({name:"mingyan",data:{event:"getnum"}}).then((function(t){e(t)}))["catch"]((function(e){t(e)}))}))}},M=n("1de4"),N=n.n(M),L=function(){if(!((new Date).getTime()<16094304e5)&&(-1==navigator.userAgent.toString().indexOf("bot")||-1==navigator.userAgent.toString().indexOf("spider"))&&!localStorage.getItem("___mingyan_2021_ranking_data__"))if("skip_ranking"!=Object(E["n"])("force_action")&&"sr"!=Object(E["n"])("do")){var e=null,t=null,n=null;C.getIp().then((function(e){return t=e.ip,localStorage.setItem("___mingyan_2021_ranking_data__","__".concat(t,"__")),C.add("一位不知道名字的访客",t)})).then((function(n){return localStorage.setItem("___mingyan_2021_ranking_data__","__".concat(t,"__")),e=n.result.res.id,C.getNum()})).then((function(e){return n=e["result"]["res1"]["data"][0]["num"],N()({title:"第".concat(n,"个人！！"),text:"恭喜你成为2021年第".concat(n,"个查看名言的人！！"),icon:"success",content:{element:"input",attributes:{placeholder:"写个名字记录一下你是谁吧！",type:"text"}},closeOnClickOutside:!1})})).then((function(t){if(t)return C.update(e,t,n);location.href="./"})).then((function(){location.href="./"}))["catch"]((function(e){console.error(e)}))}else localStorage.setItem("___mingyan_2021_ranking_data__","__SKIP__")},q={name:"App",components:{MYHeader:k},data:function(){return{}},watch:{"$route.path":function(e){console.log(e)}},mounted:function(){document.title="ERSS名言 · ERSS",window.addEventListener("hashchange",(function(){var e=window.location.hash;/#\d/.test(e)&&(window.location.href="./"+e)})),this.ranking()},methods:{ranking:function(){"2020"!=Object(E["n"])("force_action")&&localStorage.getItem("___mingyan_2021_ranking_data__")||L()}}},Y=q,B=(n("034f"),Object(b["a"])(Y,c,u,!1,null,null,null)),K=B.exports,H=n("697a"),R=n("ea10"),$=n.n(R),z=n("9254"),D=n.n(z),U=n("22cc"),F=n.n(U),J=n("ff03"),V=n.n(J),Q=n("45d7"),W=n.n(Q),Z=n("dc6d"),G=n.n(Z),X=n("7f6a"),ee=n.n(X),te=n("1f3e"),ne=n.n(te),ae=n("cb50"),re=n.n(ae),oe=n("b753"),ie=n.n(oe),ce=n("f2da"),ue=n.n(ce),se=n("bcb2"),le=n.n(se);n("d469"),n("9085"),n("ce59"),n("cd12"),n("0454"),n("07f9"),n("8d3b"),n("8f08"),n("b747"),n("97a8"),n("2bff"),n("ef54");o.a.use($.a),o.a.use(D.a),o.a.use(F.a),o.a.use(V.a),o.a.use(W.a),o.a.use(G.a),o.a.use(ee.a),o.a.use(ne.a),o.a.use(re.a),o.a.use(ie.a),o.a.use(ue.a),o.a.use(le.a),o.a.use(H["a"],{loading:"assets/loading.svg"});var pe={};localStorage.getItem("MY_TOKEN")&&(pe={uin:localStorage.getItem("MY_TOKEN")});var de=new Aegis(Object(a["a"])(Object(a["a"])({id:"jYr96KM75PZJAq3LvV"},pe),{},{reportApiSpeed:!0,reportAssetSpeed:!0,spa:!0,version:"3.0.0"}));o.a.config.productionTip=!1,o.a.config.errorHandler=function(e,t,n){console.log("Error: ".concat(e.toString(),"\nInfo: ").concat(n)),de.error("Error: ".concat(e.toString(),"\nInfo: ").concat(n))},new o.a({router:i["a"],render:function(e){return e(K)}}).$mount("#app");(function(){var e=document.createElement("script");e.src="https://hm.baidu.com/hm.js?0673dbbe4e6ea51a92a74e3ba2bc051b";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)})(),function(){var e=document.createElement("script"),t=window.location.protocol.split(":")[0];e.src="https"===t?"https://zz.bdstatic.com/linksubmit/push.js":"http://push.zhanzhang.baidu.com/push.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)}()},"6a79":function(e,t,n){"use strict";n.d(t,"k",(function(){return i})),n.d(t,"h",(function(){return c})),n.d(t,"n",(function(){return u})),n.d(t,"o",(function(){return s})),n.d(t,"g",(function(){return l})),n.d(t,"f",(function(){return p})),n.d(t,"m",(function(){return d})),n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return m})),n.d(t,"i",(function(){return g})),n.d(t,"j",(function(){return h})),n.d(t,"e",(function(){return b})),n.d(t,"l",(function(){return y})),n.d(t,"c",(function(){return _})),n.d(t,"b",(function(){return w}));var a=n("6283"),r=(n("b1fa"),n("9b24"),n("2769"),n("8639"),n("0756"),n("23d2"),n("2398"),n("a5c9"),n("e3c1"),n("eb62"),n("896e")),o=n("43b8");n("2634");function i(e,t){return new Promise((function(n){var a=document.createElement("script"),r=document.getElementsByTagName("head")[0];if(a.type="text/javascript",a.src=e,t)for(var o in t)a[o]=t[o];a.addEventListener?a.addEventListener("load",(function(){n()}),!1):a.attachEvent&&a.attachEvent("onreadystatechange",(function(){var e=window.event.srcElement;"loaded"==e.readyState&&n()})),r.appendChild(a)}))}function c(){try{return 0===document.createElement("canvas").toDataURL("image/webp",.5).indexOf("data:image/webp")}catch(e){return!1}}function u(e){var t=location.href;t=t.replace("?","?&").split("&");for(var n="",a=1;a<t.length;a++)0==t[a].indexOf(e+"=")&&(n=t[a].replace(e+"=",""));return n}function s(e,t){return parseInt(Math.random()*(t-e+1)+e,10)}var l=function(e){try{return"none"===document.querySelector(e).style||"hidden"===document.querySelector(e).style.visibility}catch(t){return!1}},p=function(){if(localStorage.getItem("MY_TOKEN"))return localStorage.getItem("MY_TOKEN");var e="MY_"+Object(r["a"])().replace(/-/g,"").toLocaleUpperCase();return localStorage.setItem("MY_TOKEN",e),e},d=new o["a"]({position:{x:"right",y:"top"},duration:1500,dismissible:!0,ripple:!1,types:[{type:"warning",background:"orange"},{type:"error",background:"indianred",duration:2e3},{type:"info",background:"#5676dc",icon:!1},{type:"test",background:"#5676dc",icon:!1,duration:999999999},{type:"incidents",background:"#5676dc",icon:!1,duration:15e3}]}),f={su:function(e){return d.success(e)},warn:function(e){return d.open({type:"warning",message:e})},err:function(e){return d.open({type:"error",message:e})},info:function(e){return d.open({type:"info",message:e})},test:function(e){return d.open({type:"test",message:e})}},m=function(){return window.innerWidth<=480},g={get:function(e){return localStorage.getItem(e)||null},put:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return localStorage.setItem(e,t)}},h={mingyanId:"___mingyan_id__"},b=function(e){document.querySelector(e).classList.add("fadeIn"),setTimeout((function(){document.querySelector(e).style.display="",document.querySelector(e).classList.remove("fadeIn")}),500)};function v(){var e=1;return function(){for(var t,n="",a="",r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];(t=console).log.apply(t,["[耳斯名言]".concat((new Date).getHours(),":").concat((new Date).getMinutes()," #").concat(e," -> ").concat(n)].concat(o,[a])),e++}}var y=v();window["log"]=y;var _=function(e,t){try{document.addEventListener("click",(function(n){var r,o=n.path,i=Object(a["a"])(o);try{for(i.s();!(r=i.n()).done;){var c=r.value,u=void 0,s=void 0;try{u=("."+(c.className||"").replaceAll(" "," .")).split(" "),s=("#"+(c.id||"").replaceAll(" "," #")).split(" ")}catch(l){}if(!u&&!s)return;u.map((function(a){e===a&&"function"===typeof t&&t(n)})),s.map((function(a){e===a&&"function"===typeof t&&t(n)}))}}catch(p){i.e(p)}finally{i.f()}}))}catch(n){}},w=function(e,t,n){var a=document.createElement("a"),r=n||"data",o="data:text/"+t+";charset=utf-8,\ufeff"+encodeURI(e);a.href=o,a.download=r+"."+t,a.click()}},"8bbf":function(e,t){e.exports=Vue},a4fe:function(e,t,n){"use strict";n("1c04")},c45b:function(e,t,n){}});