/*!
 * ERSS SAYING
 * (c) 2020-2022 Xhemj
 * Build: 2022-4-5 11:43:40
 * Version: 3.1.1
 * ====
 * o(〃＾▽＾〃)o
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([["MYImage"],{"5a93":function(t,n,a){"use strict";a("972a")},"74ec":function(t,n,a){"use strict";a.r(n);a("89a8"),a("b110"),a("fe35"),a("4c1e"),a("fee8");var i=a("7cc4"),e=a("9944"),s={name:"MYImage",components:{FancyImage:function(){return Promise.all([a.e("vendor-FancyImage"),a.e("FancyImage")]).then(a.bind(null,"9d74"))}},props:{rawMingyan:String},data:function(){return{imgClassName:"",styleMinWidth:0,commonVersion:"1.0.2"}},mounted:function(){var t=Object(i.a)(this.rawMingyan).text;Object(e.d)()?(this.styleMinWidth=28*t.split("").length-50,this.imgClassName="phone-img"):(this.styleMinWidth=28*t.split("").length-50,this.imgClassName="pc-img")},computed:{imgSrc:function(){var t=Object(i.a)(this.rawMingyan).text,n=Object(i.a)(this.rawMingyan).teacher;if("解"===t){return"https://s-sh-1943-mingyan-static.oss.dogecdn.com/image"+i.f[n]}return"https://s-sh-1943-mingyan-static.oss.dogecdn.com/image"+i.e[t]}}},c=(a("5a93"),a("cba8")),m=Object(c.a)(s,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"my--mingyan-pic",class:this.imgClassName},[n("FancyImage",{attrs:{src:this.imgSrc,title:this.rawMingyan,description:"拍摄：耳斯名言制作团队",className:"my--mingyan-pic",alt:this.rawMingyan}})],1)}),[],!1,null,null,null);n.default=m.exports},"972a":function(t,n,a){}}]);