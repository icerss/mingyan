/*
* ©2020 xhemj
* 2020/09/26
*/
$(document).ready(function () {
    var _hmt = _hmt || []; (function () {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?0673dbbe4e6ea51a92a74e3ba2bc051b";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
    var footer = "当前名言数量：" + mingyan.length + "</br><a href=\"./\">主页<\/a> &nbsp;&nbsp; | &nbsp;&nbsp; <a href=\"#search\" onclick=\"showall()\">名言搜索<\/a>";
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
    if (qs("vc")) {
        var vConsole = new VConsole();
    }
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
    $('h1').fontFlex(30, 50, 70);
    $('h3').fontFlex(30, 50, 70);
    function showmingyan() {
        $("#main").hide();
        if (mingyan.length != 0) {
            console.info("加载名言列表成功");
            if (qs("id") != "") {
                var n = qs("id");
            } else if (location.hash != "" && location.hash != "#search") {
                var n = location.hash.replace("#", "")
            } else {
                var n = rdNum(0, mingyan.length - 1);
            };
            var name = mingyan[n].split("：")[0]
            if (mingyan[n].split("：").length = 2) {
                var my = mingyan[n].split("：")[1]
            } else if (mingyan[n].split("：").length = 3) {
                var my = mingyan[n].split("：")[1] + "：" + mingyan[n].split("：")[2]
            };
            console.info("已选取第" + n + "条名言：" + my);
            $("p#info").html("<a href=\"" + "http://" + location.hostname + ":" + location.port + location.pathname + "#" + n + "\" class=\"label label-rounded label-warning\">" + "#" + n + "</a></br><a href=\"javascript:;\" onclick=\"reload()\">点击</a>查看更多名言");
            $("span#mingyan").text(my);
            $("span#name").text(name);
            $("#main").fadeIn();
            var title = "名言 | " + my;
            document.title = title;
            var description = name + "曾经说过：" + my + "，点进来看看吧！";
            $(document).attr(description);
            $('meta[property="og:description"]').attr('content', description);
            $('meta[name="og:description"]').attr('content', description);
            $('meta[property="og:title"]').attr('content', title);
            $('meta[name="og:title"]').attr('content', title);
        }
    };
    function reload() {
        if (location.hash != "") {
            location.href = "http://" + location.hostname + ":" + location.port + location.pathname;
        } else if (qs("id") != "") {
            location.href = "http://" + location.hostname + ":" + location.port + location.pathname;
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
        if (ua.device != 'Mobile') {
            var inputbar_width = "60%"
        } else {
            var inputbar_width = "auto"
        }
        var showall = "<input style=\"" + inputbar_width + "\"" + " type=\"search\" id=\"searchbar\" placeholder=\"搜索……\" results=\"5\"></input></br>";
        for (i = 0; i < mingyan.length; i++) {
            showall += "<div><a style=\"color:black\" id=\"showall_item\" class=\"" + i + "\" href=\"./?id=" + i + "\">" + mingyan[i] + "</a></div>";
        };
        showall += "</br></br></br>";
        $("#showall").html(showall);
        $("#showall").fadeIn();
        $("footer").html("当前名言数量：" + mingyan.length + "</br><a href=javascript:; onclick=\"hide_showall()\">返回<\/a>");
    };
    var sn = 0;
    if (location.hash == "#search") {
        showall()
    };
    setInterval(function () {
        if ($("input#searchbar").val()) {
            var now1 = $("input#searchbar").val();
            var now2 = $("input#searchbar").val();

            if (now1 == now2) {
                $("a#showall_item").each(function () {
                    if ($(this).text().indexOf($("input#searchbar").val()) != -1) {
                        sn = sn + 1;
                        $(this).html($(this).text().replace($("input#searchbar").val(), "<span class=\"label label-secondary\">" + $("input#searchbar").val() + "</span>"));
                        $(this).show();
                    } else {
                        $(this).hide();
                    }
                });
            } else {
                $("a#showall_item").hide();
                console.log("1")
            }
        } else {
            $("a#showall_item").show();
            $("a#showall_item").each(function () {
                $(this).html($(this).html().replace("<span class=\"label label-secondary\">", ""));
                $(this).html($(this).html().replace("</span>", ""));
            })
        }
        for (i < 0; i < mingyan.length; i++) { }
    },
        100);

    showmingyan();
})