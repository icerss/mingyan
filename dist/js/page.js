/*!
 * ERSS SAYING
 * (c) 2020-2021 Xhemj
 * Build: 2021-10-9 09:44:17
 * Version: 3.1.1
 * ====
 * o(〃＾▽＾〃)o
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([["page"],{"1b5e":function(t,e,n){"use strict";n.r(e);n("f540"),n("cb91"),n("c505"),n("b31b");var s=n("7cc4"),i=n("9944"),a=n("a6b2"),c=n("b652"),r={name:"MYMore",data:function(){return{hitCount:"9999+",uptime:"2021-00-00 00:00:00",sitetime:"很久很久~~"}},components:{MYFooter:a.a},methods:{siteTime:function(){var t=new Date,e=new Date("04/30/2020 00:00:00");t.setTime(t.getTime()+250);var n=(t-e)/1e3/60/60/24,s=Math.floor(n),i=(t-e)/1e3/60/60-24*s,a=Math.floor(i);1==String(a).length&&(a="0"+a);var c=(t-e)/1e3/60-1440*s-60*a,r=Math.floor(c);1==String(r).length&&(r="0"+r);var o=(t-e)/1e3-86400*s-3600*a-60*r,l=Math.round(o);return 1==String(l).length&&(l="0"+l),s+" 天 "+a+" 小时 "+r+" 分 "+l+" 秒"},downloadMingyan:function(){Object(c.recordEvent)(c.recordEventId.clickMYDownloadButton);var t=(new Date).toLocaleString();Object(i.b)("耳斯名言列表（下载时间：".concat(t,"）\n==========\n")+s.d.join("\n"),"txt","耳斯名言列表（下载时间：".concat(t,"）"))},onClickSubmitButton:function(){Object(c.recordEvent)(c.recordEventId.clickMYSubmitButton)},onClickDonateBanner:function(){Object(c.recordEvent)(c.recordEventId.clickDonateBanner)}},mounted:function(){Object(i.d)(".my--more");var t=this;Object(i.i)("https://cdn.jsdelivr.net/npm/twikoo@1.4.1/dist/twikoo.all.min.js").then((function(){twikoo.init({envId:"xhemj-0gjckebwf7276129",el:"#tcomment",path:"/"}).then((function(){try{Object(i.m)(".tk-footer").innerHTML='Powered by <a href="https://twikoo.js.org" target="_blank" rel="nofollow">Twikoo</a></br>&copy; 2021 <a href="https://www.erssmy.com/">ERSS名言</a></div>'}catch(t){}Object(i.m)(".el-textarea__inner").style.height="150px"}))})),fetch("https://api.github.com/repos/xhemj/mingyan").then((function(t){return t.json()})).then((function(e){var n=e.updated_at;t.uptime=new Date(n).toLocaleString()})),fetch("https://hit-count.erss.club/?_my_cache_=no").then((function(t){return t.json()})).then((function(e){t.hitCount=e.data.count})),setInterval((function(){t.sitetime=t.siteTime()}),250)}},o=(n("43ea"),n("3c99"),n("cba8")),l=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my--more-app"},[n("div",{staticClass:"my--more"},[n("div",{staticClass:"my--more-main"},[n("h1",[t._v("更多")]),n("h3",[n("router-link",{attrs:{to:"submit"}},[n("span",{on:{click:t.onClickSubmitButton}},[t._v("名言投稿")])])],1),n("h3",[n("router-link",{attrs:{to:"ranking"}},[t._v("名言排行榜")])],1),n("h3",[n("a",{attrs:{id:"download_btn"},on:{click:t.downloadMingyan}},[t._v("下载名言列表（.txt）")])]),n("h3",[n("router-link",{attrs:{to:"/about"}},[t._v("关于")])],1)]),n("router-link",{attrs:{to:"/donate"}},[n("div",{staticClass:"my--sponsor",on:{click:t.onClickDonateBanner}},[n("img",{staticClass:"banner",attrs:{src:"https://static-cdn.erssmy.com/public/donate-banner.png",alt:"鼓励我们"}})])]),n("hr"),n("div",{attrs:{id:"tcomment"}}),n("hr"),n("div",{staticStyle:{"text-align":"center"}},[n("div",{staticStyle:{color:"gray"}},[t._v(" 自 2020年04月30日 以来，ERSS名言已经陪伴你们走过了 "),n("span",{staticClass:"sitetime"},[t._v(t._s(t.sitetime))])]),n("a",{staticStyle:{color:"#d6d9e2"},attrs:{href:"https://icp.gov.moe",target:"_blank"}},[t._v("萌备 ")]),n("a",{staticStyle:{color:"#d6d9e2"},attrs:{href:"https://icp.gov.moe/?keyword=20200503",target:"_blank"}},[t._v(" 20200503号")])]),n("div",{staticStyle:{"text-align":"center"}},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),n("div",{staticClass:"github-badge",attrs:{title:"多来看看呀！"}},[n("span",{staticClass:"badge-subject"},[t._v("PV")]),n("span",{staticClass:"badge-value bg-yellow"},[n("span",{attrs:{id:"hit-count"}},[t._v(" "+t._s(t.hitCount))])])]),n("br"),n("div",{staticClass:"github-badge",attrs:{title:"会慢慢更新的"}},[n("span",{staticClass:"badge-subject"},[t._v("更新时间")]),n("span",{staticClass:"badge-value bg-lightgrey"},[n("span",{attrs:{id:"uptime"}},[t._v(t._s(t.uptime))])])]),n("br")])],1),n("MYFooter",{attrs:{mode:"back"}})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"github-badge",attrs:{title:"作者就是我啦！！"}},[e("span",{staticClass:"badge-subject"},[this._v("Author")]),e("span",{staticClass:"badge-value bg-blue"},[this._v("xhemj")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"github-badge",attrs:{title:"速度还可以吧？"}},[e("span",{staticClass:"badge-subject"},[this._v("Hosted")]),e("span",{staticClass:"badge-value bg-red"},[e("span",{attrs:{id:"host"}},[this._v("Vercel && Github")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"github-badge",attrs:{title:"Jsdelivr的静态文件加速和Cloudflare的部分页面加速"}},[e("span",{staticClass:"badge-subject"},[this._v("CDN")]),e("span",{staticClass:"badge-value bg-pink"},[this._v("Jsdelivr & DogeCloud CDN")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"github-badge",attrs:{title:"ERSS~~~"}},[e("span",{staticClass:"badge-subject"},[this._v("©")]),e("span",{staticClass:"badge-value bg-brightgreen"},[this._v("Xhemj")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"github-badge",attrs:{title:"ERSS~~~"}},[e("span",{staticClass:"badge-subject"},[this._v("©")]),e("span",{staticClass:"badge-value theme-bg blue"},[this._v("IYAMAYA工作室")])])}],!1,null,"4cbea112",null);e.default=l.exports},3300:function(t,e,n){},"3c99":function(t,e,n){"use strict";n("5623")},"43ea":function(t,e,n){"use strict";n("df05")},5403:function(t,e,n){},5623:function(t,e,n){},"57cb":function(t,e,n){"use strict";n("5403")},7728:function(t,e,n){},"7eef":function(t,e,n){"use strict";n("d767")},"8f5b":function(t,e,n){"use strict";n.r(e);var s=n("a6b2"),i=n("1d61"),a=n.n(i),c=n("9944"),r={name:"MYFaq",components:{MYFooter:s.a},data:function(){return{rawHtml:""}},mounted:function(){Object(c.d)(".my--faq"),a.a.setOptions({breaks:!0}),this.rawHtml=a()(Object(c.m)(".markdown-raw").innerHTML),Object(c.m)(".markdown-raw").remove()}},o=(n("57cb"),n("cba8")),l=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"my--faq-app"},[e("div",{staticClass:"my--faq"},[this._m(0),e("div",{staticClass:"markdown-html",domProps:{innerHTML:this._s(this.rawHtml)}})]),e("MYFooter",{attrs:{mode:"back"}})],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",{staticClass:"markdown-raw"},[t._v("      "),t._v("\n"),n("div",{attrs:{"data-id":"page.faq"}},[t._v("\n"),n("h1",{staticClass:"markdown-title",staticStyle:{"text-align":"center"}},[t._v("🍕一篇文章教你如何玩转耳斯名言🍕 "),n("br"),t._v(" （FAQ）")]),t._v("\n\n"),n("blockquote",[t._v("\n"),n("p",[t._v("文档更新日期：2021年5月2日")]),t._v("\n")]),t._v("\n\n# 浏览名言相关：\n\n## Q：如何刷新名言？/ 怎么看不到别的名言了？\n## A：仔细看哦，在每条名言的下方都可以点击刷新哦\n![](https://cdn.erssmy.com/image/2021/05/02/bDscHVdMeUj9Zmn.png)\n\n---\n\n## Q：我找到了刷新的地方，但字也太小了吧！/ 拜托，刷新字那么小怎么看？\n## A：没关系，我们的开发人员最 ~~体贴人了哦(不是)~~ ，右上角有一个大大的按钮哦\n![](https://cdn.erssmy.com/image/2021/05/02/RFcjmBOUzKYCdq7.png)\n\n---\n\n## Q：如何搜索名言？/ 怎么看我想看的名言？/ 有什么推荐看的名言吗？\n## A：右上角那么大的一个搜索嘞！\n![](https://cdn.erssmy.com/image/2021/05/02/n6qhzDQOefLUybV.png)\n\n---\n\n## Q：为什么无法点赞？/ 点赞数很久都卡不出来？/ 为什么加载那么久？\n## A：别那么心急嘛！首次查看等个3秒钟就好啦！这主要还是因为我们使用的是[vercel](https://vercel.com/dashboard)的云函数来开发的点赞功能，而它们的的云函数会有休眠措施，只要长时间不用就会休眠。所以， ~~多多点赞就可以造福人类啦~~ ~~\n\n---\n\n## Q：妈妈我看不到排行榜啊！/ 排行榜加载不出来 / 为什么加载花那么长时间？\n## A：这点和上面一点是一样的原因哦！等个3秒就ok啦！\n\n---\n\n## Q：为什么还要回答问题？/ 隐藏名言是什么鬼？\n## A：这里面呢主要是放一些我们班级自己班里的东西，所以就暂时不开放咯~~\n\n---\n\n## Q：如何投稿名言？\n## A：投稿名言在更多页面的`名言投稿`那里，也可以直接点击[链接](https://www.erss.club/#/submit)直达。\n\n---\n\n# 评论区相关：\n\n## Q：妈妈我想评论！/ 为什么找不到在哪里留言？/ 有没有评论区？\n## A：有的有的，点击左上角的`更多`进入更多页面就可以留言啦！\n![](https://cdn.erssmy.com/image/2021/05/02/8cOp1oRtgKqCsMk.png)\n\n---\n\n## Q：头像咋搞的？好炫酷 / 如何更换评论区头像？\n## A：别急！评论区的头像用了[Gravatar](https://cn.gravatar.com/)的头像，要换头像的可以去那里注册个账号换头像就好啦。再不会的就百度去搜搜吧\n![](https://cdn.erssmy.com/image/2021/05/02/qoUKulr1j9mdJQA.png)\n\n---\n\n## Q：为什么上不了Gravatar？/ 为什么按照你的方法还是进不去换头像的网站？\n## A：呃，这个……你可能需要下面这一样东西来辅助你上这个网……又或者你可以直接使用你发评论的邮箱发有你的头像的邮件给我（[xhemj@erss.club](mailto:xhemj@erss.club)）。\n![](https://cdn.erssmy.com/image/2021/05/02/2yNOgC1WihkcaXl.png)\n\n---\n\n## Q：评论区为什么一定要填邮箱？\n## A：评论区使用了Gravatar的评论头像，而它就是靠邮箱来给每个用户他自己的头像的，所以要填呀！\n\n---\n\n## Q：为什么换了头像还是没有变化？\n## A：为了节省图片流量，所有图片都加了强缓存，只需要去浏览器那里清除一下缓存就可以了。\n\n---\n\n## Q：有没有更简单的使用头像的方式？/ 填QQ号又是什么鬼？\n## A：有有有！你只需要在昵称处填写你的QQ号，就会自动显示你的QQ头像啦！\n\n---\n\n# 其它相关：\n\n## Q：有没有联系方式？/ 怎么找到你们？/ 小哥哥，加个QQ呗~~\n## A：来了来了！在最底下就有呀`交流群`呀！再不行就看这里吧\n| 渠道 | 加入方式 |\n| :------: | :------: |\n| QQ群 | [点我加入](https://jq.qq.com/?_wv=1027&k=jKy2qW7R) |\n| 邮箱 | [xhemj@erss.club](xhemj@erss.club) |\n| 微信公众号 | 微信搜索`ERSS名言` |\n| 评论区 | [更多页面](https://www.erss.club/#/more) |\n| 投稿区 | [投稿页面](https://www.erss.club/#/submit) |\n\n---\n\n## Q：LOGO真好看！谁画的？\n## A：~~确实好看！~~ LOGO是`解恪布TOY`画的呀。\n![](https://cdn.erssmy.com/image/2021/05/23/ldzxMt9PYQ3LNyU.png)\n\n---\n\n## Q：你们做这个，老师不会生气——吧！\n## A：也许不会。谁知道呢\\[doge\\]\n\n")]),t._v("\n"),t._v("\n    ")])}],!1,null,null,null);e.default=l.exports},"9d74":function(t,e,n){"use strict";n("51fe"),n("da3f");var s=n("e2df"),i=(n("0cb0"),n("9944")),a={name:"FancyImage",components:{CoolLightBox:s.a},props:{src:String,title:String,description:String,alt:String,className:String},data:function(){return{index:null}},mounted:function(){Object(i.d)(".fancy-img")},computed:{nowImgItem:function(){return[{title:this.title||"",description:this.description||"",src:this.src}]}}},c=(n("f591"),n("cba8")),r=Object(c.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fancy-img"},[n("CoolLightBox",{attrs:{items:t.nowImgItem,index:t.index},on:{close:function(e){t.index=null}}}),t._l(t.nowImgItem,(function(e,s){return n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.src,expression:"src"}],key:s,staticClass:"fancy-img-item",class:t.className,attrs:{alt:t.alt},on:{click:function(e){t.index=s}}})}))],2)}),[],!1,null,"7d97134a",null);e.a=r.exports},"9d79":function(t,e,n){},b8be:function(t,e,n){"use strict";n("d58f")},c9a5:function(t,e,n){"use strict";n("7728")},cb91:function(t,e,n){"use strict";var s=n("3fad"),i=n("7088"),a=n("2295"),c=n("dd79"),r=[].join,o=i!=Object,l=c("join",",");s({target:"Array",proto:!0,forced:o||!l},{join:function(t){return r.call(a(this),void 0===t?",":t)}})},d58f:function(t,e,n){},d767:function(t,e,n){},dc5f:function(t,e,n){"use strict";n("3300")},df05:function(t,e,n){},e5f6:function(t,e,n){"use strict";n.r(e);n("81f1");var s=n("a6b2"),i={name:"ListItem",props:{href:String,imgSrc:String,description:String}},a=(n("c9a5"),n("cba8")),c=Object(a.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("a-list",{attrs:{"item-layout":"horizontal"}},[e("a-list-item",[e("a-list-item-meta",{attrs:{description:this.description}},[e("h3",{class:{"my--list-title":!this.description},attrs:{slot:"title"},slot:"title"},[e("a",{attrs:{href:this.href,target:"_blank",rel:"nofollow ugc"}},[this._t("default")],2)]),this.imgSrc?e("a-avatar",{attrs:{slot:"avatar",src:this.imgSrc},slot:"avatar"}):this._e()],1)],1)],1)}),[],!1,null,"12461150",null).exports,r=n("9944"),o={name:"MYAbout",components:{MYFooter:s.a,ListItem:c},data:function(){return{clickTime:""}},mounted:function(){Object(r.d)(".my--about")},watch:{clickTime:function(){var t=this;console.log(this.clickTime),this.clickTime.indexOf("1")&&this.clickTime.indexOf("2")&&this.clickTime.indexOf("3")&&Object(r.o)({title:"获得成就",text:"[]~(￣▽￣)~*]",icon:"info",button:"关闭"}).then((function(){Object(r.m)("body").style.transition="transform 1s ease 0s",Object(r.m)("body").style.transform="rotateY(180deg)",t.clickTime=""}))}},methods:{addClickTime:function(t){this.clickTime+=t}}},l=(n("dc5f"),Object(a.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my--about-app"},[n("div",{staticClass:"my--about"},[t._m(0),n("hr"),n("h1",[t._v("制作人员")]),n("ListItem",{attrs:{href:"https://www.iymy.top/",imgSrc:"https://cdn.erssmy.com/image/2021/05/23/Tp9Q5qaP8A1cG2C.jpg"}},[n("h3",[t._v("IYAMAYA菌屋工作室")])]),n("h2",[t._v("策划：")]),n("ListItem",{attrs:{href:"https://space.bilibili.com/337073401",imgSrc:"https://cdn.erssmy.com/image/2020/11/01/pzaTck9KuqJdHyv.jpg"},on:{click:function(e){return t.addClickTime("1")}}},[n("h3",[t._v("解恪布TOY")])]),n("h2",[t._v("网页：")]),n("ListItem",{attrs:{href:"https://space.bilibili.com/226208916",imgSrc:"https://cdn.erssmy.com/image/2021/04/05/Bext3hDK1nrZM7y.png"},on:{click:function(e){return t.addClickTime("2")}}},[n("h3",[t._v("Xhemj")])]),n("h2",[t._v("美术：")]),n("ListItem",{attrs:{href:"https://space.bilibili.com/337073401",imgSrc:"https://cdn.erssmy.com/image/2020/11/01/pzaTck9KuqJdHyv.jpg"},on:{click:function(e){return t.addClickTime("1")}}},[n("h3",[t._v("解恪布TOY")])]),n("h2",[t._v("推广：")]),n("ListItem",{attrs:{href:"https://space.bilibili.com/337073401",imgSrc:"https://cdn.erssmy.com/image/2020/11/01/pzaTck9KuqJdHyv.jpg"},on:{click:function(e){return t.addClickTime("1")}}},[n("h3",[t._v("解恪布TOY")])]),n("ListItem",{attrs:{href:"https://space.bilibili.com/368095014",imgSrc:"https://cdn.erssmy.com/image/2020/11/01/ejgOW7QY8MFmDU5.jpg"},on:{click:function(e){return t.addClickTime("3")}}},[n("h3",[t._v("Oranjezelf")])]),n("hr"),t._m(1),n("h1",{staticStyle:{"text-align":"center","font-size":"22px"}},[n("router-link",{staticClass:"link-to",attrs:{to:"faq"}},[t._v("如何玩转耳斯名言？")])],1),n("hr"),n("h1",[t._v("特别感谢")]),n("ListItem",[t._v("厦门市音乐学校")]),n("ListItem",[t._v("厦大食堂")]),n("ListItem",[t._v("ERSS 恪人族")]),n("ListItem",[t._v("英语俞老师")]),n("ListItem",[t._v("厦门市音乐学校的全体老师和同学们")]),n("h1",[t._v("联系")]),n("ListItem",{attrs:{description:"1084808352",href:"https://jq.qq.com/?_wv=1027&k=jKy2qW7R"}},[n("a-icon",{attrs:{type:"qq"}}),t._v(" QQ交流群")],1),n("ListItem",{attrs:{description:"feedback@erssmy.com",href:"mailto:feedback@erssmy.com"}},[n("a-icon",{attrs:{type:"mail"}}),t._v(" 反馈邮箱")],1),n("ListItem",{attrs:{description:"https://github.com/icerss/mingyan",href:"https://github.com/icerss/mingyan"}},[n("a-icon",{attrs:{type:"github"}}),t._v(" Github")],1),n("hr"),n("h2",[t._v("注意")]),n("div",{staticClass:"google-recaptcha-tip"},[n("a-icon",{attrs:{type:"info-circle"}}),t._v(" This site is protected by reCAPTCHA and the Google "),n("a",{attrs:{href:"https://policies.google.cn/privacy",target:"_blank",rel:"nofollow"}},[t._v("Privacy Policy")]),t._v(" and "),n("a",{attrs:{href:"https://policies.google.cn/terms",target:"_blank",rel:"nofollow"}},[t._v("Terms of Service")]),t._v(" apply. ")],1)],1),n("MYFooter",{attrs:{mode:"back"}})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",[e("strong",[this._v("耳斯名言")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticStyle:{"text-align":"center","font-size":"22px"}},[e("a",{staticClass:"link-to",attrs:{target:"_blank",rel:"nofollow ugc",href:"https://mp.weixin.qq.com/s/30jSF8UCw2Pof02_Y7tGYw"}},[this._v("耳斯名言是啥？")])])}],!1,null,"60bc97ee",null));e.default=l.exports},e7ca:function(t,e,n){"use strict";n.r(e);var s=n("d399"),i=(n("c505"),n("1cdb"),n("f540"),n("2bd2"),n("a6b2")),a=n("9d74"),c=n("9944"),r=n("1b2a"),o=[{title:"昵称",dataIndex:"name",key:"name"},{title:"金额",dataIndex:"sum",key:"count"},{title:"时间",dataIndex:"time",key:"time"},{title:"备注",dataIndex:"msg",key:"msg"}],l={name:"MYDonate",components:{MYFooter:i.a,FancyImage:a.a},data:function(){return{isFinishLoading:!1,listData:[],columns:o}},mounted:function(){Object(c.d)(".my--donate");var t=this;fetch("".concat(r.b.donate_list,"?t=_").concat((new Date).getTime())).then((function(t){return t.json()})).then((function(e){t.handleData(e)}))},methods:{handleData:function(t){var e,n=[],i=Object(s.a)(t);try{for(i.s();!(e=i.n()).done;){var a=e.value;n.push({name:a.name,time:new Date(a.time).toLocaleString(),msg:a.msg,sum:a.sum,timestamp:a.time})}}catch(t){i.e(t)}finally{i.f()}this.listData=n,this.isFinishLoading=!0}}},m=(n("b8be"),n("7eef"),n("cba8")),d=Object(m.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"my--donate-app"},[e("div",{staticClass:"my--donate"},[e("h1",[this._v("鼓励我们")]),e("div",{staticClass:"qrcode"},[e("FancyImage",{attrs:{src:"https://static-cdn.erssmy.com/public/donate-qrcode.png",title:"鼓励我们",className:"qr-img"}}),e("p",{staticClass:"qrcode-text"},[this._v("点击图片可以放大")])],1),e("div",{staticClass:"sponsor-table"},[this.isFinishLoading?e("div",{staticClass:"sponsor-table-load"},[e("a-table",{attrs:{columns:this.columns,"data-source":this.listData,"row-key":function(t){return t.name+t.timestamp}}})],1):e("span",{staticClass:"sponsor-table-loading"},[this._v("加载中……")])])]),e("MYFooter",{attrs:{mode:"back"}})],1)}),[],!1,null,"511cb399",null);e.default=d.exports},f591:function(t,e,n){"use strict";n("9d79")}}]);