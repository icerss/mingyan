/*!
 * ERSS SAYING
 * (c) 2020-2022 Xhemj
 * Build: 2022-3-24 18:42:13
 * Version: 3.1.1
 * ====
 * o(〃＾▽＾〃)o
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([["MYImage"],{"5a93":function(n,t,i){"use strict";i("972a")},"74ec":function(n,t,i){"use strict";i.r(t);i("89a8"),i("b110"),i("fe35"),i("4c1e"),i("fee8"),i("d1ba");var e=i("7cc4"),a=i("9944"),s={name:"MYImage",components:{FancyImage:function(){return Promise.all([i.e("vendor-FancyImage"),i.e("FancyImage")]).then(i.bind(null,"9d74"))}},props:{rawMingyan:String},data:function(){return{imgClassName:"",styleMinWidth:0,commonVersion:"1.0.2"}},mounted:function(){var n=Object(e.a)(this.rawMingyan).text;Object(a.d)()?(this.styleMinWidth=28*n.split("").length-50,this.imgClassName="phone-img"):(this.styleMinWidth=28*n.split("").length-50,this.imgClassName="pc-img")},computed:{imgSrc:function(){var n=Object(e.a)(this.rawMingyan).text,t=Object(e.a)(this.rawMingyan).teacher,i="https://s3.cdn.h36.top/@icerss/mingyan-oss@[version]";if("解"===n){var a=i,s=e.f[t],c=s.split("@")[1]||this.commonVersion;return(a=a.replace("[version]",c))+s}var r=i,m=e.e[n],o=m.split("@")[1]||this.commonVersion;return(r=r.replace("[version]",o))+m.split("@")[0]}}},c=(i("5a93"),i("cba8")),r=Object(c.a)(s,(function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"my--mingyan-pic",class:this.imgClassName},[t("FancyImage",{attrs:{src:this.imgSrc,title:this.rawMingyan,description:"拍摄：耳斯名言制作团队",className:"my--mingyan-pic",alt:this.rawMingyan}})],1)}),[],!1,null,null,null);t.default=r.exports},"972a":function(n,t,i){}}]);