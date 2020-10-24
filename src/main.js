/*
* ©2020 xhemj
* 2020/10/24
*/
(function () {
    var _hmt = _hmt || []; (function () {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?0673dbbe4e6ea51a92a74e3ba2bc051b";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
    var footer = $("footer").html().replace("0", mingyan.length);
    var ua = new Browser();
    $("#showall").hide();
    $("footer").html(footer);
    function qs(qs) {
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
    function rdNum(minNum, maxNum) {
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
    var pic_list = [
        "虾扯蛋"
    ];
    function mypic(my) {
        if (my.indexOf(pic_list) != -1) {
            console.log("ok");
            if (my == "虾扯蛋") {
                var pic = "https://xhemj.coding.net/api/share/download/5642985d-4d3d-40e8-8196-686744cb84f8"
                //https://i.loli.net/2020/10/16/TQ3i5EH2wD9KF6d.jpg
                //https://ae01.alicdn.com/kf/U4cc17e6537ff4e0ea028b59088da67aeJ.jpg
            };
            myPicMobie();
            return my + "<\/br><img src=\"data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=\" data-src=\"" + pic + "\" class=\"mypic lazyload\"><\/img>"
        } else {
            return my
        }
    };
    $('h1').fontFlex(30, 50, 70);
    $('h3').fontFlex(30, 50, 70);
    function showmingyan() {
        try {
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
                $("p#info").html("<div class=\"info-text\"><a href=\"" + "http://" + location.hostname + ":" + location.port + location.pathname + "#" + n + "\" class=\"label label-rounded label-warning\">" + "#" + n + "</a></br><a href=\"javascript:;\" onclick=\"reload()\">点击</a>查看更多名言</div>");
                $("span#mingyan").html(mypic(my));
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
            }
        } catch (err) {
            console.error(err);
            console.error("名言加载失败");
            $("#mingyan").text("名言加载失败");
            $("#info").html("错误信息：</br>" + err + "</br>建议：<a href=\"javascript:reload()\">点我刷新页面</a>");
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
    };
    function myPicMobie() {
        if (ua.device == 'Mobile') {
            $("#main").css("transform", "translateY(15%)");
        }
    };
    function reload() {
        if (location.hash != "") {
            location.href = "//" + location.hostname + ":" + location.port + location.pathname;
        } else if (qs("id") != "") {
            location.href = "//" + location.hostname + ":" + location.port + location.pathname;
        } {
            showmingyan();
        }
    };
    function hide_showall() {
        $("#showall").hide();
        $("#main").fadeIn();
        $("footer").html(footer);
        if (location.hash == "#search") {
            location.href = "#";
        }
    };
    function showall() {
        $("#main").hide();
        $("input#searchbar").val("");
        var showall = "<input style=\"" + inputbar_width + "\"" + " type=\"search\" id=\"searchbar\" placeholder=\"搜索……\" results=\"5\"></input></br><span class=\"e\"></span>";
        for (i = 0; i < mingyan.length; i++) {
            showall += "<div><a style=\"color:black\" id=\"showall_item\" class=\"" + i + "\" href=\"./?id=" + i + "\">" + mingyan[i] + "</a></div>";
        };
        showall += "</br></br></br>";
        $("#showall").html(showall);
        $("#showall").fadeIn();
        $("footer").html("当前名言数量：" + mingyan.length + "</br><a class=\"aline\" href=javascript:; onclick=\"hide_showall()\">返回<\/a>");
    };

    setInterval(function () {
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
    }, 100);
    function webprint() {
        showall();
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
    }

    showmingyan();
    lazyload();
    window.showmingyan = showmingyan;
    window.showall = showall;
    window.reload = reload;
    window.hide_showall = hide_showall;
    window.webprint = webprint;
})()