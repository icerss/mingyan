<!-- Start more.html -->
<div data-id="page.more">
    <style>
        .github-badge[data-id="page.more"] {
            display: inline-block;
            border-radius: 4px;
            text-shadow: none;
            font-size: 12px;
            color: #fff;
            line-height: 15px;
            background-color: #ABBAC3;
            margin-bottom: 5px;
        }
        .github-badge[data-id="page.more"] .badge-subject[data-id="page.more"] {
            display: inline-block;
            background-color: #4D4D4D;
            padding: 4px 4px 4px 6px;
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
        }
        .github-badge[data-id="page.more"] .badge-value[data-id="page.more"] {
            display: inline-block;
            padding: 4px 6px 4px 4px;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
        }
        .github-badge[data-id="page.more"] .bg-brightgreen[data-id="page.more"] {
            background-color: #4DC820 !important;
        }
        .github-badge[data-id="page.more"] .bg-orange[data-id="page.more"] {
            background-color: #FFA500 !important;
        }
        .github-badge[data-id="page.more"] .bg-yellow[data-id="page.more"] {
            background-color: #D8B024 !important;
        }
        .github-badge[data-id="page.more"] .bg-blueviolet[data-id="page.more"] {
            background-color: #8833D7 !important;
        }
        .github-badge[data-id="page.more"] .bg-pink[data-id="page.more"] {
            background-color: #F26BAE !important;
        }
        .github-badge[data-id="page.more"] .bg-red[data-id="page.more"] {
            background-color: #e05d44 !important;
        }
        .github-badge[data-id="page.more"] .bg-blue[data-id="page.more"] {
            background-color: #007EC6 !important;
        }
        .github-badge[data-id="page.more"] .bg-lightgrey[data-id="page.more"] {
            background-color: #9F9F9F !important;
        }
        .github-badge[data-id="page.more"] .bg-grey[data-id="page.more"],
        .github-badge[data-id="page.more"] .bg-gray[data-id="page.more"] {
            background-color: #555 !important;
        }
        .github-badge[data-id="page.more"] .bg-lightgrey[data-id="page.more"],
        .github-badge[data-id="page.more"] .bg-lightgray[data-id="page.more"] {
            background-color: #9f9f9f !important;
        }
        h1[data-id="page.more"] {
            font-size: 30px
        }
        h3[data-id="page.more"] {
            font-size: 20px
        }
		a[data-id="page.more"] {
			line-height: 1.8;
		}
    </style>
    <div style="text-align: center" class="mdui-ripple">
        <h1 data-id="page.more">更多</h1>
        <h3 data-id="page.more"><a data-id="page.more" onclick="_mingyan.showAllMingyan()">全部名言</a></h3>
        <h3 data-id="page.more"><a data-id="page.more" onclick="_mingyan.print()">打印名言列表</a></h3>
        <h3 data-id="page.more"><a data-id="page.more" onclick="_mingyan.download()">下载名言列表（.txt）</a></h3>
        <h3 data-id="page.more"><a data-id="page.more" style="color:#9B4DC9" onclick="location.hash='#/submit'">名言投稿</a></h3>
        <h3 data-id="page.more"><a data-id="page.more" style="color:#9B4DC9" onclick="location.hash='#/about'">关于</a></h3>
    </div>
</div>

---

<div id="tcomment" data-id="page.more"></div>

---

<script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
<div style="text-align: center" class="mdui-ripple">
    <div class="github-badge" title="作者就是我啦！！" data-id="page.more"><span class="badge-subject" data-id="page.more">Author</span><span
            class="badge-value bg-blue" data-id="page.more">xhemj</span></div>
    <div class="github-badge" title="速度还可以吧？" data-id="page.more"><span class="badge-subject" data-id="page.more">Hosted</span><span
            class="badge-value bg-red" data-id="page.more"><span id="host">Github</span></span></div>
    <div class="github-badge" title="Jsdelivr的静态文件加速和Cloudflare的部分页面加速" data-id="page.more"><span class="badge-subject" data-id="page.more">CDN</span><span
            class="badge-value bg-pink" data-id="page.more">Jsdelivr & Tencent CDN</span></div>
    <div class="github-badge" title="ERSS~~~" data-id="page.more"><span class="badge-subject" data-id="page.more">&copy;</span><span
            class="badge-value bg-brightgreen" data-id="page.more">2021 Xhemj</span></div>
    </br>
    <div class="github-badge" title="多来看看呀！" data-id="page.more"><span class="badge-subject" data-id="page.more">PV</span><span
            class="badge-value bg-yellow" data-id="page.more"><span id="busuanzi_value_site_pv">999+</span></span></div>
    <div class="github-badge" title="还是挺多人来的" data-id="page.more"><span class="badge-subject" data-id="page.more">UV</span><span
            class="badge-value bg-yellow" data-id="page.more"><span id="busuanzi_value_site_uv">999+</span></span></div>
    </br>
    <div class="github-badge" title="会慢慢更新的" data-id="page.more"><span class="badge-subject" data-id="page.more">更新时间</span><span
            class="badge-value bg-lightgrey" data-id="page.more"><span id="uptime">2021-00-00 00:00:00</span></span></div>
    </br>
    <a href="https://icp.gov.moe" target="_blank">萌备 </a><a href="https://icp.gov.moe/?keyword=20200503"
        target="_blank"> 20200503号</a>
</div>
<script>
    var domain_list = {
        "i.xhemj.eu.org": "Cloudflare & 阿里云香港oss",
        "www.xhemj.eu.org": "阿里云香港OSS",
        "xhemj.eu.org": "阿里云香港OSS",
        "www.xhemj.ink": "阿里云香港OSS",
        "xhemj.ink": "阿里云香港OSS",
        "mingyan.js.org": "Vercel",
        "mingyan.now.sh": "Vercel",
        "mingyan.xhemj.now.sh": "Vercel",
        "xhemj.oss-cn-hongkong.aliyuncs.com": "阿里云香港OSS",
        "cn.mingyan.js.org": "Coding Pages",
        "xhemj.github.io": "Github Pages",
        "www.erss.club": "Vercel",
        "127.0.0.1": "本地"
    };
    $("#host").text(domain_list[location.hostname]);
    twikoo.init({ 
        envId: 'xhemj-0gjckebwf7276129', 
        el: '#tcomment' ,
        onCommentLoaded: function () {
            $(".tk-footer").html(`Powered by <a href="https://twikoo.js.org" target="_blank" rel="nofollow">Twikoo</a></br>&copy; 2021 <a href="https://mingyan.js.org">ERSS名言</a></div>`);
            document.querySelector(".el-textarea__inner").style.height = "150px";
        }
    });
    $.get("https://api.github.com/repos/xhemj/mingyan", function (data) {
        var a = data["updated_at"];
        $("#uptime").text(new Date(a).toLocaleString());
        console.log(new Date(a).toLocaleString());
    });
</script>
<!-- End more.html -->