/*!
 * ERSS SAYING
 * (c) 2020-2021 Xhemj
 * Build: 2021-8-20 12:01:18
 * Version: 3.1.0
 * ====
 * o(〃＾▽＾〃)o
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([["action-page"],{"15f9":function(t,e,n){(e=n("a1a8")(!1)).push([t.i,".my--ranking-loading-tip[data-v-1cb6c720]{text-align:center;font-size:15px}.my--ranking-item[data-v-1cb6c720]{cursor:pointer;font-weight:400}.my--star-ranking-text[data-v-1cb6c720]{text-align:center}a[data-v-1cb6c720]{color:#303742}",""]),t.exports=e},"41e8":function(t,e,n){"use strict";n("7da5")},"47ee":function(t,e,n){(e=n("a1a8")(!1)).push([t.i,".ant-spin-dot-item{background-color:#fff!important}",""]),t.exports=e},"7da5":function(t,e,n){var a=n("a790");a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n("5925").default)("5e80c316",a,!0,{sourceMap:!1,shadowMode:!1})},"869d":function(t,e,n){"use strict";n.r(e);n("c505"),n("2bd2"),n("f540");var a=n("1de4"),r=n.n(a),o=n("6a79"),i=n("1b2a"),c={name:"MYSubmit",data:function(){return{labelCol:{span:4},wrapperCol:{span:20},isLoadingSubmit:!1,isSubmit:!1,form:{name:"",school:"",classname:"",mail:"",saying:"",story:""},rules:{name:[{required:!0,message:"请输入昵称"}],school:[{required:!1}],classname:[{required:!1}],mail:[{required:!1}],saying:[{required:!0,message:"请输入名言"}],story:[{required:!1}]}}},components:{MYFooter:n("a6b2").a},mounted:function(){Object(o.d)(".my--submit")},methods:{resetForm:function(){this.$refs.ruleForm.resetFields()},onSubmit:function(){var t=this;this.$refs.ruleForm.validate((function(e){e?(t.isLoadingSubmit=!0,fetch(i.b.submit,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:"mingyan-contribute",data:{my:t.form.saying,name:t.form.name,story:t.form.story,class:t.form.classname,school:t.form.school,mail:t.form.mail,t:(new Date).getTime()}})}).then((function(){t.isLoadingSubmit=!1,r()({title:"名言投稿成功！",text:"名言："+t.form.saying+"\n请等待审核",icon:"success",button:"关闭",closeOnClickOutside:!1}).then((function(){location.href="./?from=mingyan-contribute"}))})).catch((function(){o.a.err("提交失败，建议稍后再试")}))):o.a.err("提交失败，请检查填写的内容是否符合规则")}))}}},s=(n("41e8"),n("9622"),n("cba8")),u=Object(s.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my--submit-app"},[n("div",{staticClass:"my--submit"},[n("h1",[t._v("名言投稿")]),n("a-form-model",{ref:"ruleForm",attrs:{model:t.form,rules:t.rules,"label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[n("a-form-model-item",{ref:"name",attrs:{label:"昵称",prop:"name"}},[n("a-input",{attrs:{placeholder:"选填"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),n("a-form-model-item",{ref:"school",attrs:{label:"学校",prop:"school"}},[n("a-input",{attrs:{placeholder:"选填"},model:{value:t.form.school,callback:function(e){t.$set(t.form,"school",e)},expression:"form.school"}})],1),n("a-form-model-item",{ref:"classname",attrs:{label:"班级",prop:"classname"}},[n("a-input",{attrs:{placeholder:"选填"},model:{value:t.form.classname,callback:function(e){t.$set(t.form,"classname",e)},expression:"form.classname"}})],1),n("a-form-model-item",{ref:"mail",attrs:{label:"邮箱",prop:"mail"}},[n("a-input",{attrs:{pattern:"^[a-z0-9]+([._\\\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$",placeholder:"选填，若您的名言被入选，我们将会第一时间联系您"},model:{value:t.form.mail,callback:function(e){t.$set(t.form,"mail",e)},expression:"form.mail"}})],1),n("a-form-model-item",{ref:"saying",attrs:{label:"名言",prop:"saying"}},[n("a-input",{attrs:{placeholder:"格式：教师名 + 名言"},model:{value:t.form.saying,callback:function(e){t.$set(t.form,"saying",e)},expression:"form.saying"}})],1),n("a-form-model-item",{ref:"story",attrs:{label:"名言故事",prop:"story"}},[n("a-input",{attrs:{type:"textarea",rows:"10",placeholder:"选填，有机会选入ERSS名言微信公众号哦！"},model:{value:t.form.story,callback:function(e){t.$set(t.form,"story",e)},expression:"form.story"}})],1),n("a-form-model-item",{attrs:{"wrapper-col":{span:14,offset:4}}},[n("a-button",{staticClass:"submit_btn",attrs:{type:"primary",loading:t.isLoadingSubmit},on:{click:t.onSubmit}},[t._v(" 提交 ")]),n("a-button",{staticStyle:{"margin-left":"10px"},on:{click:t.resetForm}},[t._v(" 清空 ")])],1)],1)],1),n("MYFooter",{attrs:{mode:"back"}})],1)}),[],!1,null,"4bac2790",null);e.default=u.exports},"884f":function(t,e,n){"use strict";var a=n("02ba"),r=n("0294"),o=n("82f7"),i=n("d03a"),c=n("6cc4"),s=n("e4e4"),u=n("91ad"),m=n("be5d"),f=n("3f46"),l=n("bde6"),d=n("d69f"),b=n("6876").f,p=n("5d07").f,g=n("40ac").f,h=n("2cc9").trim,y=r.Number,v=y.prototype,k="Number"==s(d(v)),x=function(t){if(m(t))throw TypeError("Cannot convert a Symbol value to a number");var e,n,a,r,o,i,c,s,u=f(t,"number");if("string"==typeof u&&u.length>2)if(43===(e=(u=h(u)).charCodeAt(0))||45===e){if(88===(n=u.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+u}for(i=(o=u.slice(2)).length,c=0;c<i;c++)if((s=o.charCodeAt(c))<48||s>r)return NaN;return parseInt(o,a)}return+u};if(o("Number",!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var _,w=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof w&&(k?l((function(){v.valueOf.call(n)})):"Number"!=s(n))?u(new y(x(e)),n,w):x(e)},O=a?b(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),S=0;O.length>S;S++)c(y,_=O[S])&&!c(w,_)&&g(w,_,p(y,_));w.prototype=v,v.constructor=w,i(r,"Number",w)}},9081:function(t,e,n){var a=n("15f9");a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n("5925").default)("9d5e80be",a,!0,{sourceMap:!1,shadowMode:!1})},"91ad":function(t,e,n){var a=n("1de2"),r=n("9c8e");t.exports=function(t,e,n){var o,i;return r&&"function"==typeof(o=e.constructor)&&o!==n&&a(i=o.prototype)&&i!==n.prototype&&r(t,i),t}},9622:function(t,e,n){"use strict";n("f934")},a050:function(t,e,n){"use strict";n.r(e);var a=n("a6b2"),r=n("f561"),o=n("6a79"),i=n("7cc4"),c={name:"MYRanking",components:{MYFooter:a.a},data:function(){return{isFinishLoading:!1,rankingData:[]}},computed:{width:function(){return Object(o.c)()?[4,14,6]:[4,16,4]}},mounted:function(){Object(o.d)(".my--ranking"),this.getRankingData()},methods:{getRankingData:function(){var t=this;r.a.getRanking().then((function(e){t.rankingData=e.data,t.isFinishLoading=!0}))},findMingyan:function(t){for(var e in i.d)if(i.d[e]===t)return e;return 0}}},s=(n("cb8e"),n("cba8")),u=Object(s.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my--ranking-app"},[n("div",{staticClass:"my--ranking"},[t.isFinishLoading?n("div",{staticClass:"my--ranking-finish-loading"},[n("h1",{staticStyle:{"text-align":"center"}},[t._v("排行榜")]),t._l(t.rankingData,(function(e,a){return n("a-row",{key:a+e,staticClass:"my--ranking-item"},[n("a-col",{attrs:{span:t.width[0],id:"star-ranking-num"}},[n("router-link",{attrs:{to:"/@"+t.findMingyan(e.text)}},[t._v(" "+t._s(new Number(a)+1)+" ")])],1),n("a-col",{staticClass:"my--star-ranking-text",attrs:{span:t.width[1],id:"star-ranking-text"}},[n("router-link",{attrs:{to:"/@"+t.findMingyan(e.text)}},[t._v(" "+t._s(e.text)+" ")])],1),n("a-col",{attrs:{span:t.width[2]}},[n("router-link",{attrs:{to:"/@"+t.findMingyan(e.text)}},[n("i",{staticClass:"mdui-icon material-icons",staticStyle:{color:"rgba(0, 0, 0, 0.64)"},attrs:{id:"star-ranking-thumb"}},[t._v("")])]),n("span",{attrs:{id:"star-ranking-thumb-num"}},[n("router-link",{attrs:{to:"/@"+t.findMingyan(e.text)}},[t._v(" "+t._s(e.num)+" ")])],1)],1)],1)}))],2):n("div",{staticClass:"my--ranking-loading-tip"},[t._m(0),n("br")])]),n("MYFooter",{attrs:{mode:"back"}})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("strong",[e("div",[e("h1",[this._v("加载中……")])])])}],!1,null,"1cb6c720",null);e.default=u.exports},a790:function(t,e,n){(e=n("a1a8")(!1)).push([t.i,"h1[data-v-4bac2790]{text-align:center}.my--submit[data-v-4bac2790]{font-weight:400}input[data-v-4bac2790]:not(:valid){background-color:#fff;border-color:#f5222d}.submit_btn[data-v-4bac2790]{background-color:#5755d9;border:none}input[data-v-4bac2790]:focus,textarea[data-v-4bac2790]:focus{border:1px solid #5755d9;outline:none}",""]),t.exports=e},cb8e:function(t,e,n){"use strict";n("9081")},f561:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var a,r,o=n("9d6b"),i=n("4d63"),c=(n("e186"),n("c505"),n("6c88"),n("f540"),n("1cdb"),n("1b2a")),s=n("6a79"),u=n("2e83"),m=c.b.star_v3,f={getNum:function(t){if(Promise)return t||(t=document.querySelector(".my--mingyan-name").innerText.trim()+"："+document.querySelector(".my--mingyan-text").innerText.trim()),new Promise((function(e,n){fetch(m,Object(i.a)(Object(i.a)({},c.f),{},{body:JSON.stringify({event:"getnum",data:{MY_text:t,MY_token:Object(s.e)(),t:(new Date).getTime()}})})).then((function(t){return t.json()})).then((function(t){e(t)})).catch((function(t){n(t)}))}))},addStar:(r=Object(o.a)(regeneratorRuntime.mark((function t(e,n,a){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Promise){t.next=2;break}return t.abrupt("return");case 2:if(e||n||(e=document.querySelector(".my--mingyan-name").innerText.trim()+"："+document.querySelector(".my--mingyan-text").innerText.trim()),r={},n&&e&&(r={MY_text:e}),n&&!e&&(r={MY_ID:n}),!n&&e&&(r={MY_text:e}),t.prev=7,t.t0=a,t.t0){t.next=13;break}return t.next=12,Object(u.a)();case 12:t.t0=t.sent;case 13:return a=t.t0,t.abrupt("return",new Promise((function(t,e){fetch(m,Object(i.a)(Object(i.a)({},c.f),{},{body:JSON.stringify({event:"addstar",data:Object(i.a)(Object(i.a)({},r),{},{MY_token:Object(s.e)(),re_token:a,t:(new Date).getTime()})})})).then((function(t){return t.json()})).then((function(e){t(e)})).catch((function(t){e(t)}))})));case 17:t.prev=17,t.t1=t.catch(7),s.a.err("点赞失败："+t.t1);case 20:case"end":return t.stop()}}),t,null,[[7,17]])}))),function(t,e,n){return r.apply(this,arguments)}),removeStar:(a=Object(o.a)(regeneratorRuntime.mark((function t(e,n,a){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Promise){t.next=2;break}return t.abrupt("return");case 2:if(e||(e=document.querySelector(".my--mingyan-name").innerText.trim()+"："+document.querySelector(".my--mingyan-text").innerText.trim()),n=n||"",t.prev=4,t.t0=a,t.t0){t.next=10;break}return t.next=9,Object(u.a)();case 9:t.t0=t.sent;case 10:return a=t.t0,t.abrupt("return",new Promise((function(t,n){fetch(m,Object(i.a)(Object(i.a)({},c.f),{},{body:JSON.stringify({event:"removestar",data:{MY_text:e,MY_token:Object(s.e)(),re_token:a,t:(new Date).getTime()}})})).then((function(t){return t.json()})).then((function(e){t(e)})).catch((function(t){n(t)}))})));case 14:t.prev=14,t.t1=t.catch(4),s.a.err("点赞失败："+t.t1);case 17:case"end":return t.stop()}}),t,null,[[4,14]])}))),function(t,e,n){return a.apply(this,arguments)}),getRanking:function(){if(Promise)return new Promise((function(t,e){fetch(m,Object(i.a)(Object(i.a)({},c.f),{},{body:JSON.stringify({event:"ranking",data:{t:(new Date).getTime()}})})).then((function(t){return t.json()})).then((function(e){t(e)})).catch((function(t){e(t)}))}))},getHistoryRanking:function(){if(Promise)return new Promise((function(t,e){fetch("".concat(c.b.ranking_history,"?t=_").concat((new Date).getTime())).then((function(t){return t.json()})).then((function(n){Object(s.k)(n),"请求成功"==n.msg&&t(n.data),e(n.msg)}))}))},update:function(t,e){if(Promise){t||e||(t=document.querySelector(".my--mingyan-name").innerText.trim()+"："+document.querySelector(".my--mingyan-text").innerText.trim());var n={};return e&&t&&(n={MY_text:t}),e&&!t&&(n={MY_ID:e}),!e&&t&&(n={MY_text:t}),new Promise((function(t,e){fetch(m,Object(i.a)(Object(i.a)({},c.f),{},{body:JSON.stringify({event:"update",data:Object(i.a)(Object(i.a)({},n),{},{MY_token:Object(s.e)(),t:(new Date).getTime()})})})).then((function(t){return t.json()})).then((function(e){t(e)})).catch((function(t){e(t)}))}))}}}},f934:function(t,e,n){var a=n("47ee");a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n("5925").default)("799db8d1",a,!0,{sourceMap:!1,shadowMode:!1})}}]);