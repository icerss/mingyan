/*!
 * ERSS SAYING
 * (c) 2020-2021 Xhemj
 * Build: 2021-8-19 11:54:47
 * Version: 3.1.0
 * ====
 * o(〃＾▽＾〃)o
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([["search"],{"036e":function(t,e,n){var a=n("687e");a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n("5925").default)("396fd489",a,!0,{sourceMap:!1,shadowMode:!1})},"048b":function(t,e,n){"use strict";n.r(e);var a=n("d399"),r=(n("6a9b"),n("81f1"),n("b31b"),n("7cc4")),i=n("a6b2"),s=(n("5816"),n("a717"),n("7d8f"),n("d7f0"),{name:"MYSearchHighlight",props:{text:String,searchText:String},computed:{handleSearch:function(){var t=new RegExp(this.searchText,"ig");return this.text.replace(t,'<span class="label label-secondary">'+this.searchText+"</span>")}}}),o=n("cba8"),c=Object(o.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"search-highlight",domProps:{innerHTML:this._s(this.handleSearch)}})}),[],!1,null,null,null).exports,u=n("f561"),d=n("6a79"),l={name:"MYSearch",components:{MYSearchHighlight:c,MYFooter:i.a},data:function(){return{loadingSvg:'\x3c!-- 加载动画 --\x3e<svg xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink"style="margin: auto;background: none;shape-rendering: auto;position: relative;transform: translateY(60px);"width="30px"height="30px"viewBox="0 0 100 100"preserveAspectRatio="xMidYMid"><circle cx="50"cy="50"fill="none"stroke="rgba(0,0,0,.65)"stroke-width="10"r="35"stroke-dasharray="164.93361431346415 56.97787143782138"><animateTransform attributeName="transform"type="rotate"repeatCount="indefinite"dur="0.75s"values="0 50 50;360 50 50"keyTimes="0;1"></animateTransform></circle>\x3c!-- https://loading.io/ --\x3e</svg>',mingyan:r.d,isStartInput:!1,inputValue:"",isLoadHitsory:!1,isLoading:!0,listMode:"ranking",historyListWidth:[4,16,4],historyDataList:[],displayLength:25,scrollEvent:null,isNoResult:!1}},watch:{inputValue:function(){this.inputValue?(this.handleSearch(),this.listMode="search"):this.listMode="ranking";var t,e="",n=Object(a.a)(this.displayMingyan);try{for(n.s();!(t=n.n()).done;){var r=t.value;r&&(e+=r)}}catch(t){n.e(t)}finally{n.f()}this.isNoResult=!e},historyDataList:function(){this.listMode="ranking",this.isLoadHitsory=!0}},mounted:function(){this.getHistoryRanking(),this.scrollEvent=window.addEventListener("scroll",this.handleScroll)},computed:{displayDataList:function(){return this.displayMingyan.filter((function(t,e){this.displayLength}))},displayMingyan:function(){var t=this;if(this.isStartInput){for(var e=this.mingyan.filter((function(e){if(-1!==e.toLocaleLowerCase().indexOf(t.inputValue.toLocaleLowerCase()))return e})),n=[],a=0;a<this.displayLength;a++)n.push(e[a]);return n}for(var i=[],s=0;s<this.displayLength;s++)i.push(r.d[s]);return i}},methods:{handleScroll:function(){document.body.clientHeight-window.scrollY-window.innerHeight<document.body.clientHeight/this.displayLength&&(this.displayLength<this.mingyan.length&&this.displayLength+10<this.mingyan.length?this.displayLength+=10:this.displayLength=this.mingyan.length)},handleSearch:function(){this.inputValue?this.isStartInput=!0:(this.isStartInput=!1,this.resultLength=0)},getHistoryRanking:function(){var t=this;u.a.getHistoryRanking().then((function(e){for(var n=[],a=0;a<15;a++)n.push(e[a]);t.historyDataList=n,t.isLoading=!1})).catch((function(e){Object(d.k)(e),u.a.getRanking().then((function(e){e=e.data;for(var n=[],a=0;a<15;a++)n.push(e[a]);t.historyDataList=n,t.isLoading=!1}))})),setTimeout((function(){!t.historyDataList===[]&&(t.isLoading=!1)}),2e3)},findMingyan:function(t){for(var e in r.d)if(r.d[e]===t)return e;return 0}}},h=(n("ed13"),Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"my--search-app"}},[n("div",{staticClass:"my--search"},[t.isLoading?t._e():n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],staticClass:"my--search-bar",attrs:{type:"search",id:"searchbar",placeholder:"搜索……",results:"5"},domProps:{value:t.inputValue},on:{input:function(e){e.target.composing||(t.inputValue=e.target.value)}}}),"search"===t.listMode?n("div",{staticClass:"search-list"},t._l(t.displayMingyan,(function(e){return n("div",{key:e,staticClass:"search-item"},[t.isStartInput?n("router-link",{staticClass:"showall-item",attrs:{to:"/@"+t.findMingyan(e)}},[e?n("MYSearchHighlight",{attrs:{searchText:t.inputValue,text:e}}):t._e()],1):n("router-link",{staticClass:"showall-item",attrs:{to:"/@"+t.findMingyan(e)}},[t._v(" "+t._s(e)+" ")])],1)})),0):t._e(),"ranking"===t.listMode?n("div",{staticClass:"search-history-list"},[t.isLoadHitsory?n("div",{staticClass:"history-list"},[n("div",{staticClass:"search-history-list-tip"},[t._v("每日精选名言：")]),t._l(t.historyDataList,(function(e,a){return n("div",{key:e.text,staticClass:"search-history-item"},[n("a-row",[n("a-col",{attrs:{span:t.historyListWidth[0],id:"star-ranking-num"}},[n("router-link",{attrs:{to:"/@"+t.findMingyan(e.text)}},[t._v(" "+t._s(new Number(a)+1)+" ")])],1),n("a-col",{staticClass:"my--star-ranking-text",attrs:{span:t.historyListWidth[1],id:"star-ranking-text"}},[n("router-link",{attrs:{to:"/@"+t.findMingyan(e.text)}},[t._v(" "+t._s(e.text)+" ")])],1)],1)],1)}))],2):n("div",{staticClass:"history-loading-mask"},[n("span",{staticClass:"loading-svg",domProps:{innerHTML:t._s(t.loadingSvg)}}),n("h3",[t._v("搜索加载中……")])])]):t._e(),t.isNoResult?n("span",{staticClass:"my--search-no-result"},[t._v("无结果")]):t._e()]),n("MYFooter",{attrs:{mode:"back"}})],1)}),[],!1,null,"1adbd2f9",null));e.default=h.exports},5816:function(t,e,n){var a=n("02ba"),r=n("0294"),i=n("82f7"),s=n("91ad"),o=n("3f48"),c=n("40ac").f,u=n("6876").f,d=n("1dab"),l=n("0bdd"),h=n("6115"),f=n("7e31"),g=n("d03a"),p=n("bde6"),m=n("6cc4"),y=n("38e1").enforce,b=n("8d0d"),v=n("70d4"),x=n("acc8"),w=n("509f"),k=v("match"),_=r.RegExp,M=_.prototype,S=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,O=/a/g,L=/a/g,N=new _(O)!==O,j=f.UNSUPPORTED_Y,T=a&&(!N||j||x||w||p((function(){return L[k]=!1,_(O)!=O||_(L)==L||"/a/i"!=_(O,"i")})));if(i("RegExp",T)){for(var I=function(t,e){var n,a,r,i,c,u,f=this instanceof I,g=d(t),p=void 0===e,b=[],v=t;if(!f&&g&&p&&t.constructor===I)return t;if((g||t instanceof I)&&(t=t.source,p&&(e="flags"in v?v.flags:h.call(v))),t=void 0===t?"":l(t),e=void 0===e?"":l(e),v=t,x&&"dotAll"in O&&(a=!!e&&e.indexOf("s")>-1)&&(e=e.replace(/s/g,"")),n=e,j&&"sticky"in O&&(r=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,"")),w&&(t=(i=function(t){for(var e,n=t.length,a=0,r="",i=[],s={},o=!1,c=!1,u=0,d="";a<=n;a++){if("\\"===(e=t.charAt(a)))e+=t.charAt(++a);else if("]"===e)o=!1;else if(!o)switch(!0){case"["===e:o=!0;break;case"("===e:S.test(t.slice(a+1))&&(a+=2,c=!0),r+=e,u++;continue;case">"===e&&c:if(""===d||m(s,d))throw new SyntaxError("Invalid capture group name");s[d]=!0,i.push([d,u]),c=!1,d="";continue}c?d+=e:r+=e}return[r,i]}(t))[0],b=i[1]),c=s(_(t,e),f?this:M,I),(a||r||b.length)&&(u=y(c),a&&(u.dotAll=!0,u.raw=I(function(t){for(var e,n=t.length,a=0,r="",i=!1;a<=n;a++)"\\"!==(e=t.charAt(a))?i||"."!==e?("["===e?i=!0:"]"===e&&(i=!1),r+=e):r+="[\\s\\S]":r+=e+t.charAt(++a);return r}(t),n)),r&&(u.sticky=!0),b.length&&(u.groups=b)),t!==v)try{o(c,"source",""===v?"(?:)":v)}catch(t){}return c},E=function(t){t in I||c(I,t,{configurable:!0,get:function(){return _[t]},set:function(e){_[t]=e}})},Y=u(_),C=0;Y.length>C;)E(Y[C++]);M.constructor=I,I.prototype=M,g(r,"RegExp",I)}b("RegExp")},"687e":function(t,e,n){(e=n("a1a8")(!1)).push([t.i,".my--search[data-v-1adbd2f9]{display:block}#searchbar[data-v-1adbd2f9]{-webkit-appearance:textfield;outline-offset:-2px;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border:.1rem solid #d1d1d1;border-radius:.4rem;box-shadow:none;box-sizing:inherit;padding:.6rem 1rem .7rem;outline:none;margin-bottom:40px;height:25px;width:100%;-ms-transform:translateX(-10px);transform:translateX(-10px)}#searchbar[data-v-1adbd2f9]:focus{border:1px solid #9b4dca}.search-item[data-v-1adbd2f9]{background:rgba(0,0,0,0);letter-spacing:-.1rem;line-height:1.8;text-decoration:none;font-weight:400}.search-item[data-v-1adbd2f9],.showall-item[data-v-1adbd2f9]{color:#303742}.search-history-item[data-v-1adbd2f9],.showall-item[data-v-1adbd2f9]{cursor:pointer!important}.search-history-list-tip[data-v-1adbd2f9]{font-size:30px;margin-bottom:10px;text-align:center}.history-list[data-v-1adbd2f9]{font-weight:400}.search-history-item[data-v-1adbd2f9]{color:#303742;padding:3px;font-size:15px;text-align:center}a[data-v-1adbd2f9]{color:#303742}#my--search-app[data-v-1adbd2f9],.history-loading-mask[data-v-1adbd2f9],.search-list[data-v-1adbd2f9]{text-align:center}",""]),t.exports=e},"884f":function(t,e,n){"use strict";var a=n("02ba"),r=n("0294"),i=n("82f7"),s=n("d03a"),o=n("6cc4"),c=n("e4e4"),u=n("91ad"),d=n("be5d"),l=n("3f46"),h=n("bde6"),f=n("d69f"),g=n("6876").f,p=n("5d07").f,m=n("40ac").f,y=n("2cc9").trim,b=r.Number,v=b.prototype,x="Number"==c(f(v)),w=function(t){if(d(t))throw TypeError("Cannot convert a Symbol value to a number");var e,n,a,r,i,s,o,c,u=l(t,"number");if("string"==typeof u&&u.length>2)if(43===(e=(u=y(u)).charCodeAt(0))||45===e){if(88===(n=u.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+u}for(s=(i=u.slice(2)).length,o=0;o<s;o++)if((c=i.charCodeAt(o))<48||c>r)return NaN;return parseInt(i,a)}return+u};if(i("Number",!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var k,_=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof _&&(x?h((function(){v.valueOf.call(n)})):"Number"!=c(n))?u(new b(w(e)),n,_):w(e)},M=a?g(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),S=0;M.length>S;S++)o(b,k=M[S])&&!o(_,k)&&m(_,k,p(b,k));_.prototype=v,v.constructor=_,s(r,"Number",_)}},"91ad":function(t,e,n){var a=n("1de2"),r=n("9c8e");t.exports=function(t,e,n){var i,s;return r&&"function"==typeof(i=e.constructor)&&i!==n&&a(s=i.prototype)&&s!==n.prototype&&r(t,s),t}},ed13:function(t,e,n){"use strict";n("036e")},f561:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var a,r,i=n("9d6b"),s=n("4d63"),o=(n("e186"),n("c505"),n("6c88"),n("f540"),n("1cdb"),n("1b2a")),c=n("6a79"),u=n("2e83"),d=o.b.star_v3,l={getNum:function(t){if(Promise)return t||(t=document.querySelector(".my--mingyan-name").innerText.trim()+"："+document.querySelector(".my--mingyan-text").innerText.trim()),new Promise((function(e,n){fetch(d,Object(s.a)(Object(s.a)({},o.f),{},{body:JSON.stringify({event:"getnum",data:{MY_text:t,MY_token:Object(c.e)(),t:(new Date).getTime()}})})).then((function(t){return t.json()})).then((function(t){e(t)})).catch((function(t){n(t)}))}))},addStar:(r=Object(i.a)(regeneratorRuntime.mark((function t(e,n,a){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Promise){t.next=2;break}return t.abrupt("return");case 2:if(e||n||(e=document.querySelector(".my--mingyan-name").innerText.trim()+"："+document.querySelector(".my--mingyan-text").innerText.trim()),r={},n&&e&&(r={MY_text:e}),n&&!e&&(r={MY_ID:n}),!n&&e&&(r={MY_text:e}),t.prev=7,t.t0=a,t.t0){t.next=13;break}return t.next=12,Object(u.a)();case 12:t.t0=t.sent;case 13:return a=t.t0,t.abrupt("return",new Promise((function(t,e){fetch(d,Object(s.a)(Object(s.a)({},o.f),{},{body:JSON.stringify({event:"addstar",data:Object(s.a)(Object(s.a)({},r),{},{MY_token:Object(c.e)(),re_token:a,t:(new Date).getTime()})})})).then((function(t){return t.json()})).then((function(e){t(e)})).catch((function(t){e(t)}))})));case 17:t.prev=17,t.t1=t.catch(7),c.a.err("点赞失败："+t.t1);case 20:case"end":return t.stop()}}),t,null,[[7,17]])}))),function(t,e,n){return r.apply(this,arguments)}),removeStar:(a=Object(i.a)(regeneratorRuntime.mark((function t(e,n,a){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Promise){t.next=2;break}return t.abrupt("return");case 2:if(e||(e=document.querySelector(".my--mingyan-name").innerText.trim()+"："+document.querySelector(".my--mingyan-text").innerText.trim()),n=n||"",t.prev=4,t.t0=a,t.t0){t.next=10;break}return t.next=9,Object(u.a)();case 9:t.t0=t.sent;case 10:return a=t.t0,t.abrupt("return",new Promise((function(t,n){fetch(d,Object(s.a)(Object(s.a)({},o.f),{},{body:JSON.stringify({event:"removestar",data:{MY_text:e,MY_token:Object(c.e)(),re_token:a,t:(new Date).getTime()}})})).then((function(t){return t.json()})).then((function(e){t(e)})).catch((function(t){n(t)}))})));case 14:t.prev=14,t.t1=t.catch(4),c.a.err("点赞失败："+t.t1);case 17:case"end":return t.stop()}}),t,null,[[4,14]])}))),function(t,e,n){return a.apply(this,arguments)}),getRanking:function(){if(Promise)return new Promise((function(t,e){fetch(d,Object(s.a)(Object(s.a)({},o.f),{},{body:JSON.stringify({event:"ranking",data:{t:(new Date).getTime()}})})).then((function(t){return t.json()})).then((function(e){t(e)})).catch((function(t){e(t)}))}))},getHistoryRanking:function(){if(Promise)return new Promise((function(t,e){fetch("".concat(o.b.ranking_history,"?t=_").concat((new Date).getTime())).then((function(t){return t.json()})).then((function(n){Object(c.k)(n),"请求成功"==n.msg&&t(n.data),e(n.msg)}))}))},update:function(t,e){if(Promise){t||e||(t=document.querySelector(".my--mingyan-name").innerText.trim()+"："+document.querySelector(".my--mingyan-text").innerText.trim());var n={};return e&&t&&(n={MY_text:t}),e&&!t&&(n={MY_ID:e}),!e&&t&&(n={MY_text:t}),new Promise((function(t,e){fetch(d,Object(s.a)(Object(s.a)({},o.f),{},{body:JSON.stringify({event:"update",data:Object(s.a)(Object(s.a)({},n),{},{MY_token:Object(c.e)(),t:(new Date).getTime()})})})).then((function(t){return t.json()})).then((function(e){t(e)})).catch((function(t){e(t)}))}))}}}}}]);