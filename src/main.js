/**
 * ERSS Mingyan
 * (c) 2020 Xhemj
 * https://github.com/icerss/mingyan */

/*
* ©2020 xhemj
* 2020/12/19
*/
my = {};
(function (t) {
    t.version = "2020/12/19";
    var _hmt = _hmt || [];
    (function () {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?0673dbbe4e6ea51a92a74e3ba2bc051b";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s)
    })();
    loadJs = function (url) {
        var su = document.createElement("script");
        su.src = url;
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(su, s)
    };
    //loadJs("https://www.bilibili.com/gentleman/polyfill.js?features=fetch");
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-RE30WVG95Q');
    var dn = 1;
    var dbmode = true;
    db = function (i) {
        if (dbmode) {
            console.log("#" + dn + " -> " + "%c[DB]%c" + i, "color:red", "color:black");
            dn++;
        }
    };
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js?t=20201180917');
        })
    };
    window.onload = function () {
        var loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
        db('Page load time is ' + loadTime + "ms");
    };
    try {
        var ua = new Browser();
    } catch (e) {
        location.reload();
    };
    /* 页面基础功能 */
    var footer = $("footer").html().replace("999+", mingyan.length);
    $("#md").hide();
    $("#showall").hide();
    $("footer").html(footer);
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
    /* 彩蛋系统 */
    /* 图片彩蛋 */
    t.lazypic = "./src/loading.svg";
    var pic_list = {
        "虾扯蛋": "https://s-sh-1943-pic1.oss.dogecdn.com/2020/10/16/TQ3i5EH2wD9KF6d.jpg",
        //https://xhemj.coding.net/api/share/download/5642985d-4d3d-40e8-8196-686744cb84f8
        //https://ae01.alicdn.com/kf/U4cc17e6537ff4e0ea028b59088da67aeJ.jpg
        "真让人头大": "https://s-sh-1943-pic1.oss.dogecdn.com/2020/12/05/QiXVSahT3kAJf6B.jpg",
        "对称轴平行": "https://s-sh-1943-pic1.oss.dogecdn.com/2020/12/05/qv1RkDBbt6CyEJf.jpg",
        "零食杜绝": "https://s-sh-1943-pic1.oss.dogecdn.com/2020/12/05/SWx85EvdXBOqloJ.jpg",
        "耳散伞": "https://s-sh-1943-pic1.oss.dogecdn.com/2020/12/05/jpH7LQiaqTnXyCf.jpg",
        "歪瓜裂枣": "https://s-sh-1943-pic1.oss.dogecdn.com/2020/12/05/6k7czyYqmfvlWPn.jpg",
        "悲伤": "https://s-sh-1943-pic1.oss.dogecdn.com/2020/12/05/hHv8U3EGt4P12IX.jpg",
        "肾虚": "https://s-sh-1943-pic1.oss.dogecdn.com/2020/12/05/wBHo8kezKDnEcAP.jpg",
        "眉目清秀": "https://s-sh-1943-pic1.oss.dogecdn.com/2020/12/05/KQsc8YDEHf1vi2x.jpg",
        "困死了": "https://s-sh-1943-pic1.oss.dogecdn.com/2020/12/05/lmcDK2MCrO8nAtw.jpg",
        "我在打麻将": "https://s-sh-1943-pic1.oss.dogecdn.com/2020/12/05/QwzvoYL1daXq8in.jpg",
        "松鼠": "https://s-sh-1943-pic1.oss.dogecdn.com/2020/12/05/C1Zq9nXfaTW2hDe.jpg",
        "来看王雷吧": "https://s-sh-1943-pic1.oss.dogecdn.com/2020/12/05/Uxg3OpL2eBArP7s.jpg",
        "跑面": "https://s-sh-1943-pic1.oss.dogecdn.com/2020/12/05/UAV5BHjlwQxcznN.jpg",
        "绿帽子": "https://s-sh-1943-pic1.oss.dogecdn.com/2020/12/05/TNgspLGvQWVKxCw.jpg",
        "搞那么夸张干什么啊？": "https://s-sh-1943-pic1.oss.dogecdn.com/2020/12/06/5yaWEP1KdwVcCIu.png",
        "垃圾真好吃": "https://s-sh-1943-pic1.oss.dogecdn.com/2020/12/19/kDxAfJ8dg7IlhaO.png"
    };
    t.pic = function (my) {
        var name = my.split("：")[0];
        var my = my.split("：")[1];
        var special = "onclick=\"my.my_click()\"";
        if (my == "解" || pic_list[my] != undefined) {
            if (my == "解") {
                var solvePicUrl = {
                    "数学老王": "https://s-sh-1943-pic1.oss.dogecdn.com/2020/11/01/KPVwxYQXM2fLODN.jpg",
                    "数学潘哥": "https://s-sh-1943-pic1.oss.dogecdn.com/2020/11/01/iTkIWzwKaL92otl.jpg",
                    "语文老朱": "https://s-sh-1943-pic1.oss.dogecdn.com/2020/11/01/xvUdlJW8XG1zbeZ.jpg",
                    "英语老俞": "https://s-sh-1943-pic1.oss.dogecdn.com/2020/11/01/lURnTwHouGbM8B7.jpg"
                };
                var pic = solvePicUrl[name];
            } else if (pic_list[my] != undefined) {
                var pic = pic_list[my];
            };
            t.PicMobie();
            lazyload();

            return `<div id="my_text" ${special}>${my}</div><div id="my_pic">
                            <img src="${t.lazypic}" data-src="${pic}" data-pic-id=${my} class="mypic lazyload mdui-hoverable mdui-img-rounded fancybox" data-fancybox-group="ERSS_mingyan_pic"></img>
                        </div>`
            // return my + "<\/br><img src=\"" + t.lazypic + "\" data-src=\"" + pic + "\" class=\"mypic lazyload mdui-hoverable mdui-img-rounded fancybox\" data-fancybox-group=\"ERSS_mingyan_pic\"" + special + "><\/img>"
        } else {
            lazyload();
            return `<div id="my_text" ${special}>${my}</div>`
        };
    };
    /* 刷新名言彩蛋 */
    var reload_time = 0;
    if (localStorage.getItem("reload-time")) {
        var reload_time = localStorage.getItem("reload-time")
    };
    t.reload_time_add = function () {
        reload_time++;
        localStorage.setItem("reload-time", reload_time);
        db(reload_time);
        if (reload_time == 10) {
            swal({
                title: "获得成就",
                text: "点击 100 次有惊喜",
                icon: "success",
                button: "关闭",
                closeOnClickOutside: false
            });
        };
        if (reload_time == 100) {
            swal({
                title: "获得成就",
                text: "点击 500 次有惊喜",
                icon: "success",
                button: "关闭",
                closeOnClickOutside: false
            });
        };
        if (reload_time == 500) {
            swal({
                title: "获得成就",
                text: "点击 1000 次有惊喜，\n很大的惊喜哦！",
                icon: "success",
                button: "关闭",
                closeOnClickOutside: false
            });
        };
        if (reload_time == 1000) {
            swal({
                title: "获得成就",
                text: "点击 10000 次有惊喜，\n你都到这一步了，干嘛不看看后面的惊喜呢？",
                icon: "success",
                button: "关闭",
                closeOnClickOutside: false
            });
        };
        if (reload_time == 10000) {
            swal({
                title: "获得成就",
                text: "你好无聊啊……",
                icon: "success",
                button: "关闭",
                closeOnClickOutside: false
            });
        };
    };
    /* 三人头像彩蛋 */
    var my_face_click_time = "";
    t.my_face_click = function (i) {

        if (i == "xhemj") {
            my_face_click_time += "1"
        };
        if (i == "BlackToy") {
            my_face_click_time += "2"
        };
        if (i == "Oranjezelv") {
            my_face_click_time += "3"
        };
        db(my_face_click_time);
        if (my_face_click_time.indexOf("1") != -1 && my_face_click_time.indexOf("2") != -1 && my_face_click_time.indexOf("3") != -1) {
            swal({
                title: "获得成就",
                text: "彩蛋还没做好~~",
                icon: "info",
                button: "关闭",
                closeOnClickOutside: false
            });
            my_face_click_time = "";
        };

    };
    /* 其它文字彩蛋 */
    t.my_click = function () {
        if ($("#mingyan").text().indexOf("绿帽子") != -1) {
            swal({
                title: "Fuck ♂ You ♂",
                text: "骚骚恪曾经说过：Fuck ♂ You ♂",
                icon: "",
                button: "关闭",
                closeOnClickOutside: false
            });
        };
        if ($("#mingyan").text().indexOf("垃圾真好吃") != -1) {
            swal({
                title: "获得成就",
                text: "最美垃圾人",
                icon: "success",
                button: "关闭",
                closeOnClickOutside: false
            });
        };
        if ($("#mingyan").text().indexOf("来一起唱啊！！") != -1) {
            swal({
                title: "获得成就",
                text: "Shape OF You！",
                icon: "success",
                button: "关闭",
                closeOnClickOutside: false
            });
            const ap = new APlayer({
                container: document.getElementById('player'),
                fixed: true,
                lrcType: 3,
                audio: [{
                    name: 'Shape of You',
                    artist: 'Ed Sheeran',
                    url: 'https://s-sh-1943-pic1.oss.dogecdn.com/static%2Fmingyan-js-org%2FEd%20Sheeran%20-%20Shape%20of%20You.mp3',
                    cover: 'https://i.loli.net/2020/12/19/L1NY8U7nhRjyQMa.jpg',
                    lrc: 'https://s-sh-1943-pic1.oss.dogecdn.com/static%2Fmingyan-js-org%2FShape%20of%20You.lrc'
                }]
            });
            $(".aplayer .aplayer-lrc").css("transform","translateY(-55px)");
            ap.play();
        };
    };

    /* 文字彩蛋 */
    var text_list = {
        "松鼠": "的课本上</br>曾经出现过",
        "来看王雷吧": "曾经在语文课上说过",
        "零食杜绝": "曾经出现过",
        "耳散伞": "曾经有过"
    };
    t.text = function (my) {
        var name = my.split("：")[0];
        var my = my.split("：")[1];
        if (text_list[my] != undefined) {
            var text = text_list[my];
            return text
        } else {
            return "曾经说过"
        };
    };
    /****/
    /* 打印功能 */
    t.print = function () {
        t.all();
        var oldstr = $("body").html();
        var headstr = "<title>名言 | ERSS</title>";
        var footstr = "</body></html>";
        $("#searchbar").hide();
        var printData = document.getElementById("showall").innerHTML.replace(/<a /g, "<span ").replace(/<\/a>/g, "<\/span>");
        var wind = window.open("", "", "toolbar=no,scrollbars=yes,menubar=no");
        wind.document.body.innerHTML = headstr + document.head.innerHTML + printData + footstr;
        wind.print();
        $("#searchbar").show();
        wind.close();
        window.document.body.innerHTML = oldstr;
        location.reload();
    };
    /****/
    /* 分享功能 */
    t.my_encode = function (name, my) {
        return md5("1" + md5(encodeURI(name + "||" + my + "ERSS MINGYAN (c) xhemj")))
    };
    t.my_decode = function (id) {
        for (i = 0; i < mingyan.length; i++) {
            var name = mingyan[i].split("：")[0];
            db(name)
            var my = mingyan[i].split("：")[1];
            db(my)
            if (id == t.my_encode(name, my)) {
                db("encode:" + id);
                db(i);
                return i
            } else {
                db("no")
            }
        }
    };
    t.share = function () {
        var name = $("#name").text();
        var my = $("#mingyan").text();
        swal({
            title: "分享当前名言",
            text: "请手动复制下面的链接，把他发给别人吧",
            icon: "info",
            content: {
                element: "input",
                attributes: {
                    placeholder: "加载出错了？刷新试试吧",
                    value: location.protocol + "//" + location.host + "/" + t.my_encode(name, my),
                    type: "text"
                }
            }
        });
        $(".swal-content__input").attr("value", location.protocol + "//" + location.host + "/" + t.my_encode(name, my));
        $(".swal-content__input").attr("onclick", "this.select()");
        $(".swal-content__input").select();
    };
    /****/
    /* 下载功能 */
    t.download = function () {
        var blob = new Blob([mingyan.join("\n")], { type: "text/plain;charset=utf-8" });
        saveAs(blob, "名言列表（" + my.version + "）");
    };
    /* 已使用FileSaver.js替代 - 2020-11-28
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
    };*/

    /****/
    /* 主功能：名言显示 */
    t.show = function (id) {
        try {
            $("#md").hide();
            $("#main").hide();
            if (mingyan.length != 0) {
                db("加载名言列表成功");
                if (!id) {
                    if (qs("id") != "") {
                        var n = qs("id");
                    } else if (location.hash != "" && location.hash != "#search") {
                        var n = location.hash.replace("#", "");
                    } else {
                        var n = rdNum(0, mingyan.length - 1);
                    };
                } else {
                    var n = id;
                }
                var name = mingyan[n].split("：")[0];
                db(name);
                if (mingyan[n].split("：").length == 2) {
                    var my = mingyan[n].split("：")[1];
                    db(my);
                } else if (mingyan[n].split("：").length == 3) {
                    var my = mingyan[n].split("：")[1] + "：" + mingyan[n].split("：")[2];
                    db(my);
                };
                db("已选取第" + n + "条名言：" + my);
                _hmt.push(['_trackEvent', "名言", "查看", "自动", name + "：" + my]);
                $("p#info").html(
                    "<div class=\"info-text\">" +
                    "<a href=\"" + "//" + location.hostname + location.pathname + "#" + n + "\" class=\"label label-rounded label-warning\">" + "#" + n + "</a>&nbsp;" +
                    "<a href=\"javascript:;\" onclick=\"my.share()\" class=\"label label-rounded label-warning\">" +
                    "<i class=\"mdui-icon material-icons\" style=\"font-size: 15px;\">share<\/i>分享" +
                    "</a></br><a id=\"reload\" href=\"javascript:;\" onclick=\"my.reload();my.reload_time_add();_hmt.push(['_trackEvent', '名言', '刷新', '手动' , '点击查看更多名言']);\" >点击</a>查看更多名言</div>"
                );
                $("span#mingyan").html(t.pic(name + "：" + my));
                var verb = t.text(name + "：" + my);
                $("span#name").text(name);
                $("span#verb").html(verb);
                $("#main").fadeIn();
                var title = "名言 | " + my;
                document.title = title;
                var description = name + verb + "：" + my;
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
        history.pushState({}, "名言 | ERSS", "/");
        if (location.hash != "") {
            location.href = "//" + location.hostname + ":" + location.port + location.pathname;
        } else if (qs("id") != "" || qs("mail") != "") {
            location.href = "//" + location.hostname + ":" + location.port + location.pathname;
        } else {
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
        history.pushState({}, "名言 | 搜索", "/search");
        $("#md").hide();
        $("#main").hide();
        $("input#searchbar").val("");
        var showall = "<input style=\"" + inputbar_width + "\"" + " onclick=\"this.select()\" type=\"search\" id=\"searchbar\" placeholder=\"搜索……\" results=\"5\"></input></br></br><span class=\"e\"></span>";
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
        $("#md").hide();
        $("#main").hide();
        $("#showall").hide();
        $(id).html("<strong>" + `<div style="text-align: center" class="mdui-ripple"><style>h1{font-size:30px}</style><h1>加载中……</h1></div>` + "</strong></br></br></br></br>");
        $.get(url, function (data) {
            marked.setOptions({
                breaks: true
            });
            var html = marked(data);
            html = html.replace(/<a /g, "<a target=\"_blank\" ");
            $(id).html("<strong>" + html + "</strong></br></br></br></br>");
            $(id).fadeIn();
        });
        $("footer").html("当前名言数量：" + mingyan.length + "</br><a class=\"aline\" href=javascript:; onclick=\"my.hide_showall()\">返回<\/a>");
        $("#md").fadeIn();
    };
    /****/
    /* 更多页面 */
    t.more = function () {
        t.md("#md", "./src/md/more.md?t=202011281532");
        history.pushState({}, "名言 | 更多", "/");
    }
    t.about = function () {
        t.md("#md", "./src/md/about.md?t=202012191228");
        history.pushState({}, "名言 | 关于", "/about");
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
    /*function time(i) {
        var a = i;
        a = a.split("T");
        var time = a[1];
        time = time.split(":");
        var h = time[0] * 1 + 8;
        var min = time[1];
        var s = time[2].split("Z")[0];
        var ut = a[0] + " " + h + ":" + min + ":" + s;
        return ut;
    };
    $.get("https://api.github.com/repos/xhemj/mingyan/commits?page=1&per_page=1000", function (data) {
        for (i = 0; i < data.length; i++) {
            console.log(time(data[i]["commit"]["committer"]["date"]) + " " + data[i]["commit"]["message"])
        }
    });
    $.get("https://api.github.com/repos/xhemj/mingyan/commits?page=2&per_page=1000", function (data) {
        for (i = 0; i < data.length; i++) {
            console.log(time(data[i]["commit"]["committer"]["date"]) + " " + data[i]["commit"]["message"])
        }
    });* /
    /* Markdown名言列表 */
    t.tongji = function () {
        $("#md").hide();
        $("#main").hide();
        $("#showall").hide();
        var o = "";
        for (i = 0; i < mingyan.length; i++) {
            try {
                var a1 = mingyan[i].split("：")[0];
                var a2 = mingyan[i + 1].split("：")[0];
            } catch (e) { }
            db(a1 + "-" + a2);
            if (a1 == a2) {
                o += a1
            } else {
                o += a2
            };
        };
        //console.log(out);
        var count = [
            "数学老王：" + o.match(/老王/g).length,
            "英语老俞：" + o.match(/老俞/g).length,
            "数学潘哥：" + o.match(/潘哥/g).length,
            "语文老朱：" + o.match(/老朱/g).length,
            "物理刘老师：" + o.match(/物理刘老师/g).length,
            "物理王老师：" + o.match(/物理王老师/g).length,
            "地理吴老师：" + o.match(/地理吴老师/g).length,
            "地理朱老师：" + o.match(/地理朱老师/g).length,
            "政治王老师：" + o.match(/政治王老师/g).length,
            "化学吴老师：" + o.match(/化学吴老师/g).length,
            "历史李老师：" + o.match(/历史李老师/g).length,
            "美术林老师：" + o.match(/美术林老师/g).length,
            "体育吴老师：" + o.match(/体育吴老师/g).length,
            "体育俞老师：" + o.match(/体育俞老师/g).length,
            "生物吴老师：" + o.match(/生物吴老师/g).length
        ];
        window.count = count;
        //console.log(count);
        var out = "";
        out += count.join(" 句</br>") + " 句</br></br></br></br>";
        $("#md").html(marked(out));
        $("#md").fadeIn()
    };
    /****/
    /* 搜索功能 */
    t.search = function () {
        if ($("#searchbar").is(":focus") || qs("q") != "") {
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
    var search = setInterval(t.search, 100);
    /****/
    /* 邮箱 */
    if (qs("mail")) {
        window.open("mailto:" + qs("mail").replace("---", "@"));
        t.reload()
    };
    /****/
    /* 标题变化 */
    var title = '名言 | ERSS';
    var titleTime;
    document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
            document.title = '名言 | 来看名言呀！';
            clearTimeout(titleTime);
        }
        else {
            document.title = title;
        }
    });
    /****/
    /* 路由 */
    if (location.pathname == "/about" || location.pathname == "/search") {
        if (location.pathname == "/about") {
            my.about()
        };
        if (location.pathname == "/search") {
            my.all();
            if (qs("q")) {
                $("#searchbar").val(decodeURI(qs("q")));
                $("#searchbar").focus();
            }
        };
    } else if (location.pathname == "/" || location.pathname == "/index.html") {
        t.show();
    } else {
        if (location.pathname.split("/")[1].length == 32) {
            var id = t.my_decode(location.pathname.split("/")[1]);
            var myid = new Number(id);
            t.show(myid.toString());
        } else {
            clearInterval(search);
            $(".app").load("./src/_404.html");
        }
    };
    /****/
    /* Headroom.js */
    if (Headroom.cutsTheMustard) {
        var myElement = document.getElementById("header");
        var headroom = new Headroom(myElement, {
            "offset": 300,
            "tolerance": 5
        });
        headroom.init();
    }
    /****/
    lazyload();
    setInterval(lazyload, 1000);

    $('.fancybox').fancybox({
        buttons: [
            "zoom",
            "share",
            "slideShow",
            "fullScreen",
            "download",
            "close"
        ],
        lang: "zh-cn",
        i18n: {
            "zh-cn": {
                CLOSE: "关闭",
                NEXT: "下一张",
                PREV: "前一张",
                ERROR: "图片加载失败， <br/> 请稍后再试。",
                FULL_SCREEN: "全屏",
                THUMBS: "略缩图",
                DOWNLOAD: "下载",
                SHARE: "分享",
                ZOOM: "缩放"
            }
        }
    });
})(my)