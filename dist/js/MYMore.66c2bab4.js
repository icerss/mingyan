/*!
 * ERSS SAYING
 * (c) 2020-2022 Xhemj
 * Build: 2022-4-5 11:43:40
 * Version: 3.1.1
 * ====
 * o(〃＾▽＾〃)o
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([["MYMore"],{1926:function(t,e,a){"use strict";var s=a("88d4"),n=a("ce5b"),i=a("587c"),c=a("63ef"),o=a("fbe3"),r=n([].join),l=i!=Object,u=o("join",",");s({target:"Array",proto:!0,forced:l||!u},{join:function(t){return r(c(this),void 0===t?",":t)}})},"1b5e":function(t,e,a){"use strict";a.r(e);a("865d"),a("1926"),a("89a8"),a("cb0a");var s=a("7cc4"),n=a("9944"),i=a("d633"),c=a("1b2a"),o={name:"MYMore",data:function(){return{hitCount:"9999+",uptime:"2021-00-00 00:00:00",sitetime:"很久很久~~"}},methods:{siteTime:function(){var t=new Date,e=new Date("04/30/2020 00:00:00");t.setTime(t.getTime()+250);var a=(t-e)/1e3/60/60/24,s=Math.floor(a),n=(t-e)/1e3/60/60-24*s,i=Math.floor(n);1==String(i).length&&(i="0"+i);var c=(t-e)/1e3/60-1440*s-60*i,o=Math.floor(c);1==String(o).length&&(o="0"+o);var r=(t-e)/1e3-86400*s-3600*i-60*o,l=Math.round(r);return 1==String(l).length&&(l="0"+l),s+" 天 "+i+" 小时 "+o+" 分 "+l+" 秒"},downloadMingyan:function(){Object(i.recordEvent)(i.recordEventId.clickMYDownloadButton);var t=(new Date).toLocaleString();Object(n.b)("耳斯名言列表（下载时间：".concat(t,"）\n==========\n")+s.d.join("\n"),"txt","耳斯名言列表（下载时间：".concat(t,"）"))},onClickSubmitButton:function(){Object(i.recordEvent)(i.recordEventId.clickMYSubmitButton)},onClickDonateBanner:function(){Object(i.recordEvent)(i.recordEventId.clickDonateBanner)}},mounted:function(){Object(n.e)(".my--more");var t=this;Object(n.j)("https://s-sh-1943-mingyan-static.oss.dogecdn.com/static/js/twikoo.min.js").then((function(){twikoo.init({envId:c.b.twikoo,el:"#tcomment",path:"/"}).then((function(){try{Object(n.n)(".tk-footer").innerHTML='Powered by <a href="https://twikoo.js.org" target="_blank" rel="nofollow">Twikoo</a></br>&copy; 2022 <a href="https://www.erssmy.com/">耳斯名言</a></div>'}catch(t){}Object(n.n)(".el-textarea__inner").style.height="150px"}))})),fetch("https://api.github.com/repos/xhemj/mingyan").then((function(t){return t.json()})).then((function(e){var a=e.updated_at;t.uptime=new Date(a).toLocaleString()})),fetch("https://hit-count.erss.club/?_my_cache_=no").then((function(t){return t.json()})).then((function(e){t.hitCount=e.data.count})),setInterval((function(){t.sitetime=t.siteTime()}),250)}},r=(a("269c"),a("3c99"),a("cba8")),l=Object(r.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"my--more"},[a("div",{staticClass:"my--more-main"},[a("h1",[t._v("更多")]),a("h3",[a("router-link",{attrs:{to:"submit"}},[a("span",{on:{click:t.onClickSubmitButton}},[t._v("名言投稿")])])],1),a("h3",[a("router-link",{attrs:{to:"ranking"}},[t._v("名言排行榜")])],1),a("h3",[a("a",{attrs:{id:"download_btn"},on:{click:t.downloadMingyan}},[t._v("下载名言列表（.txt）")])]),a("h3",[a("router-link",{attrs:{to:"/about"}},[t._v("关于")])],1)]),a("router-link",{attrs:{to:"/donate"}},[a("div",{staticClass:"my--sponsor",on:{click:t.onClickDonateBanner}},[a("img",{staticClass:"banner",attrs:{src:"https://s-sh-1943-mingyan-static.oss.dogecdn.com/image/public/donate-banner.png",alt:"鼓励我们"}})])]),a("hr"),a("div",{attrs:{id:"tcomment"}}),a("hr"),a("div",{staticStyle:{"text-align":"center"}},[a("div",{staticStyle:{color:"gray"}},[t._v(" 自 2020年04月30日 以来，耳斯名言已经陪伴你们走过了 "),a("span",{staticClass:"sitetime"},[t._v(t._s(t.sitetime))])]),a("a",{staticStyle:{color:"#d6d9e2"},attrs:{href:"https://icp.gov.moe",target:"_blank"}},[t._v("萌备 ")]),a("a",{staticStyle:{color:"#d6d9e2"},attrs:{href:"https://icp.gov.moe/?keyword=20200503",target:"_blank"}},[t._v(" 20200503号")])]),a("div",{staticStyle:{"text-align":"center"}},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),a("div",{staticClass:"github-badge",attrs:{title:"多来看看呀！"}},[a("span",{staticClass:"badge-subject"},[t._v("PV")]),a("span",{staticClass:"badge-value bg-yellow"},[a("span",{attrs:{id:"hit-count"}},[t._v(" "+t._s(t.hitCount))])])]),a("br"),a("div",{staticClass:"github-badge",attrs:{title:"会慢慢更新的"}},[a("span",{staticClass:"badge-subject"},[t._v("更新时间")]),a("span",{staticClass:"badge-value bg-lightgrey"},[a("span",{attrs:{id:"uptime"}},[t._v(t._s(t.uptime))])])]),a("br")])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"github-badge",attrs:{title:"作者就是我啦！！"}},[e("span",{staticClass:"badge-subject"},[this._v("Author")]),e("span",{staticClass:"badge-value bg-blue"},[this._v("xhemj")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"github-badge",attrs:{title:"速度还可以吧？"}},[e("span",{staticClass:"badge-subject"},[this._v("Hosted")]),e("span",{staticClass:"badge-value bg-red"},[e("span",{attrs:{id:"host"}},[this._v("Vercel && Github")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"github-badge",attrs:{title:"由Cloudflare提供网站加速服务"}},[e("span",{staticClass:"badge-subject"},[this._v("CDN")]),e("span",{staticClass:"badge-value bg-pink"},[this._v("Cloudflare")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"github-badge",attrs:{title:"ERSS~~~"}},[e("span",{staticClass:"badge-subject"},[this._v("©")]),e("span",{staticClass:"badge-value bg-brightgreen"},[this._v("Xhemj")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"github-badge",attrs:{title:"ERSS~~~"}},[e("span",{staticClass:"badge-subject"},[this._v("©")]),e("span",{staticClass:"badge-value theme-bg blue"},[this._v("IYAMAYA工作室")])])}],!1,null,"034aff3a",null);e.default=l.exports},"269c":function(t,e,a){"use strict";a("47c9")},"3c99":function(t,e,a){"use strict";a("5623")},"47c9":function(t,e,a){},5623:function(t,e,a){}}]);