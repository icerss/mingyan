/*!
 * ERSS SAYING
 * (c) 2020-2021 Xhemj
 * Build: 2021-8-31 10:40:04
 * Version: 3.1.0
 * ====
 * o(〃＾▽＾〃)o
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([["search"],{"048b":function(t,e,n){"use strict";n.r(e);var i=n("d399"),r=(n("6a9b"),n("81f1"),n("b31b"),n("7cc4")),a=n("a6b2"),s=(n("5816"),n("a717"),n("7d8f"),n("d7f0"),{name:"MYSearchHighlight",props:{text:String,searchText:String},computed:{handleSearch:function(){var t=new RegExp(this.searchText,"ig");return this.text.replace(t,'<span class="label label-secondary">'+this.searchText+"</span>")}}}),o=n("cba8"),c=Object(o.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"search-highlight",domProps:{innerHTML:this._s(this.handleSearch)}})}),[],!1,null,null,null).exports,u=n("f561"),l=n("6a79"),h={name:"MYSearch",components:{MYSearchHighlight:c,MYFooter:a.a},data:function(){return{loadingSvg:'\x3c!-- 加载动画 --\x3e<svg xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink"style="margin: auto;background: none;shape-rendering: auto;position: relative;transform: translateY(60px);"width="30px"height="30px"viewBox="0 0 100 100"preserveAspectRatio="xMidYMid"><circle cx="50"cy="50"fill="none"stroke="rgba(0,0,0,.65)"stroke-width="10"r="35"stroke-dasharray="164.93361431346415 56.97787143782138"><animateTransform attributeName="transform"type="rotate"repeatCount="indefinite"dur="0.75s"values="0 50 50;360 50 50"keyTimes="0;1"></animateTransform></circle>\x3c!-- https://loading.io/ --\x3e</svg>',mingyan:r.d,isStartInput:!1,inputValue:"",isLoadHitsory:!1,isLoading:!0,listMode:"ranking",historyListWidth:[4,16,4],historyDataList:[],displayLength:25,scrollEvent:null,isNoResult:!1}},watch:{inputValue:function(){this.inputValue?(this.handleSearch(),this.listMode="search"):this.listMode="ranking";var t,e="",n=Object(i.a)(this.displayMingyan);try{for(n.s();!(t=n.n()).done;){var r=t.value;r&&(e+=r)}}catch(t){n.e(t)}finally{n.f()}this.isNoResult=!e},historyDataList:function(){this.listMode="ranking",this.isLoadHitsory=!0}},mounted:function(){this.getHistoryRanking(),this.scrollEvent=window.addEventListener("scroll",this.handleScroll)},computed:{displayDataList:function(){return this.displayMingyan.filter((function(t,e){this.displayLength}))},displayMingyan:function(){var t=this;if(this.isStartInput){for(var e=this.mingyan.filter((function(e){if(-1!==e.toLocaleLowerCase().indexOf(t.inputValue.toLocaleLowerCase()))return e})),n=[],i=0;i<this.displayLength;i++)n.push(e[i]);return n}for(var a=[],s=0;s<this.displayLength;s++)a.push(r.d[s]);return a}},methods:{handleScroll:function(){document.body.clientHeight-window.scrollY-window.innerHeight<document.body.clientHeight/this.displayLength&&(this.displayLength<this.mingyan.length&&this.displayLength+10<this.mingyan.length?this.displayLength+=10:this.displayLength=this.mingyan.length)},handleSearch:function(){this.inputValue?this.isStartInput=!0:(this.isStartInput=!1,this.resultLength=0)},getHistoryRanking:function(){var t=this;u.a.getHistoryRanking().then((function(e){for(var n=[],i=0;i<15;i++)n.push(e[i]);t.historyDataList=n,t.isLoading=!1})).catch((function(e){Object(l.k)(e),u.a.getRanking().then((function(e){e=e.data;for(var n=[],i=0;i<15;i++)n.push(e[i]);t.historyDataList=n,t.isLoading=!1}))})),setTimeout((function(){!t.historyDataList===[]&&(t.isLoading=!1)}),2e3)},findMingyan:function(t){for(var e in r.d)if(r.d[e]===t)return e;return 0}}},f=(n("ed13"),Object(o.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"my--search-app"}},[n("div",{staticClass:"my--search"},[t.isLoading?t._e():n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],staticClass:"my--search-bar",attrs:{type:"search",id:"searchbar",placeholder:"搜索……",results:"5"},domProps:{value:t.inputValue},on:{input:function(e){e.target.composing||(t.inputValue=e.target.value)}}}),"search"===t.listMode?n("div",{staticClass:"search-list"},t._l(t.displayMingyan,(function(e){return n("div",{key:e,staticClass:"search-item"},[t.isStartInput?n("router-link",{staticClass:"showall-item",attrs:{to:"/@"+t.findMingyan(e)}},[e?n("MYSearchHighlight",{attrs:{searchText:t.inputValue,text:e}}):t._e()],1):n("router-link",{staticClass:"showall-item",attrs:{to:"/@"+t.findMingyan(e)}},[t._v(" "+t._s(e)+" ")])],1)})),0):t._e(),"ranking"===t.listMode?n("div",{staticClass:"search-history-list"},[t.isLoadHitsory?n("div",{staticClass:"history-list"},[n("div",{staticClass:"search-history-list-tip"},[t._v("每日精选名言：")]),t._l(t.historyDataList,(function(e,i){return n("div",{key:e.text,staticClass:"search-history-item"},[n("a-row",[n("a-col",{attrs:{span:t.historyListWidth[0],id:"star-ranking-num"}},[n("router-link",{attrs:{to:"/@"+t.findMingyan(e.text)}},[t._v(" "+t._s(new Number(i)+1)+" ")])],1),n("a-col",{staticClass:"my--star-ranking-text",attrs:{span:t.historyListWidth[1],id:"star-ranking-text"}},[n("router-link",{attrs:{to:"/@"+t.findMingyan(e.text)}},[t._v(" "+t._s(e.text)+" ")])],1)],1)],1)}))],2):n("div",{staticClass:"history-loading-mask"},[n("span",{staticClass:"loading-svg",domProps:{innerHTML:t._s(t.loadingSvg)}}),n("h3",[t._v("搜索加载中……")])])]):t._e(),t.isNoResult?n("span",{staticClass:"my--search-no-result"},[t._v("无结果")]):t._e()]),n("MYFooter",{attrs:{mode:"back"}})],1)}),[],!1,null,"1adbd2f9",null));e.default=f.exports},"1c09":function(t,e,n){},5816:function(t,e,n){var i=n("02ba"),r=n("0294"),a=n("82f7"),s=n("91ad"),o=n("3f48"),c=n("40ac").f,u=n("6876").f,l=n("1dab"),h=n("0bdd"),f=n("6115"),d=n("7e31"),g=n("d03a"),m=n("bde6"),p=n("6cc4"),y=n("38e1").enforce,b=n("8d0d"),v=n("70d4"),x=n("acc8"),w=n("509f"),k=v("match"),_=r.RegExp,S=_.prototype,M=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,O=/a/g,L=/a/g,N=new _(O)!==O,j=d.UNSUPPORTED_Y,T=i&&(!N||j||x||w||m((function(){return L[k]=!1,_(O)!=O||_(L)==L||"/a/i"!=_(O,"i")})));if(a("RegExp",T)){for(var I=function(t,e){var n,i,r,a,c,u,d=this instanceof I,g=l(t),m=void 0===e,b=[],v=t;if(!d&&g&&m&&t.constructor===I)return t;if((g||t instanceof I)&&(t=t.source,m&&(e="flags"in v?v.flags:f.call(v))),t=void 0===t?"":h(t),e=void 0===e?"":h(e),v=t,x&&"dotAll"in O&&(i=!!e&&e.indexOf("s")>-1)&&(e=e.replace(/s/g,"")),n=e,j&&"sticky"in O&&(r=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,"")),w&&(t=(a=function(t){for(var e,n=t.length,i=0,r="",a=[],s={},o=!1,c=!1,u=0,l="";i<=n;i++){if("\\"===(e=t.charAt(i)))e+=t.charAt(++i);else if("]"===e)o=!1;else if(!o)switch(!0){case"["===e:o=!0;break;case"("===e:M.test(t.slice(i+1))&&(i+=2,c=!0),r+=e,u++;continue;case">"===e&&c:if(""===l||p(s,l))throw new SyntaxError("Invalid capture group name");s[l]=!0,a.push([l,u]),c=!1,l="";continue}c?l+=e:r+=e}return[r,a]}(t))[0],b=a[1]),c=s(_(t,e),d?this:S,I),(i||r||b.length)&&(u=y(c),i&&(u.dotAll=!0,u.raw=I(function(t){for(var e,n=t.length,i=0,r="",a=!1;i<=n;i++)"\\"!==(e=t.charAt(i))?a||"."!==e?("["===e?a=!0:"]"===e&&(a=!1),r+=e):r+="[\\s\\S]":r+=e+t.charAt(++i);return r}(t),n)),r&&(u.sticky=!0),b.length&&(u.groups=b)),t!==v)try{o(c,"source",""===v?"(?:)":v)}catch(t){}return c},E=function(t){t in I||c(I,t,{configurable:!0,get:function(){return _[t]},set:function(e){_[t]=e}})},Y=u(_),C=0;Y.length>C;)E(Y[C++]);S.constructor=I,I.prototype=S,g(r,"RegExp",I)}b("RegExp")},"884f":function(t,e,n){"use strict";var i=n("02ba"),r=n("0294"),a=n("82f7"),s=n("d03a"),o=n("6cc4"),c=n("e4e4"),u=n("91ad"),l=n("be5d"),h=n("3f46"),f=n("bde6"),d=n("d69f"),g=n("6876").f,m=n("5d07").f,p=n("40ac").f,y=n("2cc9").trim,b=r.Number,v=b.prototype,x="Number"==c(d(v)),w=function(t){if(l(t))throw TypeError("Cannot convert a Symbol value to a number");var e,n,i,r,a,s,o,c,u=h(t,"number");if("string"==typeof u&&u.length>2)if(43===(e=(u=y(u)).charCodeAt(0))||45===e){if(88===(n=u.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+u}for(s=(a=u.slice(2)).length,o=0;o<s;o++)if((c=a.charCodeAt(o))<48||c>r)return NaN;return parseInt(a,i)}return+u};if(a("Number",!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var k,_=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof _&&(x?f((function(){v.valueOf.call(n)})):"Number"!=c(n))?u(new b(w(e)),n,_):w(e)},S=i?g(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),M=0;S.length>M;M++)o(b,k=S[M])&&!o(_,k)&&p(_,k,m(b,k));_.prototype=v,v.constructor=_,s(r,"Number",_)}},"91ad":function(t,e,n){var i=n("1de2"),r=n("9c8e");t.exports=function(t,e,n){var a,s;return r&&"function"==typeof(a=e.constructor)&&a!==n&&i(s=a.prototype)&&s!==n.prototype&&r(t,s),t}},ed13:function(t,e,n){"use strict";n("1c09")},f561:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var i,r,a=n("9d6b"),s=n("4d63"),o=(n("e186"),n("c505"),n("6c88"),n("f540"),n("b31b"),n("1cdb"),n("1b2a")),c=n("6a79"),u=n("2e83"),l=o.b.star_v3,h={getNum:function(t){if(Promise)return t||(t=document.querySelector(".my--mingyan-name").innerText.trim()+"："+document.querySelector(".my--mingyan-text").innerText.trim()),new Promise((function(e,n){fetch(l,Object(s.a)(Object(s.a)({},o.f),{},{body:JSON.stringify({event:"getnum",data:{MY_text:t,MY_token:Object(c.e)(),t:(new Date).getTime()}})})).then((function(t){return t.json()})).then((function(t){e(t)})).catch((function(t){n(t)}))}))},addStar:(r=Object(a.a)(regeneratorRuntime.mark((function t(e,n,i){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Promise){t.next=2;break}return t.abrupt("return");case 2:if(e||n||(e=document.querySelector(".my--mingyan-name").innerText.trim()+"："+document.querySelector(".my--mingyan-text").innerText.trim()),r={},n&&e&&(r={MY_text:e}),n&&!e&&(r={MY_ID:n}),!n&&e&&(r={MY_text:e}),t.prev=7,t.t0=i,t.t0){t.next=13;break}return t.next=12,Object(u.a)();case 12:t.t0=t.sent;case 13:return i=t.t0,t.abrupt("return",new Promise((function(t,e){fetch(l,Object(s.a)(Object(s.a)({},o.f),{},{body:JSON.stringify({event:"addstar",data:Object(s.a)(Object(s.a)({},r),{},{MY_token:Object(c.e)(),re_token:i,t:(new Date).getTime()})})})).then((function(t){return t.json()})).then((function(e){t(e)})).catch((function(t){e(t)}))})));case 17:t.prev=17,t.t1=t.catch(7),c.a.err("点赞失败："+t.t1);case 20:case"end":return t.stop()}}),t,null,[[7,17]])}))),function(t,e,n){return r.apply(this,arguments)}),removeStar:(i=Object(a.a)(regeneratorRuntime.mark((function t(e,n,i){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Promise){t.next=2;break}return t.abrupt("return");case 2:if(e||(e=document.querySelector(".my--mingyan-name").innerText.trim()+"："+document.querySelector(".my--mingyan-text").innerText.trim()),n=n||"",t.prev=4,t.t0=i,t.t0){t.next=10;break}return t.next=9,Object(u.a)();case 9:t.t0=t.sent;case 10:return i=t.t0,t.abrupt("return",new Promise((function(t,n){fetch(l,Object(s.a)(Object(s.a)({},o.f),{},{body:JSON.stringify({event:"removestar",data:{MY_text:e,MY_token:Object(c.e)(),re_token:i,t:(new Date).getTime()}})})).then((function(t){return t.json()})).then((function(e){t(e)})).catch((function(t){n(t)}))})));case 14:t.prev=14,t.t1=t.catch(4),c.a.err("点赞失败："+t.t1);case 17:case"end":return t.stop()}}),t,null,[[4,14]])}))),function(t,e,n){return i.apply(this,arguments)}),getRanking:function(){if(Promise)return new Promise((function(t,e){fetch(l,Object(s.a)(Object(s.a)({},o.f),{},{body:JSON.stringify({event:"ranking",data:{t:(new Date).getTime()}})})).then((function(t){return t.json()})).then((function(e){t(e)})).catch((function(t){e(t)}))}))},getHistoryRanking:function(){if(Promise)return new Promise((function(t,e){setTimeout((function(){e("请求超时")}),2e3),fetch("".concat(o.b.ranking_history,"?t=_").concat((new Date).getTime())).then((function(t){return t.json()})).then((function(n){Object(c.k)(n),"请求成功"==n.msg&&t(n.data),e(n.msg)}))}))},update:function(t,e){if(Promise){t||e||(t=document.querySelector(".my--mingyan-name").innerText.trim()+"："+document.querySelector(".my--mingyan-text").innerText.trim());var n={};return e&&t&&(n={MY_text:t}),e&&!t&&(n={MY_ID:e}),!e&&t&&(n={MY_text:t}),new Promise((function(t,e){fetch(l,Object(s.a)(Object(s.a)({},o.f),{},{body:JSON.stringify({event:"update",data:Object(s.a)(Object(s.a)({},n),{},{MY_token:Object(c.e)(),t:(new Date).getTime()})})})).then((function(t){return t.json()})).then((function(e){t(e)})).catch((function(t){e(t)}))}))}}}}}]);