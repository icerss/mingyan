/*!
 * ERSS SAYING
 * (c) 2020-2021 Xhemj
 * Build: 2021-8-21 16:17:08
 * Version: 3.1.0
 * ====
 * o(〃＾▽＾〃)o
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([["page"],{"1b5e":function(t,e,a){"use strict";a.r(e);a("f540"),a("cb91"),a("c505"),a("b31b");var n=a("7cc4"),i=a("6a79"),s={name:"MYMore",data:function(){return{hitCount:"9999+",uptime:"2021-00-00 00:00:00",sitetime:"很久很久~~"}},components:{MYFooter:a("a6b2").a},methods:{siteTime:function(){var t=new Date,e=new Date("04/30/2020 00:00:00");t.setTime(t.getTime()+250);var a=(t-e)/1e3/60/60/24,n=Math.floor(a),i=(t-e)/1e3/60/60-24*n,s=Math.floor(i);1==String(s).length&&(s="0"+s);var o=(t-e)/1e3/60-1440*n-60*s,r=Math.floor(o);1==String(r).length&&(r="0"+r);var c=(t-e)/1e3-86400*n-3600*s-60*r,d=Math.round(c);return 1==String(d).length&&(d="0"+d),n+" 天 "+s+" 小时 "+r+" 分 "+d+" 秒"},downloadMingyan:function(){var t=(new Date).toLocaleString();Object(i.b)("耳斯名言列表（下载时间：".concat(t,"）\n==========\n")+n.d.join("\n"),"txt","耳斯名言列表（下载时间：".concat(t,"）"))}},mounted:function(){Object(i.d)(".my--more");var t=this;Object(i.j)("https://cdn.jsdelivr.net/npm/twikoo@1.4.1/dist/twikoo.all.min.js").then((function(){twikoo.init({envId:"xhemj-0gjckebwf7276129",el:"#tcomment",path:"/"}).then((function(){try{document.querySelector(".tk-footer").innerHTML='Powered by <a href="https://twikoo.js.org" target="_blank" rel="nofollow">Twikoo</a></br>&copy; 2021 <a href="https://www.erssmy.com/">ERSS名言</a></div>'}catch(t){}document.querySelector(".el-textarea__inner").style.height="150px"}))})),fetch("https://api.github.com/repos/xhemj/mingyan").then((function(t){return t.json()})).then((function(e){var a=e.updated_at;t.uptime=new Date(a).toLocaleString()})),fetch("https://hit-count.erss.club/?_my_cache_=no").then((function(t){return t.json()})).then((function(e){t.hitCount=e.data.count})),setInterval((function(){t.sitetime=t.siteTime()}),250)}},o=(a("abe7"),a("3c99"),a("cba8")),r=Object(o.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"my--more-app"},[a("div",{staticClass:"my--more"},[a("div",{staticClass:"my--more-main"},[a("h1",[t._v("更多")]),a("h3",[a("router-link",{attrs:{to:"submit"}},[t._v("名言投稿")])],1),a("h3",[a("router-link",{attrs:{to:"ranking"}},[t._v("名言排行榜")])],1),a("h3",[a("a",{attrs:{id:"download_btn"},on:{click:t.downloadMingyan}},[t._v("下载名言列表（.txt）")])]),a("h3",[a("router-link",{attrs:{to:"/about"}},[t._v("关于")])],1)]),a("router-link",{attrs:{to:"/donate"}},[a("div",{staticClass:"my--sponsor"},[a("img",{staticClass:"banner",attrs:{src:"https://static-cdn.erssmy.com/public/donate-banner.png",alt:"鼓励我们"}})])]),a("hr"),a("div",{attrs:{id:"tcomment"}}),a("hr"),a("div",{staticStyle:{"text-align":"center"}},[a("div",{staticStyle:{color:"gray"}},[t._v(" 自 2020年04月30日 以来，ERSS名言已经陪伴你们走过了 "),a("span",{staticClass:"sitetime"},[t._v(t._s(t.sitetime))])]),a("a",{staticStyle:{color:"#d6d9e2"},attrs:{href:"https://icp.gov.moe",target:"_blank"}},[t._v("萌备 ")]),a("a",{staticStyle:{color:"#d6d9e2"},attrs:{href:"https://icp.gov.moe/?keyword=20200503",target:"_blank"}},[t._v(" 20200503号")])]),a("div",{staticStyle:{"text-align":"center"}},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),a("div",{staticClass:"github-badge",attrs:{title:"多来看看呀！"}},[a("span",{staticClass:"badge-subject"},[t._v("PV")]),a("span",{staticClass:"badge-value bg-yellow"},[a("span",{attrs:{id:"hit-count"}},[t._v(" "+t._s(t.hitCount))])])]),a("br"),a("div",{staticClass:"github-badge",attrs:{title:"会慢慢更新的"}},[a("span",{staticClass:"badge-subject"},[t._v("更新时间")]),a("span",{staticClass:"badge-value bg-lightgrey"},[a("span",{attrs:{id:"uptime"}},[t._v(t._s(t.uptime))])])]),a("br")])],1),a("MYFooter",{attrs:{mode:"back"}})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"github-badge",attrs:{title:"作者就是我啦！！"}},[e("span",{staticClass:"badge-subject"},[this._v("Author")]),e("span",{staticClass:"badge-value bg-blue"},[this._v("xhemj")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"github-badge",attrs:{title:"速度还可以吧？"}},[e("span",{staticClass:"badge-subject"},[this._v("Hosted")]),e("span",{staticClass:"badge-value bg-red"},[e("span",{attrs:{id:"host"}},[this._v("Vercel && Github")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"github-badge",attrs:{title:"Jsdelivr的静态文件加速和Cloudflare的部分页面加速"}},[e("span",{staticClass:"badge-subject"},[this._v("CDN")]),e("span",{staticClass:"badge-value bg-pink"},[this._v("Jsdelivr & DogeCloud CDN")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"github-badge",attrs:{title:"ERSS~~~"}},[e("span",{staticClass:"badge-subject"},[this._v("©")]),e("span",{staticClass:"badge-value bg-brightgreen"},[this._v("Xhemj")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"github-badge",attrs:{title:"ERSS~~~"}},[e("span",{staticClass:"badge-subject"},[this._v("©")]),e("span",{staticClass:"badge-value theme-bg blue"},[this._v("IYAMAYA工作室")])])}],!1,null,"089de520",null);e.default=r.exports},"1e7b":function(t,e,a){var n=a("31c0");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a("5925").default)("0a69c925",n,!0,{sourceMap:!1,shadowMode:!1})},"2ae9":function(t,e,a){var n=a("85a6");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a("5925").default)("79dc1368",n,!0,{sourceMap:!1,shadowMode:!1})},"2f32":function(t,e,a){(e=a("a1a8")(!1)).push([t.i,".ant-table-pagination{display:none}.qr-img{max-width:300px;border-radius:5px}",""]),t.exports=e},"31c0":function(t,e,a){(e=a("a1a8")(!1)).push([t.i,".my--donate[data-v-7b8d0d43]{text-align:center}.my--donate>.banner[data-v-7b8d0d43]{max-height:125px;cursor:pointer}.my--donate>.sponsor-table[data-v-7b8d0d43]{font-size:15px}.my--donate>*>.table td[data-v-7b8d0d43],.my--donate>*>.table th[data-v-7b8d0d43]{padding:1rem .8rem}",""]),t.exports=e},3595:function(t,e,a){(e=a("a1a8")(!1)).push([t.i,".fancy-img-item[data-v-ae5a6b40]{cursor:pointer}",""]),t.exports=e},"3c99":function(t,e,a){"use strict";a("efd8")},"41be":function(t,e,a){var n=a("7c40");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a("5925").default)("7fee5a90",n,!0,{sourceMap:!1,shadowMode:!1})},4406:function(t,e,a){var n=a("2f32");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a("5925").default)("60d76a02",n,!0,{sourceMap:!1,shadowMode:!1})},"4dd6":function(t,e,a){var n=a("3595");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a("5925").default)("83fbf4dc",n,!0,{sourceMap:!1,shadowMode:!1})},"57cb":function(t,e,a){"use strict";a("ad4c")},"5fae":function(t,e,a){"use strict";a("1e7b")},"60ce":function(t,e,a){(e=a("a1a8")(!1)).push([t.i,"img[data-v-089de520]{max-width:400px;border-radius:5px}.github-badge[data-v-089de520]{display:inline-block;border-radius:4px;text-shadow:none;font-size:12px;color:#fff;line-height:15px;background-color:#abbac3;margin-bottom:5px}.github-badge .badge-subject[data-v-089de520]{display:inline-block;background-color:#4d4d4d;padding:4px 4px 4px 6px;border-top-left-radius:4px;border-bottom-left-radius:4px}.github-badge .badge-value[data-v-089de520]{display:inline-block;padding:4px 6px 4px 4px;border-top-right-radius:4px;border-bottom-right-radius:4px}.github-badge .bg-brightgreen[data-v-089de520]{background-color:#4dc820!important}.github-badge .bg-orange[data-v-089de520]{background-color:orange!important}.github-badge .bg-yellow[data-v-089de520]{background-color:#d8b024!important}.github-badge .bg-blueviolet[data-v-089de520]{background-color:#8833d7!important}.github-badge .bg-pink[data-v-089de520]{background-color:#f26bae!important}.github-badge .bg-red[data-v-089de520]{background-color:#e05d44!important}.github-badge .bg-blue[data-v-089de520]{background-color:#007ec6!important}.github-badge .bg-lightgrey[data-v-089de520]{background-color:#9f9f9f!important}.github-badge .bg-gray[data-v-089de520],.github-badge .bg-grey[data-v-089de520]{background-color:#555!important}.github-badge .bg-lightgray[data-v-089de520],.github-badge .bg-lightgrey[data-v-089de520]{background-color:#9f9f9f!important}h1[data-v-089de520]{font-size:30px}h3[data-v-089de520]{font-size:20px}a[data-v-089de520]{line-height:1.8}.my--sponsor[data-v-089de520]{text-align:center}.my--sponsor>.banner[data-v-089de520]{cursor:pointer;max-height:125px}@media only screen and (max-width:480px){.my--sponsor>.banner[data-v-089de520]{max-height:75px}}.my--sponsor>.qrcode>img[data-v-089de520]{max-width:100%;border-radius:5px}.my--sponsor>.sponsor-table[data-v-089de520]{font-size:15px}.my--sponsor>*>.table td[data-v-089de520],.my--sponsor>*>.table th[data-v-089de520]{padding:1rem .8rem}hr[data-v-089de520]{box-sizing:content-box;height:0;overflow:visible;border:0;border-top:.1rem solid #f4f5f6;margin:3rem 0}h3[data-v-089de520]{color:#9b4dc9}.my--more-main[data-v-089de520]{text-align:center}",""]),t.exports=e},"7c40":function(t,e,a){(e=a("a1a8")(!1)).push([t.i,".my--list-title[data-v-12461150]{margin-left:16px;-ms-transform:translateY(5px);transform:translateY(5px)}.ant-list[data-v-12461150]{zoom:1.2;margin-top:8px;margin-bottom:8px;margin-left:8px}a[data-v-12461150]{color:#303742}",""]),t.exports=e},"7eef":function(t,e,a){"use strict";a("4406")},"85a6":function(t,e,a){(e=a("a1a8")(!1)).push([t.i,".my--about[data-v-1be7a1f2]{text-align:left}hr[data-v-1be7a1f2]{box-sizing:content-box;height:0;overflow:visible;border:0;border-top:.1rem solid #f4f5f6;margin:3rem 0}.link-to[data-v-1be7a1f2]{text-decoration:underline;cursor:pointer;color:#5676dc}.google-recaptcha-tip[data-v-1be7a1f2],.google-recaptcha-tip>a[data-v-1be7a1f2]{color:rgba(0,0,0,.45)}.google-recaptcha-tip>a[data-v-1be7a1f2]{text-decoration:underline}",""]),t.exports=e},"8f5b":function(t,e,a){"use strict";a.r(e);var n=a("a6b2"),i=a("1d61"),s=a.n(i),o=a("6a79"),r={name:"MYFaq",components:{MYFooter:n.a},data:function(){return{rawHtml:""}},mounted:function(){Object(o.d)(".my--faq"),s.a.setOptions({breaks:!0}),this.rawHtml=s()(document.querySelector(".markdown-raw").innerHTML),document.querySelector(".markdown-raw").remove()}},c=(a("57cb"),a("cba8")),d=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"my--faq-app"},[e("div",{staticClass:"my--faq"},[this._m(0),e("div",{staticClass:"markdown-html",domProps:{innerHTML:this._s(this.rawHtml)}})]),e("MYFooter",{attrs:{mode:"back"}})],1)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",{staticClass:"markdown-raw"},[t._v("      "),t._v("\n"),a("div",{attrs:{"data-id":"page.faq"}},[t._v("\n"),a("h1",{staticClass:"markdown-title",staticStyle:{"text-align":"center"}},[t._v("🍕一篇文章教你如何玩转耳斯名言🍕 "),a("br"),t._v(" （FAQ）")]),t._v("\n\n"),a("blockquote",[t._v("\n"),a("p",[t._v("文档更新日期：2021年5月2日")]),t._v("\n")]),t._v("\n\n# 浏览名言相关：\n\n## Q：如何刷新名言？/ 怎么看不到别的名言了？\n## A：仔细看哦，在每条名言的下方都可以点击刷新哦\n![](https://cdn.erssmy.com/image/2021/05/02/bDscHVdMeUj9Zmn.png)\n\n---\n\n## Q：我找到了刷新的地方，但字也太小了吧！/ 拜托，刷新字那么小怎么看？\n## A：没关系，我们的开发人员最 ~~体贴人了哦(不是)~~ ，右上角有一个大大的按钮哦\n![](https://cdn.erssmy.com/image/2021/05/02/RFcjmBOUzKYCdq7.png)\n\n---\n\n## Q：如何搜索名言？/ 怎么看我想看的名言？/ 有什么推荐看的名言吗？\n## A：右上角那么大的一个搜索嘞！\n![](https://cdn.erssmy.com/image/2021/05/02/n6qhzDQOefLUybV.png)\n\n---\n\n## Q：为什么无法点赞？/ 点赞数很久都卡不出来？/ 为什么加载那么久？\n## A：别那么心急嘛！首次查看等个3秒钟就好啦！这主要还是因为我们使用的是[vercel](https://vercel.com/dashboard)的云函数来开发的点赞功能，而它们的的云函数会有休眠措施，只要长时间不用就会休眠。所以， ~~多多点赞就可以造福人类啦~~ ~~\n\n---\n\n## Q：妈妈我看不到排行榜啊！/ 排行榜加载不出来 / 为什么加载花那么长时间？\n## A：这点和上面一点是一样的原因哦！等个3秒就ok啦！\n\n---\n\n## Q：为什么还要回答问题？/ 隐藏名言是什么鬼？\n## A：这里面呢主要是放一些我们班级自己班里的东西，所以就暂时不开放咯~~\n\n---\n\n## Q：如何投稿名言？\n## A：投稿名言在更多页面的`名言投稿`那里，也可以直接点击[链接](https://www.erss.club/#/submit)直达。\n\n---\n\n# 评论区相关：\n\n## Q：妈妈我想评论！/ 为什么找不到在哪里留言？/ 有没有评论区？\n## A：有的有的，点击左上角的`更多`进入更多页面就可以留言啦！\n![](https://cdn.erssmy.com/image/2021/05/02/8cOp1oRtgKqCsMk.png)\n\n---\n\n## Q：头像咋搞的？好炫酷 / 如何更换评论区头像？\n## A：别急！评论区的头像用了[Gravatar](https://cn.gravatar.com/)的头像，要换头像的可以去那里注册个账号换头像就好啦。再不会的就百度去搜搜吧\n![](https://cdn.erssmy.com/image/2021/05/02/qoUKulr1j9mdJQA.png)\n\n---\n\n## Q：为什么上不了Gravatar？/ 为什么按照你的方法还是进不去换头像的网站？\n## A：呃，这个……你可能需要下面这一样东西来辅助你上这个网……又或者你可以直接使用你发评论的邮箱发有你的头像的邮件给我（[xhemj@erss.club](mailto:xhemj@erss.club)）。\n![](https://cdn.erssmy.com/image/2021/05/02/2yNOgC1WihkcaXl.png)\n\n---\n\n## Q：评论区为什么一定要填邮箱？\n## A：评论区使用了Gravatar的评论头像，而它就是靠邮箱来给每个用户他自己的头像的，所以要填呀！\n\n---\n\n## Q：为什么换了头像还是没有变化？\n## A：为了节省图片流量，所有图片都加了强缓存，只需要去浏览器那里清除一下缓存就可以了。\n\n---\n\n## Q：有没有更简单的使用头像的方式？/ 填QQ号又是什么鬼？\n## A：有有有！你只需要在昵称处填写你的QQ号，就会自动显示你的QQ头像啦！\n\n---\n\n# 其它相关：\n\n## Q：有没有联系方式？/ 怎么找到你们？/ 小哥哥，加个QQ呗~~\n## A：来了来了！在最底下就有呀`交流群`呀！再不行就看这里吧\n| 渠道 | 加入方式 |\n| :------: | :------: |\n| QQ群 | [点我加入](https://jq.qq.com/?_wv=1027&k=jKy2qW7R) |\n| 邮箱 | [xhemj@erss.club](xhemj@erss.club) |\n| 微信公众号 | 微信搜索`ERSS名言` |\n| 评论区 | [更多页面](https://www.erss.club/#/more) |\n| 投稿区 | [投稿页面](https://www.erss.club/#/submit) |\n\n---\n\n## Q：LOGO真好看！谁画的？\n## A：~~确实好看！~~ LOGO是`解恪布TOY`画的呀。\n![](https://cdn.erssmy.com/image/2021/05/23/ldzxMt9PYQ3LNyU.png)\n\n---\n\n## Q：你们做这个，老师不会生气——吧！\n## A：也许不会。谁知道呢\\[doge\\]\n\n")]),t._v("\n"),t._v("\n    ")])}],!1,null,null,null);e.default=d.exports},"9d74":function(t,e,a){"use strict";a("51fe"),a("da3f");var n=a("e2df"),i=(a("0cb0"),a("6a79")),s={name:"FancyImage",components:{CoolLightBox:n.a},props:{src:String,title:String,description:String,alt:String,className:String},data:function(){return{index:null}},mounted:function(){Object(i.d)(".fancy-img")},computed:{nowImgItem:function(){return[{title:this.title||"",description:this.description||"",src:this.src}]}}},o=(a("f0ba"),a("cba8")),r=Object(o.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fancy-img"},[a("CoolLightBox",{attrs:{items:t.nowImgItem,index:t.index},on:{close:function(e){t.index=null}}}),t._l(t.nowImgItem,(function(e,n){return a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.src,expression:"src"}],key:n,staticClass:"fancy-img-item",class:t.className,attrs:{alt:t.alt},on:{click:function(e){t.index=n}}})}))],2)}),[],!1,null,"ae5a6b40",null);e.a=r.exports},abe7:function(t,e,a){"use strict";a("e196")},ad4c:function(t,e,a){var n=a("e027");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a("5925").default)("59d84818",n,!0,{sourceMap:!1,shadowMode:!1})},c9a5:function(t,e,a){"use strict";a("41be")},cb91:function(t,e,a){"use strict";var n=a("3fad"),i=a("7088"),s=a("2295"),o=a("dd79"),r=[].join,c=i!=Object,d=o("join",",");n({target:"Array",proto:!0,forced:c||!d},{join:function(t){return r.call(s(this),void 0===t?",":t)}})},cb912:function(t,e,a){(e=a("a1a8")(!1)).push([t.i,".twikoo{text-align:left}",""]),t.exports=e},e027:function(t,e,a){(e=a("a1a8")(!1)).push([t.i,".markdown-raw{display:none}.markdown-title{color:#5676dc}.markdown-html{text-align:left}h2{font-size:2rem}code{font-family:ZCOOL KuaiLe}img{border-radius:5px;max-width:400px}.markdown-html{box-sizing:border-box;min-width:200px;max-width:980px;margin:0 auto;padding:45px}@media (max-width:767px){.markdown-html{padding:15px}}",""]),t.exports=e},e196:function(t,e,a){var n=a("60ce");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a("5925").default)("4703137a",n,!0,{sourceMap:!1,shadowMode:!1})},e19c:function(t,e,a){"use strict";a("2ae9")},e5f6:function(t,e,a){"use strict";a.r(e);a("81f1");var n=a("a6b2"),i={name:"ListItem",props:{href:String,imgSrc:String,description:String}},s=(a("c9a5"),a("cba8")),o=Object(s.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("a-list",{attrs:{"item-layout":"horizontal"}},[e("a-list-item",[e("a-list-item-meta",{attrs:{description:this.description}},[e("h3",{class:{"my--list-title":!this.description},attrs:{slot:"title"},slot:"title"},[e("a",{attrs:{href:this.href,target:"_blank",rel:"nofollow ugc"}},[this._t("default")],2)]),this.imgSrc?e("a-avatar",{attrs:{slot:"avatar",src:this.imgSrc},slot:"avatar"}):this._e()],1)],1)],1)}),[],!1,null,"12461150",null).exports,r=a("1de4"),c=a.n(r),d=a("6a79"),l={name:"MYAbout",components:{MYFooter:n.a,ListItem:o},data:function(){return{clickTime:""}},mounted:function(){Object(d.d)(".my--about")},watch:{clickTime:function(){var t=this;console.log(this.clickTime),this.clickTime.indexOf("1")&&this.clickTime.indexOf("2")&&this.clickTime.indexOf("3")&&c()({title:"获得成就",text:"[]~(￣▽￣)~*]",icon:"info",button:"关闭"}).then((function(){document.querySelector("body").style.transition="transform 1s ease 0s",document.querySelector("body").style.transform="rotateY(180deg)",t.clickTime=""}))}},methods:{addClickTime:function(t){this.clickTime+=t}}},m=(a("e19c"),Object(s.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"my--about-app"},[a("div",{staticClass:"my--about"},[t._m(0),a("hr"),a("h1",[t._v("制作人员")]),a("ListItem",{attrs:{href:"https://www.iymy.top/",imgSrc:"https://cdn.erssmy.com/image/2021/05/23/Tp9Q5qaP8A1cG2C.jpg"}},[a("h3",[t._v("IYAMAYA菌屋工作室")])]),a("h2",[t._v("策划：")]),a("ListItem",{attrs:{href:"https://space.bilibili.com/337073401",imgSrc:"https://cdn.erssmy.com/image/2020/11/01/pzaTck9KuqJdHyv.jpg"},on:{click:function(e){return t.addClickTime("1")}}},[a("h3",[t._v("解恪布TOY")])]),a("h2",[t._v("网页：")]),a("ListItem",{attrs:{href:"https://space.bilibili.com/226208916",imgSrc:"https://cdn.erssmy.com/image/2021/04/05/Bext3hDK1nrZM7y.png"},on:{click:function(e){return t.addClickTime("2")}}},[a("h3",[t._v("Xhemj")])]),a("h2",[t._v("美术：")]),a("ListItem",{attrs:{href:"https://space.bilibili.com/337073401",imgSrc:"https://cdn.erssmy.com/image/2020/11/01/pzaTck9KuqJdHyv.jpg"},on:{click:function(e){return t.addClickTime("1")}}},[a("h3",[t._v("解恪布TOY")])]),a("h2",[t._v("推广：")]),a("ListItem",{attrs:{href:"https://space.bilibili.com/337073401",imgSrc:"https://cdn.erssmy.com/image/2020/11/01/pzaTck9KuqJdHyv.jpg"},on:{click:function(e){return t.addClickTime("1")}}},[a("h3",[t._v("解恪布TOY")])]),a("ListItem",{attrs:{href:"https://space.bilibili.com/368095014",imgSrc:"https://cdn.erssmy.com/image/2020/11/01/ejgOW7QY8MFmDU5.jpg"},on:{click:function(e){return t.addClickTime("3")}}},[a("h3",[t._v("Oranjezelf")])]),a("hr"),t._m(1),a("h1",{staticStyle:{"text-align":"center","font-size":"22px"}},[a("router-link",{staticClass:"link-to",attrs:{to:"faq"}},[t._v("如何玩转耳斯名言？")])],1),a("hr"),a("h1",[t._v("特别感谢")]),a("ListItem",[t._v("厦门市音乐学校")]),a("ListItem",[t._v("厦大食堂")]),a("ListItem",[t._v("ERSS 恪人族")]),a("ListItem",[t._v("英语俞老师")]),a("ListItem",[t._v("厦门市音乐学校的全体老师和同学们")]),a("h1",[t._v("联系")]),a("ListItem",{attrs:{description:"1084808352",href:"https://jq.qq.com/?_wv=1027&k=jKy2qW7R"}},[a("a-icon",{attrs:{type:"qq"}}),t._v(" QQ交流群")],1),a("ListItem",{attrs:{description:"feedback@erssmy.com",href:"mailto:feedback@erssmy.com"}},[a("a-icon",{attrs:{type:"mail"}}),t._v(" 反馈邮箱")],1),a("ListItem",{attrs:{description:"https://github.com/icerss/mingyan",href:"https://github.com/icerss/mingyan"}},[a("a-icon",{attrs:{type:"github"}}),t._v(" Github")],1),a("hr"),a("h2",[t._v("注意")]),a("div",{staticClass:"google-recaptcha-tip"},[a("a-icon",{attrs:{type:"info-circle"}}),t._v(" This site is protected by reCAPTCHA and the Google "),a("a",{attrs:{href:"https://policies.google.cn/privacy",target:"_blank",rel:"nofollow"}},[t._v("Privacy Policy")]),t._v(" and "),a("a",{attrs:{href:"https://policies.google.cn/terms",target:"_blank",rel:"nofollow"}},[t._v("Terms of Service")]),t._v(" apply. ")],1)],1),a("MYFooter",{attrs:{mode:"back"}})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",[e("strong",[this._v("耳斯名言")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticStyle:{"text-align":"center","font-size":"22px"}},[e("a",{staticClass:"link-to",attrs:{target:"_blank",rel:"nofollow ugc",href:"https://mp.weixin.qq.com/s/30jSF8UCw2Pof02_Y7tGYw"}},[this._v("耳斯名言是啥？")])])}],!1,null,"1be7a1f2",null));e.default=m.exports},e7ca:function(t,e,a){"use strict";a.r(e);var n=a("d399"),i=(a("c505"),a("1cdb"),a("f540"),a("2bd2"),a("a6b2")),s=a("9d74"),o=a("6a79"),r=a("1b2a"),c=[{title:"昵称",dataIndex:"name",key:"name"},{title:"金额",dataIndex:"sum",key:"count"},{title:"时间",dataIndex:"time",key:"time"},{title:"备注",dataIndex:"msg",key:"msg"}],d={name:"MYDonate",components:{MYFooter:i.a,FancyImage:s.a},data:function(){return{isFinishLoading:!1,listData:[],columns:c}},mounted:function(){Object(o.d)(".my--donate");var t=this;fetch("".concat(r.b.donate_list,"?t=_").concat((new Date).getTime())).then((function(t){return t.json()})).then((function(e){t.handleData(e)}))},methods:{handleData:function(t){var e,a=[],i=Object(n.a)(t);try{for(i.s();!(e=i.n()).done;){var s=e.value;a.push({name:s.name,time:new Date(s.time).toLocaleString(),msg:s.msg,sum:s.sum,timestamp:s.time})}}catch(t){i.e(t)}finally{i.f()}this.listData=a,this.isFinishLoading=!0}}},l=(a("5fae"),a("7eef"),a("cba8")),m=Object(l.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"my--donate-app"},[e("div",{staticClass:"my--donate"},[e("h1",[this._v("鼓励我们")]),e("div",{staticClass:"qrcode"},[e("FancyImage",{attrs:{src:"https://static-cdn.erssmy.com/public/donate-qrcode.png",title:"鼓励我们",className:"qr-img"}}),e("p",{staticClass:"qrcode-text"},[this._v("点击图片可以放大")])],1),e("div",{staticClass:"sponsor-table"},[this.isFinishLoading?e("div",{staticClass:"sponsor-table-load"},[e("a-table",{attrs:{columns:this.columns,"data-source":this.listData,"row-key":function(t){return t.name+t.timestamp}}})],1):e("span",{staticClass:"sponsor-table-loading"},[this._v("加载中……")])])]),e("MYFooter",{attrs:{mode:"back"}})],1)}),[],!1,null,"7b8d0d43",null);e.default=m.exports},efd8:function(t,e,a){var n=a("cb912");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a("5925").default)("380d888b",n,!0,{sourceMap:!1,shadowMode:!1})},f0ba:function(t,e,a){"use strict";a("4dd6")}}]);