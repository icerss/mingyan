/*!
 * ERSS SAYING
 * (c) 2020-2022 Xhemj
 * Build: 2022-1-22 10:54:36
 * Version: 3.1.1
 * ====
 * o(〃＾▽＾〃)o
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([["comment"],{"038e":function(t,a,e){},1685:function(t,a,e){"use strict";e("038e")},5210:function(t,a,e){"use strict";e.r(a);var n=e("f2b6"),i=e("d399"),s=(e("2bd2"),e("a717"),e("d7f0"),e("c505"),e("1cdb"),e("f540"),e("e93b")),o=e.n(s),m=e("0095"),c=e.n(m),r=(e("c90d"),e("bdc9")),l=e.n(r),h=e("9944"),d=e("4d63"),u=e("1b2a"),p=u.b.comment,g=function(t){return new Promise((function(a,e){fetch(p,Object(d.a)(Object(d.a)({},u.g),{},{body:JSON.stringify({event:"getcomment",data:{mingyan:t,uid:Object(h.e)(),t:(new Date).getTime()}})})).then((function(t){return t.json()})).then((function(t){0===t.code?a(t.data):e(t.msg)})).catch((function(t){e(t)}))}))},v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{mingyan:"",avatar:"",comment:"",nick:"",mail:""},a=t.mingyan,e=t.avatar,n=t.comment,i=t.nick,s=t.mail;return new Promise((function(t,o){fetch(p,Object(d.a)(Object(d.a)({},u.g),{},{body:JSON.stringify({event:"addcomment",data:{mingyan:a,uid:Object(h.e)(),avatar:e,comment:n,nick:i,mail:s,t:(new Date).getTime()}})})).then((function(t){return t.json()})).then((function(a){0===a.code?t(a.data):o(a.msg)})).catch((function(t){o(t)}))}))},f=e("b652"),y={name:"MYComment",props:{rawMingyan:String},data:function(){return{comments:[],displayComments:[],displayCommentPage:1,submitting:!1,isOpenInput:!1,isStartInput:!1,isLoadData:!1,isBoyHide:!1,md5:l.a,name:JSON.parse(h.g.get(h.h.commentUser)||"{}").name||"",mail:JSON.parse(h.g.get(h.h.commentUser)||"{}").mail||"",mailAvatar:"",comment_input:"",textarea_height:"36px",sendBtnText:"取消评论",isQQmail:!1}},mounted:function(){o.a.extend(c.a),o.a.locale("zh-cn"),this.mail_md5=l()(this.mail),this.getComment()},watch:{rawMingyan:function(){this.getComment(),this.isOpenInput=!1,this.isStartInput=!1},mail:function(){this.handleMailAvatar();var t=JSON.parse(h.g.get(h.h.commentUser)||"{}");t==={}&&(t={name:"",mail:""}),t.mail=this.mail,this.mail_md5=l()(this.mail),h.g.put(h.h.commentUser,JSON.stringify(t))},name:function(){var t=JSON.parse(h.g.get(h.h.commentUser)||"{}");t==={}&&(t={name:"",mail:""}),t.name=this.name,h.g.put(h.h.commentUser,JSON.stringify(t))},comment_input:function(){this.comment_input?(this.isStartInput=!0,this.textarea_height="72px"):(this.isStartInput=!1,this.textarea_height="36px")},isOpenInput:function(){this.handleMailAvatar()}},methods:{onClickSendButton:function(){Object(f.recordEvent)(f.recordEventId.clickMYCommentButton),this.isOpenInput=!0},handleMailAvatar:function(){var t=this.mail,a=this;if(/^[1-9][0-9]{4,10}@qq.com$/i.test(t)){var e=t.replace("@qq.com","");fetch("https://cdn.erssmy.com/qqface/".concat(e,"?_my_cache_=no&t=_").concat((new Date).getTime())).then((function(t){return t.json()})).then((function(t){a.mailAvatar=t.data,a.isQQmail=!0})).catch((function(){a.mailAvatar=a.mail?"https://cdn.erssmy.com/gravatar/".concat(l()(a.mail),"?d=identicon&_my_cache_=no"):"",a.isQQmail=!1}))}else a.mailAvatar=a.mail?"https://cdn.erssmy.com/gravatar/".concat(l()(a.mail),"?d=identicon&_my_cache_=no"):"",a.isQQmail=!1},getComment:function(){var t=this;this.isLoadData=!1,g(this.rawMingyan).then((function(a){Object(h.j)("获取到评论",a);var e,n=[],s=Object(i.a)(a);try{for(s.s();!(e=s.n()).done;){var m=e.value;n.push({author:m.nick,avatar:m.avatar?m.avatar:"https://cdn.erssmy.com/gravatar/".concat(m.mail_md5,"?d=identicon&_my_cache_=no"),content:m.comment,datetime:o()(m.created).fromNow()})}}catch(t){s.e(t)}finally{s.f()}t.comments=n,t.isLoadData=!0,t.handleDisplayComment()})).catch((function(t){h.a.err("评论失败：\n"+t)}))},sendComment:function(){var t=this;if("发送评论"===this.sendBtnText){if(!this.comment_input||!this.name||!this.mail)return void h.a.err("你还没输入内容呢！");this.submitting=!0;var a=this.comment_input;v({mingyan:this.rawMingyan,avatar:t.isQQmail?t.mailAvatar:"",comment:a,nick:this.name,mail:this.mail}).then((function(e){Object(h.j)("评论成功",e),t.submitting=!1,t.comment_input="",t.comments=[{author:t.name,avatar:t.isQQmail?t.mailAvatar:"https://cdn.erssmy.com/gravatar/".concat(t.mail_md5,"?d=identicon&_my_cache_=no"),content:a,datetime:o()((new Date).getTime()).fromNow()}].concat(Object(n.a)(t.comments)),t.displayCommentPage=1,t.handleDisplayComment(),h.a.su("评论成功！")})).catch((function(t){h.a.err("评论失败：\n"+t),this.submitting=!1}))}else this.isOpenInput=!1},handleDisplayComment:function(){for(var t=5*(this.displayCommentPage-1)+5,a=[],e=5*(this.displayCommentPage-1);e<t;e++){var n=this.comments[e];n&&a.push(n)}this.displayCommentId++,this.displayComments=a},handleChange:function(t){this.comment_input=t.target.value},onTextareaMouseLeave:function(){this.isStartInput&&this.comment_input?(this.textarea_height="72px",this.sendBtnText="发送评论"):(this.textarea_height="36px",this.sendBtnText="取消评论")},onTextareaMouseMove:function(){this.textarea_height="72px",this.sendBtnText="发送评论"},onPaginationChange:function(t){this.displayCommentPage=t,this.handleDisplayComment()}}},_=(e("1685"),e("c174"),e("cba8")),C=Object(_.a)(y,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"my--comment"},[t.isLoadData?e("div",{staticClass:"comment-load"},[e("div",{staticClass:"my--comment-input"},[t.displayComments.length?e("a-list",{attrs:{"data-source":t.displayComments,"item-layout":"horizontal"},scopedSlots:t._u([{key:"renderItem",fn:function(t){return e("a-list-item",{},[e("a-comment",{attrs:{author:t.author,avatar:t.avatar,content:t.content,datetime:t.datetime}})],1)}}],null,!1,1778575515)}):t._e(),t.comments.length?e("div",{staticClass:"comment-pagination"},[e("a-pagination",{attrs:{total:t.comments.length,"page-size":"5"},on:{change:t.onPaginationChange},model:{value:t.displayCommentPage,callback:function(a){t.displayCommentPage=a},expression:"displayCommentPage"}})],1):t._e(),t.isOpenInput?e("a-comment",{staticClass:"my--comment-show"},[e("a-avatar",{attrs:{slot:"avatar",src:t.mailAvatar,alt:"Han Solo"},slot:"avatar"},[e("a-icon",{attrs:{type:"user"}})],1),e("div",{attrs:{slot:"content"},slot:"content"},[e("a-row",{staticClass:"comment-detail"},[e("div",{staticClass:"comment-detail-input"},[e("a-input",{attrs:{placeholder:"昵称",required:"",autocomplete:"on"},model:{value:t.name,callback:function(a){t.name=a},expression:"name"}},[e("a-icon",{staticStyle:{color:"rgba(0, 0, 0, 0.25)"},attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),e("div",{staticClass:"comment-detail-input"},[e("a-input",{attrs:{placeholder:"邮箱",required:"",autocomplete:"on"},model:{value:t.mail,callback:function(a){t.mail=a},expression:"mail"}},[e("a-icon",{staticStyle:{color:"rgba(0, 0, 0, 0.25)"},attrs:{slot:"prefix",type:"mail"},slot:"prefix"})],1)],1)]),e("div",{staticClass:"comment-detail-textarea"},[e("a-textarea",{style:"height:"+t.textarea_height,attrs:{value:t.comment_input,placeholder:"发一条友善的评论~~在邮箱处输入QQ邮箱可自动填充QQ头像"},on:{mousemove:t.onTextareaMouseMove,mouseleave:t.onTextareaMouseLeave,change:t.handleChange,keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:(a.preventDefault(),t.sendComment.apply(null,arguments))}}})],1),e("a-button",{staticClass:"comment-submit-btn",attrs:{"html-type":"submit",type:"primary",loading:t.submitting},on:{click:t.sendComment}},[t._v(" "+t._s(t.sendBtnText)+" ")])],1)],1):t._e()],1),t.isOpenInput?t._e():e("a-divider",{staticClass:"comment-open-tip"},[e("span",{staticClass:"comment-click-to-send",on:{click:t.onClickSendButton}},[t._v(t._s(0===t.comments.length?"暂无评论，":"")),e("span",{staticStyle:{color:"#9b4dca"}},[t._v("点我")]),t._v("发送评论")])])],1):e("div",{staticClass:"comment-loading"},[e("a-divider",{staticClass:"comment-loading-tip"},[e("span",[t._v("评论加载中")]),e("div",{staticClass:"loading-svg"},[e("svg",{staticStyle:{margin:"auto",background:"none","shape-rendering":"auto",position:"relative",transform:"translateY(5px)"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"15px",height:"15px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"}},[e("circle",{attrs:{cx:"50",cy:"50",fill:"none",stroke:"rgba(0,0,0,.65)","stroke-width":"10",r:"35","stroke-dasharray":"164.93361431346415 56.97787143782138"}},[e("animateTransform",{attrs:{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"0.75s",values:"0 50 50;360 50 50",keyTimes:"0;1"}})],1)])])])],1)])}),[],!1,null,"546a9842",null);a.default=C.exports},c174:function(t,a,e){"use strict";e("d6cc")},d6cc:function(t,a,e){}}]);