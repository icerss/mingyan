<strong><style>.github-badge{display:inline-block;border-radius:4px;text-shadow:none;font-size:12px;color:#fff;line-height:15px;background-color:#ABBAC3;margin-bottom:5px;}.github-badge .badge-subject{display:inline-block;background-color:#4D4D4D;padding:4px 4px 4px 6px;border-top-left-radius:4px;border-bottom-left-radius:4px;}.github-badge .badge-value{display:inline-block;padding:4px 6px 4px 4px;border-top-right-radius:4px;border-bottom-right-radius:4px;}.github-badge .bg-brightgreen{background-color:#4DC820 !important;}.github-badge .bg-orange{background-color:#FFA500 !important;}.github-badge .bg-yellow{background-color:#D8B024 !important;}.github-badge .bg-blueviolet{background-color:#8833D7 !important;}.github-badge .bg-pink{background-color:#F26BAE !important;}.github-badge .bg-red{background-color:#e05d44 !important;}.github-badge .bg-blue{background-color:#007EC6 !important;}.github-badge .bg-lightgrey{background-color:#9F9F9F !important;}.github-badge .bg-grey,.github-badge .bg-gray{background-color:#555 !important;}.github-badge .bg-lightgrey,.github-badge .bg-lightgray{background-color:#9f9f9f !important;}</style>
<div style="text-align: center" class="mdui-ripple">
<style>h1{font-size:30px}h3{font-size:20px}</style>
    <h1>更多</h1>
    <h3><a onclick="my.md_all()">全部名言</a></h3> 
    <h3><a onclick="my.print()">打印名言列表</a></h3> 
    <h3><a onclick="my.download()">下载名言列表（.txt）</a></h3> 
    <h3><a onclick="my.about()">关于</a></h3> 
</div></strong>

---

<div id="tcomment"></div>

---

<script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
<div style="text-align: center" class="mdui-ripple">
<div class="github-badge" title="作者就是我啦！！"><span class="badge-subject">Author</span><span class="badge-value bg-blue">xhemj</span></div> 
<div class="github-badge" title="速度还可以吧？"><span class="badge-subject">Hosted</span><span class="badge-value bg-red"><span id="host">Github</span></span></div>
<div class="github-badge" title="Jsdelivr的静态文件加速和Cloudflare的部分页面加速"><span class="badge-subject">CDN</span><span class="badge-value bg-pink">Jsdelivr & Cloudflare</span></div>
<div class="github-badge" title="ERSS~~~"><span class="badge-subject">&copy;</span><span class="badge-value bg-brightgreen">2021 Xhemj</span></div>
</br>
<div class="github-badge" title="多来看看呀！"><span class="badge-subject">PV</span><span class="badge-value bg-yellow"><span id="busuanzi_value_site_pv">999+</span></span></div>
<div class="github-badge" title="还是挺多人来的"><span class="badge-subject">UV</span><span class="badge-value bg-yellow"><span id="busuanzi_value_site_uv">999+</span></span></div>
</br>
<div class="github-badge" title="会慢慢更新的"><span class="badge-subject">更新时间</span><span class="badge-value bg-lightgrey"><span id="uptime">2020-00-00 00:00:00</span></span></div>
</br>
<a href="https://icp.gov.moe" target="_blank">萌ICP备 </a><a href="https://icp.gov.moe/?keyword=20200503" target="_blank"> 20200503号</a>
</div>
<script>
var domain_list = {
    "i.xhemj.eu.org":"Cloudflare & 阿里云香港oss",
    "www.xhemj.eu.org":"阿里云香港OSS",
    "xhemj.eu.org":"阿里云香港OSS",
    "www.xhemj.ink":"阿里云香港OSS",
    "xhemj.ink":"阿里云香港OSS",
    "mingyan.js.org":"Vercel",
    "mingyan.now.sh":"Vercel",
    "mingyan.xhemj.now.sh":"Vercel",
    "xhemj.oss-cn-hongkong.aliyuncs.com":"阿里云香港OSS",
    "cn.mingyan.js.org":"Coding Pages",
    "xhemj.github.io":"Github Pages",
    "127.0.0.1":"本地"
};
$("#host").text(domain_list[location.hostname]);
twikoo.init({ envId: 'xhemj-0gjckebwf7276129' , el: '#tcomment'});
function tk() {
    $(".tk-footer").html(`Powered by <a href="https://twikoo.js.org" target="_blank" rel="nofollow">Twikoo</a></br>&copy; 2020 <a href="https://mingyan.js.org">ERSS名言</a></div>`);
};
$.get("https://api.github.com/repos/xhemj/mingyan", function (data) {
    var a = data["updated_at"];
    a = a.split("T");
    var time = a[1];
    time = time.split(":");
    var h = time[0] * 1 + 8;
    var min = time[1];
    var s = time[2].split("Z")[0];
    var ut = a[0] + " " + h + ":" + min + ":" + s;
    $("#uptime").text(ut);
    console.log(ut);
});
setTimeout(tk,200);
</script>