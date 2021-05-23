<!-- Start sponsor.html -->
<div class="my--sponsor">
	<h1>
		鼓励我们
	</h1>
	<div class="qrcode">
		<!-- -->
		<img src="./src/loading.svg" alt="赞赏二维码"
			data-fancybox-group="ERSS_mingyan_pic"
			data-src="https://s-sh-1943-pic1.oss.dogecdn.com/2021/05/04/1zfBCJSGmbKcs9e.png"
			class="mdui-hoverable fancybox lazyload" onload="lazyload();fancybox()" />
		<!-- -->
		<p class="qrcode-text">
			点击图片可以放大
		</p>
		<!-- -->
	</div>
	<!-- -->
	<div class="sponsor-table">加载中……</div>
	<!-- -->
	<script>
		function fancybox() { $(".fancybox").fancybox({ buttons: ["zoom", "share", "slideShow", "fullScreen", "download", "close"], lang: "zh-cn", i18n: { "zh-cn": { CLOSE: "关闭", NEXT: "下一张", PREV: "前一张", ERROR: "图片加载失败， <br/> 请稍后再试。", FULL_SCREEN: "全屏", THUMBS: "略缩图", DOWNLOAD: "下载", SHARE: "分享", ZOOM: "缩放" } } }); };
		lazyload();
		(async function () {
			await fetch("./api/get-sponsor-list?t=_" + new Date().getTime())
				.then(r => r.json())
				.then(function (res) {
					let table = `
<table class="table">
  <thead>
    <tr>
      <th>昵称</th>
      <th>金额</th>
      <th>时间</th>
	  <th>备注</th>
    </tr>
  </thead>
  <tbody>`
					let rep = `
    <tr class="{isactive} mdui-hoverable">
      <td>{name}</td>
      <td>{sum}</td>
	  <td>{time}</td>
	  <td>{msg}</td>
    </tr>`;
					for (let i in res) {
						if(!res[i].name) continue;
						table += rep
						.replace(`{name}`, res[i].name)
						.replace(`{time}`, new Date(res[i].time).toLocaleString())
						.replace(`{sum}`, res[i].sum)
						.replace(`{msg}`, res[i].msg ? res[i].msg : "无")
						.replace(`{isactive}`, i %2 == 0 ? "active" : "")
					};
					table += ` </tbody></table>`
					$(".sponsor-table").html(marked(table));
				})
		})()
	</script>
</div>
<!-- END sponsor.html -->