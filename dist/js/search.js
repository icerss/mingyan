/*!
 * ERSS SAYING
 * (c) 2020-2022 Xhemj
 * Build: 2022-2-27 20:11:21
 * Version: 3.1.1
 * ====
 * o(〃＾▽＾〃)o
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([["search"],{"048b":function(t,e,n){"use strict";n.r(e);var i=n("ccc5"),r=(n("b101"),n("2c45"),n("1860"),n("3903"),n("7cc4")),a=(n("5de7"),n("4278"),n("abd8"),n("6c2e"),n("c917"),n("c12c"),{name:"MYSearchHighlight",props:{text:String,searchText:String},computed:{handleSearch:function(){var t=new RegExp(this.searchText,"ig");return this.text.replace(t,'<span class="label label-secondary">'+this.searchText+"</span>")}}}),s=n("cba8"),c=Object(s.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"search-highlight",domProps:{innerHTML:this._s(this.handleSearch)}})}),[],!1,null,null,null).exports,o=n("f561"),u=n("9944"),h={name:"MYSearch",components:{MYSearchHighlight:c},data:function(){return{loadingSvg:'\x3c!-- 加载动画 --\x3e<svg xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink"style="margin: auto;background: none;shape-rendering: auto;position: relative;transform: translateY(60px);"width="30px"height="30px"viewBox="0 0 100 100"preserveAspectRatio="xMidYMid"><circle cx="50"cy="50"fill="none"stroke="rgba(0,0,0,.65)"stroke-width="10"r="35"stroke-dasharray="164.93361431346415 56.97787143782138"><animateTransform attributeName="transform"type="rotate"repeatCount="indefinite"dur="0.75s"values="0 50 50;360 50 50"keyTimes="0;1"></animateTransform></circle>\x3c!-- https://loading.io/ --\x3e</svg>',mingyan:r.d,isStartInput:!1,inputValue:"",isLoadHitsory:!1,isLoading:!0,listMode:"ranking",historyListWidth:[4,16,4],historyDataList:[],displayLength:25,scrollEvent:null,isNoResult:!1}},watch:{inputValue:function(){this.inputValue?(this.handleSearch(),this.listMode="search"):this.listMode="ranking";var t,e="",n=Object(i.a)(this.displayMingyan);try{for(n.s();!(t=n.n()).done;){var r=t.value;r&&(e+=r)}}catch(t){n.e(t)}finally{n.f()}this.isNoResult=!e},historyDataList:function(){this.listMode="ranking",this.isLoadHitsory=!0}},mounted:function(){this.getHistoryRanking(),this.scrollEvent=window.addEventListener("scroll",this.handleScroll)},computed:{displayDataList:function(){return this.displayMingyan.filter((function(t,e){this.displayLength}))},displayMingyan:function(){var t=this;if(this.isStartInput){for(var e=this.mingyan.filter((function(e){if(-1!==e.toLocaleLowerCase().indexOf(t.inputValue.toLocaleLowerCase()))return e})),n=[],i=0;i<this.displayLength;i++)n.push(e[i]);return n}for(var a=[],s=0;s<this.displayLength;s++)a.push(r.d[s]);return a}},methods:{handleScroll:function(){document.body.clientHeight-window.scrollY-window.innerHeight<document.body.clientHeight/this.displayLength&&(this.displayLength<this.mingyan.length&&this.displayLength+10<this.mingyan.length?this.displayLength+=10:this.displayLength=this.mingyan.length)},handleSearch:function(){this.inputValue?this.isStartInput=!0:(this.isStartInput=!1,this.resultLength=0)},getHistoryRanking:function(){var t=this;o.a.getHistoryRanking().then((function(e){for(var n=[],i=0;i<15;i++)n.push(e[i]);t.historyDataList=n,t.isLoading=!1})).catch((function(e){Object(u.j)(e),o.a.getRanking().then((function(e){e=e.data;for(var n=[],i=0;i<15;i++)n.push(e[i]);t.historyDataList=n,t.isLoading=!1}))})),setTimeout((function(){!t.historyDataList===[]&&(t.isLoading=!1)}),2e3)},findMingyan:function(t){for(var e in r.d)if(r.d[e]===t)return e;return 0}}},l=(n("ce34"),Object(s.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my--search"},[t.isLoading?t._e():n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],staticClass:"my--search-bar",attrs:{type:"search",id:"searchbar",placeholder:"搜索……",results:"5"},domProps:{value:t.inputValue},on:{input:function(e){e.target.composing||(t.inputValue=e.target.value)}}}),"search"===t.listMode?n("div",{staticClass:"search-list"},t._l(t.displayMingyan,(function(e){return n("div",{key:e,staticClass:"search-item"},[t.isStartInput?n("router-link",{staticClass:"showall-item",attrs:{to:"/@"+t.findMingyan(e)}},[e?n("MYSearchHighlight",{attrs:{searchText:t.inputValue,text:e}}):t._e()],1):n("router-link",{staticClass:"showall-item",attrs:{to:"/@"+t.findMingyan(e)}},[t._v(" "+t._s(e)+" ")])],1)})),0):t._e(),"ranking"===t.listMode?n("div",{staticClass:"search-history-list"},[t.isLoadHitsory?n("div",{staticClass:"history-list"},[n("div",{staticClass:"search-history-list-tip"},[t._v("每日精选名言：")]),t._l(t.historyDataList,(function(e,i){return n("div",{key:e.text,staticClass:"search-history-item"},[n("a-row",[n("a-col",{attrs:{span:t.historyListWidth[0],id:"star-ranking-num"}},[n("router-link",{attrs:{to:"/@"+t.findMingyan(e.text)}},[t._v(" "+t._s(new Number(i)+1)+" ")])],1),n("a-col",{staticClass:"my--star-ranking-text",attrs:{span:t.historyListWidth[1],id:"star-ranking-text"}},[n("router-link",{attrs:{to:"/@"+t.findMingyan(e.text)}},[t._v(" "+t._s(e.text)+" ")])],1)],1)],1)}))],2):n("div",{staticClass:"history-loading-mask"},[n("span",{staticClass:"loading-svg",domProps:{innerHTML:t._s(t.loadingSvg)}}),n("h3",[t._v("搜索加载中……")])])]):t._e(),t.isNoResult?n("span",{staticClass:"my--search-no-result"},[t._v("无结果")]):t._e()])}),[],!1,null,"7ee8b91d",null));e.default=l.exports},4278:function(t,e,n){var i=n("72ae"),r=n("7adc"),a=n("ad5f"),s=n("7928"),c=n("a9c9").f,o=n("2719").get,u=RegExp.prototype,h=i.TypeError;r&&a&&c(u,"dotAll",{configurable:!0,get:function(){if(this!==u){if("RegExp"===s(this))return!!o(this).dotAll;throw h("Incompatible receiver, RegExp required")}}})},"5de7":function(t,e,n){var i=n("7adc"),r=n("72ae"),a=n("b2e7"),s=n("ccb6"),c=n("9e41"),o=n("8d99"),u=n("a9c9").f,h=n("d2a3").f,l=n("7b4c"),d=n("3df9"),f=n("3727"),g=n("9b2d"),p=n("81f5"),m=n("fc96"),y=n("73d2"),v=n("9056"),b=n("2719").enforce,x=n("5b38"),w=n("ec39"),k=n("ad5f"),j=n("7576"),O=w("match"),_=r.RegExp,M=_.prototype,S=r.SyntaxError,L=a(g),E=a(M.exec),T=a("".charAt),R=a("".replace),Y=a("".indexOf),C=a("".slice),D=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,I=/a/g,P=/a/g,H=new _(I)!==I,N=p.MISSED_STICKY,V=p.UNSUPPORTED_Y,J=i&&(!H||N||k||j||y((function(){return P[O]=!1,_(I)!=I||_(P)==P||"/a/i"!=_(I,"i")})));if(s("RegExp",J)){for(var A=function(t,e){var n,i,r,a,s,u,h=l(M,this),g=d(t),p=void 0===e,m=[],y=t;if(!h&&g&&p&&t.constructor===A)return t;if((g||l(M,t))&&(t=t.source,p&&(e="flags"in y?y.flags:L(y))),t=void 0===t?"":f(t),e=void 0===e?"":f(e),y=t,k&&"dotAll"in I&&(i=!!e&&Y(e,"s")>-1)&&(e=R(e,/s/g,"")),n=e,N&&"sticky"in I&&(r=!!e&&Y(e,"y")>-1)&&V&&(e=R(e,/y/g,"")),j&&(t=(a=function(t){for(var e,n=t.length,i=0,r="",a=[],s={},c=!1,o=!1,u=0,h="";i<=n;i++){if("\\"===(e=T(t,i)))e+=T(t,++i);else if("]"===e)c=!1;else if(!c)switch(!0){case"["===e:c=!0;break;case"("===e:E(D,C(t,i+1))&&(i+=2,o=!0),r+=e,u++;continue;case">"===e&&o:if(""===h||v(s,h))throw new S("Invalid capture group name");s[h]=!0,a[a.length]=[h,u],o=!1,h="";continue}o?h+=e:r+=e}return[r,a]}(t))[0],m=a[1]),s=c(_(t,e),h?this:M,A),(i||r||m.length)&&(u=b(s),i&&(u.dotAll=!0,u.raw=A(function(t){for(var e,n=t.length,i=0,r="",a=!1;i<=n;i++)"\\"!==(e=T(t,i))?a||"."!==e?("["===e?a=!0:"]"===e&&(a=!1),r+=e):r+="[\\s\\S]":r+=e+T(t,++i);return r}(t),n)),r&&(u.sticky=!0),m.length&&(u.groups=m)),t!==y)try{o(s,"source",""===y?"(?:)":y)}catch(t){}return s},W=function(t){t in A||u(A,t,{configurable:!0,get:function(){return _[t]},set:function(e){_[t]=e}})},q=h(_),K=0;q.length>K;)W(q[K++]);M.constructor=A,A.prototype=M,m(r,"RegExp",A)}x("RegExp")},"6c2e":function(t,e,n){var i=n("72ae"),r=n("7adc"),a=n("81f5").MISSED_STICKY,s=n("7928"),c=n("a9c9").f,o=n("2719").get,u=RegExp.prototype,h=i.TypeError;r&&a&&c(u,"sticky",{configurable:!0,get:function(){if(this!==u){if("RegExp"===s(this))return!!o(this).sticky;throw h("Incompatible receiver, RegExp required")}}})},a52e:function(t,e,n){},ce34:function(t,e,n){"use strict";n("a52e")},f561:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var i,r,a=n("799e"),s=n("6afb"),c=(n("e186"),n("2c45"),n("592d"),n("390f"),n("a3f1"),n("3903"),n("f95d"),n("1b2a")),o=n("b652"),u=n("9944"),h=n("2e83"),l=c.b.star_v3,d={getNum:function(t){if(Promise)return t||(t=Object(u.m)(".my--mingyan-name").innerText.trim()+"："+Object(u.m)(".my--mingyan-text").innerText.trim()),new Promise((function(e,n){fetch(l,Object(s.a)(Object(s.a)({},c.g),{},{body:JSON.stringify({event:"getnum",data:{MY_text:t,MY_token:Object(u.e)(),t:(new Date).getTime()}})})).then((function(t){return t.json()})).then((function(t){e(t)})).catch((function(t){n(t)}))}))},addStar:(r=Object(a.a)(regeneratorRuntime.mark((function t(e,n,i){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Promise){t.next=2;break}return t.abrupt("return");case 2:if(e||n||(e=Object(u.m)(".my--mingyan-name").innerText.trim()+"："+Object(u.m)(".my--mingyan-text").innerText.trim()),r={},n&&e&&(r={MY_text:e}),n&&!e&&(r={MY_ID:n}),!n&&e&&(r={MY_text:e}),t.prev=7,t.t0=i,t.t0){t.next=13;break}return t.next=12,Object(h.a)();case 12:t.t0=t.sent;case 13:return i=t.t0,t.abrupt("return",new Promise((function(t,e){fetch(l,Object(s.a)(Object(s.a)({},c.g),{},{body:JSON.stringify({event:"addstar",data:Object(s.a)(Object(s.a)({},r),{},{MY_token:Object(u.e)(),re_token:i,t:(new Date).getTime()})})})).then((function(t){return t.json()})).then((function(e){t(e),0===e.code&&Object(o.recordEvent)(o.recordEventId.addStarEvent)})).catch((function(t){e(t)}))})));case 17:t.prev=17,t.t1=t.catch(7),u.a.err("点赞失败："+t.t1);case 20:case"end":return t.stop()}}),t,null,[[7,17]])}))),function(t,e,n){return r.apply(this,arguments)}),removeStar:(i=Object(a.a)(regeneratorRuntime.mark((function t(e,n,i){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Promise){t.next=2;break}return t.abrupt("return");case 2:if(e||(e=Object(u.m)(".my--mingyan-name").innerText.trim()+"："+Object(u.m)(".my--mingyan-text").innerText.trim()),n=n||"",t.prev=4,t.t0=i,t.t0){t.next=10;break}return t.next=9,Object(h.a)();case 9:t.t0=t.sent;case 10:return i=t.t0,t.abrupt("return",new Promise((function(t,n){fetch(l,Object(s.a)(Object(s.a)({},c.g),{},{body:JSON.stringify({event:"removestar",data:{MY_text:e,MY_token:Object(u.e)(),re_token:i,t:(new Date).getTime()}})})).then((function(t){return t.json()})).then((function(e){t(e),0===e.code&&Object(o.recordEvent)(o.recordEventId.removeStarEvent)})).catch((function(t){n(t)}))})));case 14:t.prev=14,t.t1=t.catch(4),u.a.err("点赞失败："+t.t1);case 17:case"end":return t.stop()}}),t,null,[[4,14]])}))),function(t,e,n){return i.apply(this,arguments)}),getRanking:function(){if(Promise)return new Promise((function(t,e){fetch(l,Object(s.a)(Object(s.a)({},c.g),{},{body:JSON.stringify({event:"ranking",data:{t:(new Date).getTime()}})})).then((function(t){return t.json()})).then((function(e){t(e),Object(o.recordEvent)(o.recordEventId.getCurrentRanking)})).catch((function(t){e(t)}))}))},getHistoryRanking:function(){if(Promise)return new Promise((function(t,e){setTimeout((function(){e("请求超时")}),2e3),fetch("".concat(c.b.ranking_history,"?t=_").concat((new Date).getTime())).then((function(t){return t.json()})).then((function(n){Object(u.j)(n),"请求成功"==n.msg&&(t(n.data),Object(o.recordEvent)(o.recordEventId.getHistoryRanking)),e(n.msg)}))}))},update:function(t,e){if(Promise){t||e||(t=Object(u.m)(".my--mingyan-name").innerText.trim()+"："+Object(u.m)(".my--mingyan-text").innerText.trim());var n={};return e&&t&&(n={MY_text:t}),e&&!t&&(n={MY_ID:e}),!e&&t&&(n={MY_text:t}),new Promise((function(t,e){fetch(l,Object(s.a)(Object(s.a)({},c.g),{},{body:JSON.stringify({event:"update",data:Object(s.a)(Object(s.a)({},n),{},{MY_token:Object(u.e)(),t:(new Date).getTime()})})})).then((function(t){return t.json()})).then((function(e){t(e)})).catch((function(t){e(t)}))}))}}}}}]);