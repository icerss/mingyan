/*!
 * ERSS SAYING
 * (c) 2020-2022 Xhemj
 * Build: 2022-5-14 09:58:55
 * Version: 3.1.1
 * ====
 * o(〃＾▽＾〃)o
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([["MYMain-c1807361"],{"1f9d":function(n,t,i){"use strict";i("21a3")},"21a3":function(n,t,i){},"2e06":function(n,t,i){"use strict";i.r(t);i("8300"),i("ea5b"),i("e551");var a=i("7cc4"),e=i("9944"),s=i("41cb"),c=i("66b1"),o=(i("83df"),i("7241"),i("654b"),i("1b2a")),r=i("8085"),l=i("d633"),m={name:"MYMain",components:{MYStar:function(){return i.e("MYStar-21833f8f").then(i.bind(null,"cb95"))},MYInfo:function(){return i.e("MYInfo-21833f8f").then(i.bind(null,"9527"))},MYImage:function(){return i.e("MYImage-90806f39").then(i.bind(null,"74ec"))},MYComment:function(){return i.e("MYComment-31ecd969").then(i.bind(null,"5210"))}},data:function(){return{mingyanPicUrl:a.e,teacher:"有一位老师",text:"名言找不到咯！！o(*￣▽￣*)ブ",rawMingyan:a.d[Object(a.c)()],starEvent:"addstar",isFirstTime:!0,isClickStoryTips:!1,mainClassName:""}},watch:{"$route.path":function(){this.showMingyan(Object(a.c)())},isClickStoryTips:function(){this.mainClassName=this.isClickStoryTips?"is-open-story":"is-close-story"},rawMingyan:function(){Object(l.c)(this.rawMingyan)}},mounted:function(){this.showMingyan(Object(a.c)()),fetch("https://status.erss.club/api/v2/incidents/unresolved.json?t=_"+(new Date).getTime()).then((function(n){return n.json()})).then((function(n){var t=n.incidents;if(0!==t.length){var i,a=Object(c.a)(t);try{for(a.s();!(i=a.n()).done;){var s=i.value,o=s.updated_at||"未知",r=s.name||"未知",l="https://status.erss.club/incidents/"+s.id,m=s.impact||"未知";m={none:"几乎无影响",minor:"有部分影响",major:"大部分影响",critical:"几乎全部影响"}[m]||"有部分影响",Object(e.j)({update:o,name:r,url:l,impact:m});var d='<div id="incidents-report">\n<h2 id="incidents-report-title">网站维护中`(*>﹏<*)′</h2>\n<ul id="incidents-report-ul">\n<li id="incidents-report-li">维护内容：'.concat(r,'</li>\n<li id="incidents-report-li">更新时间：').concat(new Date(o).toLocaleString(),'</li>\n<li id="incidents-report-li">影响范围：').concat(m,'</li>\n<li id="incidents-report-li">详情：<a id="incidents-report-a" href="').concat(l,'" target="_blank" rel="nofollow">https://status.erss.club/</a></li>\n</ul>\n</div>');e.k.open({type:"15s",message:d})}}catch(n){a.e(n)}finally{a.f()}}}));var n=this;window.onresize=function(){n.isClickStoryTips=!1,Object(e.m)(".my--main").classList.remove("is-close-story")},r.a.$on("onReload",(function(){n.isClickStoryTips=!1,Object(e.m)(".my--main").classList.remove("is-close-story")}))},beforeDestroy:function(){r.a.$off("onReload")},computed:{mingyanConj:function(){return a.g[this.text]?a.g[this.text]:"曾经说过"}},methods:{showMingyan:function(n){!this.isFirstTime||Object(o.d)("isAutoShowMingyan")?(this.rawMingyan=a.d[n],this.teacher=Object(a.a)(n).teacher,this.text=Object(a.a)(n).text,e.g.put(e.h.mingyanId,n),Object(e.d)(".my--main")):this.isFirstTime=!1},nextMingyan:function(){Object(l.a)(l.b.clickMYReloadButton);var n=Object(a.b)();s.a.push("/@"+n),this.showMingyan(n)},onTextClick:function(){alert("你点击了名言")},onClickStoryTips:function(n){this.isClickStoryTips=n.isClickTips}}},d=(i("1f9d"),i("cba8")),u=Object(d.a)(m,(function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{attrs:{id:"my--main-app"}},[i("div",{staticClass:"my--main",class:n.mainClassName},[i("h3",{staticClass:"my--mingyan-show"},[i("span",{staticClass:"my--mingyan-name icon my--name-wave label"},[n._v(" "+n._s(n.teacher)+" ")]),i("span",{staticClass:"my--mingyan-conj",domProps:{innerHTML:n._s(n.mingyanConj)}}),n._v("： ")]),i("h1",[i("span",{staticClass:"my--mingyan-text label label-secondary"},[i("span",{staticClass:"my--mingyan-raw"},[n._v(" "+n._s(n.text)+" ")]),"解"===n.text||n.mingyanPicUrl[n.text]?i("MYImage",{attrs:{rawMingyan:n.rawMingyan}}):n._e()],1)]),i("div",{staticClass:"my--mingyan-info info-text"},[i("MYInfo",{attrs:{mingyan:n.rawMingyan}}),n._v("   "),i("MYStar",{attrs:{mingyan:n.rawMingyan}}),i("br"),i("div",{staticClass:"tips"},[i("a",{staticStyle:{color:"#9b4dc9"},attrs:{id:"reload",onclick:"_hmt.push(['_trackEvent', '名言', '刷新', '手动' , '点击查看更多名言']);"},on:{click:n.nextMingyan}},[n._v("点击")]),n._v("查看更多名言 ")])],1)]),i("MYComment",{attrs:{rawMingyan:n.rawMingyan}})],1)}),[],!1,null,"ea26a86a",null);t.default=u.exports}}]);