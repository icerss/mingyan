/*!
 * ERSS SAYING
 * (c) 2020-2021 Xhemj
 * Build: 2021-10-24 18:50:37
 * Version: 3.1.1
 * ====
 * o(〃＾▽＾〃)o
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([["main"],{"04b9":function(t,n,e){"use strict";e("c09a")},"2e06":function(t,n,e){"use strict";e.r(n);e("c505"),e("7099"),e("0b69"),e("81f1");var a=e("9944"),i=e("1b2a"),r=e("f561");window.mtcaptchaConfig={sitekey:i.g,theme:"neowhite",lang:"zh",customLangText:{zh:{loading:"加载中……",verifying:"验证中……"}},"jsloaded-callback":"mtcaptchaready",render:"explicit",renderQueue:[]};var c=!1;window.mtcaptchaready=function(){c=!0},Promise.all([Object(a.i)("https://service.mtcaptcha.com/mtcv1/client/mtcaptcha.min.js"),Object(a.i)("https://service2.mtcaptcha.com/mtcv1/client/mtcaptcha2.min.js")]).then((function(){Object(a.j)("人机验证（mtCaptcha）加载成功！"),c=!0}));var s=e("b652"),o={name:"MYStar",props:{mingyan:String},data:function(){return{starEvent:"addstar",loadingHtml:'\n    \x3c!-- 点赞 --\x3e\n    <i class="mdui-icon material-icons" id="star-logo" style="cursor: pointer;">&#xe8dc;</i>\n    <span class="my--star-num">\n    \x3c!-- 加载动画 --\x3e\n  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto;background: none;shape-rendering: auto;position: relative;transform: translateY(5px);" width="15px" height="15px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">\n    <circle cx="50" cy="50" fill="none" stroke="rgba(0,0,0,.65)" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">\n      <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.75s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>\n    </circle>\n  \x3c!-- https://loading.io/ --\x3e</svg>\n    </span>\n    '}},mounted:function(){window.addEventListener("hashchange",(function(){this.starEvent="addstar"}))},created:function(){this.doStar=this.star},methods:{isSwalShow:function(){return Object(a.f)(".swal-overlay--show-modal")},turnRed:function(){return Object(a.m)("#star-logo").style.color="red"},turnGray:function(){return Object(a.m)("#star-logo").style.color="#000000A3"},star:function(t,n,e){Object(s.recordEvent)(s.recordEventId.clickMYStarButton);var r=this;if(Object(a.j)(this.mingyan),!this.isSwalShow())switch(Object(a.o)({title:Object(a.m)(".my--mingyan-text").innerText,text:"加载出错了？刷新试试？",icon:i.b,button:"关闭"}).then((function(){r.starEvent="addstar",document.removeEventListener("click",r.doStar)})),Object(a.m)(".swal-icon.swal-icon--custom>img").style.maxWidth="150px",Object(a.m)(".swal-text").innerHTML=this.loadingHtml,document.querySelector("#star-logo").addEventListener("click",(function(){r.doStar()})),this.turnGray(),this.starEvent){case"addstar":this.addStar(t,n,e);break;case"removestar":this.removeStar(t,n,e)}},addStar:function(t,n,e){Object(a.j)(t);var i=this;i.turnGray(),r.a.addStar(t,n,e).then((function(t){if(0!=t.code){if(a.a.err(t.msg),Object(a.m)(".my--star-num").innerHTML=t.data.starNum,t.data.isStar&&(i.turnRed(),i.starEvent="removestar"),-1!==t.msg.indexOf("人机验证")||Object(a.l)("captcha"))return i.reVerify("addstar")}else a.a.su(t.msg),Object(a.m)(".my--star-num").innerHTML=t.data.starNum,t.data.isStar&&(i.turnRed(),i.starEvent="removestar")})).catch((function(t){a.a.err("错误：\n"+t)}))},removeStar:function(t,n,e){var i=this;i.turnGray(),r.a.removeStar(t,n,e).then((function(t){if(0!=t.code){if(a.a.err(t.msg),Object(a.m)(".my--star-num").innerHTML=t.data.starNum,t.data.isStar||(i.turnGray(),i.starEvent="addstar"),-1!==t.msg.indexOf("人机验证")||Object(a.l)("captcha"))return i.reVerify("removestar")}else a.a.su(t.msg),Object(a.m)(".my--star-num").innerHTML=t.data.starNum,t.data.isStar||(i.turnGray(),i.starEvent="addstar")})).catch((function(t){a.a.err("错误：\n"+t)}))},reVerify:function(t){var n,e,i=this;Object(a.o)({title:"感谢您对耳斯名言的支持，但为了防止恶意刷赞行为，我们不得不对您的身份进行验证。若您多次收到验证提示，建议您稍后再试。",text:"加载中……",icon:"",button:"继续"}).then((function(){var n=window.mtcaptcha.getVerifiedToken();return n?(i.starEvent=t,i.star(null,null,"reverify_mtcaptcha@"+n)):a.a.err("验证失败：请重试")})),Object(a.m)(".swal-title").style.fontSize="20px",Object(a.m)(".swal-text").innerHTML="验证码加载中……",Object(a.m)(".swal-text").id="star-reverify",Object(a.m)("#star-reverify").style.margin="-30px",n="star-reverify",e=(e="addstar")||"addstar",new Promise((function(t,a){c||a("人机验证正在加载中，请稍后再试"),window.mtcaptchaConfig.action=e,window.mtcaptchaConfig.renderQueue.push(n),t()}))}}},m=(e("e1f9"),e("04b9"),e("cba8")),u=Object(m.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("a",{staticClass:"my--star-btn label label-rounded label-warning",on:{click:function(n){return t.doStar()}}},[e("i",{staticClass:"mdui-icon material-icons",staticStyle:{"font-size":"15px"}},[t._v("")]),t._v("  点赞")])}),[],!1,null,"9726fbba",null).exports,l=(e("1cdb"),e("4d63")),d=(e("6c88"),e("f540"),function(t,n){if(Promise)return new Promise((function(e,r){fetch(i.c.showfrom,Object(l.a)(Object(l.a)({},i.h),{},{body:JSON.stringify({mingyan:t||Object(a.m)(".my--mingyan-name").innerText.trim()+"："+Object(a.m)(".my--mingyan-text").innerText.trim(),picPath:n,t:(new Date).getTime()})})).then((function(t){return t.json()})).then((function(t){e(t)})).catch((function(t){r(t)}))}))}),f=e("7cc4"),h=e("8085"),y={name:"MYInfo",props:{mingyan:String},data:function(){return{type:"世界馆",showFromData:"",solvePicUrl:f.f,mingyanPicUrl:f.e}},mounted:function(){this.loadType()},watch:{mingyan:function(){this.type="世界馆",this.loadType()}},methods:{showInfo:function(){Object(s.recordEvent)(s.recordEventId.clickMYInfoButton);var t=this;if(t.showFromData){var n=t.showFromData,e=n.from.submit_name||"耳斯名言团队",r=n.from.submit_school||"地球";Object(a.o)({title:"",text:"提供者：".concat(e,"\n出自：").concat(r),icon:i.a,button:"关闭"}),Object(a.m)(".swal-icon.swal-icon--custom>img").style.maxWidth="150px",Object(a.m)(".swal-text").style.fontSize="26px",Object(a.m)(".swal-text").style.textAlign="center"}else t.showFromData="",d(t.mingyan).then((function(n){return t.showFromData=n.data,t.showInfo()}))},loadType:function(){var t=this,n=null;n=(n="解"===Object(f.a)(this.mingyan).text?this.solvePicUrl[Object(f.a)(this.mingyan).te]:this.mingyanPicUrl[Object(f.a)(this.mingyan).text])||"",d(this.mingyan,n).then((function(n){t.showFromData=n.data;var e=t.showFromData.from.type;"厦门市音乐学校"==t.showFromData.from.submit_school&&(e="音校馆"),t.type=e,t.isReady=!0,h.a.$emit("StoryLoaded",t.showFromData.story||"暂时还没有故事哦~~")}))}}},g=(e("38352"),Object(m.a)(y,(function(){var t=this.$createElement,n=this._self._c||t;return n("a",{staticClass:"my--showfrom label label-rounded label-warning",on:{click:this.showInfo}},[n("i",{staticClass:"mdui-icon material-icons",staticStyle:{"font-size":"15px"}},[this._v("")]),this._v("  "),n("span",{staticClass:"my--showfrom-text"},[this._v(" "+this._s(this.type))])])}),[],!1,null,"198a92de",null).exports),b=(e("a717"),e("63a9"),e("d7f0"),{name:"MYImage",components:{FancyImage:e("9d74").a},props:{rawMingyan:String},data:function(){return{imgClassName:"",styleMinWidth:0,commonVersion:"1.0.2"}},mounted:function(){var t=Object(f.a)(this.rawMingyan).text;Object(a.c)()?(this.styleMinWidth=28*t.split("").length-50,this.imgClassName="phone-img"):(this.styleMinWidth=28*t.split("").length-50,this.imgClassName="pc-img")},computed:{imgSrc:function(){var t=Object(f.a)(this.rawMingyan).text,n=Object(f.a)(this.rawMingyan).teacher,e="https://cdn.jsdelivr.net/npm/@icerss/mingyan-oss@[version]";if("解"===t){var a=e,i=f.f[n],r=i.split("@")[1]||this.commonVersion;return(a=a.replace("[version]",r))+i}var c=e,s=f.e[t],o=s.split("@")[1]||this.commonVersion;return(c=c.replace("[version]",o))+s.split("@")[0]}}}),p=(e("5a93"),Object(m.a)(b,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"my--mingyan-pic",class:this.imgClassName},[n("FancyImage",{attrs:{src:this.imgSrc,title:this.rawMingyan,description:"拍摄：耳斯名言制作团队",className:"my--mingyan-pic",alt:this.rawMingyan}})],1)}),[],!1,null,null,null).exports),v=e("41cb"),j=e("d399"),w=(e("2bd2"),{name:"MYMain",components:{MYStar:u,MYInfo:g,MYImage:p,MYComment:function(){return Promise.all([e.e("vendor-comment"),e.e("comment")]).then(e.bind(null,"5210"))}},data:function(){return{mingyanPicUrl:f.e,teacher:"有一位老师",text:"名言找不到咯！！o(*￣▽￣*)ブ",rawMingyan:f.d[Object(f.c)()],starEvent:"addstar",isFirstTime:!0,isClickStoryTips:!1,mainClassName:""}},watch:{"$route.path":function(){this.showMingyan(Object(f.c)())},isClickStoryTips:function(){this.mainClassName=this.isClickStoryTips?"is-open-story":"is-close-story"}},mounted:function(){this.showMingyan(Object(f.c)()),fetch("https://status.erss.club/api/v2/incidents/unresolved.json?t=_"+(new Date).getTime()).then((function(t){return t.json()})).then((function(t){var n=t.incidents;if(0!==n.length){var e,i=Object(j.a)(n);try{for(i.s();!(e=i.n()).done;){var r=e.value,c=r.updated_at||"未知",s=r.name||"未知",o="https://status.erss.club/incidents/"+r.id,m=r.impact||"未知";m={none:"几乎无影响",minor:"有部分影响",major:"大部分影响",critical:"几乎全部影响"}[m]||"有部分影响",Object(a.j)({update:c,name:s,url:o,impact:m});var u='<div id="incidents-report">\n<h2 id="incidents-report-title">网站维护中`(*>﹏<*)′</h2>\n<ul id="incidents-report-ul">\n<li id="incidents-report-li">维护内容：'.concat(s,'</li>\n<li id="incidents-report-li">更新时间：').concat(new Date(c).toLocaleString(),'</li>\n<li id="incidents-report-li">影响范围：').concat(m,'</li>\n<li id="incidents-report-li">详情：<a id="incidents-report-a" href="').concat(o,'" target="_blank" rel="nofollow">https://status.erss.club/</a></li>\n</ul>\n</div>');a.k.open({type:"15s",message:u})}}catch(t){i.e(t)}finally{i.f()}}}));var t=this;window.onresize=function(){t.isClickStoryTips=!1,Object(a.m)(".my--main").classList.remove("is-close-story")},h.a.$on("onReload",(function(){t.isClickStoryTips=!1,Object(a.m)(".my--main").classList.remove("is-close-story")}))},beforeDestroy:function(){h.a.$off("onReload")},computed:{mingyanConj:function(){return f.g[this.text]?f.g[this.text]:"曾经说过"}},methods:{showMingyan:function(t){!this.isFirstTime||Object(i.e)("isAutoShowMingyan")?(this.rawMingyan=f.d[t],this.teacher=Object(f.a)(t).teacher,this.text=Object(f.a)(t).text,a.g.put(a.h.mingyanId,t),Object(a.d)(".my--main")):this.isFirstTime=!1},nextMingyan:function(){Object(s.recordEvent)(s.recordEventId.clickMYReloadButton);var t=Object(f.b)();v.a.push("/@"+t),this.showMingyan(t)},onTextClick:function(){alert("你点击了名言")},onClickStoryTips:function(t){this.isClickStoryTips=t.isClickTips}}}),O=(e("aca0"),Object(m.a)(w,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"my--main-app"}},[e("div",{staticClass:"my--main",class:t.mainClassName},[e("h3",{staticClass:"my--mingyan-show"},[e("span",{staticClass:"my--mingyan-name icon my--name-wave label"},[t._v(" "+t._s(t.teacher)+" ")]),e("span",{staticClass:"my--mingyan-conj",domProps:{innerHTML:t._s(t.mingyanConj)}}),t._v("： ")]),e("h1",[e("span",{staticClass:"my--mingyan-text label label-secondary"},[e("span",{staticClass:"my--mingyan-raw"},[t._v(" "+t._s(t.text)+" ")]),"解"===t.text||t.mingyanPicUrl[t.text]?e("MYImage",{attrs:{rawMingyan:t.rawMingyan}}):t._e()],1)]),e("div",{staticClass:"my--mingyan-info info-text"},[e("MYInfo",{attrs:{mingyan:t.rawMingyan}}),t._v("   "),e("MYStar",{attrs:{mingyan:t.rawMingyan}}),e("br"),e("div",{staticClass:"tips"},[e("a",{staticStyle:{color:"#9b4dc9"},attrs:{id:"reload",onclick:"_hmt.push(['_trackEvent', '名言', '刷新', '手动' , '点击查看更多名言']);"},on:{click:t.nextMingyan}},[t._v("点击")]),t._v("查看更多名言 ")])],1)]),e("MYComment",{attrs:{rawMingyan:t.rawMingyan}})],1)}),[],!1,null,"179d5d54",null));n.default=O.exports},38352:function(t,n,e){"use strict";e("3e14")},"3e14":function(t,n,e){},"5a93":function(t,n,e){"use strict";e("972a")},"972a":function(t,n,e){},"9d74":function(t,n,e){"use strict";e("51fe"),e("da3f");var a=e("e2df"),i=(e("0cb0"),e("9944")),r={name:"FancyImage",components:{CoolLightBox:a.a},props:{src:String,title:String,description:String,alt:String,className:String},data:function(){return{index:null}},mounted:function(){Object(i.d)(".fancy-img")},computed:{nowImgItem:function(){return[{title:this.title||"",description:this.description||"",src:this.src}]}}},c=(e("9d7a"),e("cba8")),s=Object(c.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"fancy-img"},[e("CoolLightBox",{attrs:{items:t.nowImgItem,index:t.index},on:{close:function(n){t.index=null}}}),t._l(t.nowImgItem,(function(n,a){return e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.src,expression:"src"}],key:a,staticClass:"fancy-img-item",class:t.className,attrs:{alt:t.alt,title:t.alt},on:{click:function(n){t.index=a}}})}))],2)}),[],!1,null,"027b322c",null);n.a=s.exports},"9d7a":function(t,n,e){"use strict";e("d3db")},aca0:function(t,n,e){"use strict";e("e78e")},c09a:function(t,n,e){},c9fa:function(t,n,e){},d3db:function(t,n,e){},e1f9:function(t,n,e){"use strict";e("c9fa")},e78e:function(t,n,e){},f561:function(t,n,e){"use strict";e.d(n,"a",(function(){return d}));var a,i,r=e("9d6b"),c=e("4d63"),s=(e("e186"),e("c505"),e("6c88"),e("f540"),e("b31b"),e("1cdb"),e("1b2a")),o=e("b652"),m=e("9944"),u=e("2e83"),l=s.c.star_v3,d={getNum:function(t){if(Promise)return t||(t=Object(m.m)(".my--mingyan-name").innerText.trim()+"："+Object(m.m)(".my--mingyan-text").innerText.trim()),new Promise((function(n,e){fetch(l,Object(c.a)(Object(c.a)({},s.h),{},{body:JSON.stringify({event:"getnum",data:{MY_text:t,MY_token:Object(m.e)(),t:(new Date).getTime()}})})).then((function(t){return t.json()})).then((function(t){n(t)})).catch((function(t){e(t)}))}))},addStar:(i=Object(r.a)(regeneratorRuntime.mark((function t(n,e,a){var i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Promise){t.next=2;break}return t.abrupt("return");case 2:if(n||e||(n=Object(m.m)(".my--mingyan-name").innerText.trim()+"："+Object(m.m)(".my--mingyan-text").innerText.trim()),i={},e&&n&&(i={MY_text:n}),e&&!n&&(i={MY_ID:e}),!e&&n&&(i={MY_text:n}),t.prev=7,t.t0=a,t.t0){t.next=13;break}return t.next=12,Object(u.a)();case 12:t.t0=t.sent;case 13:return a=t.t0,t.abrupt("return",new Promise((function(t,n){fetch(l,Object(c.a)(Object(c.a)({},s.h),{},{body:JSON.stringify({event:"addstar",data:Object(c.a)(Object(c.a)({},i),{},{MY_token:Object(m.e)(),re_token:a,t:(new Date).getTime()})})})).then((function(t){return t.json()})).then((function(n){t(n),0===n.code&&Object(o.recordEvent)(o.recordEventId.addStarEvent)})).catch((function(t){n(t)}))})));case 17:t.prev=17,t.t1=t.catch(7),m.a.err("点赞失败："+t.t1);case 20:case"end":return t.stop()}}),t,null,[[7,17]])}))),function(t,n,e){return i.apply(this,arguments)}),removeStar:(a=Object(r.a)(regeneratorRuntime.mark((function t(n,e,a){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Promise){t.next=2;break}return t.abrupt("return");case 2:if(n||(n=Object(m.m)(".my--mingyan-name").innerText.trim()+"："+Object(m.m)(".my--mingyan-text").innerText.trim()),e=e||"",t.prev=4,t.t0=a,t.t0){t.next=10;break}return t.next=9,Object(u.a)();case 9:t.t0=t.sent;case 10:return a=t.t0,t.abrupt("return",new Promise((function(t,e){fetch(l,Object(c.a)(Object(c.a)({},s.h),{},{body:JSON.stringify({event:"removestar",data:{MY_text:n,MY_token:Object(m.e)(),re_token:a,t:(new Date).getTime()}})})).then((function(t){return t.json()})).then((function(n){t(n),0===n.code&&Object(o.recordEvent)(o.recordEventId.removeStarEvent)})).catch((function(t){e(t)}))})));case 14:t.prev=14,t.t1=t.catch(4),m.a.err("点赞失败："+t.t1);case 17:case"end":return t.stop()}}),t,null,[[4,14]])}))),function(t,n,e){return a.apply(this,arguments)}),getRanking:function(){if(Promise)return new Promise((function(t,n){fetch(l,Object(c.a)(Object(c.a)({},s.h),{},{body:JSON.stringify({event:"ranking",data:{t:(new Date).getTime()}})})).then((function(t){return t.json()})).then((function(n){t(n),Object(o.recordEvent)(o.recordEventId.getCurrentRanking)})).catch((function(t){n(t)}))}))},getHistoryRanking:function(){if(Promise)return new Promise((function(t,n){setTimeout((function(){n("请求超时")}),2e3),fetch("".concat(s.c.ranking_history,"?t=_").concat((new Date).getTime())).then((function(t){return t.json()})).then((function(e){Object(m.j)(e),"请求成功"==e.msg&&(t(e.data),Object(o.recordEvent)(o.recordEventId.getHistoryRanking)),n(e.msg)}))}))},update:function(t,n){if(Promise){t||n||(t=Object(m.m)(".my--mingyan-name").innerText.trim()+"："+Object(m.m)(".my--mingyan-text").innerText.trim());var e={};return n&&t&&(e={MY_text:t}),n&&!t&&(e={MY_ID:n}),!n&&t&&(e={MY_text:t}),new Promise((function(t,n){fetch(l,Object(c.a)(Object(c.a)({},s.h),{},{body:JSON.stringify({event:"update",data:Object(c.a)(Object(c.a)({},e),{},{MY_token:Object(m.e)(),t:(new Date).getTime()})})})).then((function(t){return t.json()})).then((function(n){t(n)})).catch((function(t){n(t)}))}))}}}}}]);