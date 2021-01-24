/*
* ©2020 xhemj
* 2021/01/03
*/
my = {};
(function (t) {
    /* 配置 */
    t.version = "2021/01/03";
    t.config = {
        ___DEBUG__ = false,
        ___date_version___ = 202101231822
    };
    /****/
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
    db = function (i) {
        if (t.config.___DEBUG__) {
            console.log("#" + dn + " -> " + "%c[DB]%c" + i, "color:red", "color:black");
            dn++;
        };
    };
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js?t=202011810');
        })
    };
    window.onload = function () {
        var loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
        db('Page load time is ' + loadTime + "ms");
    };
    var isSupportWebp = function () {
        try {
            return document.createElement('canvas').toDataURL('image/webp', 0.5).indexOf('data:image/webp') === 0;
        } catch (err) {
            return false;
        };
    };
    const hashname = {
        "#/search": true,
        "#/more": true,
        "#/about": true
    };
    try {
        var ua = new Browser();
    } catch (e) { };
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
    t.pic = function (my) {
        var name = my.split("：")[0];
        if (my.split("：").length == 2) {
            var my_out = my.split("：")[1];
            db(my_out);
        } else if (my.split("：").length == 3) {
            var my_out = my.split("：")[1] + "：" + my.split("：")[2];
            db(my_out);
        };
        var special = "onclick=\"my.my_click()\"";
        var baseUrl = "https://s-sh-1943-pic1.oss.dogecdn.com";
        if (my_out == "解" || pic_list[my_out] != undefined) {
            if (my_out == "解") {

                var pic = solvePicUrl[name];
            } else if (pic_list[my_out] != undefined) {
                var pic = pic_list[my_out];
            };
            //支持WEBP格式
            if (isSupportWebp()) {
                var pic = pic + "/webp"
            };
            t.PicMobie();
            lazyload();
            return `<div id="my_text" ${special}>${my_out}</div><div id="my_pic">
                            <img src="${t.lazypic}" data-src="${baseUrl}${pic}" data-pic-id=${my_out} class="mypic lazyload mdui-hoverable mdui-img-rounded fancybox" data-fancybox-group="ERSS_mingyan_pic"></img>
                        </div>`;
            // return my + "<\/br><img src=\"" + t.lazypic + "\" data-src=\"" + pic + "\" class=\"mypic lazyload mdui-hoverable mdui-img-rounded fancybox\" data-fancybox-group=\"ERSS_mingyan_pic\"" + special + "><\/img>"
        } else {
            lazyload();
            return `<div id="my_text" ${special}>${my_out}</div>`;
        };
    };
    /* 刷新名言彩蛋 */
    var reload_time = 0;
    if (localStorage.getItem("reload-time")) {
        localStorage.setItem("___mingyan_reload_time__", localStorage.getItem("reload-time"))
        localStorage.removeItem("reload-time")
    };
    if (localStorage.getItem("___mingyan_reload_time__")) {
        var reload_time = localStorage.getItem("___mingyan_reload_time__")
    };
    t.reload_time_add = function () {
        reload_time++;
        localStorage.setItem("___mingyan_reload_time__", reload_time);
        db(reload_time);
        var title = "获得成就", text;
        switch (reload_time) {
            case 10:
                text = "点击 100 次有惊喜";
                break;
            case 100:
                text = "点击 500 次有惊喜";
                break;
            case 500:
                text = "点击 1000 次有惊喜，\n很大的惊喜哦！";
                break;
            case 1000:
                text = "点击 10000 次有惊喜，\n你都到这一步了，干嘛不看看后面的惊喜呢？";
                break;
            case 10000:
                text = "你好无聊啊……";
                break;
            default:
                text = "";
        };
        if (text) {
            swal({
                title: title,
                text: text,
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
            $(".aplayer .aplayer-lrc").css("transform", "translateY(-55px)");
            ap.play();
        };
    };

    /* 文字彩蛋 */
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
        db(name);
        db(my);
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
        var my = $("#mingyan").text().replace(/\s*/g, "");
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
        initfancybox();
        try {
            $("#md").hide();
            $("#main").hide();
            if (mingyan.length != 0) {
                db("加载名言列表成功");
                if (!id) {
                    if (qs("id") != "") {
                        var n = qs("id");
                    } else if (location.hash != "" && hashname[location.hash] != true) {
                        var n = location.hash.replace("#", "");
                        db("n=" + n);
                    } else {
                        var n = rdNum(0, mingyan.length - 1);
                    };
                } else {
                    var n = id;
                };
                if (hashname[location.hash] == true) return;
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
                    `<div class="info-text">
                    <a href="#${n}" class="label label-rounded label-warning">#${n}</a>&nbsp;
                    <!-- <a href="javascript:;" onclick="my.share()" class="label label-rounded label-warning">
                    <i class="mdui-icon material-icons" style="font-size: 15px;">share</i>分享</a> -->
                    </br><a style="color:#9B4DC9" id="reload" href="#${rdNum(0, mingyan.length - 1)}" onclick="my.reload_time_add();_hmt.push(['_trackEvent', '名言', '刷新', '手动' , '点击查看更多名言']);" >点击</a>查看更多名言</div>`
                );
                $("span#mingyan").html(t.pic(name + "：" + my));
                var verb = t.text(name + "：" + my);
                $("span#name").text(name);
                $("span#verb").html(verb);
                $("#main").fadeIn();
                if ($("#mingyan").text().indexOf("来一起唱啊！！") != -1) {
                    loadJs("https://cdn.jsdelivr.net/npm/aplayer@1.10.0/dist/APlayer.min.js");
                };
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
            db("show：L479")
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
        //location.hash = "#/search";
        $("#md").hide();
        $("#main").hide();
        $("input#searchbar").val("");
        var showall = "<input style=\"" + inputbar_width + "\"" + " onclick=\"this.select()\" type=\"search\" id=\"searchbar\" placeholder=\"搜索……\" results=\"5\"></input></br></br><span class=\"e\"></span>";
        for (i = 0; i < mingyan.length; i++) {
            showall += "<div><a style=\"color:black\" id=\"showall_item\" class=\"" + i + "\" href=\"./#" + i + "\" onclick=\"my.hide_showall()\">" + mingyan[i] + "</a></div>";
        };
        showall += "</br></br></br>";
        $("#showall").html(showall);
        $("#showall").fadeIn();
        $("footer").html("当前名言数量：" + mingyan.length + "</br><a class=\"aline\" href=\"./\" onclick=\"my.hide_showall()\">返回<\/a>");
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
        t.md("#md", "./src/md/more.md?t=" + t.config.___date_version___);
        //location.hash = "#/more";
    }
    t.about = function () {
        t.md("#md", "./src/md/about.md?t=" + t.config.___date_version___);
        //location.hash = "#/about";
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
        //window.count = count;
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
                switch ($("input#searchbar").val()) {
                    case "::auto_reload":
                        location.href = "./?force_action=auto_reload";
                        break;
                    default:
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
    /**
     * 2021!!!
     * 排行榜系统
     * 2020/12/31
     */

    t.ranking_api = {
        // add = function (name, ip, callback) {
        //     app
        //         .callFunction({
        //             name: "mingyan",
        //             data: {
        //                 event: "add",
        //                 name: name,
        //                 ip: ip,
        //                 ua: navigator.userAgent.toString() || ""
        //             }
        //         })
        //         .then((res) => {
        //             db("添加成功");
        //             console.log(res);
        //             if (typeof callback == "function") {
        //                 callback(res);
        //             };
        //         })
        // },
        add = function (name, ip) {
            return new Promise(function (resolve, reject) {
                app
                    .callFunction({
                        name: "mingyan",
                        data: {
                            event: "add",
                            name: name,
                            ip: ip,
                            ua: navigator.userAgent.toString() || ""
                        }
                    })
                    .then((res) => {
                        db("添加成功");
                        console.log(res);
                        resolve(res);
                    })
                    .catch(function (e) {
                        reject(e)
                    })
            })
        },
        // list = function (callback) {
        //     app
        //         .callFunction({
        //             name: "mingyan",
        //             data: {
        //                 event: "list"
        //             }
        //         })
        //         .then((res) => {
        //             db("获取成功");
        //             console.log(res);
        //             if (typeof callback == "function") {
        //                 callback(res);
        //             };
        //         })
        // },
        // list = function () {
        //     return new Promise(function (resolve, reject) {
        //         app
        //             .callFunction({
        //                 name: "mingyan",
        //                 data: {
        //                     event: "list"
        //                 }
        //             })
        //             .then((res) => {
        //                 db("获取成功");
        //                 console.log(res);
        //                 resolve(res);
        //             })
        //             .catch(function (e) {
        //                 reject(e)
        //             })
        //     })

        // },
        // update = function (id, name, callback) {
        //     app
        //         .callFunction({
        //             name: "mingyan",
        //             data: {
        //                 event: "update",
        //                 id: id,
        //                 data: {
        //                     "name": name
        //                 },
        //             }
        //         })
        //         .then((res) => {
        //             db("获取成功");
        //             console.log(res);
        //             if (typeof callback == "function") {
        //                 callback(res);
        //             };
        //         })
        // },
        update = function (id, name) {
            return new Promise(function (resolve, reject) {
                app
                    .callFunction({
                        name: "mingyan",
                        data: {
                            event: "update",
                            id: id,
                            data: {
                                "name": name
                            },
                        }
                    })
                    .then((res) => {
                        db("获取成功");
                        console.log(res);
                        resolve(res);
                    })
                    .catch(function (e) {
                        reject(e)
                    });
            })

        },
        // getIp = function (callback) {
        //     $.getJSON("https://ip.xhemj.now.sh/api/ip?t=___" + new Date().getTime() + rdNum(0, new Date().getTime()) + "__",
        //         function (json) {
        //             db("获取成功");
        //             var res = {
        //                 "ip": json.ip
        //             };
        //             if (typeof callback == "function") {
        //                 callback(res);
        //             };
        //         })
        // },
        getIp = function () {
            return new Promise(function (resolve, reject) {
                $.getJSON("https://ip.xhemj.now.sh/api/ip?t=___" + new Date().getTime() + rdNum(0, new Date().getTime()) + "__",
                    function (json) {
                        db("获取成功");
                        var res = {
                            "ip": json.ip
                        };
                        resolve(res);
                    }).catch(function (e) {
                        reject(e)
                    });
            })
        }
    };
    const app = cloudbase.init({
        env: "xhemj-0gjckebwf7276129"
    });
    const auth = app.auth();
    async function login() {
        await auth.anonymousAuthProvider().signIn();
        const loginState = await auth.getLoginState();
        db("登陆成功");
        console.log(loginState);
    };
    login();
    t.ranking = function () {
        if (new Date().getTime() >= 1609430400000 /* 2021-01-01 00:00:00 */) {
            my.ranking_api.getIp()
                .then(function (ip_data) {
                    console.log(ip_data.ip);
                    var ip = ip_data.ip;
                    if (!localStorage.getItem("___mingyan_2021_ranking_data__")) {
                        db("新用户");
                        localStorage.setItem("___mingyan_2021_ranking_data__", `__${ip}__`);
                        t.ranking_api.add("一位不知道名字的访客", ip)
                            .then(function (add_data) { //callback
                                localStorage.setItem("___mingyan_2021_ranking_data__", `__${ip}__`)
                                var id = add_data.result.res.id;
                                swal({
                                    title: `第N个人！！`,
                                    text: `恭喜你成为2021年第N个查看名言的人！！（因技术原因，暂时无法公开名次）`,
                                    icon: "success",
                                    content: {
                                        element: "input",
                                        attributes: {
                                            placeholder: "写个名字记录一下你是谁吧！",
                                            type: "text"
                                        }
                                    },
                                    closeOnClickOutside: false
                                })
                                    .then(name => {
                                        if (name) {
                                            my.ranking_api.update(id, name)
                                                .then(function (update_data) {
                                                    console.log(update_data);
                                                })
                                                .catch(function (e) {
                                                    console.error(e)
                                                });
                                            location.href = "./";
                                        };
                                    })
                            })
                            .catch(function (e) {
                                console.error(e)
                            });
                        }
                })
                .catch(function (e) {
                    console.error(e)
                });
        }

    };

    /* 路由 */
    window.addEventListener("hashchange", hashchange);
    function hashchange() {
        initfancybox();
        if (hashname[location.hash] == true) {
            switch (location.hash) {
                case "#/about":
                    location.pathname = "/"
                    my.hide_showall();
                    my.about();
                    break;
                case "#/search":
                    location.pathname = "/"
                    my.hide_showall();
                    my.all();
                    break;
                case "#/more":
                    location.pathname = "/"
                    my.hide_showall();
                    my.more();
                    break;
                default:
                    break;
            };
        } else if (location.hash.split("#").length > 1) {
            my.show(location.hash.split("#")[1])
        };
    };
    hashchange();
    switch (location.pathname) {
        case "/about":
            location.hash = "#/about"
            break;
        case "/search":
            location.hash = "#/search"
            break;
        case "/more":
            location.hash = "#/more"
            break;
        case "/":
            $(document).ready(function () {
                t.show();
                db("show：L960")
            });
            //if (md5(qs("pre_id")) == "21393b2b0a1636474774869d3429d2de") {
            if (qs("force_action") == "2020" || !localStorage.getItem("___mingyan_2021_ranking_data__")) {
                t.ranking();
            };
            switch (qs("force_action")) {
                case "clear_save":
                    localStorage.removeItem("___mingyan_2021_ranking_data__");
                    break;
                case "auto_reload":
                    setInterval(function () { my.show() }, 3000);
                    break;
            };
            //}
            break;
        case "/index.html":
            $(document).ready(function () {
                t.show();
                db("show：L979")
            });
            break;
        default:
            if (location.pathname.split("/")[1].length == 32) {
                var id = t.my_decode(location.pathname.split("/")[1]);
                var myid = new Number(id);
                $(document).ready(function () {
                    t.show(myid.toString());
                    db("show：L988")
                });
            } else {
                clearInterval(search);
                $(".app").load("./src/_404.html");
            };
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

    function initfancybox() {
        setTimeout(() => {
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
        }, 500);
    }
})(my)