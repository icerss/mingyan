/*!
 * ERSS SAYING
 * (c) 2020-2022 Xhemj
 * Build: 2022-5-14 09:58:55
 * Version: 3.1.1
 * ====
 * o(〃＾▽＾〃)o
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([["MYSearch-c1807361"],{"048b":function(t,e,n){"use strict";n.r(e);var i=n("66b1"),a=(n("8300"),n("ea5b"),n("e551"),n("1444"),n("5ab0"),n("7cc5"),n("7cc4")),r=n("f561"),s=n("9944"),c={name:"MYSearch",components:{MYSearchHighlight:function(){return n.e("MYSearchHighlight-31ecd969").then(n.bind(null,"4213"))}},data:function(){return{loadingSvg:'\x3c!-- 加载动画 --\x3e<svg xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink"style="margin: auto;background: none;shape-rendering: auto;position: relative;transform: translateY(60px);"width="30px"height="30px"viewBox="0 0 100 100"preserveAspectRatio="xMidYMid"><circle cx="50"cy="50"fill="none"stroke="rgba(0,0,0,.65)"stroke-width="10"r="35"stroke-dasharray="164.93361431346415 56.97787143782138"><animateTransform attributeName="transform"type="rotate"repeatCount="indefinite"dur="0.75s"values="0 50 50;360 50 50"keyTimes="0;1"></animateTransform></circle>\x3c!-- https://loading.io/ --\x3e</svg>',mingyan:a.d,isStartInput:!1,inputValue:"",isLoadHitsory:!1,isLoading:!0,listMode:"ranking",historyListWidth:[4,16,4],historyDataList:[],displayLength:25,scrollEvent:null,isNoResult:!1}},watch:{inputValue:function(){this.inputValue?(this.handleSearch(),this.listMode="search"):this.listMode="ranking";var t,e="",n=Object(i.a)(this.displayMingyan);try{for(n.s();!(t=n.n()).done;){var a=t.value;a&&(e+=a)}}catch(t){n.e(t)}finally{n.f()}this.isNoResult=!e},historyDataList:function(){this.listMode="ranking",this.isLoadHitsory=!0}},mounted:function(){this.getHistoryRanking(),this.scrollEvent=window.addEventListener("scroll",this.handleScroll)},computed:{displayDataList:function(){return this.displayMingyan.filter((function(t,e){this.displayLength}))},displayMingyan:function(){var t=this;if(this.isStartInput){for(var e=this.mingyan.filter((function(e){if(-1!==e.toLocaleLowerCase().indexOf(t.inputValue.toLocaleLowerCase()))return e})),n=[],i=0;i<this.displayLength;i++)n.push(e[i]);return n}for(var r=[],s=0;s<this.displayLength;s++)r.push(a.d[s]);return r}},methods:{handleScroll:function(){document.body.clientHeight-window.scrollY-window.innerHeight<document.body.clientHeight/this.displayLength&&(this.displayLength<this.mingyan.length&&this.displayLength+10<this.mingyan.length?this.displayLength+=10:this.displayLength=this.mingyan.length)},handleSearch:function(){this.inputValue?this.isStartInput=!0:(this.isStartInput=!1,this.resultLength=0)},getHistoryRanking:function(){var t=this;r.a.getHistoryRanking(window.my_cfg.source).then((function(e){for(var n=[],i=e.length<15?e.length:15,a=0;a<i;a++)n.push(e[a]);t.historyDataList=n,t.isLoading=!1})).catch((function(e){Object(s.j)(e),r.a.getRanking().then((function(e){e=e.data;for(var n=[],i=0;i<15;i++)n.push(e[i]);t.historyDataList=n,t.isLoading=!1}))})),setTimeout((function(){!t.historyDataList===[]&&(t.isLoading=!1)}),2e3)},findMingyan:function(t){for(var e in a.d)if(a.d[e]===t)return e;return 0}}},o=(n("96c5"),n("cba8")),u=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my--search"},[t.isLoading?t._e():n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],staticClass:"my--search-bar",attrs:{type:"search",id:"searchbar",placeholder:"搜索……",results:"5"},domProps:{value:t.inputValue},on:{input:function(e){e.target.composing||(t.inputValue=e.target.value)}}}),"search"===t.listMode?n("div",{staticClass:"search-list"},t._l(t.displayMingyan,(function(e){return n("div",{key:e,staticClass:"search-item"},[t.isStartInput?n("router-link",{staticClass:"showall-item",attrs:{to:"/@"+t.findMingyan(e)}},[e?n("MYSearchHighlight",{attrs:{searchText:t.inputValue,text:e}}):t._e()],1):n("router-link",{staticClass:"showall-item",attrs:{to:"/@"+t.findMingyan(e)}},[t._v(" "+t._s(e)+" ")])],1)})),0):t._e(),"ranking"===t.listMode?n("div",{staticClass:"search-history-list"},[t.isLoadHitsory?n("div",{staticClass:"history-list"},[n("div",{staticClass:"search-history-list-tip"},[t._v("每日精选名言：")]),t._l(t.historyDataList,(function(e,i){return n("div",{key:e.text,staticClass:"search-history-item"},[n("a-row",[n("a-col",{attrs:{span:t.historyListWidth[0],id:"star-ranking-num"}},[n("router-link",{attrs:{to:"/@"+t.findMingyan(e.text)}},[t._v(" "+t._s(new Number(i)+1)+" ")])],1),n("a-col",{staticClass:"my--star-ranking-text",attrs:{span:t.historyListWidth[1],id:"star-ranking-text"}},[n("router-link",{attrs:{to:"/@"+t.findMingyan(e.text)}},[t._v(" "+t._s(e.text)+" ")])],1)],1)],1)}))],2):n("div",{staticClass:"history-loading-mask"},[n("span",{staticClass:"loading-svg",domProps:{innerHTML:t._s(t.loadingSvg)}}),n("h3",[t._v("搜索加载中……")])])]):t._e(),t.isNoResult?n("span",{staticClass:"my--search-no-result"},[t._v("无结果")]):t._e()])}),[],!1,null,"729ad662",null);e.default=u.exports},"2e83":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n("8300");var i=n("1b2a"),a=n("9944");Object(a.i)("https://recaptcha.net/recaptcha/api.js?onload=grecaptchaready&render=6LdOb_gaAAAAAAIQpvSd_6a5yjeneoVlvM159zwH",{async:!0,defer:!0});var r=!1;window.grecaptchaready=function(){Object(a.j)("人机验证（reCaptcha）加载成功！"),r=!0};var s=function(t){return t=t||"addstar",new Promise((function(e,n){r||n("人机验证正在加载中，请稍后再试"),window.grecaptcha.execute(i.h,{action:t}).then((function(t){e(t)})).catch((function(t){n(t)}))}))}},"7c37":function(t,e,n){},"96c5":function(t,e,n){"use strict";n("7c37")},f561:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var i,a,r=n("291b"),s=n("b49e"),c=(n("e186"),n("8300"),n("041f"),n("7141"),n("83df"),n("7cc5"),n("654b"),n("1b2a")),o=n("d633"),u=n("9944"),h=n("2e83"),l=c.b.star_v3,d={getNum:function(t){if(Promise)return t||(t=Object(u.m)(".my--mingyan-name").innerText.trim()+"："+Object(u.m)(".my--mingyan-text").innerText.trim()),new Promise((function(e,n){fetch(l,Object(s.a)(Object(s.a)({},c.g),{},{body:JSON.stringify({event:"getnum",data:{MY_text:t,MY_token:Object(u.e)(),t:(new Date).getTime()}})})).then((function(t){return t.json()})).then((function(t){e(t)})).catch((function(t){n(t)}))}))},addStar:(a=Object(r.a)(regeneratorRuntime.mark((function t(e,n,i){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Promise){t.next=2;break}return t.abrupt("return");case 2:if(e||n||(e=Object(u.m)(".my--mingyan-name").innerText.trim()+"："+Object(u.m)(".my--mingyan-text").innerText.trim()),a={},n&&e&&(a={MY_text:e}),n&&!e&&(a={MY_ID:n}),!n&&e&&(a={MY_text:e}),t.prev=7,t.t0=i,t.t0){t.next=13;break}return t.next=12,Object(h.a)();case 12:t.t0=t.sent;case 13:return i=t.t0,t.abrupt("return",new Promise((function(t,e){fetch(l,Object(s.a)(Object(s.a)({},c.g),{},{body:JSON.stringify({event:"addstar",data:Object(s.a)(Object(s.a)({},a),{},{MY_token:Object(u.e)(),re_token:i,t:(new Date).getTime()})})})).then((function(t){return t.json()})).then((function(e){t(e),0===e.code&&Object(o.a)(o.b.addStarEvent)})).catch((function(t){e(t)}))})));case 17:t.prev=17,t.t1=t.catch(7),u.a.err("点赞失败："+t.t1);case 20:case"end":return t.stop()}}),t,null,[[7,17]])}))),function(t,e,n){return a.apply(this,arguments)}),removeStar:(i=Object(r.a)(regeneratorRuntime.mark((function t(e,n,i){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Promise){t.next=2;break}return t.abrupt("return");case 2:if(e||(e=Object(u.m)(".my--mingyan-name").innerText.trim()+"："+Object(u.m)(".my--mingyan-text").innerText.trim()),n=n||"",t.prev=4,t.t0=i,t.t0){t.next=10;break}return t.next=9,Object(h.a)();case 9:t.t0=t.sent;case 10:return i=t.t0,t.abrupt("return",new Promise((function(t,n){fetch(l,Object(s.a)(Object(s.a)({},c.g),{},{body:JSON.stringify({event:"removestar",data:{MY_text:e,MY_token:Object(u.e)(),re_token:i,t:(new Date).getTime()}})})).then((function(t){return t.json()})).then((function(e){t(e),0===e.code&&Object(o.a)(o.b.removeStarEvent)})).catch((function(t){n(t)}))})));case 14:t.prev=14,t.t1=t.catch(4),u.a.err("点赞失败："+t.t1);case 17:case"end":return t.stop()}}),t,null,[[4,14]])}))),function(t,e,n){return i.apply(this,arguments)}),getRanking:function(t){if(Promise)return new Promise((function(e,n){fetch(l,Object(s.a)(Object(s.a)({},c.g),{},{body:JSON.stringify({event:"ranking",data:{t:(new Date).getTime(),source:t}})})).then((function(t){return t.json()})).then((function(t){e(t),Object(o.a)(o.b.getCurrentRanking)})).catch((function(t){n(t)}))}))},getHistoryRanking:function(t){if(Promise)return new Promise((function(e,n){setTimeout((function(){n("请求超时")}),2e3),fetch("".concat(c.b.ranking_history,"?t=_").concat((new Date).getTime(),"&source=").concat(t)).then((function(t){return t.json()})).then((function(t){Object(u.j)(t),"请求成功"==t.msg&&(e(t.data),Object(o.a)(o.b.getHistoryRanking)),n(t.msg)}))}))},update:function(t,e){if(Promise){t||e||(t=Object(u.m)(".my--mingyan-name").innerText.trim()+"："+Object(u.m)(".my--mingyan-text").innerText.trim());var n={};return e&&t&&(n={MY_text:t}),e&&!t&&(n={MY_ID:e}),!e&&t&&(n={MY_text:t}),new Promise((function(t,e){fetch(l,Object(s.a)(Object(s.a)({},c.g),{},{body:JSON.stringify({event:"update",data:Object(s.a)(Object(s.a)({},n),{},{MY_token:Object(u.e)(),t:(new Date).getTime()})})})).then((function(t){return t.json()})).then((function(e){t(e)})).catch((function(t){e(t)}))}))}}}}}]);