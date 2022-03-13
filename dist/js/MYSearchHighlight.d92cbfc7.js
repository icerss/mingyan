/*!
 * ERSS SAYING
 * (c) 2020-2022 Xhemj
 * Build: 2022-3-13 20:15:40
 * Version: 3.1.1
 * ====
 * o(〃＾▽＾〃)o
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([["MYSearchHighlight"],{4213:function(e,t,a){"use strict";a.r(t);a("5de7"),a("4278"),a("abd8"),a("6c2e"),a("c917"),a("c12c");var s={name:"MYSearchHighlight",props:{text:String,searchText:String},computed:{handleSearch:function(){var e=new RegExp(this.searchText,"ig");return this.text.replace(e,'<span class="label label-secondary">'+this.searchText+"</span>")}}},n=a("cba8"),c=Object(n.a)(s,(function(){var e=this.$createElement;return(this._self._c||e)("span",{staticClass:"search-highlight",domProps:{innerHTML:this._s(this.handleSearch)}})}),[],!1,null,null,null);t.default=c.exports}}]);