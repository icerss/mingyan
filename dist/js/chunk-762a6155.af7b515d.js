/*!
 * ERSS SAYING
 * (c) 2020-2022 Xhemj
 * Build: 2022-3-5 20:28:59
 * Version: 3.1.1
 * ====
 * o(〃＾▽＾〃)o
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-762a6155"],{"5a93":function(n,t,i){"use strict";i("972a")},"74ec":function(n,t,i){"use strict";i.r(t);i("2c45"),i("b0a9"),i("2ee7"),i("abd8"),i("2261"),i("c12c");var a=i("7cc4"),s=i("9944"),e={name:"MYImage",components:{FancyImage:function(){return Promise.all([i.e("chunk-abd47d30"),i.e("chunk-74ad7839")]).then(i.bind(null,"9d74"))}},props:{rawMingyan:String},data:function(){return{imgClassName:"",styleMinWidth:0,commonVersion:"1.0.2"}},mounted:function(){var n=Object(a.a)(this.rawMingyan).text;Object(s.c)()?(this.styleMinWidth=28*n.split("").length-50,this.imgClassName="phone-img"):(this.styleMinWidth=28*n.split("").length-50,this.imgClassName="pc-img")},computed:{imgSrc:function(){var n=Object(a.a)(this.rawMingyan).text,t=Object(a.a)(this.rawMingyan).teacher,i="https://s3.cdn.h36.top/@icerss/mingyan-oss@[version]";if("解"===n){var s=i,e=a.f[t],c=e.split("@")[1]||this.commonVersion;return(s=s.replace("[version]",c))+e}var r=i,o=a.e[n],l=o.split("@")[1]||this.commonVersion;return(r=r.replace("[version]",l))+o.split("@")[0]}}},c=(i("5a93"),i("cba8")),r=Object(c.a)(e,(function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"my--mingyan-pic",class:this.imgClassName},[t("FancyImage",{attrs:{src:this.imgSrc,title:this.rawMingyan,description:"拍摄：耳斯名言制作团队",className:"my--mingyan-pic",alt:this.rawMingyan}})],1)}),[],!1,null,null,null);t.default=r.exports},"972a":function(n,t,i){}}]);