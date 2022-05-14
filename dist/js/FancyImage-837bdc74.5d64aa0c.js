/*!
 * ERSS SAYING
 * (c) 2020-2022 Xhemj
 * Build: 2022-5-14 09:58:55
 * Version: 3.1.1
 * ====
 * o(〃＾▽＾〃)o
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([["FancyImage-837bdc74"],{"9d74":function(t,n,e){"use strict";e.r(n);e("90e0"),e("5920");var i=e("e2df"),c=(e("0cb0"),e("9944")),a={name:"FancyImage",components:{CoolLightBox:i.a},props:{src:String,title:String,description:String,alt:String,className:String},data:function(){return{index:null}},mounted:function(){Object(c.d)(".fancy-img")},computed:{nowImgItem:function(){return[{title:this.title||"",description:this.description||"",src:this.src}]}}},s=(e("9d7a"),e("cba8")),o=Object(s.a)(a,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"fancy-img"},[e("CoolLightBox",{attrs:{items:t.nowImgItem,index:t.index},on:{close:function(n){t.index=null}}}),t._l(t.nowImgItem,(function(n,i){return e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.src,expression:"src"}],key:i,staticClass:"fancy-img-item",class:t.className,attrs:{alt:t.alt,title:t.alt},on:{click:function(n){t.index=i}}})}))],2)}),[],!1,null,"027b322c",null);n.default=o.exports},"9d7a":function(t,n,e){"use strict";e("d3db")},d3db:function(t,n,e){}}]);