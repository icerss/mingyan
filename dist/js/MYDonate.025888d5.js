/*!
 * ERSS SAYING
 * (c) 2020-2022 Xhemj
 * Build: 2022-3-13 20:15:40
 * Version: 3.1.1
 * ====
 * o(〃＾▽＾〃)o
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([["MYDonate"],{"7dec":function(t,e,a){},"7e34":function(t,e,a){"use strict";a("7dec")},"7eef":function(t,e,a){"use strict";a("d767")},d767:function(t,e,a){},e7ca:function(t,e,a){"use strict";a.r(e);var n=a("ccc5"),s=(a("2c45"),a("b0a9"),a("2ee7"),a("f95d"),a("a3f1"),a("fd7d"),a("9944")),i=a("1b2a"),c=[{title:"昵称",dataIndex:"name",key:"name"},{title:"金额",dataIndex:"sum",key:"count"},{title:"时间",dataIndex:"time",key:"time"},{title:"备注",dataIndex:"msg",key:"msg"}],o={name:"MYDonate",components:{FancyImage:function(){return Promise.all([a.e("vendor-FancyImage"),a.e("FancyImage")]).then(a.bind(null,"9d74"))}},data:function(){return{isFinishLoading:!1,listData:[],columns:c}},mounted:function(){Object(s.d)(".my--donate");var t=this;fetch("".concat(i.b.donate_list,"?t=_").concat((new Date).getTime())).then((function(t){return t.json()})).then((function(e){t.handleData(e)}))},methods:{handleData:function(t){var e,a=[],s=Object(n.a)(t);try{for(s.s();!(e=s.n()).done;){var i=e.value;a.push({name:i.name,time:new Date(i.time).toLocaleString(),msg:i.msg,sum:i.sum,timestamp:i.time})}}catch(t){s.e(t)}finally{s.f()}this.listData=a,this.isFinishLoading=!0}}},d=(a("7e34"),a("7eef"),a("cba8")),l=Object(d.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"my--donate"},[e("h1",[this._v("鼓励我们")]),e("div",{staticClass:"qrcode"},[e("FancyImage",{attrs:{src:"https://s3.cdn.h36.top/@icerss/mingyan-oss@1.0.2/public/donate-qrcode.png",title:"鼓励我们",className:"qr-img"}}),e("p",{staticClass:"qrcode-text"},[this._v("点击图片可以放大")])],1),e("div",{staticClass:"sponsor-table"},[this.isFinishLoading?e("div",{staticClass:"sponsor-table-load"},[e("a-table",{attrs:{columns:this.columns,"data-source":this.listData,"row-key":function(t){return t.name+t.timestamp}}})],1):e("span",{staticClass:"sponsor-table-loading"},[this._v("加载中……")])])])}),[],!1,null,"ecec7fe6",null);e.default=l.exports}}]);