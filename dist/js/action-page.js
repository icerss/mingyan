/*!
 * ERSS SAYING
 * (c) 2020-2021 Xhemj
 * Build: 2021-8-31 15:35:20
 * Version: 3.1.0
 * ====
 * o(〃＾▽＾〃)o
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([["action-page"],{"20f7":function(t,e,n){},"41e8":function(t,e,n){"use strict";n("20f7")},"869d":function(t,e,n){"use strict";n.r(e);n("c505"),n("2bd2"),n("f540");var r=n("1de4"),a=n.n(r),i=n("6a79"),o=n("1b2a"),c={name:"MYSubmit",data:function(){return{labelCol:{span:4},wrapperCol:{span:20},isLoadingSubmit:!1,isSubmit:!1,form:{name:"",school:"",classname:"",mail:"",saying:"",story:""},rules:{name:[{required:!0,message:"请输入昵称"}],school:[{required:!1}],classname:[{required:!1}],mail:[{required:!1}],saying:[{required:!0,message:"请输入名言"}],story:[{required:!1}]}}},components:{MYFooter:n("a6b2").a},mounted:function(){Object(i.d)(".my--submit")},methods:{resetForm:function(){this.$refs.ruleForm.resetFields()},onSubmit:function(){var t=this;this.$refs.ruleForm.validate((function(e){e?(t.isLoadingSubmit=!0,fetch(o.b.submit,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:"mingyan-contribute",data:{my:t.form.saying,name:t.form.name,story:t.form.story,class:t.form.classname,school:t.form.school,mail:t.form.mail,t:(new Date).getTime()}})}).then((function(){t.isLoadingSubmit=!1,a()({title:"名言投稿成功！",text:"名言："+t.form.saying+"\n请等待审核",icon:"success",button:"关闭",closeOnClickOutside:!1}).then((function(){location.href="./?from=mingyan-contribute"}))})).catch((function(){i.a.err("提交失败，建议稍后再试")}))):i.a.err("提交失败，请检查填写的内容是否符合规则")}))}}},s=(n("41e8"),n("9622"),n("cba8")),u=Object(s.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my--submit-app"},[n("div",{staticClass:"my--submit"},[n("h1",[t._v("名言投稿")]),n("a-form-model",{ref:"ruleForm",attrs:{model:t.form,rules:t.rules,"label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[n("a-form-model-item",{ref:"name",attrs:{label:"昵称",prop:"name"}},[n("a-input",{attrs:{placeholder:"选填"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),n("a-form-model-item",{ref:"school",attrs:{label:"学校",prop:"school"}},[n("a-input",{attrs:{placeholder:"选填"},model:{value:t.form.school,callback:function(e){t.$set(t.form,"school",e)},expression:"form.school"}})],1),n("a-form-model-item",{ref:"classname",attrs:{label:"班级",prop:"classname"}},[n("a-input",{attrs:{placeholder:"选填"},model:{value:t.form.classname,callback:function(e){t.$set(t.form,"classname",e)},expression:"form.classname"}})],1),n("a-form-model-item",{ref:"mail",attrs:{label:"邮箱",prop:"mail"}},[n("a-input",{attrs:{pattern:"^[a-z0-9]+([._\\\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$",placeholder:"选填，若您的名言被入选，我们将会第一时间联系您"},model:{value:t.form.mail,callback:function(e){t.$set(t.form,"mail",e)},expression:"form.mail"}})],1),n("a-form-model-item",{ref:"saying",attrs:{label:"名言",prop:"saying"}},[n("a-input",{attrs:{placeholder:"格式：教师名 + 名言"},model:{value:t.form.saying,callback:function(e){t.$set(t.form,"saying",e)},expression:"form.saying"}})],1),n("a-form-model-item",{ref:"story",attrs:{label:"名言故事",prop:"story"}},[n("a-input",{attrs:{type:"textarea",rows:"10",placeholder:"选填，有机会选入ERSS名言微信公众号哦！"},model:{value:t.form.story,callback:function(e){t.$set(t.form,"story",e)},expression:"form.story"}})],1),n("a-form-model-item",{attrs:{"wrapper-col":{span:14,offset:4}}},[n("a-button",{staticClass:"submit_btn",attrs:{type:"primary",loading:t.isLoadingSubmit},on:{click:t.onSubmit}},[t._v(" 提交 ")]),n("a-button",{staticStyle:{"margin-left":"10px"},on:{click:t.resetForm}},[t._v(" 清空 ")])],1)],1)],1),n("MYFooter",{attrs:{mode:"back"}})],1)}),[],!1,null,"4bac2790",null);e.default=u.exports},"884f":function(t,e,n){"use strict";var r=n("02ba"),a=n("0294"),i=n("82f7"),o=n("d03a"),c=n("6cc4"),s=n("e4e4"),u=n("91ad"),m=n("be5d"),f=n("3f46"),l=n("bde6"),d=n("d69f"),b=n("6876").f,p=n("5d07").f,g=n("40ac").f,y=n("2cc9").trim,h=a.Number,v=h.prototype,k="Number"==s(d(v)),x=function(t){if(m(t))throw TypeError("Cannot convert a Symbol value to a number");var e,n,r,a,i,o,c,s,u=f(t,"number");if("string"==typeof u&&u.length>2)if(43===(e=(u=y(u)).charCodeAt(0))||45===e){if(88===(n=u.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+u}for(o=(i=u.slice(2)).length,c=0;c<o;c++)if((s=i.charCodeAt(c))<48||s>a)return NaN;return parseInt(i,r)}return+u};if(i("Number",!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var _,O=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof O&&(k?l((function(){v.valueOf.call(n)})):"Number"!=s(n))?u(new h(x(e)),n,O):x(e)},w=r?b(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),S=0;w.length>S;S++)c(h,_=w[S])&&!c(O,_)&&g(O,_,p(h,_));O.prototype=v,v.constructor=O,o(a,"Number",O)}},"8ada":function(t,e,n){},"91ad":function(t,e,n){var r=n("1de2"),a=n("9c8e");t.exports=function(t,e,n){var i,o;return a&&"function"==typeof(i=e.constructor)&&i!==n&&r(o=i.prototype)&&o!==n.prototype&&a(t,o),t}},9622:function(t,e,n){"use strict";n("b519")},a050:function(t,e,n){"use strict";n.r(e);var r=n("a6b2"),a=n("f561"),i=n("6a79"),o=n("7cc4"),c={name:"MYRanking",components:{MYFooter:r.a},data:function(){return{isFinishLoading:!1,rankingData:[]}},computed:{width:function(){return Object(i.c)()?[4,14,6]:[4,16,4]}},mounted:function(){Object(i.d)(".my--ranking"),this.getRankingData()},methods:{getRankingData:function(){var t=this;a.a.getRanking().then((function(e){t.rankingData=e.data,t.isFinishLoading=!0}))},findMingyan:function(t){for(var e in o.d)if(o.d[e]===t)return e;return 0}}},s=(n("cb8e"),n("cba8")),u=Object(s.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my--ranking-app"},[n("div",{staticClass:"my--ranking"},[t.isFinishLoading?n("div",{staticClass:"my--ranking-finish-loading"},[n("h1",{staticStyle:{"text-align":"center"}},[t._v("排行榜")]),t._l(t.rankingData,(function(e,r){return n("a-row",{key:r+e,staticClass:"my--ranking-item"},[n("a-col",{attrs:{span:t.width[0],id:"star-ranking-num"}},[n("router-link",{attrs:{to:"/@"+t.findMingyan(e.text)}},[t._v(" "+t._s(new Number(r)+1)+" ")])],1),n("a-col",{staticClass:"my--star-ranking-text",attrs:{span:t.width[1],id:"star-ranking-text"}},[n("router-link",{attrs:{to:"/@"+t.findMingyan(e.text)}},[t._v(" "+t._s(e.text)+" ")])],1),n("a-col",{attrs:{span:t.width[2]}},[n("router-link",{attrs:{to:"/@"+t.findMingyan(e.text)}},[n("i",{staticClass:"mdui-icon material-icons",staticStyle:{color:"rgba(0, 0, 0, 0.64)"},attrs:{id:"star-ranking-thumb"}},[t._v("")])]),n("span",{attrs:{id:"star-ranking-thumb-num"}},[n("router-link",{attrs:{to:"/@"+t.findMingyan(e.text)}},[t._v(" "+t._s(e.num)+" ")])],1)],1)],1)}))],2):n("div",{staticClass:"my--ranking-loading-tip"},[t._m(0),n("br")])]),n("MYFooter",{attrs:{mode:"back"}})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("strong",[e("div",[e("h1",[this._v("加载中……")])])])}],!1,null,"1cb6c720",null);e.default=u.exports},b519:function(t,e,n){},cb8e:function(t,e,n){"use strict";n("8ada")},f561:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r,a,i=n("9d6b"),o=n("4d63"),c=(n("e186"),n("c505"),n("6c88"),n("f540"),n("b31b"),n("1cdb"),n("1b2a")),s=n("6a79"),u=n("2e83"),m=c.b.star_v3,f={getNum:function(t){if(Promise)return t||(t=document.querySelector(".my--mingyan-name").innerText.trim()+"："+document.querySelector(".my--mingyan-text").innerText.trim()),new Promise((function(e,n){fetch(m,Object(o.a)(Object(o.a)({},c.f),{},{body:JSON.stringify({event:"getnum",data:{MY_text:t,MY_token:Object(s.e)(),t:(new Date).getTime()}})})).then((function(t){return t.json()})).then((function(t){e(t)})).catch((function(t){n(t)}))}))},addStar:(a=Object(i.a)(regeneratorRuntime.mark((function t(e,n,r){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Promise){t.next=2;break}return t.abrupt("return");case 2:if(e||n||(e=document.querySelector(".my--mingyan-name").innerText.trim()+"："+document.querySelector(".my--mingyan-text").innerText.trim()),a={},n&&e&&(a={MY_text:e}),n&&!e&&(a={MY_ID:n}),!n&&e&&(a={MY_text:e}),t.prev=7,t.t0=r,t.t0){t.next=13;break}return t.next=12,Object(u.a)();case 12:t.t0=t.sent;case 13:return r=t.t0,t.abrupt("return",new Promise((function(t,e){fetch(m,Object(o.a)(Object(o.a)({},c.f),{},{body:JSON.stringify({event:"addstar",data:Object(o.a)(Object(o.a)({},a),{},{MY_token:Object(s.e)(),re_token:r,t:(new Date).getTime()})})})).then((function(t){return t.json()})).then((function(e){t(e)})).catch((function(t){e(t)}))})));case 17:t.prev=17,t.t1=t.catch(7),s.a.err("点赞失败："+t.t1);case 20:case"end":return t.stop()}}),t,null,[[7,17]])}))),function(t,e,n){return a.apply(this,arguments)}),removeStar:(r=Object(i.a)(regeneratorRuntime.mark((function t(e,n,r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Promise){t.next=2;break}return t.abrupt("return");case 2:if(e||(e=document.querySelector(".my--mingyan-name").innerText.trim()+"："+document.querySelector(".my--mingyan-text").innerText.trim()),n=n||"",t.prev=4,t.t0=r,t.t0){t.next=10;break}return t.next=9,Object(u.a)();case 9:t.t0=t.sent;case 10:return r=t.t0,t.abrupt("return",new Promise((function(t,n){fetch(m,Object(o.a)(Object(o.a)({},c.f),{},{body:JSON.stringify({event:"removestar",data:{MY_text:e,MY_token:Object(s.e)(),re_token:r,t:(new Date).getTime()}})})).then((function(t){return t.json()})).then((function(e){t(e)})).catch((function(t){n(t)}))})));case 14:t.prev=14,t.t1=t.catch(4),s.a.err("点赞失败："+t.t1);case 17:case"end":return t.stop()}}),t,null,[[4,14]])}))),function(t,e,n){return r.apply(this,arguments)}),getRanking:function(){if(Promise)return new Promise((function(t,e){fetch(m,Object(o.a)(Object(o.a)({},c.f),{},{body:JSON.stringify({event:"ranking",data:{t:(new Date).getTime()}})})).then((function(t){return t.json()})).then((function(e){t(e)})).catch((function(t){e(t)}))}))},getHistoryRanking:function(){if(Promise)return new Promise((function(t,e){setTimeout((function(){e("请求超时")}),2e3),fetch("".concat(c.b.ranking_history,"?t=_").concat((new Date).getTime())).then((function(t){return t.json()})).then((function(n){Object(s.k)(n),"请求成功"==n.msg&&t(n.data),e(n.msg)}))}))},update:function(t,e){if(Promise){t||e||(t=document.querySelector(".my--mingyan-name").innerText.trim()+"："+document.querySelector(".my--mingyan-text").innerText.trim());var n={};return e&&t&&(n={MY_text:t}),e&&!t&&(n={MY_ID:e}),!e&&t&&(n={MY_text:t}),new Promise((function(t,e){fetch(m,Object(o.a)(Object(o.a)({},c.f),{},{body:JSON.stringify({event:"update",data:Object(o.a)(Object(o.a)({},n),{},{MY_token:Object(s.e)(),t:(new Date).getTime()})})})).then((function(t){return t.json()})).then((function(e){t(e)})).catch((function(t){e(t)}))}))}}}}}]);