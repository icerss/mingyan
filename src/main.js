/*
* ©2020-2021 xhemj
* 2021/02/11
*/

(function () {
    /* 配置 */
    let _mingyan = _mingyan || {};

    _mingyan.version = "2021/02/11";
    _mingyan.config = {
        ___DEBUG__: true,
        ___date_version___: 202102071808
    };

    /**
     * ServiceWorker
     */
    if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
            navigator.serviceWorker.register("./sw.js?t=202101281305");
        })
    };

    /**
     * 加载耗时
     */
    window.onload = function () {
        let loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
        db("Page load time is " + loadTime + "ms");
    };

    /**
     * 百度统计代码
     */
    var _hmt = _hmt || [];
    (function () {
        let hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?0673dbbe4e6ea51a92a74e3ba2bc051b";
        let s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s)
    })();

    /**
     * 谷歌统计代码
     */
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag("js", new Date());
    gtag("config", "G-RE30WVG95Q");

    /**
     * 基础函数（测试）
     */
    let _ = {};
    let _$ = function (el) {
        return document.querySelector(el);
    };
    (function (_) {
        _.get = function (url, callback, isJson) {
            let request = new XMLHttpRequest();
            request.open("GET", url, true);

            request.onload = function () {
                if (this.status >= 200 && this.status < 400) {
                    let data = this.response;
                    if (isJson) {
                        data = JSON.parse(data);
                    };
                    callback(data);
                }
            };

            request.onerror = function () {
                console.error("Error")
            };

            request.send();
        };
    })(_);

    /**
     * 界面元素定义
     */
    let $main = "#main";
    let $search = "#showall";
    let $md = "#md";
    let $footer = "footer";
    let $myInfo = "#info";

    /**
     * localStorage 兼容
     */
    if (!window.localStorage) {
        window.localStorage = {
            getItem: function (sKey) {
                if (!sKey || !this.hasOwnProperty(sKey)) { return null; }
                return unescape(document.cookie.replace(new RegExp("(?:^|.*;\\s*)" + escape(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"), "$1"));
            },
            key: function (nKeyId) {
                return unescape(document.cookie.replace(/\s*\=(?:.(?!;))*$/, "").split(/\s*\=(?:[^;](?!;))*[^;]?;\s*/)[nKeyId]);
            },
            setItem: function (sKey, sValue) {
                if (!sKey) { return; }
                document.cookie = escape(sKey) + "=" + escape(sValue) + "; expires=Tue, 19 Jan 2038 00:00:00 GMT; path=/";
                this.length = document.cookie.match(/\=/g).length;
            },
            length: 0,
            removeItem: function (sKey) {
                if (!sKey || !this.hasOwnProperty(sKey)) { return; }
                document.cookie = escape(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
                this.length--;
            },
            hasOwnProperty: function (sKey) {
                return (new RegExp("(?:^|;\\s*)" + escape(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
            }
        };
        window.localStorage.length = (document.cookie.match(/\=/g) || window.localStorage).length;
    }


    /* 常量 */
    // Hash路由保留地址
    let hashName = {
        "#/search": true,
        "#/more": true,
        "#/about": true
    };
    let picBaseUrl = "https://s-sh-1943-pic1.oss.dogecdn.com"; // 图片cdn链接
    _mingyan.lazypic = "./src/loading.svg"; // 懒加载图片地址

    /**
     * 初始化
     */
    let ua = new Browser(); // Broswer.js初始化
    let footer = $($footer).html().replace("999+", mingyan.length); // 首页Footer初始化
    let faceClickTime = ""; // 初始化头像彩蛋点击数
    $($md).hide();   // 隐藏文字区域
    $($search).hide();  // 隐藏搜索区域
    $($footer).html(footer);  // 运用Footer
    $("h1").fontFlex(30, 50, 70); // fontFlex初始化
    $("h3").fontFlex(30, 50, 70);


    /**
     * 动态加载JS
     */
    function loadJs(url) {
        let su = document.createElement("script");
        su.src = url;
        let s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(su, s)
    };

    /**
     * 控制台输出
     */
    let dn = 1;
    let log = console.log;
    function db(i) {
        if (_mingyan.config.___DEBUG__) {
            let special1 = "";
            let special2 = "";
            if (i.toString().split("====").length != 1 && typeof i == "string") {
                special1 = "%c";
                special2 = "color: red";
            };
            if (typeof i == "string" || typeof i == "number") {
                log(`[ERSS名言]${new Date().getHours()}:${new Date().getMinutes()} #${dn} -> ${special1}${i}`, special2);
                dn++;
            } else {
                log(`[ERSS名言]${new Date().getHours()}:${new Date().getMinutes()} #${dn} -> ${special1}`, special2);
                log(i);
                dn++
            };
        };
    };

    /**
     * 检测是否支持Webp
     */
    function isSupportWebp() {
        try {
            return document.createElement("canvas").toDataURL("image/webp", 0.5).indexOf("data:image/webp") === 0;
        } catch (err) {
            return false;
        };
    };

    /**
     * 获取url参数
     * @param {String} qs 要获取的参数名
     */
    function qs(qs) {
        let s = location.href;
        s = s.replace("?", "?&").split("&");
        let re = "";
        for (let i = 1; i < s.length; i++) {
            if (s[i].indexOf(qs + "=") == 0) {
                re = s[i].replace(qs + "=", "");
            };
        };
        return re;
    };

    /**
     * 生成随机整数
     * @param {Num} minNum 最小值
     * @param {Num} maxNum 最大值
     */
    function randomNumber(minNum, maxNum) {
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
    /* 彩蛋系统 */

    /* 图片彩蛋 */
    /**
     * 图片彩蛋
     * @param {String} my 完整名言
     */
    _mingyan.checkPic = function (my) {
        let name = my.split("：")[0];
        let my_out = null;
        if (my.split("：").length == 2) {
            my_out = my.split("：")[1];
            db(my_out);
        } else if (my.split("：").length == 3) {
            my_out = my.split("：")[1] + "：" + my.split("：")[2];
            db(my_out);
        };
        let special = `onclick="_mingyan.onMingyanClick()"`;
        if (my_out == "解" || mingyanPicUrl[my_out] != undefined) {
            let pic = null
            if (my_out == "解") {
                pic = solvePicUrl[name];
            } else if (mingyanPicUrl[my_out] != undefined) {
                pic = mingyanPicUrl[my_out];
            };
            // 支持WEBP格式
            if (isSupportWebp()) {
                pic = pic + "/webp"
            };
            _mingyan.checkPicForMobie();
            lazyload();
            return `<div id="my_text" ${special}>${my_out}</div><div id="my_pic">
                            <img src="${_mingyan.lazypic}" data-src="${picBaseUrl}${pic}" data-pic-id=${my_out} class="mypic lazyload mdui-hoverable mdui-img-rounded fancybox" data-fancybox-group="ERSS_mingyan_pic"></img>
                        </div>`;
            // return my + "<\/br><img src=\"" + _mingyan.lazypic + "\" data-src=\"" + pic + "\" class=\"mypic lazyload mdui-hoverable mdui-img-rounded fancybox\" data-fancybox-group=\"ERSS_mingyan_pic\"" + special + "><\/img>"
        } else {
            lazyload();
            return `<div id="my_text" ${special}>${my_out}</div>`;
        };
    };
    /**
     * 新旧数据格式替换
     */
    let reloadTime = 0;
    if (localStorage.getItem("reload-time")) {
        localStorage.setItem("___mingyan_reload_time__", localStorage.getItem("reload-time"))
        localStorage.removeItem("reload-time")
    };
    if (localStorage.getItem("___mingyan_reload_time__")) {
        reloadTime = localStorage.getItem("___mingyan_reload_time__")
    };

    /**
     * 刷新彩蛋
     */
    _mingyan.addReloadTime = function () {
        reloadTime++;
        localStorage.setItem("___mingyan_reload_time__", reloadTime);
        db(reloadTime);
        let title = "获得成就", text;
        switch (reloadTime) {
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
        // 弹窗
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
    /**
     * 三人头像点击量
     * @param {String} i 名字
     */
    _mingyan.checkFaceClickTime = function (i) {
        if (i == "xhemj") {
            faceClickTime += "1"
        };
        if (i == "BlackToy") {
            faceClickTime += "2"
        };
        if (i == "Oranjezelv") {
            faceClickTime += "3"
        };
        db(faceClickTime);
        // 如果三人都点了一下
        if (faceClickTime.indexOf("1") != -1 && faceClickTime.indexOf("2") != -1 && faceClickTime.indexOf("3") != -1) {
            swal({
                title: "获得成就",
                text: "彩蛋还没做好~~",
                icon: "info",
                button: "关闭",
                closeOnClickOutside: false
            });
            faceClickTime = "";
        };
    };

    /**
     * 文字彩蛋
     */
    _mingyan.onMingyanClick = function () {
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
            // 音乐惊喜
            let ap = new APlayer({
                container: document.getElementById("player"),
                fixed: true,
                lrcType: 3,
                audio: [{
                    name: "Shape of You",
                    artist: "Ed Sheeran",
                    url: "https://s-sh-1943-pic1.oss.dogecdn.com/static%2Fmingyan-js-org%2FEd%20Sheeran%20-%20Shape%20of%20You.mp3",
                    cover: "https://i.loli.net/2020/12/19/L1NY8U7nhRjyQMa.jpg",
                    lrc: "https://s-sh-1943-pic1.oss.dogecdn.com/static%2Fmingyan-js-org%2FShape%20of%20You.lrc"
                }]
            });
            // 调整字幕位置
            $(".aplayer .aplayer-lrc").css("transform", "translateY(-55px)");
            ap.play();
        };
    };

    /**
     *  文字彩蛋
     * @param {String} my 完整名言
     */
    _mingyan.checkText = function (my) {
        my = my.split("：")[1];
        if (specialVerbList[my] != undefined) {
            let text = specialVerbList[my];
            return text
        } else {
            return "曾经说过"
        };
    };

    /* 打印功能 */
    _mingyan.print = function () {
        _mingyan.showAll();
        let oldstr = $("body").html();
        let headstr = "<title>名言 | ERSS</title>";
        let footstr = "</body></html>";
        $("#searchbar").hide();
        let printData = document.getElementById("showall").innerHTML.replace(/<a /g, "<span ").replace(/<\/a>/g, "<\/span>");
        let wind = window.open("", "", "toolbar=no,scrollbars=yes,menubar=no");
        wind.document.body.innerHTML = headstr + document.head.innerHTML + printData + footstr;
        wind.print();
        $("#searchbar").show();
        wind.close();
        window.document.body.innerHTML = oldstr;
        location.reload();
    };


    /* 分享功能（现已废弃） */
    /**
     * 名言分享链接计算
     * @param {String} name 老师或学生的名字
     * @param {String} my 名言
     */
    _mingyan.encodeMingyan = function (name, my) {
        db(name);
        db(my);
        return md5("1" + md5(encodeURI(name + "||" + my + "ERSS MINGYAN (c) xhemj")))
    };

    /**
     * 名言分享链接解密
     * @param {String} id 传入的分享ID
     */
    _mingyan.decodeMingyan = function (id) {
        for (let i = 0; i < mingyan.length; i++) {
            let name = mingyan[i].split("：")[0];
            db(name)
            let my = mingyan[i].split("：")[1];
            db(my)
            if (id == _mingyan.encodeMingyan(name, my)) {
                db("encode:" + id);
                db(i);
                return i
            } else {
                db("no")
            }
        }
    };

    /**
     * 分享的主函数
     */
    _mingyan.share = function () {
        let name = $("#name").text();
        let my = $("#mingyan").text().replace(/\s*/g, "");
        swal({
            title: "分享当前名言",
            text: "请手动复制下面的链接，把他发给别人吧",
            icon: "info",
            content: {
                element: "input",
                attributes: {
                    placeholder: "加载出错了？刷新试试吧",
                    value: location.protocol + "//" + location.host + "/" + _mingyan.encodeMingyan(name, my),
                    type: "text"
                }
            }
        });
        $(".swal-content__input").attr("value", location.protocol + "//" + location.host + "/" + _mingyan.encodeMingyan(name, my)); // 显示分享链接
        $(".swal-content__input").attr("onclick", "this.select()");
        $(".swal-content__input").select();
    };


    /* 下载功能 */
    _mingyan.download = function () {
        let blob = new Blob([mingyan.join("\n")], { type: "text/plain;charset=utf-8" });
        saveAs(blob, "名言列表（" + _mingyan.version + "）");
    };
    /* 已使用FileSaver.js替代 - 2020-11-28
    _mingyan.dfile = function (fileName, content) {
        const aTag = document.createElement("a");
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


    /* 主功能：名言显示 */
    let skipCheckHash = false; // 看是否不检查hash值
    /**
     * 名言显示主函数
     * @param {Num} id 名言ID（可不传入）
     */
    _mingyan.show = function (id) {
        // 加载Fancybox插件
        initfancybox();
        try {
            // 先隐藏其它元素
            $($md).hide();
            $($main).hide();
            if (mingyan.length != 0) {
                db("加载名言列表成功");
                let n = 0;
                if (!id) {
                    if (qs("id") != "") { // 如果有传入?id=xx就用传入的ID
                        n = qs("id");
                    } else if (location.hash != "" && hashName[location.hash] != true /* 排除保留的hash路由地址 */) { // 如果有传入hash就用hash传入的ID
                        n = location.hash.replace("#", "");
                        db("n=" + n);
                    } else if (localStorage.getItem("___mingyan_id__")) {
                        n = localStorage.getItem("___mingyan_id__") // 如果有储存上一次看到哪一条就用这个id
                    } else {
                        n = randomNumber(0, mingyan.length - 1); // 否则就随机生成
                    };
                } else {
                    n = id; // 若有从函数传入id就用这个
                };
                if (hashName[location.hash] == true) return; // 若有触发hash路由的地址就返回
                // hash路由
                skipCheckHash = true;
                location.hash = "#" + n;
                skipCheckHash = false; // 再调回来
                // 储存看到哪一条下一次继续
                localStorage.setItem("___mingyan_id__", n);
                let name = mingyan[n].split("：")[0];
                db(name);
                let my = null;
                if (mingyan[n].split("：").length == 2) {
                    my = mingyan[n].split("：")[1];
                    db(my);
                } else if (mingyan[n].split("：").length == 3) { // 防止名言中有“：”
                    my = mingyan[n].split("：")[1] + "：" + mingyan[n].split("：")[2];
                    db(my);
                };
                db("已选取第" + n + "条名言：" + my);
                _hmt.push(["_trackEvent", "名言", "查看", "自动", name + "：" + my]);
                // 查看和分享（已废弃 2021-01-24）
                $("p#info").html(
                    `<div class="info-text">
                    <!-- 编号 -->
                    <a href="#${n}" class="label label-rounded label-warning">#${n}</a>&nbsp;
                    <!-- 分享
                    <a href="javascript:;" onclick="_mingyan.share()" class="label label-rounded label-warning">
                    <i class="mdui-icon material-icons" style="font-size: 15px;">&#xe80d;</i>分享</a> -->
                    <!-- 点赞 -->
                    <a href="javascript:;" onclick="_mingyan.star()" class="label label-rounded label-warning">
                    <i class="mdui-icon material-icons" style="font-size: 15px;">&#xe8dc;</i>点赞</a>
                    </br>
                    <a style="color:#9B4DC9" id="reload" href="#${randomNumber(0, mingyan.length - 1)}" onclick="_mingyan.addReloadTime();_hmt.push(["_trackEvent", "名言", "刷新", "手动" , "点击查看更多名言"]);" >点击</a>查看更多名言</div>`
                );
                $("span#mingyan").html(_mingyan.checkPic(name + "：" + my)); // 若有触发图片彩蛋就显示彩蛋
                let verb = _mingyan.checkText(name + "：" + my);  // 若有触发文字彩蛋就显示彩蛋
                $("span#name").text(name);
                $("span#verb").html(verb);
                $($main).fadeIn();
                if ($("#mingyan").text().indexOf("来一起唱啊！！") != -1) { // 若有触发音乐彩蛋就加载播放器
                    loadJs("https://cdn.jsdelivr.net/npm/aplayer@1.10.0/dist/APlayer.min.js");
                };
                let title = "名言 | " + my;
                document.title = title;
                let description = name + verb + "：" + my;
                $("meta[name='description']").attr("content", description);
                $("meta[property='og:description']").attr("content", description);
                $("meta[name='og:description']").attr("content", description);
                $("meta[property='og:title']").attr("content", title);
                $("meta[name='og:title']").attr("content", title);
                lazyload(); // 图片懒加载
            } else {
                return false
            };
        } catch (err) {
            console.error("名言加载失败");
            $("#mingyan").text("名言加载失败");
            $($myInfo).html("错误信息：</br>" + err + "</br>建议：<a href=\"javascript:_mingyan.reload()\">点我刷新页面</a>");
            $($main).fadeIn();
            $($myInfo).fadeIn();
            throw new Error(err);
            //location.href = "http://" + location.hostname + ":" + location.port + location.pathname;
        };
    };


    /**
     * 修复搜索框长度
     */
    let inputbar_width = "";
    if (ua.device != "Mobile") {
        inputbar_width = "60%";
    } else {
        inputbar_width = "auto";
        $($main).css("transform", "translateY(30%)");
    };

    /**
     * 修复手机端名言文字位置
     */
    _mingyan.checkTextForMobie = function () {
        // 针对手机进行位置调整
        if (ua.device != "Mobile") {
            $($main).css("transform", "translateY(15%)");
        } else {
            $($main).css("transform", "translateY(30%)");
            $($md).css("transform", "translateY(50px)");
        };
    };
    _mingyan.checkTextForMobie();

    /**
     * 修复手机端图片彩蛋位置
     */
    _mingyan.checkPicForMobie = function () {
        if (ua.device == "Mobile") {
            $($main).css("transform", "translateY(15%)");
        } else {
            $($main).css("transform", "translateY(10%)");
        };
        lazyload();
    };

    /**
     * 刷新名言
     */
    _mingyan.reload = function () {
        // 已废弃（2021-01-24）
        // history.pushState({}, "名言 | ERSS", "/");
        // if (location.hash != "") {
        //     location.href = "//" + location.hostname + ":" + location.port + location.pathname;
        // } else if (qs("id") != "" || qs("mail") != "") {
        //     location.href = "//" + location.hostname + ":" + location.port + location.pathname;
        // } else {
        //     _mingyan.show();
        // };
        // lazyload();
        if ($("#reload").attr("href")) {
            location.hash = "#" + $("#reload").attr("href").split("#")[1];
        } else {
            location.hash = "#" + randomNumber(0, mingyan.length - 1);
        };
    };


    /**
     * 隐藏搜索列表和文字区域
     */
    _mingyan.hideElement = function () {
        $($md).hide();
        $($search).hide();
        $($main).fadeIn();
        $($footer).html(footer);
    };

    /**
     * 隐藏主区域
     */
    _mingyan.hideMain = function () {
        $($main).hide();
    };

    /**
     * 显示搜索列表
     * 为什么叫_mingyan.showAll我也不知道
     */
    _mingyan.showAll = function () {
        //location.hash = "#/search";
        $($md).hide();
        $($main).hide();
        $("input#searchbar").val("");
        // 搜索框
        let showall = `<input style="${inputbar_width}" onclick="this.select()" type="search" id="searchbar" placeholder="搜索……" results="5"></input>
        </br></br><span class="e"></span>`;
        for (let i = 0; i < mingyan.length; i++) {
            // 默认列出全部名言
            showall += `<div><a style="color:black" id="showall_item" class="${i}" href="#${i}" onclick="_mingyan.hideElement()">${mingyan[i]}</a></div>`;
        };
        showall += "</br></br></br>"; // 加换行比较好看
        $($search).html(showall);
        $($search).fadeIn();
        $($footer).html(`当前名言数量：${mingyan.length}</br><a class="aline" href="javascript:;" onclick="_mingyan.clearHash()">返回</a>`);
        _mingyan.initLogo();
        $("#searchbar").focus();
    };


    /**
     * Markdown转成网页
     * @param {String} id 要放的元素id
     * @param {String} url Markdown地址
     */
    _mingyan.mdToHtml = function (id, url) {
        $($md).hide();
        $($main).hide();
        $($search).hide();
        $(id).html("<strong>" + `<div style="text-align: center" class="mdui-ripple"><style>h1{font-size:30px}</style><h1>加载中……</h1></div></strong></br></br></br></br>`);
        _.get(url, function (data) { // 获取文件
            marked.setOptions({
                breaks: true
            });
            let html = marked(data); // 使用mark.js转换
            html = html.replace(/<a /g, "<a target=\"_blank\" "); // 外链新页面打开
            $(id).html("<strong>" + html + "</strong></br></br></br></br>");  // 加换行比较好看
            $(id).fadeIn();
        });
        $($footer).html("当前名言数量：" + mingyan.length + "</br><a class=\"aline\" href=javascript:; onclick=\"_mingyan.clearHash()\">返回<\/a>"); // 更改footer
        _mingyan.initLogo();
        $($md).fadeIn();
    };


    /**
     * 更多页面
     */
    _mingyan.more = function () {
        _mingyan.mdToHtml($md, "./src/md/more.md?t=" + _mingyan.config.___date_version___);
        //location.hash = "#/more";
    }
    /**
     * 关于页面
     */
    _mingyan.about = function () {
        _mingyan.mdToHtml($md, "./src/md/about.md?t=" + _mingyan.config.___date_version___);
        //location.hash = "#/about";
    };


    /**
     * Markdown名言列表
     */
    _mingyan.showAllMingyan = function () {
        $($md).hide();
        $($main).hide();
        $($search).hide();
        let out = ``;
        for (let i = 0; i < mingyan.length; i++) {
            out += mingyan[i] + "</br>"
        };
        out += `</br></br></br></br>`;
        $($md).html(marked(out));
        $($md).fadeIn()
    }


    /*function time(i) { 已废弃 2021-01-24
        let a = i;
        a = a.split("T");
        let time = a[1];
        time = time.split(":");
        let h = time[0] * 1 + 8;
        let min = time[1];
        let s = time[2].split("Z")[0];
        let ut = a[0] + " " + h + ":" + min + ":" + s;
        return ut;
    };
    _.get("https://api.github.com/repos/xhemj/mingyan/commits?page=1&per_page=1000", function (data) {
        for (let i = 0; i < data.length; i++) {
            db(time(data[i]["commit"]["committer"]["date"]) + " " + data[i]["commit"]["message"])
        }
    });
    _.get("https://api.github.com/repos/xhemj/mingyan/commits?page=2&per_page=1000", function (data) {
        for (let i = 0; i < data.length; i++) {
            db(time(data[i]["commit"]["committer"]["date"]) + " " + data[i]["commit"]["message"])
        }
    });* /
 
    /**
     * 统计各位老师有几条名言
     */
    _mingyan.tongji = function () {
        $($md).hide();
        $($main).hide();
        $($search).hide();
        let o = "";
        for (let i = 0; i < mingyan.length; i++) {
            try {
                let a1 = mingyan[i].split("：")[0];
                let a2 = mingyan[i + 1].split("：")[0];
            } catch (e) { }
            db(a1 + "-" + a2);
            if (a1 == a2) {
                o += a1
            } else {
                o += a2
            };
        };
        //db(out);
        let count = [ // 匹配写了好久
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
        //db(count);
        let out = "";
        out += count.join(" 句</br>") + " 句</br></br></br></br>";
        $($md).html(marked(out));
        $($md).fadeIn()
    };


    /**
     * 搜索主函数
     */
    _mingyan.search = function () {
        if ($("#searchbar").is(":focus") || qs("q") != "") { // 若有点击搜索框或有传入?q=
            if ($("input#searchbar").val()) { // 若搜索框内有文字
                switch ($("input#searchbar").val()) {
                    // 若输入::auto_reload，则进入自动刷新模式
                    case "::auto_reload":
                        location.href = "./?force_action=auto_reload";
                        break;
                    default:
                        let now1 = $("input#searchbar").val();
                        let now2 = $("input#searchbar").val();
                        if (now1 == now2) { // 若停止输入
                            $("a#showall_item").each(function () {
                                if ($(this).text().indexOf($("input#searchbar").val()) != -1) {
                                    let reg = "/" + $("input#searchbar").val() + "/g"; // 拼接正规表达式
                                    $(this).html($(this).text().replace(eval(reg), `<span class="label label-secondary">${$("input#searchbar").val()}</span>`)); // 关键词加颜色凸显
                                    $(this).show();
                                } else {
                                    $(this).hide();
                                }
                            });
                            $(".e").hide(); // “无结果”隐藏
                        }
                }

            } else {
                // 否则把高亮的取消
                $("a#showall_item").show();
                $("a#showall_item").each(function () {
                    $(this).html($(this).html().replace("<span class=\"label label-secondary\">", ""));
                    $(this).html($(this).html().replace("</span>", ""));
                })
            }
        }
        // 若无结果
        if ($($search)[0]["innerText"].match(/^\s*$/) != null) {
            $(".e").text("无结果");
            $(".e").show();
        } else {
            // 否则隐藏“无结果”
            if ($("#searchbar").is(":focus")) {
                $(".e").hide();
            }
        }
    };
    // 没100ms执行一次
    let search = setInterval(_mingyan.search, 100);

    /**
     * 邮箱 （已废弃 2020-11-28）
     */
    if (qs("mail")) {
        window.open("mailto:" + qs("mail").replace("---", "@"));
        _mingyan.reload()
    };

    /**
     * 标题变化
     */
    let title = "名言 | ERSS";
    let titleTime;
    document.addEventListener("visibilitychange", function () {
        if (document.hidden) {
            document.title = "名言 | 来看名言呀！";
            clearTimeout(titleTime);
        }
        else {
            document.title = title;
        }
    });

    /**
     * 2021!!!
     * 排行榜系统
     * 2020/12/31
     */
    // 初始化tcb
    const app = cloudbase.init({
        env: "xhemj-0gjckebwf7276129"
    });
    // 匿名登录
    const auth = app.auth();
    async function login() {
        await auth.anonymousAuthProvider().signIn();
        const loginState = await auth.getLoginState();
        db("登陆成功");
        db(loginState);
    };
    login();
    // 基础函数
    _mingyan.rankingApi = {
        // 添加
        add: function (name, ip) {
            return new Promise(function (resolve, reject) {
                app
                    .callFunction({
                        name: "mingyan",
                        data: {
                            event: "add",
                            name: name.toString(),
                            ip: ip,
                            ua: navigator.userAgent.toString() || ""
                        }
                    })
                    .then((res) => {
                        db("添加成功");
                        db(res);
                        resolve(res);
                    })
                    .catch(function (e) {
                        reject(e)
                    })
            })
        },
        // 更新呢
        update: function (id, name) {
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
                        db(res);
                        resolve(res);
                    })
                    .catch(function (e) {
                        reject(e)
                    });
            })

        },
        // 获取IP
        getIp: function () {
            return new Promise(function (resolve, reject) {
                $.getJSON("https://ip.xhemj.now.sh/api/ip",
                    function (json) {
                        db("获取成功");
                        let res = {
                            "ip": json.ip
                        };
                        resolve(res);
                    }).catch(function (e) {
                        reject(e)
                    });
            })
        },
        //获取当前排名人数
        getNum: function () {
            return new Promise(function (resolve, reject) {
                app
                    .callFunction({
                        name: "mingyan",
                        data: {
                            event: "getnum"
                        }
                    })
                    .then((res) => {
                        db("获取成功");
                        db(res);
                        resolve(res);
                    })
                    .catch(function (e) {
                        reject(e)
                    });

            })
        }
    };

    /**
     * 2021彩蛋主函数
     */
    _mingyan.ranking = function () {
        if (new Date().getTime() < 1609430400000 /* 2021-01-01 00:00:00 */) return;
        if (navigator.userAgent.toString().indexOf("bot") != -1 && navigator.userAgent.toString().indexOf("spider") != -1 /* 防止搜索引擎激活 */) return;
        if (localStorage.getItem("___mingyan_2021_ranking_data__")) return;
        if (qs("force_action") == "skip_ranking" || qs("do") == "sr") {
            localStorage.setItem("___mingyan_2021_ranking_data__", "__SKIP__")
            return;
        };
        let id = null;
        let ip = null;
        _mingyan.rankingApi.getIp() // 先来一个ip看看
            .then(function (ip_data) {
                db(ip_data.ip);
                ip = ip_data.ip;
                // 如果没有存过数据
                db("新用户");
                localStorage.setItem("___mingyan_2021_ranking_data__", `__${ip}__`);  // 那就存一个吧
                return _mingyan.rankingApi.add("一位不知道名字的访客", ip);
            }) // 默认给一个名字
            .then(function (add_data) {
                localStorage.setItem("___mingyan_2021_ranking_data__", `__${ip}__`);  // 不知道为什么要再存一遍，但不想删了
                id = add_data.result.res.id; // 留id以便于之后更新名字
                return _mingyan.rankingApi.getNum()
            })
            .then(function (num_data) { // 获取当前排名
                let num = num_data["result"]["res1"]["data"][0]["num"];
                // 弹窗
                return swal({
                    title: `第${num}个人！！`,
                    text: `恭喜你成为2021年第${num}个查看名言的人！！`, // 解决了！！（2021-01-26）
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
            })
            .then(function (name) {
                if (name) { // 之后就是更新名字啦！
                    return _mingyan.rankingApi.update(id, name)
                } else {
                    location.href = "./";
                }
            })
            .then(function (update_data) {
                db(update_data);
                location.href = "./";
            })
            .catch(function (e) {
                console.error(e)
            })
    };

    /**
     * 图片水印
     */
    _mingyan.initLogo = function () {
        let iswebp = "png";
        if (isSupportWebp()) {
            iswebp = "png/webp"
        };
        $($footer).append(`<div id="logo"><div>`);
        $("#logo").html(`<img src="https://s-sh-1943-pic1.oss.dogecdn.com/2021/01/30/1PZ2sFjUd8EfLT6.${iswebp}" alt="IYAMAYA工作室" title="IYAMAYA工作室"></img>`);
        if (ua.device != "Mobile") {
            $("#logo").css({
                "position": "absolute",
                "bottom": "50px",
                "right": "0px",
                "width": "150px"
            });
        } else {
            $("#logo").css({
                "position": "absolute",
                "bottom": "50px",
                "right": "0px",
                "width": "120px"
            });
        };
    };
    _mingyan.initLogo();

    /**
     * hash路由主函数
     */
    _mingyan.onHashChange = function () {
        initfancybox();
        _mingyan.checkTextForMobie();
        _mingyan.initLogo();
        if (hashName[location.hash] == true) { // 如果在hash保留路径中
            switch (location.hash) {
                case "#/about":
                    location.pathname = "/"
                    _mingyan.hideElement();
                    _mingyan.hideMain();
                    _mingyan.about();
                    $("#logo").css("opacity", 0.5); // 设置右小角小人透明度
                    break;
                case "#/search":
                    location.pathname = "/"
                    _mingyan.hideElement();
                    _mingyan.hideMain();
                    _mingyan.showAll();
                    $("#logo").css("opacity", 0.5);
                    break;
                case "#/more":
                    location.pathname = "/"
                    _mingyan.hideElement();
                    _mingyan.hideMain();
                    _mingyan.more();
                    $("#logo").css("opacity", 0.5);
                    break;
                default:
                    break;
            };
        } else if (location.hash.split("#").length > 1 && !skipCheckHash) { // 否则就显示名言
            _mingyan.show(location.hash.split("#")[1])
        };
    };
    _mingyan.onHashChange();
    window.addEventListener("hashchange", _mingyan.onHashChange);

    /**
     * 旧版historypush路由 已废弃 2021-01-24
     */
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
        case "/index.html":
        case "/": // 这边还没废弃
            $(document).ready(function () {
                _mingyan.show();
            });
            if (qs("force_action") == "2020" || !localStorage.getItem("___mingyan_2021_ranking_data__")) { // 如果是新用户
                _mingyan.ranking();
            };
            switch (qs("force_action") || qs("do")) {
                case "clear_save":
                    localStorage.removeItem("___mingyan_2021_ranking_data__");
                    break;
                case "auto_reload":
                    // 自动刷新名言
                    setInterval(function () {
                        _mingyan.show()
                    }, 3000);
                    break;
            };
            break;
        default:
            // 也应该是废弃了 2021-01-24
            if (location.pathname.split("/")[1].length == 32) {
                let id = _mingyan.decodeMingyan(location.pathname.split("/")[1]);
                let myid = new Number(id);
                $(document).ready(function () {
                    _mingyan.show(myid.toString());
                });
            } else {
                // 否则返回404
                clearInterval(search);
                $(".app").load("./src/_404.html");
            };
    };


    /**
     * 初始化Headroom.js
     */
    if (Headroom.cutsTheMustard) {
        let myElement = document.getElementById("header");
        let headroom = new Headroom(myElement, {
            "offset": 300,
            "tolerance": 5
        });
        headroom.init();
    }

    // 图片懒加载
    lazyload();
    // 不知道为什么有时候会加载失败
    // 那就写个循环吧
    setInterval(lazyload, 1000);

    /**
     * 初始化fancybox的函数
     */
    function initfancybox() {
        setTimeout(() => {
            $(".fancybox").fancybox({
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
    };
    /**
     * 控制台输出彩蛋
     * （知不知道我做这个彩蛋我弄了多久……）
     */
    _mingyan.console = function () {
        let purple = "font-weight: 900;color: #9b4dca;font-size: 15px";
        let yellow = "font-weight: 900;color: #ffb700;font-size: 15px"
        db("欢迎！")
        console.log("\n" +
            "%c诗曰：\40\40\40\40\40\40\40\40\40\40\40\40\40\40\40\40\40\40%c________\n%c" +
            "\40\40王颢维尼熊猫，\40\40\40\40\40\40\40\40%c|\40ERSS\40|\n%c" +
            "\40\40老杜金门菜刀，\40\40\40\40\40\40\40\40%c|\40名言\40|\n%c" +
            "\40\40老王还在抠脚。\40\40\40\40\40\40\40\40%c|______|\n%c" +
            "\40\40三天之内，\n" +
            "\40\40抠出一根面条。\n" +
            "\40\40\40\40\40\40————— 天净沙·梗" +
            "\n", purple, yellow, purple, yellow, purple, yellow, purple, yellow, purple); // 就是这一段颜色做了好久……
        _.get("https://api.github.com/repos/xhemj/mingyan/commits", function (res) {
            db(`版本：${res[0]["sha"].slice(0, 7)}`)
        }, true);
    };
    _mingyan.console();


    /**
     * 清除hash路由（回到首页）
     */
    _mingyan.goHome = _mingyan.clearHash = function () {
        skipCheckHash = true;
        location.hash = "";
        _mingyan.hideElement();
        skipCheckHash = false;
        _mingyan.show();
    };

    /**
     * 防止显示界面出问题（测试功能）
     */
    _mingyan.checkPage = function () {
        function isShow(el) {
            return !$(el).is(":hidden")
        };
        // 看hash路由有没有记录页面
        function checkHash() {
            let hash = location.hash;
            if (hashName[hash]) {
                // 有的话就按照路由的走
                switch (hash) {
                    case "#/more":
                        _mingyan.more();
                        break;
                    case "#/search":
                        _mingyan.showAll();
                        break;
                    case "#/about":
                        _mingyan.about();
                        break;
                }
            } else {
                // 否则默认显示名言（待测试）
                _mingyan.clearHash();
            };
        };
        // 如果既显示名言又显示搜索界面
        if (isShow($main) && isShow($search)) {
            checkHash()
        };
        // 如果既显示名言又显示更多界面
        if (isShow($main) && isShow($md)) {
            checkHash()
        };
        // ……待添加
    };
    setInterval(() => {
        _mingyan.checkPage();
    }, 1000); // 500ms会出现闪现的Bug，好像调到1000ms就比较刚好……

    /**
     * PWA应用安装按钮
     */
    _mingyan.installPwa = function () {
        let script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/@pwabuilder/pwainstall@1.6.7/dist/pwa-install.js";
        script.type = "module";
        let s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(script, s)
        const pwa = document.getElementById("installComponent");
        pwa.installbuttontext = "安装";
        pwa.cancelbuttontext = "取消";
        pwa.descriptionheader = "描述";
        pwa.manifestpath = "manifest.webmanifest";
        pwa.explainer = "该应用可以安装在您的PC或移动设备上。这将使该Web应用程序外观和行为与任何其他已安装的应用程序相同。您将在应用程序列表中找到它，并将其固定到主屏幕，开始菜单或任务栏。此安装的Web应用程序还将能够与其他应用程序和您的操作系统安全地进行交互。";
        pwa.iosinstallinfotext = "点击共享按钮，然后点击“添加到主屏幕”";
        if (ua.device == "PC") {
            $("#pwa-install").show()
        }
        return pwa;
    };
    $(document).ready(function () {
        _mingyan.installPwa();
    });


    /**
     * 名言点赞功能！！
     *   —— 2021年寒假
     */

    // let starApiUrl = "http://localhost:3000/api/";
    let starApiUrl = "https://mingyan-star-api.xhemj.vercel.app/api/"
    // 感谢Vercel的服务！！
    // 感谢MongoDB提供免费的数据库！！

    _mingyan.starApi = {

        // 是否强制读取数据库
        "isForceReadDb": false,

        /**
         * 获取当前点赞数
         * @param {String} my 完整名言
         */
        "getNum": function (my) {
            if (!my) my = $("#name").text() + "：" + $("#my_text").text();
            return new Promise(function (resolve, reject) {
                fetch(starApiUrl, {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "event": "getnum",
                        "data": {
                            "my": my,
                            "id": md5(my),
                            "t": new Date().getTime()
                        }
                    })
                }).then(res => res.json()).then(json => {
                    db(json.data[0]);
                    resolve(json.data[0]);
                }).catch(function (e) {
                    reject(e)
                })
            })
        },

        /**
         * 点赞
         * @param {String} my 完整名言
         */
        "addStar": function (my) {
            if (!my) my = $("#name").text() + "：" + $("#my_text").text();
            return new Promise(function (resolve, reject) {
                fetch(starApiUrl, {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "event": "addstar",
                        "data": {
                            "my": my,
                            "id": md5(my),
                            "t": new Date().getTime()
                        }
                    })
                }).then(res => res.json()).then(json => {
                    db(json.data[0]);
                    resolve(json.data[0]);
                }).catch(function (e) {
                    reject(e)
                })
            })
        },

        /**
         * 取消点赞
         * @param {String} my 完整名言
         */
        "removeStar": function (my) {
            if (!my) my = $("#name").text() + "：" + $("#my_text").text();
            return new Promise(function (resolve, reject) {
                fetch(starApiUrl, {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "event": "removestar",
                        "data": {
                            "my": my,
                            "id": md5(my),
                            "t": new Date().getTime()
                        }
                    })
                }).then(res => res.json()).then(json => {
                    db(json.data[0]);
                    resolve(json.data[0]);
                }).catch(function (e) {
                    reject(e)
                })
            })
        },
    };

    /**
     * 名言点赞系统主函数
     * @param {String} event 事件名
     */
    _mingyan.star = function (event) {
        if (!event) event = "getnum";
        db("event" + event);
        let loadingHtml = `
        <!-- 点赞 -->
        <i class="mdui-icon material-icons" id="star-logo" style="cursor: pointer;" onclick="_mingyan.star('addstar')">&#xe8dc;</i>
        <span id="star-num">
        <!-- 加载动画 -->
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto;background: none;shape-rendering: auto;position: relative;transform: translateY(10px);" width="15px" height="25px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
          <circle cx="50" cy="50" fill="none" stroke="rgba(0,0,0,.65)" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.75s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
          </circle>
        <!-- https://loading.io/ --></svg>
        </span>
        `;
        // 是否已经点赞 
        let isAlreadyStar = false;

        swal({
            title: $("#my_text").text(),
            text: "加载出错了？刷新试试？",
            icon: "",
            button: "关闭"
        })
            .then(function () {
                db("====位置：_mingyan.star->swal()->then()");
                // 若关掉了弹窗
                // 为了防止下一次不读取数据库而导致点赞数不同步的问题
                // 强制下一次读取数据库
                db("then");
                _mingyan.starApi.isForceReadDb = true;
                db("_mingyan.starApi.isForceReadDb：" + _mingyan.starApi.isForceReadDb);
            });

        $(".swal-text").html(loadingHtml); // 默认显示加载动画

        let alreadyStarData = localStorage.getItem("___mingyan_star_data__") || "";
        db("alreadyStarData：" + alreadyStarData);
        if (!alreadyStarData) isAlreadyStar = false;
        db("isAlreadyStar：" + isAlreadyStar);
        _mingyan.starApi.getNum()
            .then(function (res) {
                db("====位置：_mingyan.star->Api.getNum()");
                let id = res.id;
                db("id：" + id)
                if (alreadyStarData.indexOf(id) != -1) isAlreadyStar = true;
                db("isAlreadyStar：" + isAlreadyStar);
                return isAlreadyStar
            }).then(function (isAlreadyStar) {
                db("====位置：_mingyan.star->Api.getNum()->then()");
                // 请求当前名言点赞数量
                switch (event) {
                    // 增加点赞
                    case "addstar":
                        db("====位置：switch(event)->'addstar'");
                        _addstar();
                        break;
                    // 移除点赞
                    case "removestar":
                        db("====位置：switch(event)->'removestar'");
                        _removestar();
                        break;
                    // 获取点赞数
                    case "getnum":
                        db("====位置：switch(event)->'getnum'");
                        _getnum();
                        break;
                };
                // ======================================================
                // ======================================================
                /**
                 * 获取点赞数主函数
                 */
                function _getnum() {
                    db("====位置：_getnum()");
                    // 弹窗
                    swal({
                        title: $("#my_text").text(),
                        text: "加载出错了？刷新试试？",
                        icon: "",
                        button: "关闭"
                    })
                        .then(function () {
                            // 若关掉了弹窗
                            // 为了防止下一次不读取数据库而导致点赞数不同步的问题
                            // 强制下一次读取数据库
                            db("关闭弹窗");
                            _mingyan.starApi.isForceReadDb = true;
                            db("_mingyan.starApi.isForceReadDb：" + _mingyan.starApi.isForceReadDb);
                        })
                    $(".swal-text").html(loadingHtml); // 默认显示加载动画
                    if (!isAlreadyStar || _mingyan.starApi.isForceReadDb) {
                        db("====位置：_getnum()->if(!isAlreadyStar || _mingyan.starApi.isForceReadDb)");
                        _mingyan.starApi
                            .getNum()
                            .then(function (old) {
                                db("====位置：_getnum()->if(!isAlreadyStar || _mingyan.starApi.isForceReadDb)->Api.getNum()");
                                // 调整动画的位置
                                $("#star-num").css({
                                    "position": "relative",
                                    "transform": "translateY(10px)"
                                });
                                // rgba(0,0,0,.65)
                                if (!isAlreadyStar) {
                                    db("====位置：_getnum()->if(!isAlreadyStar || _mingyan.starApi.isForceReadDb)->Api.getNum()->if(!isAlreadyStar)");
                                    $("#star-logo").css({
                                        "color": "rgba(0,0,0,.65)"
                                    });
                                    db("_getnum()中的变换颜色");
                                };
                                $("#star-num").html(old.num);
                            })
                            .catch(function (e) {
                                console.error(e)
                            });
                        // 若是因为要求强制读取数据而触发就改回来
                        if (_mingyan.starApi.isForceReadDb) {
                            db("====位置：_getnum()->if(!isAlreadyStar || _mingyan.starApi.isForceReadDb)->if(_mingyan.starApi.isForceReadDb)");
                            _mingyan.starApi.isForceReadDb = false;
                            _getnum();
                        }
                    } else {
                        db("====位置：_getnum()->if(!isAlreadyStar || _mingyan.starApi.isForceReadDb)else");
                        // 若已经点赞过：
                        // 再次点击就变成取消点赞
                        $("#star-logo").attr("onclick", "_mingyan.star('removestar')");
                        db("_getnum()中的变换onclick");
                        // 默认显示当前点赞数
                        _mingyan.starApi.getNum()
                            .then(function (res) {
                                db("====位置：_getnum()->if(!isAlreadyStar || _mingyan.starApi.isForceReadDb)else->Api.getNum()");
                                let num = res.num;
                                $("#star-num").html(num);
                                $("#star-logo").css({
                                    "color": "red"
                                });
                                db("_getnum()中的变换颜色2");
                            })
                            .catch(function (e) {
                                console.error(e)
                            });
                    };
                };

                /**
                 * 点赞主函数
                 */
                function _addstar() {
                    db("====位置：_addstar()");
                    // 若已经点赞过的名言未包含当前要点赞的名言
                    // （还没点赞过当前名言）
                    db(isAlreadyStar);
                    if (!isAlreadyStar) {
                        db("====位置：_addstar()->if(!isAlreadyStar)");
                        $(".swal-text").html(loadingHtml); // 默认显示加载动画
                        // 点赞
                        db("_addstar()中的Api.addStar");
                        _mingyan.starApi
                            .addStar()
                            .then(function (addstar_res) {
                                db("====位置：_addstar()->if(!isAlreadyStar)->Api.addStar()");
                                // 若有正常返回数据
                                if (addstar_res) {
                                    db("====位置：_addstar()->if(!isAlreadyStar)->Api.addStar()->if(addstar_res)");
                                    db("点赞成功");
                                    // 点赞的按钮变红
                                    $("#star-logo").css({
                                        "color": "red"
                                    });
                                    db("_addstar()中的变换颜色");
                                    let oldNum = addstar_res.num;
                                    // 将已点赞的名言编号加入
                                    let odata = localStorage.getItem("___mingyan_star_data__") || "";
                                    db(addstar_res);
                                    db(oldNum + 1);
                                    localStorage.setItem("___mingyan_star_data__", odata + addstar_res["id"] + "，");
                                    // 显示点赞数加+1
                                    $("#star-num").html(oldNum + 1);
                                    localStorage.removeItem("___mingyan_star__");
                                    // 点赞后更换
                                    $("#star-logo").attr("onclick", "_mingyan.star('removestar')");
                                    db("_addstar()中的变换onclick");
                                };
                            })
                            .catch(function (e) {
                                console.error(e)
                            });
                    } else {
                        db("====位置：_addstar()->if(!isAlreadyStar)else");
                        db("点过赞了");
                        // 若已经点赞过：
                        // 再次点击就变成取消点赞
                        $("#star-logo").attr("onclick", "_mingyan.star('removestar')");
                        db("_addstar()中的变换onclick2");
                        // 默认显示当前点赞数
                        db("_addstar() else 中的Api.getNum");
                        _mingyan.starApi.getNum()
                            .then(function (res) {
                                db("====位置：_addstar()->if(!isAlreadyStar)else->Api.getNum()");
                                let num = res.num;
                                $("#star-num").html(num);
                                $("#star-logo").css({
                                    "color": "red"
                                });
                                db("_addstar()中的变换颜色2")
                            })
                            .catch(function (e) {
                                console.error(e)
                            }); 
                    };
                };

                // ======================================================
                // 上下镜像翻转[doge]
                // （好吧，还是改了很多）
                // ======================================================

                /**
                 * 取消点赞主函数
                 */
                function _removestar() {
                    db("====位置：_removestar()");
                    db("====位置：_removestar()->if(!isAlreadyStar)");
                    $(".swal-text").html(loadingHtml); // 默认显示加载动画
                    // 点赞
                    db("_removestar()中的Api.removeStar");
                    _mingyan.starApi
                        .removeStar()
                        .then(function (removestar_res) {
                            db("====位置：_removestar()->if(!isAlreadyStar)->Api.removeStar()");
                            // 若有正常返回数据
                            if (removestar_res) {
                                db("====位置：_removestar()->if(!isAlreadyStar)->Api.removeStar()->if(removestar_res)");
                                db("取消点赞成功");
                                // 点赞的按钮还原颜色
                                $("#star-logo").css({
                                    "color": "rgba(0,0,0,.65)"
                                });
                                db("_removestar()中的变换颜色");
                                let oldNum = removestar_res.num;
                                // 将已点赞的名言编号移除
                                let odata = localStorage.getItem("___mingyan_star_data__") || "";
                                db(removestar_res);
                                db(oldNum - 1);
                                localStorage.setItem("___mingyan_star_data__", odata.replace(removestar_res["id"] + "，", ""));
                                // 显示点赞数加-1
                                $("#star-num").html(oldNum - 1);
                                localStorage.removeItem("___mingyan_star__");
                                // 点赞后更换
                                $("#star-logo").attr("onclick", "_mingyan.star('addstar')");
                                db("_removestar()中的变换onclick");
                            };
                        })
                        .catch(function (e) {
                            console.error(e)
                        });
                };
            })
    };
    /**
     * 开放函数
     */
    window._mingyan = _mingyan;
    window.isSupportWebp = isSupportWebp;
    window.qs = qs;
    window.randomNumber = randomNumber;
    window.loadJs = loadJs;
    window.db = db;
    window.log = log;
    window._ = _;
    window._$ = _$;

    /**
     * 耶！！写完啦！！
     * 从2020-04-30 到  现在，
     * 这个网最初只是我们几个人开玩笑着说一说，
     * 谁知道真的能成功呢？
     * 还是要感谢一下的：
     * 感谢英语俞老师给了我们这个灵感，
     * 感谢数学潘老师给我们提供了那么多搞笑的名言，
     * 感谢Oranjezelf和骚骚恪提供的已经失传的数学老王的名言，
     * 感谢BlackToy画的背景图片和其它素材，
     * 感谢2018级8班的所有同学，
     * 感谢Xhemj做了这个网站，
     * 感谢看完了这段文字的你。
     *     —— Xhemj 2021-01-01
     */

})();