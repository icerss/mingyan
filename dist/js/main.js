/*!
 * ERSS SAYING
 * (c) 2020-2021 Xhemj
 * Build: 2021-8-21 16:17:08
 * Version: 3.1.0
 * ====
 * o(〃＾▽＾〃)o
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([["main"],{"0647":function(t,e,n){var a=n("fdab");a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n("5925").default)("21977bee",a,!0,{sourceMap:!1,shadowMode:!1})},"24f7":function(t,e,n){var a=n("a252");a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n("5925").default)("67b60517",a,!0,{sourceMap:!1,shadowMode:!1})},"26a6":function(t,e,n){"use strict";n("8d4b")},"2e06":function(t,e,n){"use strict";n.r(e);n("c505"),n("7099"),n("0b69"),n("81f1");var a=n("6a79"),i=n("1b2a"),r=n("f561"),o=n("1de4"),s=n.n(o),c={name:"MYStar",props:{mingyan:String},data:function(){return{starEvent:"addstar",loadingHtml:'\n    \x3c!-- 点赞 --\x3e\n    <i class="mdui-icon material-icons" id="star-logo" style="cursor: pointer;">&#xe8dc;</i>\n    <span class="my--star-num">\n    \x3c!-- 加载动画 --\x3e\n  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto;background: none;shape-rendering: auto;position: relative;transform: translateY(5px);" width="15px" height="15px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">\n    <circle cx="50" cy="50" fill="none" stroke="rgba(0,0,0,.65)" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">\n      <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.75s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>\n    </circle>\n  \x3c!-- https://loading.io/ --\x3e</svg>\n    </span>\n    '}},mounted:function(){window.addEventListener("hashchange",(function(){this.starEvent="addstar"}))},created:function(){this.doStar=this.star},methods:{isSwalShow:function(){return Object(a.f)(".swal-overlay--show-modal")},turnRed:function(){return document.querySelector("#star-logo").style.color="red"},turnGray:function(){return document.querySelector("#star-logo").style.color="#000000A3"},star:function(t,e,n){var r=this;if(Object(a.k)(this.mingyan),!this.isSwalShow())switch(s()({title:document.querySelector(".my--mingyan-text").innerText,text:"加载出错了？刷新试试？",icon:i.a,button:"关闭"}).then((function(){r.starEvent="addstar",document.removeEventListener("click",r.doStar)})),document.querySelector(".swal-icon.swal-icon--custom>img").style.maxWidth="150px",document.querySelector(".swal-text").innerHTML=this.loadingHtml,document.querySelector("#star-logo").addEventListener("click",(function(){r.doStar()})),this.turnGray(),this.starEvent){case"addstar":this.addStar(t,e,n);break;case"removestar":this.removeStar(t,e,n)}},addStar:function(t,e,n){Object(a.k)(t);var i=this;i.turnGray(),r.a.addStar(t,e,n).then((function(t){if(0!=t.code){if(a.a.err(t.msg),document.querySelector(".my--star-num").innerHTML=t.data.starNum,t.data.isStar&&(i.turnRed(),i.starEvent="removestar"),-1!==t.msg.indexOf("人机验证"))return i.reVerify("addstar")}else a.a.su(t.msg),document.querySelector(".my--star-num").innerHTML=t.data.starNum,t.data.isStar&&(i.turnRed(),i.starEvent="removestar")})).catch((function(t){a.a.err("错误：\n"+t)}))},removeStar:function(t,e,n){var i=this;i.turnGray(),r.a.removeStar(t,e,n).then((function(t){if(0!=t.code){if(a.a.err(t.msg),document.querySelector(".my--star-num").innerHTML=t.data.starNum,t.data.isStar||(i.turnGray(),i.starEvent="addstar"),-1!==t.msg.indexOf("人机验证"))return i.reVerify("removestar")}else a.a.su(t.msg),document.querySelector(".my--star-num").innerHTML=t.data.starNum,t.data.isStar||(i.turnGray(),i.starEvent="addstar")})).catch((function(t){a.a.err("错误：\n"+t)}))},reVerify:function(t){var e=this;s()({title:"感谢您对耳斯名言的支持，但为了防止恶意刷赞行为，我们不得不对您的身份进行验证。若您多次收到验证提示，建议您稍后再试。",text:"加载中……",icon:"",button:"继续"}).then((function(){var n=window.grecaptcha.getResponse();return n?(e.starEvent=t,e.star(null,null,"reverify@"+n)):a.a.err("验证失败：请重试")})),document.querySelector(".swal-title").style.fontSize="20px",document.querySelector(".swal-text").innerHTML="验证码加载中……",document.querySelector(".swal-text").id="star-reverify",window.grecaptcha.render("star-reverify",{sitekey:"6Lf9VgccAAAAAO2KrVDJGSuDXIHXD3lnV7T2nzP9"})}}},u=(n("e1f9"),n("9ff2"),n("cba8")),m=Object(u.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"my--star-btn label label-rounded label-warning",on:{click:function(e){return t.doStar()}}},[n("i",{staticClass:"mdui-icon material-icons",staticStyle:{"font-size":"15px"}},[t._v("")]),t._v("  点赞")])}),[],!1,null,"4b47523a",null).exports,l=(n("1cdb"),n("4d63")),d=(n("6c88"),n("f540"),function(t,e){if(Promise)return new Promise((function(n,a){fetch(i.b.showfrom,Object(l.a)(Object(l.a)({},i.f),{},{body:JSON.stringify({mingyan:t||document.querySelector(".my--mingyan-name").innerText.trim()+"："+document.querySelector(".my--mingyan-text").innerText.trim(),picPath:e,t:(new Date).getTime()})})).then((function(t){return t.json()})).then((function(t){n(t)})).catch((function(t){a(t)}))}))}),f=n("7cc4"),y=n("8bbf"),p=new(n.n(y).a),h={name:"MYInfo",props:{mingyan:String},data:function(){return{type:"世界馆",showFromData:"",solvePicUrl:f.f,mingyanPicUrl:f.e}},mounted:function(){this.loadType()},watch:{mingyan:function(){this.type="世界馆",this.loadType()}},methods:{showInfo:function(){var t=this;if(t.showFromData){var e=t.showFromData,n=e.from.submit_name||"耳斯名言团队",a=e.from.submit_school||"地球";s()({title:"",text:"提供者：".concat(n,"\n出自：").concat(a),icon:i.a,button:"关闭"}),document.querySelector(".swal-icon.swal-icon--custom>img").style.maxWidth="150px",document.querySelector(".swal-text").style.fontSize="26px",document.querySelector(".swal-text").style.textAlign="center"}else t.showFromData="",d(t.mingyan).then((function(e){return t.showFromData=e.data,t.showInfo()}))},loadType:function(){var t=this,e=null;e=(e="解"===Object(f.a)(this.mingyan).text?this.solvePicUrl[Object(f.a)(this.mingyan).te]:this.mingyanPicUrl[Object(f.a)(this.mingyan).text])||"",d(this.mingyan,e).then((function(e){t.showFromData=e.data;var n=t.showFromData.from.type;"厦门市音乐学校"==t.showFromData.from.submit_school&&(n="音校馆"),t.type=n,t.isReady=!0,p.$emit("MingyanInfoLoaded",JSON.stringify(t.showFromData.pic))}))}}},g=(n("26a6"),Object(u.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"my--showfrom label label-rounded label-warning",on:{click:this.showInfo}},[e("i",{staticClass:"mdui-icon material-icons",staticStyle:{"font-size":"15px"}},[this._v("")]),this._v("  "),e("span",{staticClass:"my--showfrom-text"},[this._v(" "+this._s(this.type))])])}),[],!1,null,"ccca7b18",null).exports),b=n("a6b2"),x=(n("a717"),n("63a9"),{name:"MYImage",components:{FancyImage:n("9d74").a},props:{rawMingyan:String},data:function(){return{mingyanPicUrl:f.e,solvePicUrl:f.f,imgClassName:"",styleMinWidth:0,imgSrc:i.e}},watch:{"$route.path":function(){this.imgSrc=i.e}},mounted:function(){var t=this;Object(a.c)()?(this.styleMinWidth=28*this.text.split("").length-50,this.imgClassName="phone-img"):(this.styleMinWidth=28*this.text.split("").length-50,this.imgClassName="pc-img"),p.$on("MingyanInfoLoaded",(function(e){e=JSON.parse(e),Object(a.k)(e);var n={};(n=Object(a.g)()?e.webp:e.normal)&&(t.imgSrc=n.href+n.path+"?"+n.query)}))},destroyed:function(){p.$off("MingyanInfoLoaded")},computed:{text:function(){return this.rawMingyan.split("：")[1]+(this.rawMingyan.split("：")[2]?"：":"")+(this.rawMingyan.split("：")[2]||"")}}}),w=(n("5a93"),Object(u.a)(x,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"my--mingyan-pic",class:this.imgClassName},[e("FancyImage",{attrs:{src:this.imgSrc,title:this.rawMingyan,description:"拍摄：耳斯名言制作团队",className:"my--mingyan-pic",alt:this.rawMingyan}})],1)}),[],!1,null,null,null).exports),v=n("41cb"),S=n("d399"),M=(n("2bd2"),{name:"MYMain",components:{MYStar:m,MYInfo:g,MYFooter:b.a,MYImage:w,MYComment:function(){return Promise.all([n.e("vendor~comment"),n.e("comment")]).then(n.bind(null,"5210"))}},data:function(){return{mingyanPicUrl:f.e,teacher:"有一位老师",text:"名言找不到咯！！o(*￣▽￣*)ブ",rawMingyan:f.d[Object(f.c)()],starEvent:"addstar",isFirstTime:!0,isClickStoryTips:!1}},watch:{"$route.path":function(){this.showMingyan(Object(f.c)())}},mounted:function(){this.showMingyan(Object(f.c)()),fetch("https://status.erss.club/api/v2/incidents/unresolved.json?t=_"+(new Date).getTime()).then((function(t){return t.json()})).then((function(t){var e=t.incidents;if(0!==e.length){var n,i=Object(S.a)(e);try{for(i.s();!(n=i.n()).done;){var r=n.value,o=r.updated_at||"未知",s=r.name||"未知",c="https://status.erss.club/incidents/"+r.id,u=r.impact||"未知";u={none:"几乎无影响",minor:"有部分影响",major:"大部分影响",critical:"几乎全部影响"}[u]||"有部分影响",Object(a.k)({update:o,name:s,url:c,impact:u});var m='<div id="incidents-report">\n<h2 id="incidents-report-title">网站维护中`(*>﹏<*)′</h2>\n<ul id="incidents-report-ul">\n<li id="incidents-report-li">维护内容：'.concat(s,'</li>\n<li id="incidents-report-li">更新时间：').concat(new Date(o).toLocaleString(),'</li>\n<li id="incidents-report-li">影响范围：').concat(u,'</li>\n<li id="incidents-report-li">详情：<a id="incidents-report-a" href="').concat(c,'" target="_blank" rel="nofollow">https://status.erss.club/</a></li>\n</ul>\n</div>');a.l.open({type:"15s",message:m})}}catch(t){i.e(t)}finally{i.f()}}}))},computed:{mingyanConj:function(){return f.g[this.text]?f.g[this.text]:"曾经说过"}},methods:{showMingyan:function(t){!this.isFirstTime||Object(i.d)("isAutoShowMingyan")?(this.rawMingyan=f.d[t],this.teacher=Object(f.a)(t).teacher,this.text=Object(f.a)(t).text,a.h.put(a.i.mingyanId,t),Object(a.d)(".my--main")):this.isFirstTime=!1},nextMingyan:function(){var t=Object(f.b)();v.a.push("/@"+t),this.showMingyan(t)},onTextClick:function(){alert("你点击了名言")},onClickStoryTips:function(t){this.isClickStoryTips=t.isClickTips}}}),_=(n("92e0"),Object(u.a)(M,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"my--main-app"}},[n("div",{staticClass:"my--main",class:{"is-open-story":t.isClickStoryTips}},[n("h3",{staticClass:"my--mingyan-show"},[n("span",{staticClass:"my--mingyan-name icon my--name-wave label"},[t._v(" "+t._s(t.teacher)+" ")]),n("span",{staticClass:"my--mingyan-conj",domProps:{innerHTML:t._s(t.mingyanConj)}}),t._v("： ")]),n("h1",[n("span",{staticClass:"my--mingyan-text label label-secondary"},[n("span",{staticClass:"my--mingyan-raw"},[t._v(" "+t._s(t.text)+" ")]),"解"===t.text||t.mingyanPicUrl[t.text]?n("MYImage",{attrs:{rawMingyan:t.rawMingyan}}):t._e()],1)]),n("div",{staticClass:"my--mingyan-info info-text"},[n("MYInfo",{attrs:{mingyan:t.rawMingyan}}),t._v("   "),n("MYStar",{attrs:{mingyan:t.rawMingyan}}),n("br"),n("div",{staticClass:"tips"},[n("a",{staticStyle:{color:"#9b4dc9"},attrs:{id:"reload",onclick:"_hmt.push(['_trackEvent', '名言', '刷新', '手动' , '点击查看更多名言']);"},on:{click:t.nextMingyan}},[t._v("点击")]),t._v("查看更多名言 ")])],1)]),n("MYComment",{attrs:{rawMingyan:t.rawMingyan}}),n("MYFooter")],1)}),[],!1,null,"ae55609e",null));e.default=_.exports},3595:function(t,e,n){(e=n("a1a8")(!1)).push([t.i,".fancy-img-item[data-v-ae5a6b40]{cursor:pointer}",""]),t.exports=e},"4dd6":function(t,e,n){var a=n("3595");a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n("5925").default)("83fbf4dc",a,!0,{sourceMap:!1,shadowMode:!1})},"543a":function(t,e,n){(e=n("a1a8")(!1)).push([t.i,".my--showfrom[data-v-ccca7b18]{cursor:pointer}",""]),t.exports=e},"5a93":function(t,e,n){"use strict";n("7a95")},"6f17":function(t,e,n){var a=n("b3db");a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n("5925").default)("ab37ff20",a,!0,{sourceMap:!1,shadowMode:!1})},"7a95":function(t,e,n){var a=n("ffa3");a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n("5925").default)("15d775e2",a,!0,{sourceMap:!1,shadowMode:!1})},"8d4b":function(t,e,n){var a=n("543a");a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n("5925").default)("5da6322c",a,!0,{sourceMap:!1,shadowMode:!1})},"92e0":function(t,e,n){"use strict";n("6f17")},"9d74":function(t,e,n){"use strict";n("51fe"),n("da3f");var a=n("e2df"),i=(n("0cb0"),n("6a79")),r={name:"FancyImage",components:{CoolLightBox:a.a},props:{src:String,title:String,description:String,alt:String,className:String},data:function(){return{index:null}},mounted:function(){Object(i.d)(".fancy-img")},computed:{nowImgItem:function(){return[{title:this.title||"",description:this.description||"",src:this.src}]}}},o=(n("f0ba"),n("cba8")),s=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fancy-img"},[n("CoolLightBox",{attrs:{items:t.nowImgItem,index:t.index},on:{close:function(e){t.index=null}}}),t._l(t.nowImgItem,(function(e,a){return n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.src,expression:"src"}],key:a,staticClass:"fancy-img-item",class:t.className,attrs:{alt:t.alt},on:{click:function(e){t.index=a}}})}))],2)}),[],!1,null,"ae5a6b40",null);e.a=s.exports},"9ff2":function(t,e,n){"use strict";n("24f7")},a252:function(t,e,n){(e=n("a1a8")(!1)).push([t.i,".my--star-btn[data-v-4b47523a]{cursor:pointer}",""]),t.exports=e},b3db:function(t,e,n){(e=n("a1a8")(!1)).push([t.i,".my--main[data-v-ae55609e]{font-weight:700;z-index:1;text-align:center;margin-top:90px}.my--mingyan-text[data-v-ae55609e]{border-radius:5px}.my--mingyan-show[data-v-ae55609e]{font-size:30px}@media only screen and (max-width:480px){.my--mingyan-show[data-v-ae55609e]{font-size:25px}}.icon.my--name-wave[data-v-ae55609e]{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 4'%3E%3Cpath fill='none' stroke='%23333' d='M0 3.5c5 0 5-3 10-3s5 3 10 3 5-3 10-3 5 3 10 3'/%3E%3C/svg%3E\") repeat-x 0 100%;background-size:20px auto}.my--mingyan-info[data-v-ae55609e]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:16px}.my--showfrom[data-v-ae55609e]{background-color:#5676dc!important}.tips[data-v-ae55609e]{font-weight:900;margin-top:5px;font-size:14px}#reload[data-v-ae55609e]{cursor:pointer}.my--main.is-open-story[data-v-ae55609e]>:not([class=my--story]){-webkit-animation:openStoryArea-data-v-ae55609e 1s ease-in-out;animation:openStoryArea-data-v-ae55609e 1s ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes openStoryArea-data-v-ae55609e{0%{transform:translateX(0)}to{transform:translateX(100vw)}}@keyframes openStoryArea-data-v-ae55609e{0%{transform:translateX(0)}to{transform:translateX(100vw)}}",""]),t.exports=e},e1f9:function(t,e,n){"use strict";n("0647")},f0ba:function(t,e,n){"use strict";n("4dd6")},f561:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var a,i,r=n("9d6b"),o=n("4d63"),s=(n("e186"),n("c505"),n("6c88"),n("f540"),n("1cdb"),n("1b2a")),c=n("6a79"),u=n("2e83"),m=s.b.star_v3,l={getNum:function(t){if(Promise)return t||(t=document.querySelector(".my--mingyan-name").innerText.trim()+"："+document.querySelector(".my--mingyan-text").innerText.trim()),new Promise((function(e,n){fetch(m,Object(o.a)(Object(o.a)({},s.f),{},{body:JSON.stringify({event:"getnum",data:{MY_text:t,MY_token:Object(c.e)(),t:(new Date).getTime()}})})).then((function(t){return t.json()})).then((function(t){e(t)})).catch((function(t){n(t)}))}))},addStar:(i=Object(r.a)(regeneratorRuntime.mark((function t(e,n,a){var i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Promise){t.next=2;break}return t.abrupt("return");case 2:if(e||n||(e=document.querySelector(".my--mingyan-name").innerText.trim()+"："+document.querySelector(".my--mingyan-text").innerText.trim()),i={},n&&e&&(i={MY_text:e}),n&&!e&&(i={MY_ID:n}),!n&&e&&(i={MY_text:e}),t.prev=7,t.t0=a,t.t0){t.next=13;break}return t.next=12,Object(u.a)();case 12:t.t0=t.sent;case 13:return a=t.t0,t.abrupt("return",new Promise((function(t,e){fetch(m,Object(o.a)(Object(o.a)({},s.f),{},{body:JSON.stringify({event:"addstar",data:Object(o.a)(Object(o.a)({},i),{},{MY_token:Object(c.e)(),re_token:a,t:(new Date).getTime()})})})).then((function(t){return t.json()})).then((function(e){t(e)})).catch((function(t){e(t)}))})));case 17:t.prev=17,t.t1=t.catch(7),c.a.err("点赞失败："+t.t1);case 20:case"end":return t.stop()}}),t,null,[[7,17]])}))),function(t,e,n){return i.apply(this,arguments)}),removeStar:(a=Object(r.a)(regeneratorRuntime.mark((function t(e,n,a){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Promise){t.next=2;break}return t.abrupt("return");case 2:if(e||(e=document.querySelector(".my--mingyan-name").innerText.trim()+"："+document.querySelector(".my--mingyan-text").innerText.trim()),n=n||"",t.prev=4,t.t0=a,t.t0){t.next=10;break}return t.next=9,Object(u.a)();case 9:t.t0=t.sent;case 10:return a=t.t0,t.abrupt("return",new Promise((function(t,n){fetch(m,Object(o.a)(Object(o.a)({},s.f),{},{body:JSON.stringify({event:"removestar",data:{MY_text:e,MY_token:Object(c.e)(),re_token:a,t:(new Date).getTime()}})})).then((function(t){return t.json()})).then((function(e){t(e)})).catch((function(t){n(t)}))})));case 14:t.prev=14,t.t1=t.catch(4),c.a.err("点赞失败："+t.t1);case 17:case"end":return t.stop()}}),t,null,[[4,14]])}))),function(t,e,n){return a.apply(this,arguments)}),getRanking:function(){if(Promise)return new Promise((function(t,e){fetch(m,Object(o.a)(Object(o.a)({},s.f),{},{body:JSON.stringify({event:"ranking",data:{t:(new Date).getTime()}})})).then((function(t){return t.json()})).then((function(e){t(e)})).catch((function(t){e(t)}))}))},getHistoryRanking:function(){if(Promise)return new Promise((function(t,e){fetch("".concat(s.b.ranking_history,"?t=_").concat((new Date).getTime())).then((function(t){return t.json()})).then((function(n){Object(c.k)(n),"请求成功"==n.msg&&t(n.data),e(n.msg)}))}))},update:function(t,e){if(Promise){t||e||(t=document.querySelector(".my--mingyan-name").innerText.trim()+"："+document.querySelector(".my--mingyan-text").innerText.trim());var n={};return e&&t&&(n={MY_text:t}),e&&!t&&(n={MY_ID:e}),!e&&t&&(n={MY_text:t}),new Promise((function(t,e){fetch(m,Object(o.a)(Object(o.a)({},s.f),{},{body:JSON.stringify({event:"update",data:Object(o.a)(Object(o.a)({},n),{},{MY_token:Object(c.e)(),t:(new Date).getTime()})})})).then((function(t){return t.json()})).then((function(e){t(e)})).catch((function(t){e(t)}))}))}}}},fdab:function(t,e,n){(e=n("a1a8")(!1)).push([t.i,".swal-overlay{z-index:10!important}.notyf__message{font-size:17px!important;font-family:Roboto!important;margin:0!important}.notyf{opacity:.8!important;padding-top:20px!important;padding-right:20px!important;padding-bottom:0!important;padding-left:20px!important}.notyf__toast{border-radius:5px!important}.notyf__toast--upper{margin-bottom:10px!important}@media only screen and (max-width:480px){.notyf{padding-top:0!important}}",""]),t.exports=e},ffa3:function(t,e,n){(e=n("a1a8")(!1)).push([t.i,".my--mingyan-pic{max-width:200px;border-radius:5px}.pc-img{margin-left:25px;margin-right:25px;margin-bottom:25px}.phone-img{margin-left:5px;margin-right:5px;margin-bottom:5px}",""]),t.exports=e}}]);