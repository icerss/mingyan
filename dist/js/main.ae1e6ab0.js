(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["main"],{"10e7":function(t,n,e){"use strict";e("3e28")},"1d86":function(t,n,e){},"2e06":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"my--main-app"}},[e("div",{staticClass:"my--main"},[e("h3",{staticClass:"my--mingyan-show"},[e("span",{staticClass:"my--mingyan-name icon my--name-wave label"},[t._v(" "+t._s(t.teacher)+" ")]),e("span",{staticClass:"my--mingyan-conj",domProps:{innerHTML:t._s(t.mingyanConj)}}),t._v("： ")]),e("h1",[e("span",{staticClass:"my--mingyan-text label label-secondary"},[e("span",{staticClass:"my--mingyan-raw"},[t._v(" "+t._s(t.text)+" ")]),"解"===t.text||t.mingyanPicUrl[t.text]?e("MYImage",{attrs:{rawMingyan:t.rawMingyan}}):t._e()],1)]),e("div",{staticClass:"my--mingyan-info info-text"},[e("MYInfo",{attrs:{mingyan:t.rawMingyan}}),t._v("   "),e("MYStar",{attrs:{mingyan:t.rawMingyan}}),e("br"),e("div",{staticClass:"tips"},[e("a",{staticStyle:{color:"#9b4dc9"},attrs:{id:"reload",onclick:"_hmt.push(['_trackEvent', '名言', '刷新', '手动' , '点击查看更多名言']);"},on:{click:t.nextMingyan}},[t._v("点击")]),t._v("查看更多名言 ")])],1)]),e("MYComment",{attrs:{rawMingyan:t.rawMingyan}}),e("MYFooter")],1)},r=[],i=(e("b1fa"),e("2e6f"),e("af21"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("a",{staticClass:"my--star-btn label label-rounded label-warning",on:{click:t.doStar}},[e("i",{staticClass:"mdui-icon material-icons",staticStyle:{"font-size":"15px"}},[t._v("")]),t._v("  点赞")])}),c=[],o=e("6a79"),s=e("1b2a"),u=e("f561"),m=e("1de4"),l=e.n(m),d={name:"MYStar",props:{mingyan:String},data:function(){return{starEvent:"addstar",loadingHtml:'\n    \x3c!-- 点赞 --\x3e\n    <i class="mdui-icon material-icons" id="star-logo" style="cursor: pointer;">&#xe8dc;</i>\n    <span class="my--star-num">\n    \x3c!-- 加载动画 --\x3e\n  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto;background: none;shape-rendering: auto;position: relative;transform: translateY(5px);" width="15px" height="15px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">\n    <circle cx="50" cy="50" fill="none" stroke="rgba(0,0,0,.65)" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">\n      <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.75s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>\n    </circle>\n  \x3c!-- https://loading.io/ --\x3e</svg>\n    </span>\n    '}},mounted:function(){window.addEventListener("hashchange",(function(){this.starEvent="addstar"})),Object(o["c"])("#star-logo",this.doStar)},created:function(){this.doStar=this.star},methods:{isSwalShow:function(){return Object(o["g"])(".swal-overlay--show-modal")},turnRed:function(){return document.querySelector("#star-logo").style.color="red"},turnGray:function(){return document.querySelector("#star-logo").style.color="#000000A3"},star:function(){var t=this;if(Object(o["k"])(this.mingyan),!this.isSwalShow())switch(l()({title:document.querySelector(".my--mingyan-text").innerText,text:"加载出错了？刷新试试？",icon:s["a"],button:"关闭"}).then((function(){t.starEvent="addstar"})),document.querySelector(".swal-icon.swal-icon--custom>img").style.maxWidth="150px",document.querySelector(".swal-text").innerHTML=this.loadingHtml,this.turnGray(),this.starEvent){case"addstar":this.addStar();break;case"removestar":this.removeStar();break}},addStar:function(){var t=this;t.turnGray(),u["a"].addStar().then((function(n){var e=n.code;0!=e?(o["a"].err(n.msg),document.querySelector(".my--star-num").innerHTML=n.data.starNum,n.data.isStar&&(t.turnRed(),t.starEvent="removestar")):(o["a"].su(n.msg),document.querySelector(".my--star-num").innerHTML=n.data.starNum,n.data.isStar&&(t.turnRed(),t.starEvent="removestar"))}))["catch"]((function(t){o["a"].err("错误：\n"+t)}))},removeStar:function(){var t=this;t.turnGray(),u["a"].removeStar().then((function(n){var e=n.code;0!=e?(o["a"].err(n.msg),document.querySelector(".my--star-num").innerHTML=n.data.starNum,n.data.isStar||(t.turnGray(),t.starEvent="addstar")):(o["a"].su(n.msg),document.querySelector(".my--star-num").innerHTML=n.data.starNum,n.data.isStar||(t.turnGray(),t.starEvent="addstar"))}))["catch"]((function(t){o["a"].err("错误：\n"+t)}))}}},f=d,y=(e("e1f9"),e("eb16"),e("4ac2")),h=Object(y["a"])(f,i,c,!1,null,"910c3f42",null),g=h.exports,p=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("a",{staticClass:"my--showfrom label label-rounded label-warning",on:{click:t.showInfo}},[e("i",{staticClass:"mdui-icon material-icons",staticStyle:{"font-size":"15px"}},[t._v("")]),t._v("  "),e("span",{staticClass:"my--showfrom-text"},[t._v(" "+t._s(t.type))])])},w=[],b=(e("a5c9"),e("1c03")),v=(e("57d2"),e("e3c1"),{getinfo:function(t){if(Promise)return new Promise((function(n,e){fetch(s["b"].showfrom,Object(b["a"])(Object(b["a"])({},s["c"]),{},{body:JSON.stringify({mingyan:t||document.querySelector(".my--mingyan-name").innerText.trim()+"："+document.querySelector(".my--mingyan-text").innerText.trim(),t:(new Date).getTime()})})).then((function(t){return t.json()})).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))}}),x={name:"MYInfo",props:{mingyan:String},data:function(){return{type:"世界馆",showFromData:""}},mounted:function(){this.loadType()},watch:{mingyan:function(){this.type="世界馆",this.loadType()}},methods:{showInfo:function(){var t=this;if(t.showFromData){var n=t.showFromData,e=n.from.submit_name||"耳斯名言团队",a=n.from.submit_school||"地球";l()({title:"",text:"提供者：".concat(e,"\n出自：").concat(a),icon:s["a"],button:"关闭"}),document.querySelector(".swal-icon.swal-icon--custom>img").style.maxWidth="150px",document.querySelector(".swal-text").style.fontSize="26px",document.querySelector(".swal-text").style.textAlign="center"}else t.showFromData="",v.getinfo(t.mingyan).then((function(n){return t.showFromData=n.data,t.showInfo()}))},loadType:function(){var t=this;v.getinfo(t.mingyan).then((function(n){t.showFromData=n.data;var e=t.showFromData.from.type;"厦门市音乐学校"==t.showFromData.from.submit_school&&(e="音校馆"),t.type=e,t.isReady=!0}))}}},M=x,S=(e("10e7"),Object(y["a"])(M,p,w,!1,null,"4f4fefcb",null)),j=S.exports,_=e("a6b2"),O=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"my--mingyan-pic",class:t.imgClassName},[e("FancyImage",{attrs:{src:t.imgSrc,title:t.rawMingyan,description:"拍摄：耳斯名言制作团队",className:"mdui-img-rounded my--mingyan-pic",alt:t.rawMingyan}})],1)},k=[],T=(e("2769"),e("8639"),e("9d74")),Y=e("7cc4"),C={name:"MYImage",components:{FancyImage:T["a"]},props:{rawMingyan:String},data:function(){return{mingyanPicUrl:Y["e"],solvePicUrl:Y["f"],imgClassName:"",styleMinWidth:0}},mounted:function(){Object(o["d"])()?(this.styleMinWidth=28*this.text.split("").length-50,this.imgClassName="phone-img"):(this.styleMinWidth=28*this.text.split("").length-50,this.imgClassName="pc-img")},computed:{text:function(){return this.rawMingyan.split("：")[1]+(this.rawMingyan.split("：")[2]?"：":"")+(this.rawMingyan.split("：")[2]||"")},imgSrc:function(){return"解"===this.rawMingyan.split("：")[1]?s["d"]+this.solvePicUrl[this.rawMingyan.split("：")[0]]:s["d"]+this.mingyanPicUrl[this.text]}}},q=C,P=(e("5a93"),Object(y["a"])(q,O,k,!1,null,null,null)),D=P.exports,N=e("41cb"),E=e("6283"),I=(e("f5bd"),function(){fetch("https://status.erss.club/api/v2/incidents/unresolved.json?t=_"+(new Date).getTime()).then((function(t){return t.json()})).then((function(t){var n=t.incidents;if(0!==n.length){var e,a=Object(E["a"])(n);try{for(a.s();!(e=a.n()).done;){var r=e.value,i=r.updated_at||"未知",c=r.name||"未知",s="https://status.erss.club/incidents/"+r.id,u=r.impact||"未知",m={none:"几乎无影响",minor:"有部分影响",major:"大部分影响",critical:"几乎全部影响"};u=m[u]||"有部分影响",Object(o["k"])({update:i,name:c,url:s,impact:u});var l='<div id="incidents-report">\n<h2 id="incidents-report-title">网站维护中`(*>﹏<*)′</h2>\n<ul id="incidents-report-ul">\n<li id="incidents-report-li">维护内容：'.concat(c,'</li>\n<li id="incidents-report-li">更新时间：').concat(new Date(i).toLocaleString(),'</li>\n<li id="incidents-report-li">影响范围：').concat(u,'</li>\n<li id="incidents-report-li">详情：<a id="incidents-report-a" href="').concat(s,'" target="_blank" rel="nofollow">https://status.erss.club/</a></li>\n</ul>\n</div>');o["l"].open({type:"incidents",message:l})}}catch(d){a.e(d)}finally{a.f()}}}))}),F=function(){return e.e("comment").then(e.bind(null,"5210"))},R={name:"MYMain",components:{MYStar:g,MYInfo:j,MYFooter:_["a"],MYImage:D,MYComment:F},data:function(){return{mingyanPicUrl:Y["e"],teacher:"有一位老师",text:"名言找不到咯！！o(*￣▽￣*)ブ",rawMingyan:Y["d"][Object(Y["c"])()],starEvent:"addstar"}},watch:{"$route.path":function(){this.showMingyan(Object(Y["c"])())}},mounted:function(){this.showMingyan(Object(Y["c"])()),I()},computed:{mingyanConj:function(){return Y["g"][this.text]?Y["g"][this.text]:"曾经说过"}},methods:{showMingyan:function(t){this.rawMingyan=Y["d"][t],this.teacher=Object(Y["a"])(t).teacher,this.text=Object(Y["a"])(t).text,Object(o["e"])(".my--main")},nextMingyan:function(){var t=Object(Y["b"])();N["a"].push("/@"+t),this.showMingyan(t)},onTextClick:function(){alert("你点击了名言")}}},H=R,A=(e("b54a"),Object(y["a"])(H,a,r,!1,null,"329c552a",null));n["default"]=A.exports},"3e28":function(t,n,e){},"4e8f":function(t,n,e){},"50ce":function(t,n,e){},"5a93":function(t,n,e){"use strict";e("4e8f")},b54a:function(t,n,e){"use strict";e("c065")},c065:function(t,n,e){},e1f9:function(t,n,e){"use strict";e("50ce")},eb16:function(t,n,e){"use strict";e("1d86")},f561:function(t,n,e){"use strict";e.d(n,"a",(function(){return l}));var a=e("99a5"),r=e("1c03"),i=(e("6a61"),e("b1fa"),e("57d2"),e("e3c1"),e("1b2a")),c=e("6a79");Object(c["j"])("https://recaptcha.net/recaptcha/api.js?onload=grecaptchaready&render=6LdOb_gaAAAAAAIQpvSd_6a5yjeneoVlvM159zwH",{async:!0,defer:!0});var o=!1,s=function(){Object(c["k"])("人机验证加载成功！"),o=!0};window["grecaptchaready"]=s;var u=function(){return new Promise((function(t,n){o||n("人机验证正在加载中，请稍后再试"),window.grecaptcha.execute(i["e"],{action:"addstar"}).then((function(n){t(n)}))}))},m=i["b"].star_v2,l={getNum:function(t){if(Promise)return t||(t=document.querySelector(".my--mingyan-name").innerText.trim()+"："+document.querySelector(".my--mingyan-text").innerText.trim()),new Promise((function(n,e){fetch(m,Object(r["a"])(Object(r["a"])({},i["c"]),{},{body:JSON.stringify({event:"getnum",data:{MY_text:t,MY_token:Object(c["f"])(),t:(new Date).getTime()}})})).then((function(t){return t.json()})).then((function(t){n(t)}))["catch"]((function(t){e(t)}))}))},addStar:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(n,e){var a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(Promise){t.next=2;break}return t.abrupt("return");case 2:return n||e||(n=document.querySelector(".my--mingyan-name").innerText.trim()+"："+document.querySelector(".my--mingyan-text").innerText.trim()),a={},e&&n&&(a={MY_text:n}),e&&!n&&(a={MY_ID:e}),!e&&n&&(a={MY_text:n}),t.prev=7,t.next=10,u();case 10:return o=t.sent,t.abrupt("return",new Promise((function(t,n){fetch(m,Object(r["a"])(Object(r["a"])({},i["c"]),{},{body:JSON.stringify({event:"addstar",data:Object(r["a"])(Object(r["a"])({},a),{},{MY_token:Object(c["f"])(),re_token:o,t:(new Date).getTime()})})})).then((function(t){return t.json()})).then((function(n){t(n)}))["catch"]((function(t){n(t)}))})));case 14:t.prev=14,t.t0=t["catch"](7),c["a"].err("点赞失败："+t.t0);case 17:case"end":return t.stop()}}),t,null,[[7,14]])})));function n(n,e){return t.apply(this,arguments)}return n}(),removeStar:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(n){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(Promise){t.next=2;break}return t.abrupt("return");case 2:return n||(n=document.querySelector(".my--mingyan-name").innerText.trim()+"："+document.querySelector(".my--mingyan-text").innerText.trim()),t.prev=3,t.next=6,u();case 6:return e=t.sent,t.abrupt("return",new Promise((function(t,a){fetch(m,Object(r["a"])(Object(r["a"])({},i["c"]),{},{body:JSON.stringify({event:"removestar",data:{MY_text:n,MY_token:Object(c["f"])(),re_token:e,t:(new Date).getTime()}})})).then((function(t){return t.json()})).then((function(n){t(n)}))["catch"]((function(t){a(t)}))})));case 10:t.prev=10,t.t0=t["catch"](3),c["a"].err("点赞失败："+t.t0);case 13:case"end":return t.stop()}}),t,null,[[3,10]])})));function n(n){return t.apply(this,arguments)}return n}(),getRanking:function(){if(Promise)return new Promise((function(t,n){fetch(m,Object(r["a"])(Object(r["a"])({},i["c"]),{},{body:JSON.stringify({event:"ranking",data:{t:(new Date).getTime()}})})).then((function(t){return t.json()})).then((function(n){t(n)}))["catch"]((function(t){n(t)}))}))},getHistoryRanking:function(){if(Promise)return new Promise((function(t,n){fetch("https://www.erssmy.com/api/get-ranking-history?_t="+(new Date).getTime()).then((function(t){return t.json()})).then((function(e){Object(c["k"])(e),"请求成功"==e.msg&&t(e.data),n(e.msg)}))}))},update:function(t,n){if(Promise){t||n||(t=document.querySelector(".my--mingyan-name").innerText.trim()+"："+document.querySelector(".my--mingyan-text").innerText.trim());var e={};return n&&t&&(e={MY_text:t}),n&&!t&&(e={MY_ID:n}),!n&&t&&(e={MY_text:t}),new Promise((function(t,n){fetch(m,Object(r["a"])(Object(r["a"])({},i["c"]),{},{body:JSON.stringify({event:"update",data:Object(r["a"])(Object(r["a"])({},e),{},{MY_token:Object(c["f"])(),t:(new Date).getTime()})})})).then((function(t){return t.json()})).then((function(n){t(n)}))["catch"]((function(t){n(t)}))}))}}}}}]);