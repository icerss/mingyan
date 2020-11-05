/*
* ©2020 xhemj
* 2020/11/05
*/
var my = {};
(function (t) {
    t.version = "2020/11/05";
    var _hmt = _hmt || [];
    (function () {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?0673dbbe4e6ea51a92a74e3ba2bc051b";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s)
    })();
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./src/sw.js');
        })
    };
    var ua = new Browser();
    /* 页面基础功能 */
    var footer_text = `
    <div>当前名言数量：999+</br>
    <a class="aline" href="./" onclick="_hmt.push(['_trackEvent', '名言', '主页', '手动' , '主页']);">主&nbsp;&nbsp;页</a>&nbsp;&nbsp;|&nbsp;&nbsp;
    <a class="aline" href="javascript:;" onclick="my.all();_hmt.push(['_trackEvent', '名言', '搜索', '手动' , '名言搜索']);">名言搜索</a>&nbsp;&nbsp;|&nbsp;&nbsp;
    <a class="aline" href="javascript:;" onclick="my.more();_hmt.push(['_trackEvent', '名言', '更多', '手动' , '更多']);">更多</a>
    </div>`;
    var header_text = `
    <div class="mdui-toolbar">
    <a href="javascript:;" onclick="my.more();_hmt.push(['_trackEvent', '名言', '更多', '手动' , 'icon-menu']);" class="mdui-btn mdui-btn-icon mdui-ripple" mdui-tooltip="{content: '更多'}"><i class="mdui-icon material-icons">menu</i></a>
    <a href="./" onclick="_hmt.push(['_trackEvent', '名言', '主页', '手动' , '主页']);"><span class="mdui-typo-title left">ERSS名言</span></a>
    <div class="mdui-toolbar-spacer"></div>
    <a href="javascript:;" onclick="my.all();_hmt.push(['_trackEvent', '名言', '搜索', '手动' , 'icon-search']);" class="mdui-btn mdui-btn-icon mdui-ripple" mdui-tooltip="{content: '搜索'}"><i class="mdui-icon material-icons">search</i></a>
    <a href="javascript:;" onclick="my.reload();my.hide_showall();_hmt.push(['_trackEvent', '名言', '刷新', '手动' , 'icon-refresh']);" class="mdui-btn mdui-btn-icon mdui-ripple" mdui-tooltip="{content: '刷新'}"><i class="mdui-icon material-icons">refresh</i></a>
    </div>`;
    var footer = footer_text.replace("999+", mingyan.length);
    $("#md").hide();
    $("#showall").hide();
    $("footer").html(footer);
    $("#header .container").html(header_text);
    /****/
    qs = function (qs) {
        var s = location.href;
        s = s.replace("?", "?&").split("&");
        var re = "";
        for (i = 1; i < s.length; i++) {
            if (s[i].indexOf(qs + "=") == 0) {
                re = s[i].replace(qs + "=", "");
            };
        };
        return re;
    };
    rdNum = function (minNum, maxNum) {
        switch (arguments.length) {
            case 1:
                return parseInt(Math.random() * minNum + 1, 10);
                break;
            case 2:
                return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
                break;
            default:
                return 0;
                break;
        };
    };
    $('h1').fontFlex(30, 50, 70);
    $('h3').fontFlex(30, 50, 70);
    /* 图片彩蛋 */
    t.lazypic = "./src/loading.svg";
    t.pic = function (my) {
        var name = my.split("：")[0];
        var my = my.split("：")[1];
        if (my == "虾扯蛋" || my == "解") {
            if (my == "虾扯蛋") {
                var pic = "https://i.loli.net/2020/10/16/TQ3i5EH2wD9KF6d.jpg"
                //https://xhemj.coding.net/api/share/download/5642985d-4d3d-40e8-8196-686744cb84f8
                //https://ae01.alicdn.com/kf/U4cc17e6537ff4e0ea028b59088da67aeJ.jpg
            };
            if (my == "解") {
                var solvePicUrl = {
                    "老王": "https://i.loli.net/2020/11/01/KPVwxYQXM2fLODN.jpg",
                    "潘哥": "https://i.loli.net/2020/11/01/iTkIWzwKaL92otl.jpg",
                    "老朱": "https://i.loli.net/2020/11/01/xvUdlJW8XG1zbeZ.jpg",
                    "老俞": "https://i.loli.net/2020/11/01/lURnTwHouGbM8B7.jpg"
                };
                var pic = solvePicUrl[name];
            };
            t.PicMobie();
            lazyload();
            return my + "<\/br><img src=\"" + t.lazypic + "\" data-src=\"" + pic + "\" class=\"mypic lazyload mdui-hoverable\"><\/img>"
        } else {
            lazyload();
            return my
        }
    };
    /****/
    /* 打印功能 */
    t.print = function () {
        t.all();
        var oldstr = document.body.innerHTML;
        var headstr = "<title>名言 | ERSS</title>";
        var footstr = "</body></html>";
        document.getElementById("searchbar").style.display = "none";
        var printData = document.getElementById("showall").innerHTML.replace(/<a /g, "<span ").replace(/<\/a>/g, "<\/span>");
        var wind = window.open("", "", "toolbar=no,scrollbars=yes,menubar=no");
        wind.document.body.innerHTML = headstr + document.head.innerHTML + printData + footstr;
        wind.print();
        document.getElementById("searchbar").style.display = "block";
        wind.close();
        window.document.body.innerHTML = oldstr;
        location.reload()
    };
    /****/
    /* 下载功能 */
    t.download = function () {
        t.dfile("名言列表（" + t.version + "）", mingyan.join("\n"))
    };
    t.dfile = function (fileName, content) {
        const aTag = document.createElement('a');
        const blob = new Blob([content]);
        aTag.download = fileName;
        aTag.style = "display: none";
        aTag.href = URL.createObjectURL(blob);
        document.body.appendChild(aTag);
        aTag.click();
        setTimeout(function () {
            document.body.removeChild(aTag);
            window.URL.revokeObjectURL(blob);
        }, 100);
    };

    /****/
    /* 按下回车切换名言 */
    $(document).keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13' || keycode == '32') {
            t.reload()
        }
    });
    /****/
    /* 主功能：名言显示 */
    t.show = function () {
        try {
            $("#md").hide();
            $("#main").hide();
            if (mingyan.length != 0) {
                console.info("加载名言列表成功");
                if (qs("id") != "") {
                    var n = qs("id");
                } else if (location.hash != "" && location.hash != "#search") {
                    var n = location.hash.replace("#", "");
                } else {
                    var n = rdNum(0, mingyan.length - 1);
                };
                var name = mingyan[n].split("：")[0];
                if (mingyan[n].split("：").length == 2) {
                    var my = mingyan[n].split("：")[1];
                } else if (mingyan[n].split("：").length == 3) {
                    var my = mingyan[n].split("：")[1] + "：" + mingyan[n].split("：")[2];
                    console.log(my)
                };
                console.info("已选取第" + n + "条名言：" + my);
                _hmt.push(['_trackEvent', "名言", "查看", "自动", name + "：" + my]);
                $("p#info").html(
                    "<div class=\"info-text\"><a href=\"" + "//" + location.hostname + location.pathname + "#" + n + "\" class=\"label label-rounded label-warning\">" + "#" + n + "</a></br><a href=\"javascript:;\" onclick=\"my.reload();_hmt.push(['_trackEvent', '名言', '刷新', '手动' , '点击查看更多名言']);\" >点击</a>查看更多名言</div>");
                $("span#mingyan").html(t.pic(name + "：" + my));
                $("span#name").text(name);
                $("#main").fadeIn();
                var title = "名言 | " + my;
                document.title = title;
                var description = name + "曾经说过：" + my;
                $('meta[name="description"]').attr("content", description);
                $('meta[property="og:description"]').attr('content', description);
                $('meta[name="og:description"]').attr('content', description);
                $('meta[property="og:title"]').attr('content', title);
                $('meta[name="og:title"]').attr('content', title);
                lazyload();
            }
        } catch (err) {
            console.error(err);
            console.error("名言加载失败");
            $("#mingyan").text("名言加载失败");
            $("#info").html("错误信息：</br>" + err + "</br>建议：<a href=\"javascript:my.reload()\">点我刷新页面</a>");
            $("#main").fadeIn();
            $("#info").fadeIn();
            //location.href = "http://" + location.hostname + ":" + location.port + location.pathname;
        };
    };
    if (ua.device != 'Mobile') {
        var inputbar_width = "60%";
        $("#main").css("transform", "translateY(15%)");
    } else {
        var inputbar_width = "auto";
        $("#main").css("transform", "translateY(30%)");
        $("#md").css("transform", "translateY(50px)");
    };
    /****/
    /* 修复手机端图片菜单位置 */
    t.PicMobie = function () {
        if (ua.device == 'Mobile') {
            $("#main").css("transform", "translateY(15%)");
        } else {
            $("#main").css("transform", "translateY(10%)");
        };
        lazyload();
    };
    /****/
    /* 刷新名言 */
    t.reload = function () {
        if (location.hash != "") {
            location.href = "//" + location.hostname + ":" + location.port + location.pathname;
        } else if (qs("id") != "" || qs("mail") != "") {
            location.href = "//" + location.hostname + ":" + location.port + location.pathname;
        } {
            t.show();
        };
        lazyload();
    };
    /****/
    /* 隐藏搜索列表 */
    t.hide_showall = function () {
        $("#md").hide();
        $("#showall").hide();
        $("#main").fadeIn();
        $("footer").html(footer);
        if (location.hash == "#search") {
            location.href = "#";
        }
    };
    /****/
    /* 搜索列表功能 */
    t.all = function () {
        $("#md").hide();
        $("#main").hide();
        $("input#searchbar").val("");
        var showall = "<input style=\"" + inputbar_width + "\"" + " type=\"search\" id=\"searchbar\" placeholder=\"搜索……\" results=\"5\"></input></br></br><span class=\"e\"></span>";
        for (i = 0; i < mingyan.length; i++) {
            showall += "<div><a style=\"color:black\" id=\"showall_item\" class=\"" + i + "\" href=\"./?id=" + i + "\">" + mingyan[i] + "</a></div>";
        };
        showall += "</br></br></br>";
        $("#showall").html(showall);
        $("#showall").fadeIn();
        $("footer").html("当前名言数量：" + mingyan.length + "</br><a class=\"aline\" href=javascript:; onclick=\"my.hide_showall()\">返回<\/a>");
        $("#searchbar").focus();
    };
    /****/
    /* Markdown转html */
    t.md = function (id, url) {
        $.get(url, function (data) {
            marked.setOptions({
                breaks: true
            });
            var html = marked(data);
            html = html.replace(/<a /g, "<a target=\"_blank\" ");
            $(id).html("<strong>" + html + "</strong></br></br></br></br>");
            $(id).fadeIn();
        })
    };
    /****/
    /* 更多页面 */
    t.more = function () {
        $("#main").hide();
        $("#showall").hide();
        t.md("#md", "./src/md/more.md");
        $("footer").html("当前名言数量：" + mingyan.length + "</br><a class=\"aline\" href=javascript:; onclick=\"my.hide_showall()\">返回<\/a>");
        $("#md").fadeIn();
    }
    /****/
    /* 关于页面 */
    t.about = function () {
        $("#md").hide();
        $("#main").hide();
        $("#showall").hide();
        t.md("#md", "./src/md/about.md");
        $("#md").fadeIn();
        $("footer").html("当前名言数量：" + mingyan.length + "</br><a class=\"aline\" href=javascript:; onclick=\"my.hide_showall()\">返回<\/a>");
    };
    /****/
    /* Markdown名言列表 */
    t.md_all = function () {
        $("#md").hide();
        $("#main").hide();
        $("#showall").hide();
        var out = ``;
        for (i = 0; i < mingyan.length; i++) {
            out += mingyan[i] + "</br>"
        };
        out += `</br></br></br></br>`;
        $("#md").html(marked(out));
        $("#md").fadeIn()
    }
    /****/
    /* 搜索功能 */
    t.search = function () {
        if ($("#searchbar").is(":focus")) {
            if ($("input#searchbar").val()) {
                var now1 = $("input#searchbar").val();
                var now2 = $("input#searchbar").val();
                if (now1 == now2) {
                    $("a#showall_item").each(function () {
                        if ($(this).text().indexOf($("input#searchbar").val()) != -1) {
                            var reg = "/" + $("input#searchbar").val() + "/g";
                            $(this).html($(this).text().replace(eval(reg), "<span class=\"label label-secondary\">" + $("input#searchbar").val() + "</span>"));
                            $(this).show();
                        } else {
                            $(this).hide();
                        }
                    });
                    $(".e").hide();
                }
            } else {
                $("a#showall_item").show();
                $("a#showall_item").each(function () {
                    $(this).html($(this).html().replace("<span class=\"label label-secondary\">", ""));
                    $(this).html($(this).html().replace("</span>", ""));
                })
            }
        }
        if ($("#showall")[0]["innerText"].match(/^\s*$/) != null) {
            $(".e").text("无结果");
            $(".e").show();
        } else {
            if ($("#searchbar").is(":focus")) {
                $(".e").hide();
            }
        }
    };
    setInterval(t.search, 100);
    /****/
    /* 邮箱 */
    if (qs("mail")) {
        window.open("mailto:" + qs("mail").replace("---", "@"));
        t.reload()
    };
    /****/
    t.show();
    lazyload()
})(my)