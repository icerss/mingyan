/*!
 * ERSS SAYING
 * (c) 2020-2022 Xhemj
 * Build: 2022-3-6 22:14:51
 * Version: 3.1.1
 * ====
 * o(〃＾▽＾〃)o
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([["MYStar"],{"04b9":function(t,e,a){"use strict";a("c09a")},c09a:function(t,e,a){},c9fa:function(t,e,a){},cb95:function(t,e,a){"use strict";a.r(e);a("1860");var n=a("9944"),r=a("1b2a"),i=a("f561");a("2c45"),a("b0a9"),a("2ee7");window.mtcaptchaConfig={sitekey:r.f,theme:"neowhite",lang:"zh",customLangText:{zh:{loading:"加载中……",verifying:"验证中……"}},"jsloaded-callback":"mtcaptchaready",render:"explicit",renderQueue:[]};var c=!1;window.mtcaptchaready=function(){c=!0},Promise.all([Object(n.i)("https://service.mtcaptcha.com/mtcv1/client/mtcaptcha.min.js"),Object(n.i)("https://service2.mtcaptcha.com/mtcv1/client/mtcaptcha2.min.js")]).then((function(){Object(n.j)("人机验证（mtCaptcha）加载成功！"),c=!0}));var s=a("b652"),o={name:"MYStar",props:{mingyan:String},data:function(){return{starEvent:"addstar",loadingHtml:'\n    \x3c!-- 点赞 --\x3e\n    <i class="mdui-icon material-icons" id="star-logo" style="cursor: pointer;">&#xe8dc;</i>\n    <span class="my--star-num">\n    \x3c!-- 加载动画 --\x3e\n  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto;background: none;shape-rendering: auto;position: relative;transform: translateY(5px);" width="15px" height="15px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">\n    <circle cx="50" cy="50" fill="none" stroke="rgba(0,0,0,.65)" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">\n      <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.75s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>\n    </circle>\n  \x3c!-- https://loading.io/ --\x3e</svg>\n    </span>\n    '}},mounted:function(){window.addEventListener("hashchange",(function(){this.starEvent="addstar"}))},created:function(){this.doStar=this.star},methods:{isSwalShow:function(){return Object(n.f)(".swal-overlay--show-modal")},turnRed:function(){return Object(n.m)("#star-logo").style.color="red"},turnGray:function(){return Object(n.m)("#star-logo").style.color="#000000A3"},star:function(t,e,a){Object(s.recordEvent)(s.recordEventId.clickMYStarButton);var i=this;if(Object(n.j)(this.mingyan),!this.isSwalShow())switch(Object(n.o)({title:Object(n.m)(".my--mingyan-text").innerText,text:"加载出错了？刷新试试？",icon:r.a,button:"关闭"}).then((function(){i.starEvent="addstar",document.removeEventListener("click",i.doStar)})),Object(n.m)(".swal-icon.swal-icon--custom>img").style.maxWidth="150px",Object(n.m)(".swal-text").innerHTML=this.loadingHtml,document.querySelector("#star-logo").addEventListener("click",(function(){i.doStar()})),this.turnGray(),this.starEvent){case"addstar":this.addStar(t,e,a);break;case"removestar":this.removeStar(t,e,a)}},addStar:function(t,e,a){Object(n.j)(t);var r=this;r.turnGray(),i.a.addStar(t,e,a).then((function(t){if(0!=t.code){if(n.a.err(t.msg),Object(n.m)(".my--star-num").innerHTML=t.data.starNum,t.data.isStar&&(r.turnRed(),r.starEvent="removestar"),-1!==t.msg.indexOf("人机验证")||Object(n.l)("captcha"))return r.reVerify("addstar")}else n.a.su(t.msg),Object(n.m)(".my--star-num").innerHTML=t.data.starNum,t.data.isStar&&(r.turnRed(),r.starEvent="removestar")})).catch((function(t){n.a.err("错误：\n"+t)}))},removeStar:function(t,e,a){var r=this;r.turnGray(),i.a.removeStar(t,e,a).then((function(t){if(0!=t.code){if(n.a.err(t.msg),Object(n.m)(".my--star-num").innerHTML=t.data.starNum,t.data.isStar||(r.turnGray(),r.starEvent="addstar"),-1!==t.msg.indexOf("人机验证")||Object(n.l)("captcha"))return r.reVerify("removestar")}else n.a.su(t.msg),Object(n.m)(".my--star-num").innerHTML=t.data.starNum,t.data.isStar||(r.turnGray(),r.starEvent="addstar")})).catch((function(t){n.a.err("错误：\n"+t)}))},reVerify:function(t){var e,a,r=this;Object(n.o)({title:"感谢您对耳斯名言的支持，但为了防止恶意刷赞行为，我们不得不对您的身份进行验证。若您多次收到验证提示，建议您稍后再试。",text:"加载中……",icon:"",button:"继续"}).then((function(){var e=window.mtcaptcha.getVerifiedToken();return e?(r.starEvent=t,r.star(null,null,"reverify_mtcaptcha@"+e)):n.a.err("验证失败：请重试")})),Object(n.m)(".swal-title").style.fontSize="20px",Object(n.m)(".swal-text").innerHTML="验证码加载中……",Object(n.m)(".swal-text").id="star-reverify",Object(n.m)("#star-reverify").style.margin="-30px",e="star-reverify",a=(a="addstar")||"addstar",new Promise((function(t,n){c||n("人机验证正在加载中，请稍后再试"),window.mtcaptchaConfig.action=a,window.mtcaptchaConfig.renderQueue.push(e),t()}))}}},d=(a("e1f9"),a("04b9"),a("cba8")),m=Object(d.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"my--star-btn label label-rounded label-warning",on:{click:function(e){return t.doStar()}}},[a("i",{staticClass:"mdui-icon material-icons",staticStyle:{"font-size":"15px"}},[t._v("")]),t._v("  点赞")])}),[],!1,null,"9726fbba",null);e.default=m.exports},e1f9:function(t,e,a){"use strict";a("c9fa")}}]);