/*!
 * ERSS SAYING
 * (c) 2020-2022 Xhemj
 * Build: 2022-3-24 18:42:13
 * Version: 3.1.1
 * ====
 * o(〃＾▽＾〃)o
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([["MYSearchHighlight"],{4213:function(e,t,a){"use strict";a.r(t);a("87bf"),a("cea3"),a("4c1e"),a("6370"),a("d5ee"),a("d1ba");var s={name:"MYSearchHighlight",props:{text:String,searchText:String},computed:{handleSearch:function(){var e=new RegExp(this.searchText,"ig");return this.text.replace(e,'<span class="label label-secondary">'+this.searchText+"</span>")}}},n=a("cba8"),r=Object(n.a)(s,(function(){var e=this.$createElement;return(this._self._c||e)("span",{staticClass:"search-highlight",domProps:{innerHTML:this._s(this.handleSearch)}})}),[],!1,null,null,null);t.default=r.exports}}]);