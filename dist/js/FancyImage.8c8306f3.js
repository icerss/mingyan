/*!
 * ERSS SAYING
 * (c) 2020-2022 Xhemj
 * Build: 2022-4-6 08:27:28
 * Version: 3.1.1
 * ====
 * o(〃＾▽＾〃)o
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([["FancyImage"],{"9d74":function(t,n,i){"use strict";i.r(n);i("304d"),i("f257");var e=i("e2df"),c=(i("0cb0"),i("9944")),a={name:"FancyImage",components:{CoolLightBox:e.a},props:{src:String,title:String,description:String,alt:String,className:String},data:function(){return{index:null}},mounted:function(){Object(c.d)(".fancy-img")},computed:{nowImgItem:function(){return[{title:this.title||"",description:this.description||"",src:this.src}]}}},s=(i("9d7a"),i("cba8")),o=Object(s.a)(a,(function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"fancy-img"},[i("CoolLightBox",{attrs:{items:t.nowImgItem,index:t.index},on:{close:function(n){t.index=null}}}),t._l(t.nowImgItem,(function(n,e){return i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.src,expression:"src"}],key:e,staticClass:"fancy-img-item",class:t.className,attrs:{alt:t.alt,title:t.alt},on:{click:function(n){t.index=e}}})}))],2)}),[],!1,null,"027b322c",null);n.default=o.exports},"9d7a":function(t,n,i){"use strict";i("d3db")},d3db:function(t,n,i){}}]);