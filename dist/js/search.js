/*!
 * ERSS SAYING
 * (c) 2020-2022 Xhemj
 * Build: 2022-1-22 10:54:36
 * Version: 3.1.1
 * ====
 * o(〃＾▽＾〃)o
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([["search"],{"048b":function(t,e,n){"use strict";n.r(e);var i=n("d399"),a=(n("6a9b"),n("81f1"),n("b31b"),n("7cc4")),r=(n("5816"),n("a717"),n("7d8f"),n("d7f0"),{name:"MYSearchHighlight",props:{text:String,searchText:String},computed:{handleSearch:function(){var t=new RegExp(this.searchText,"ig");return this.text.replace(t,'<span class="label label-secondary">'+this.searchText+"</span>")}}}),s=n("cba8"),c=Object(s.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"search-highlight",domProps:{innerHTML:this._s(this.handleSearch)}})}),[],!1,null,null,null).exports,o=n("f561"),u=n("9944"),h={name:"MYSearch",components:{MYSearchHighlight:c},data:function(){return{loadingSvg:'\x3c!-- 加载动画 --\x3e<svg xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink"style="margin: auto;background: none;shape-rendering: auto;position: relative;transform: translateY(60px);"width="30px"height="30px"viewBox="0 0 100 100"preserveAspectRatio="xMidYMid"><circle cx="50"cy="50"fill="none"stroke="rgba(0,0,0,.65)"stroke-width="10"r="35"stroke-dasharray="164.93361431346415 56.97787143782138"><animateTransform attributeName="transform"type="rotate"repeatCount="indefinite"dur="0.75s"values="0 50 50;360 50 50"keyTimes="0;1"></animateTransform></circle>\x3c!-- https://loading.io/ --\x3e</svg>',mingyan:a.d,isStartInput:!1,inputValue:"",isLoadHitsory:!1,isLoading:!0,listMode:"ranking",historyListWidth:[4,16,4],historyDataList:[],displayLength:25,scrollEvent:null,isNoResult:!1}},watch:{inputValue:function(){this.inputValue?(this.handleSearch(),this.listMode="search"):this.listMode="ranking";var t,e="",n=Object(i.a)(this.displayMingyan);try{for(n.s();!(t=n.n()).done;){var a=t.value;a&&(e+=a)}}catch(t){n.e(t)}finally{n.f()}this.isNoResult=!e},historyDataList:function(){this.listMode="ranking",this.isLoadHitsory=!0}},mounted:function(){this.getHistoryRanking(),this.scrollEvent=window.addEventListener("scroll",this.handleScroll)},computed:{displayDataList:function(){return this.displayMingyan.filter((function(t,e){this.displayLength}))},displayMingyan:function(){var t=this;if(this.isStartInput){for(var e=this.mingyan.filter((function(e){if(-1!==e.toLocaleLowerCase().indexOf(t.inputValue.toLocaleLowerCase()))return e})),n=[],i=0;i<this.displayLength;i++)n.push(e[i]);return n}for(var r=[],s=0;s<this.displayLength;s++)r.push(a.d[s]);return r}},methods:{handleScroll:function(){document.body.clientHeight-window.scrollY-window.innerHeight<document.body.clientHeight/this.displayLength&&(this.displayLength<this.mingyan.length&&this.displayLength+10<this.mingyan.length?this.displayLength+=10:this.displayLength=this.mingyan.length)},handleSearch:function(){this.inputValue?this.isStartInput=!0:(this.isStartInput=!1,this.resultLength=0)},getHistoryRanking:function(){var t=this;o.a.getHistoryRanking().then((function(e){for(var n=[],i=0;i<15;i++)n.push(e[i]);t.historyDataList=n,t.isLoading=!1})).catch((function(e){Object(u.j)(e),o.a.getRanking().then((function(e){e=e.data;for(var n=[],i=0;i<15;i++)n.push(e[i]);t.historyDataList=n,t.isLoading=!1}))})),setTimeout((function(){!t.historyDataList===[]&&(t.isLoading=!1)}),2e3)},findMingyan:function(t){for(var e in a.d)if(a.d[e]===t)return e;return 0}}},l=(n("9080"),Object(s.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my--search"},[t.isLoading?t._e():n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],staticClass:"my--search-bar",attrs:{type:"search",id:"searchbar",placeholder:"搜索……",results:"5"},domProps:{value:t.inputValue},on:{input:function(e){e.target.composing||(t.inputValue=e.target.value)}}}),"search"===t.listMode?n("div",{staticClass:"search-list"},t._l(t.displayMingyan,(function(e){return n("div",{key:e,staticClass:"search-item"},[t.isStartInput?n("router-link",{staticClass:"showall-item",attrs:{to:"/@"+t.findMingyan(e)}},[e?n("MYSearchHighlight",{attrs:{searchText:t.inputValue,text:e}}):t._e()],1):n("router-link",{staticClass:"showall-item",attrs:{to:"/@"+t.findMingyan(e)}},[t._v(" "+t._s(e)+" ")])],1)})),0):t._e(),"ranking"===t.listMode?n("div",{staticClass:"search-history-list"},[t.isLoadHitsory?n("div",{staticClass:"history-list"},[n("div",{staticClass:"search-history-list-tip"},[t._v("每日精选名言：")]),t._l(t.historyDataList,(function(e,i){return n("div",{key:e.text,staticClass:"search-history-item"},[n("a-row",[n("a-col",{attrs:{span:t.historyListWidth[0],id:"star-ranking-num"}},[n("router-link",{attrs:{to:"/@"+t.findMingyan(e.text)}},[t._v(" "+t._s(new Number(i)+1)+" ")])],1),n("a-col",{staticClass:"my--star-ranking-text",attrs:{span:t.historyListWidth[1],id:"star-ranking-text"}},[n("router-link",{attrs:{to:"/@"+t.findMingyan(e.text)}},[t._v(" "+t._s(e.text)+" ")])],1)],1)],1)}))],2):n("div",{staticClass:"history-loading-mask"},[n("span",{staticClass:"loading-svg",domProps:{innerHTML:t._s(t.loadingSvg)}}),n("h3",[t._v("搜索加载中……")])])]):t._e(),t.isNoResult?n("span",{staticClass:"my--search-no-result"},[t._v("无结果")]):t._e()])}),[],!1,null,"096aff30",null));e.default=l.exports},"1f12":function(t,e,n){},5816:function(t,e,n){var i=n("02ba"),a=n("0294"),r=n("82f7"),s=n("91ad"),c=n("3f48"),o=n("40ac").f,u=n("6876").f,h=n("1dab"),l=n("0bdd"),d=n("6115"),f=n("7e31"),g=n("d03a"),m=n("bde6"),p=n("6cc4"),y=n("38e1").enforce,b=n("8d0d"),v=n("70d4"),x=n("acc8"),w=n("509f"),k=v("match"),O=a.RegExp,j=O.prototype,_=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,L=/a/g,M=/a/g,S=new O(L)!==L,T=f.UNSUPPORTED_Y,E=i&&(!S||T||x||w||m((function(){return M[k]=!1,O(L)!=L||O(M)==M||"/a/i"!=O(L,"i")})));if(r("RegExp",E)){for(var R=function(t,e){var n,i,a,r,o,u,f=this instanceof R,g=h(t),m=void 0===e,b=[],v=t;if(!f&&g&&m&&t.constructor===R)return t;if((g||t instanceof R)&&(t=t.source,m&&(e="flags"in v?v.flags:d.call(v))),t=void 0===t?"":l(t),e=void 0===e?"":l(e),v=t,x&&"dotAll"in L&&(i=!!e&&e.indexOf("s")>-1)&&(e=e.replace(/s/g,"")),n=e,T&&"sticky"in L&&(a=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,"")),w&&(t=(r=function(t){for(var e,n=t.length,i=0,a="",r=[],s={},c=!1,o=!1,u=0,h="";i<=n;i++){if("\\"===(e=t.charAt(i)))e+=t.charAt(++i);else if("]"===e)c=!1;else if(!c)switch(!0){case"["===e:c=!0;break;case"("===e:_.test(t.slice(i+1))&&(i+=2,o=!0),a+=e,u++;continue;case">"===e&&o:if(""===h||p(s,h))throw new SyntaxError("Invalid capture group name");s[h]=!0,r.push([h,u]),o=!1,h="";continue}o?h+=e:a+=e}return[a,r]}(t))[0],b=r[1]),o=s(O(t,e),f?this:j,R),(i||a||b.length)&&(u=y(o),i&&(u.dotAll=!0,u.raw=R(function(t){for(var e,n=t.length,i=0,a="",r=!1;i<=n;i++)"\\"!==(e=t.charAt(i))?r||"."!==e?("["===e?r=!0:"]"===e&&(r=!1),a+=e):a+="[\\s\\S]":a+=e+t.charAt(++i);return a}(t),n)),a&&(u.sticky=!0),b.length&&(u.groups=b)),t!==v)try{c(o,"source",""===v?"(?:)":v)}catch(t){}return o},Y=function(t){t in R||o(R,t,{configurable:!0,get:function(){return O[t]},set:function(e){O[t]=e}})},C=u(O),P=0;C.length>P;)Y(C[P++]);j.constructor=R,R.prototype=j,g(a,"RegExp",R)}b("RegExp")},9080:function(t,e,n){"use strict";n("1f12")},f561:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var i,a,r=n("9d6b"),s=n("4d63"),c=(n("e186"),n("c505"),n("6c88"),n("f540"),n("b31b"),n("1cdb"),n("1b2a")),o=n("b652"),u=n("9944"),h=n("2e83"),l=c.b.star_v3,d={getNum:function(t){if(Promise)return t||(t=Object(u.m)(".my--mingyan-name").innerText.trim()+"："+Object(u.m)(".my--mingyan-text").innerText.trim()),new Promise((function(e,n){fetch(l,Object(s.a)(Object(s.a)({},c.g),{},{body:JSON.stringify({event:"getnum",data:{MY_text:t,MY_token:Object(u.e)(),t:(new Date).getTime()}})})).then((function(t){return t.json()})).then((function(t){e(t)})).catch((function(t){n(t)}))}))},addStar:(a=Object(r.a)(regeneratorRuntime.mark((function t(e,n,i){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Promise){t.next=2;break}return t.abrupt("return");case 2:if(e||n||(e=Object(u.m)(".my--mingyan-name").innerText.trim()+"："+Object(u.m)(".my--mingyan-text").innerText.trim()),a={},n&&e&&(a={MY_text:e}),n&&!e&&(a={MY_ID:n}),!n&&e&&(a={MY_text:e}),t.prev=7,t.t0=i,t.t0){t.next=13;break}return t.next=12,Object(h.a)();case 12:t.t0=t.sent;case 13:return i=t.t0,t.abrupt("return",new Promise((function(t,e){fetch(l,Object(s.a)(Object(s.a)({},c.g),{},{body:JSON.stringify({event:"addstar",data:Object(s.a)(Object(s.a)({},a),{},{MY_token:Object(u.e)(),re_token:i,t:(new Date).getTime()})})})).then((function(t){return t.json()})).then((function(e){t(e),0===e.code&&Object(o.recordEvent)(o.recordEventId.addStarEvent)})).catch((function(t){e(t)}))})));case 17:t.prev=17,t.t1=t.catch(7),u.a.err("点赞失败："+t.t1);case 20:case"end":return t.stop()}}),t,null,[[7,17]])}))),function(t,e,n){return a.apply(this,arguments)}),removeStar:(i=Object(r.a)(regeneratorRuntime.mark((function t(e,n,i){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Promise){t.next=2;break}return t.abrupt("return");case 2:if(e||(e=Object(u.m)(".my--mingyan-name").innerText.trim()+"："+Object(u.m)(".my--mingyan-text").innerText.trim()),n=n||"",t.prev=4,t.t0=i,t.t0){t.next=10;break}return t.next=9,Object(h.a)();case 9:t.t0=t.sent;case 10:return i=t.t0,t.abrupt("return",new Promise((function(t,n){fetch(l,Object(s.a)(Object(s.a)({},c.g),{},{body:JSON.stringify({event:"removestar",data:{MY_text:e,MY_token:Object(u.e)(),re_token:i,t:(new Date).getTime()}})})).then((function(t){return t.json()})).then((function(e){t(e),0===e.code&&Object(o.recordEvent)(o.recordEventId.removeStarEvent)})).catch((function(t){n(t)}))})));case 14:t.prev=14,t.t1=t.catch(4),u.a.err("点赞失败："+t.t1);case 17:case"end":return t.stop()}}),t,null,[[4,14]])}))),function(t,e,n){return i.apply(this,arguments)}),getRanking:function(){if(Promise)return new Promise((function(t,e){fetch(l,Object(s.a)(Object(s.a)({},c.g),{},{body:JSON.stringify({event:"ranking",data:{t:(new Date).getTime()}})})).then((function(t){return t.json()})).then((function(e){t(e),Object(o.recordEvent)(o.recordEventId.getCurrentRanking)})).catch((function(t){e(t)}))}))},getHistoryRanking:function(){if(Promise)return new Promise((function(t,e){setTimeout((function(){e("请求超时")}),2e3),fetch("".concat(c.b.ranking_history,"?t=_").concat((new Date).getTime())).then((function(t){return t.json()})).then((function(n){Object(u.j)(n),"请求成功"==n.msg&&(t(n.data),Object(o.recordEvent)(o.recordEventId.getHistoryRanking)),e(n.msg)}))}))},update:function(t,e){if(Promise){t||e||(t=Object(u.m)(".my--mingyan-name").innerText.trim()+"："+Object(u.m)(".my--mingyan-text").innerText.trim());var n={};return e&&t&&(n={MY_text:t}),e&&!t&&(n={MY_ID:e}),!e&&t&&(n={MY_text:t}),new Promise((function(t,e){fetch(l,Object(s.a)(Object(s.a)({},c.g),{},{body:JSON.stringify({event:"update",data:Object(s.a)(Object(s.a)({},n),{},{MY_token:Object(u.e)(),t:(new Date).getTime()})})})).then((function(t){return t.json()})).then((function(e){t(e)})).catch((function(t){e(t)}))}))}}}}}]);