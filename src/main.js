/*
* ©2020-2021 xhemj
* 2021/03/20
*/

(async function () {
    /* 配置 */
    let _mingyan = {};

    v = v || ["", "202103211846"]; // eslint-disable-line
    _mingyan.version = "2021/03/20";
    _mingyan.config = {
        ___DEBUG__: true,
        ___date_version___: v[1] // eslint-disable-line
    };

    /**
     * ServiceWorker
     */
    if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
            navigator.serviceWorker.register("./sw.js?t=" + _mingyan.config.___date_version___);
        });
    }

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
    var _hmt = [];
    (function () {
        let hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?0673dbbe4e6ea51a92a74e3ba2bc051b";
        let s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();

    (function () {
        var bp = document.createElement("script");
        var curProtocol = window.location.protocol.split(":")[0];
        if (curProtocol === "https") {
            bp.src = "https://zz.bdstatic.com/linksubmit/push.js";
        } else {
            bp.src = "http://push.zhanzhang.baidu.com/push.js";
        }
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(bp, s);
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
                    }
                    callback(data);
                }
            };

            request.onerror = function () {
                console.error("Error");
            };

            request.send();
        };
    })(_);

    /**
     * 界面元素定义
     */
    let $main = ".my--main";
    let $search = ".my--search";
    let $page = ".my--page";
    let $footer = ".my--footer";
    let $myInfo = ".my--mingyan-info";

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
        "#/about": true,
        "#/ranking": true,
        "#/submit": true
    };
    let picBaseUrl = "https://s-sh-1943-pic1.oss.dogecdn.com"; // 图片cdn链接
    _mingyan.lazypic = "./src/loading.svg"; // 懒加载图片地址

    let apiUrls = {
        "star": "https://star-api.xhemj.now.sh/api/star",
        "submit": "https://star-api.xhemj.now.sh/api/contribute"
    };

    String.prototype.trim = function () {
        return this.replace(/(^\s*)|(\s*$)/g, "");
    };

    /**
     * 初始化
     */
    let ua = new Browser(); // Broswer.js初始化
    let footer = $($footer).html().replace("999+", mingyan.length); // 首页Footer初始化
    let faceClickTime = ""; // 初始化头像彩蛋点击数
    if (location.hash == "" && hashName[location.hash] != true /* 排除保留的hash路由地址 */) $($page).hide();   // 隐藏文字区域
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
        s.parentNode.insertBefore(su, s);
    }

    /**
     * 控制台输出
     */
    let dn = 1;
    let log = console.log;
    function db(i) {
        if (_mingyan.config.___DEBUG__) {
            let special1 = "";
            let special2 = "";
            log(`[ERSS名言]${new Date().getHours()}:${new Date().getMinutes()} #${dn} -> ${special1}`, i, special2);
            dn++;
        }
    }

    /**
     * 检测是否支持Webp
     */
    function isSupportWebp() {
        try {
            return document.createElement("canvas").toDataURL("image/webp", 0.5).indexOf("data:image/webp") === 0;
        } catch (err) {
            return false;
        }
    }

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
            }
        }
        return re;
    }

    /**
     * 生成随机整数
     * @param {Num} minNum 最小值
     * @param {Num} maxNum 最大值
     */
    function randomNumber(minNum, maxNum) {
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
    }

    // /**
    //  * 弹窗
    //  * @param {Object} opt 选项
    //  */
    // function showPop(opt) {
    //     let pop_elements = {};
    //     opt.time = opt.time || 5000;
    //     opt.url = opt.url || "";
    //     pop_elements.container = document.createElement("div");
    //     pop_elements.container.id = "pop";
    //     pop_elements.container.style.cssText = "z-index:10000;";
    //     pop_elements.modal = document.createElement("div");
    //     pop_elements.modal.style.cssText = "z-index:99999;position:fixed;box-shadow: 0 5px 15px -5px rgba(0,0,0,0.8);display:inline-block;color:black;padding:24px;background-color:white;top:12px;right:12px;border-radius:12px;font-size:18px;transition:all 250ms ease;opacity:0";
    //     pop_elements.a = document.createElement("a");
    //     pop_elements.a.innerText = opt.url;
    //     pop_elements.a.href = opt.url;
    //     pop_elements.a.addEventListener("click", (e) => {
    //         e.preventDefault();
    //     });
    //     pop_elements.p = document.createElement("p");
    //     pop_elements.p.style.cssText = "padding:0;margin:0;";
    //     pop_elements.p.innerHTML = opt.text;
    //     pop_elements.modal.appendChild(pop_elements.p);
    //     pop_elements.modal.appendChild(pop_elements.a);
    //     pop_elements.container.appendChild(pop_elements.modal);
    //     let pop_body = document.querySelector("body");
    //     pop_body.appendChild(pop_elements.container);
    //     requestAnimationFrame(function () {
    //         requestAnimationFrame(function () {
    //             pop_elements.modal.style.opacity = 1;
    //         });
    //     });

    //     setTimeout(function () {
    //         pop_elements.modal.style.opacity = 0;
    //         setTimeout(function () {
    //             pop_elements.container.remove();
    //         }, 260);
    //     }, opt.time);
    // }

    /* 彩蛋系统 */

    /* 右下小人 */
    let isLogoOpacity = false;
    _mingyan.initLogo = function () {
        let iswebp = "png";
        let special = "";
        if (isLogoOpacity && !/\#\d/.test(location.hash)) special = "style=\"opacity: 0.5\"";
        if (isSupportWebp()) iswebp = "png/webp";
        $($footer).append(`<div class="my--mingyan-boy" id="logo" ${special}><div>`);
        $("#logo").html(`<img src="https://s-sh-1943-pic1.oss.dogecdn.com/2021/01/30/1PZ2sFjUd8EfLT6.${iswebp}" alt="IYAMAYA工作室" title="IYAMAYA工作室"></img>`);
        if (ua.device != "Mobile") {
            $("#logo").css({
                "width": "150px"
            });
        } else {
            $("#logo").css({
                "width": "120px"
            });
        }
    };
    _mingyan.initLogo();

    /* 图片彩蛋 */
    /**
     * 图片彩蛋
     * @param {String} my 完整名言
     */
    function _checkPic(my) {
        let name = my.split("：")[0];
        let my_out = null;
        if (my.split("：").length == 2) {
            my_out = my.split("：")[1];
            // db(my_out);
        } else if (my.split("：").length == 3) {
            my_out = my.split("：")[1] + "：" + my.split("：")[2];
            // db(my_out);
        }
        let special = "data-event=\"my--text\" onclick=\"_mingyan.onclick(this);\"";
        if (my_out == "解" || mingyanPicUrl[my_out] != undefined) {
            let pic = null;
            if (my_out == "解") {
                pic = solvePicUrl[name];
            } else if (mingyanPicUrl[my_out] != undefined) {
                pic = mingyanPicUrl[my_out];
            }
            // 支持WEBP格式
            if (isSupportWebp()) {
                pic = pic + "/webp";
            }
            _checkPicForMobie();
            lazyload();
            return `<div ${special}>${my_out}</div><div class="my--mingyan-pic">
                            <img src="${_mingyan.lazypic}" data-src="${picBaseUrl}${pic}" data-pic-id=${my_out} id="pic" class="lazyload mdui-hoverable mdui-img-rounded fancybox" data-fancybox-group="ERSS_mingyan_pic"></img>
                        </div>`;
            // return my + "<\/br><img src=\"" + _mingyan.lazypic + "\" data-src=\"" + pic + "\" class=\"pic lazyload mdui-hoverable mdui-img-rounded fancybox\" data-fancybox-group=\"ERSS_mingyan_pic\"" + special + "><\/img>"
        } else {
            lazyload();
            return `<div ${special}>${my_out}</div>`;
        }
    }
    /**
     * 新旧数据格式替换
     */
    let reloadTime = 0;
    if (localStorage.getItem("reload-time")) {
        localStorage.setItem("___mingyan_reload_time__", localStorage.getItem("reload-time"));
        localStorage.removeItem("reload-time");
    }
    if (localStorage.getItem("___mingyan_reload_time__")) {
        reloadTime = localStorage.getItem("___mingyan_reload_time__");
    }

    /**
     * 刷新彩蛋
     */
    _mingyan.addReloadTime = function () {
        reloadTime++;
        localStorage.setItem("___mingyan_reload_time__", reloadTime);
        // db(reloadTime);
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
        }
        // 弹窗
        if (text) {
            swal({
                title: title,
                text: text,
                icon: "success",
                button: "关闭",
                closeOnClickOutside: false
            });
        }
    };

    /* 三人头像彩蛋 */
    /**
     * 三人头像点击量
     * @param {String} i 名字
     */
    _mingyan.checkFaceClickTime = function (i) {
        if (i == "xhemj") {
            faceClickTime += "1";
        }
        if (i == "BlackToy") {
            faceClickTime += "2";
        }
        if (i == "Oranjezelv") {
            faceClickTime += "3";
        }
        // db(faceClickTime);
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
        }
    };

    /**
     * 监听点击
     */
    _mingyan.onclick = function (el) {
        if (!el) return;
        let event = el.getAttribute("data-event").replace("my--", "");
        switch (event) {
        case "text":
            _text();
            return;
        }

        /**
         * 文字彩蛋
         */
        function _text() {
            let text = $(".my--mingyan-text").text();
            let alTitle = "";
            let alText = "";
            if (text.indexOf("绿帽子") != -1) {
                alTitle = "Fuck ♂ You ♂";
                alText = "骚骚恪曾经说过：Fuck ♂ You ♂";
            }
            if (text.indexOf("垃圾真好吃") != -1) {
                alTitle = "获得成就";
                alText = "最美垃圾人";
            }
            if (text.indexOf("来一起唱啊！！") != -1) {
                alTitle = "获得成就";
                alText = "Shape OF You！";
                // 音乐惊喜
                let ap = new APlayer({
                    container: document.getElementById("my--player"),
                    fixed: true,
                    lrcType: 3,
                    audio: [{
                        name: "Shape of You",
                        artist: "Ed Sheeran",
                        url: "https://s-sh-1943-pic1.oss.dogecdn.com/static%2Fmingyan-js-org%2FEd%20Sheeran%20-%20Shape%20of%20You.mp3",
                        cover: "https://s-sh-1943-pic1.oss.dogecdn.com/2020/12/19/L1NY8U7nhRjyQMa.jpg",
                        lrc: "https://s-sh-1943-pic1.oss.dogecdn.com/static%2Fmingyan-js-org%2FShape%20of%20You.lrc"
                    }]
                });
                // 调整字幕位置
                // $(".aplayer .aplayer-lrc").css("transform", "translateY(-55px)");
                ap.play();
            }

            if (alText && alTitle) {
                swal({
                    title: alTitle,
                    text: alText,
                    icon: "success",
                    button: "关闭",
                    closeOnClickOutside: false
                });
            }
        }
    };



    /**
     *  文字彩蛋
     * @param {String} my 完整名言
     */
    function _checkText(my) {
        my = my.split("：")[1];
        if (specialVerbList[my] != undefined) {
            let text = specialVerbList[my];
            return text;
        } else {
            return "曾经说过";
        }
    }

    /* 打印功能 */
    _mingyan.print = function () {
        _showAll();
        let oldstr = $("body").html();
        let headstr = "<title>名言 | ERSS</title>";
        let footstr = "</body></html>";
        $("#searchbar").hide();
        let printData = document.querySelector(".my--search").innerHTML.replace(/<a /g, "<span ").replace(/<\/a>/g, "<\/span>");
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
        // db(name);
        // db(my);
        return md5("1" + md5(encodeURI(name + "||" + my + "ERSS MINGYAN (c) xhemj")));
    };

    /**
     * 名言分享链接解密
     * @param {String} id 传入的分享ID
     */
    _mingyan.decodeMingyan = function (id) {
        for (let i in mingyan) {
            let name = mingyan[i].split("：")[0];
            db(name);
            let my = mingyan[i].split("：")[1];
            db(my);
            if (id == _mingyan.encodeMingyan(name, my)) {
                // db("encode:" + id);
                // db(i);
                return i;
            } else {
                db("no");
            }
        }
    };

    /**
     * 分享的主函数
     */
    _mingyan.share = function () {
        let name = $(".my--mingyan-name").text();
        let my = $(".my--mingyan-text").text().replace(/\s*/g, "");
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

    /* 主功能：名言显示 */
    let skipCheckHash = false; // 看是否不检查hash值

    // /**
    //  * 设置名言显示概率
    //  * @param {String} my 要检验的名言
    //  * @returns 名言
    //  */
    // function _checkMingyan(my) {
    //     let chance = {
    //         "数学潘哥": "1,2",
    //         "其它": "3,4,5,6,7,8,9,0"
    //     };
    //     let n = randomNumber(0, 9);
    //     if (my.split("：")[0] == "数学潘哥") {
    //         if (chance["数学潘哥"].indexOf(n) != -1) return my;
    //         return _checkMingyan(mingyan[randomNumber(0, mingyan.length - 1)]);
    //     }
    //     return my;
    // }

    /* 测试概率脚本
    ```
    let name = "xhemj"; // 人名
    let time = 99999; // 测试次数

    let count = 0;
    for (let i = 0; i < time; i ++) {
       let my = mingyan[randomNumber(0, mingyan.length - 1)]
       if (my.indexOf(name) != -1) count++
    };
    db("===========================");
    db(`测试次数：${time} 次`)
    db(" 命中次数   |   概率（%）");
    db(`   ${count}    |   ${((count / time) * 100).toFixed(3)}`);
    db("===========================");
    ```
    */


    // // 隐藏名言
    // await _writeSpecialMingyan();

    /**
     * 名言显示主函数
     * @param {Num} id 名言ID（可不传入）
     */
    _mingyan.show = function (id) {
        // db(mingyan);
        // db(mingyanPicUrl);
        // db(specialVerbList);
        // 加载Fancybox插件
        _initfancybox();
        // 处理传入的id
        function _id(id) {
            if (id) return id;
            if (qs("id") != "") return qs("id"); // 如果有传入?id=xx就用传入的ID
            if (location.hash != "" && hashName[location.hash] != true /* 排除保留的hash路由地址 */) return location.hash.replace("#", "");
            if (localStorage.getItem("___mingyan_id__")) return localStorage.getItem("___mingyan_id__"); // 如果有储存上一次看到哪一条就用这个id
            return randomNumber(0, mingyan.length - 1); // 否则就随机生成
        }

        try {
            // 先隐藏其它元素
            if (location.hash == "" && hashName[location.hash] != true /* 排除保留的hash路由地址 */) $($page).hide();
            $($main).hide();
            if (mingyan.length != 0) {
                // db("加载名言列表成功");
                let n = _id(id);
                let _my = mingyan[n];
                // _my = _checkMingyan(_my); // 调整名言概率
                if (hashName[location.hash] == true) return; // 若有触发hash路由的地址就返回
                // hash路由
                skipCheckHash = true;
                location.hash = "#" + n;
                skipCheckHash = false; // 再调回来
                // 储存看到哪一条下一次继续
                localStorage.setItem("___mingyan_id__", n);
                let name = _my.split("：")[0];
                // db(name);
                let my = null;
                if (_my.split("：").length == 2) {
                    my = _my.split("：")[1];
                    // db(my);
                } else if (_my.split("：").length == 3) { // 防止名言中有“：”
                    my = _my.split("：")[1] + "：" + _my.split("：")[2];
                    // db(my);
                }
                // db("已选取第" + n + "条名言：" + my);
                _hmt.push(["_trackEvent", "名言", "查看", "自动", name + "：" + my]);
                // 查看和分享（已废弃 2021-01-24）
                $($myInfo).html(
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
                    <a style="color:#9B4DC9" id="reload" href="#${randomNumber(0, mingyan.length - 1)}" onclick="_mingyan.addReloadTime();_hmt.push(['_trackEvent', '名言', '刷新', '手动' , '点击查看更多名言']);" >点击</a>查看更多名言</div>`
                );
                /**
                 * 图片彩蛋
                 */
                $("span.my--mingyan-text").html(_checkPic(name + "：" + my)); // 若有触发图片彩蛋就显示彩蛋
                /**
                 * 文字彩蛋
                 */
                let verb = _checkText(name + "：" + my);  // 若有触发文字彩蛋就显示彩蛋
                $("span.my--mingyan-verb").html(verb);

                $("span.my--mingyan-name").text(name);
                $($main).fadeIn();
                if ($(".my--mingyan-text").text().indexOf("来一起唱啊！！") != -1) { // 若有触发音乐彩蛋就加载播放器
                    loadJs("https://cdn.jsdelivr.net/npm/aplayer@1.10.0/dist/APlayer.min.js");
                }
                let title = "名言 | " + my;
                if (navigator.userAgent.toString().indexOf("bot") == -1 && navigator.userAgent.toString().indexOf("spider") == -1 /* 防止搜索引擎激活 */) {
                    document.title = title;
                    let description = name + verb + "：" + my;
                    $("meta[name='description']").attr("content", description);
                    $("meta[property='og:description']").attr("content", description);
                    $("meta[name='og:description']").attr("content", description);
                    $("meta[property='og:title']").attr("content", title);
                    $("meta[name='og:title']").attr("content", title);
                }
                lazyload(); // 图片懒加载
            } else {
                return false;
            }
        } catch (err) {
            // 解决：防止看隐藏名言后错误的问题
            if (sessionStorage.getItem("___mingyan_is_special_mode__")) location.href = "#0";
            console.error("名言加载失败");
            $(".my--mingyan-text").text("名言加载失败");
            $($myInfo).html("错误信息：</br>" + err + "</br>建议：<a href=\"javascript:_mingyan.reload()\">点我刷新页面</a>");
            $($main).fadeIn();
            $($myInfo).fadeIn();
            db(err);
            //location.href = "http://" + location.hostname + ":" + location.port + location.pathname;
        }
    };

    /**
     * 修复手机端名言文字位置
     */
    function _checkTextForMobie() {
        // 针对手机进行位置调整
        if (ua.device != "Mobile") {
            $($main).css("transform", "translateY(15%)");
        } else {
            $($main).css("transform", "translateY(30%)");
            $($page).css("transform", "translateY(50px)");
        }
    }
    _checkTextForMobie();

    /**
     * 修复手机端图片彩蛋位置
     */
    function _checkPicForMobie() {
        if (ua.device == "Mobile") {
            $($main).css("transform", "translateY(15%)");
        } else {
            $($main).css("transform", "translateY(10%)");
        }
        lazyload();
    }

    /**
     * 刷新名言
     */
    _mingyan.reload = function () {
        if ($("#reload").attr("href")) {
            location.hash = "#" + $("#reload").attr("href").split("#")[1];
        } else {
            location.hash = "#" + randomNumber(0, mingyan.length - 1);
        }
    };


    /**
     * 隐藏搜索列表和文字区域
     */
    _mingyan.hideElement = function () {
        if (location.hash == "" && hashName[location.hash] != true /* 排除保留的hash路由地址 */) $($page).hide();
        $($search).hide();
        $($main).fadeIn();
        $($footer).html(footer);
    };

    /**
     * 隐藏主区域
     */
    function _hideMain() {
        $($main).hide();
    }

    /**
     * 显示搜索列表
     * 为什么叫showAll我也不知道
     */
    function _showAll() {
        //location.hash = "#/search";
        $($page).hide();
        $($main).hide();
        $("input#searchbar").val("");
        // 搜索框
        let showall = `<input onclick="this.select()" type="search" id="searchbar" class="my--search-bar" placeholder="搜索……" results="5"></input>
        </br></br><span class="e"></span>`;
        for (let i in mingyan) {
            // 默认列出全部名言
            showall += `<div><a style="color:black" id="showall_item" class="${i}" href="#${i}" onclick="_mingyan.hideElement()">${mingyan[i]}</a></div>`;
        }
        showall += "</br></br></br>"; // 加换行比较好看
        $($search).html(showall);
        $($search).fadeIn();
        $($footer).html(`当前名言数量：${mingyan.length}</br><a class="aline" href="javascript:;" onclick="_mingyan.clearHash()">返回</a>`);
        _mingyan.initLogo();
        $("#searchbar").focus();
    }


    /**
     * Markdown转成网页
     * @param {String} id 要放的元素id
     * @param {String} url Markdown地址
     */
    function _mdToHtml(id, url) {
        $($page).hide();
        $($main).hide();
        $($search).hide();
        $(id).html("<strong>" + "<div style=\"text-align: center\" class=\"mdui-ripple\"><style>h1{font-size:30px}</style><h1>加载中……</h1></div></strong></br></br></br></br>");
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
        $($page).fadeIn();
    }


    /**
     * 更多页面
     */
    _mingyan.page = {
        "more": function () {
            return _mdToHtml($page, "./src/page/more.md?t=" + _mingyan.config.___date_version___);
        },
        "about": function () {
            return _mdToHtml($page, "./src/page/about.md?t=" + _mingyan.config.___date_version___);
        },
        "contribute": function () {
            return _mdToHtml($page, "./src/page/contribute.md?t=" + _mingyan.config.___date_version___);
        }
    };


    /**
     * Markdown名言列表
     */
    _mingyan.showAllMingyan = function () {
        $($page).hide();
        $($main).hide();
        $($search).hide();
        let out = "<div style='line-height: 1.5;'>";
        for (let i in mingyan) {
            out += mingyan[i] + "</br>";
        }
        out += "</div>";
        $($page).html(marked(out));
        $($page).fadeIn();
    };

    /**
     * 统计各位老师有几条名言
     */
    _mingyan.tongji = function () {
        $($page).hide();
        $($main).hide();
        $($search).hide();
        let o = "";
        for (let i in mingyan) {
            let a1 = "";
            let a2 = "";
            try {
                a1 = mingyan[i].split("：")[0];
                a2 = mingyan[i + 1].split("：")[0];
            } catch (e) {
                console.error(e);
            }
            // db(a1 + "-" + a2);
            if (a1 == a2) {
                o += a1;
            } else {
                o += a2;
            }
        }
        // db(out);
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
        // db(count);
        let out = "";
        out += count.join(" 句</br>") + " 句</br></br></br></br>";
        $($page).html(marked(out));
        $($page).fadeIn();
    };


    /**
     * 搜索主函数
     */
    function _search() {
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
                                let reg = "/" + $("input#searchbar").val() + "/gi"; // 拼接正规表达式
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
                });
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
    }
    // 没100ms执行一次
    let search = setInterval(_search, 100);

    /**
     * 标题变化
     */
    let title = "名言 | ERSS";
    let titleTime;
    document.addEventListener("visibilitychange", function () {
        if (navigator.userAgent.toString().indexOf("bot") != -1 && navigator.userAgent.toString().indexOf("spider") != -1 /* 防止搜索引擎激活 */) return;
        if (document.hidden) {
            document.title = "名言 | 来看名言呀！";
            clearTimeout(titleTime);
        }
        else {
            document.title = title;
        }
    });

    /**
     * 2021彩蛋!!!
     * 打卡系统
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
        // db("登陆成功");
        db(loginState);
    }
    login();
    // 基础函数
    _mingyan.rankingApi = {
        // 添加
        add: function (name, ip) {
            if (!Promise) return;
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
                        // db("添加成功");
                        // db(res);
                        resolve(res);
                    })
                    .catch(function (e) {
                        reject(e);
                    });
            });
        },
        // 更新呢
        update: function (id, name) {
            if (!Promise) return;
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
                        // db("获取成功");
                        // db(res);
                        resolve(res);
                    })
                    .catch(function (e) {
                        reject(e);
                    });
            });

        },
        // 获取IP
        getIp: function () {
            if (!Promise) return;
            return new Promise(function (resolve, reject) {
                $.getJSON("https://ip.xhemj.now.sh/api/ip",
                    function (json) {
                        // db("获取成功");
                        let res = {
                            "ip": json.ip
                        };
                        resolve(res);
                    }).catch(function (e) {
                    reject(e);
                });
            });
        },
        //获取当前排名人数
        getNum: function () {
            if (!Promise) return;
            return new Promise(function (resolve, reject) {
                app
                    .callFunction({
                        name: "mingyan",
                        data: {
                            event: "getnum"
                        }
                    })
                    .then((res) => {
                        // db("获取成功");
                        // db(res);
                        resolve(res);
                    })
                    .catch(function (e) {
                        reject(e);
                    });

            });
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
            localStorage.setItem("___mingyan_2021_ranking_data__", "__SKIP__");
            return;
        }
        let id = null;
        let ip = null;
        _mingyan.rankingApi.getIp() // 先来一个ip看看
            .then(function (ip_data) {
                // db(ip_data.ip);
                ip = ip_data.ip;
                // 如果没有存过数据
                // db("新用户");
                localStorage.setItem("___mingyan_2021_ranking_data__", `__${ip}__`);  // 那就存一个吧
                return _mingyan.rankingApi.add("一位不知道名字的访客", ip);
            }) // 默认给一个名字
            .then(function (add_data) {
                localStorage.setItem("___mingyan_2021_ranking_data__", `__${ip}__`);  // 不知道为什么要再存一遍，但不想删了
                id = add_data.result.res.id; // 留id以便于之后更新名字
                return _mingyan.rankingApi.getNum();
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
                });
            })
            .then(function (name) {
                if (name) { // 之后就是更新名字啦！
                    return _mingyan.rankingApi.update(id, name);
                } else {
                    location.href = "./";
                }
            })
            .then(function () {
                // db(update_data);
                location.href = "./";
            })
            .catch(function (e) {
                console.error(e);
            });
    };

    /**
     * 临时搜索名言
     * @param {String} my 完整名言
     */
    function _findmingyan(my) {
        if (mingyan) {
            for (let i in mingyan) {
                if (mingyan[i] == my) return i;
            }
            return false;
        }
    }

    /**
     * 名言点赞排行榜
     */
    _mingyan.rankingOnclick = function (el) {
        location.hash = "#" + _findmingyan(el.innerText);
        $($page).hide();
    };

    if (ua.device == "PC") $("#ranking-btn").show();

    _mingyan.starRanking = function () {
        skipCheckHash = true;
        location.hash = "#/ranking";
        skipCheckHash = false;

        $($main).hide();
        $($search).hide();
        $($footer).html("当前名言数量：" + mingyan.length + "</br><a class=\"aline\" href=javascript:; onclick=\"_mingyan.clearHash()\">返回<\/a>"); // 更改footer

        $($page).html("<strong>" + "<div style=\"text-align: center\" class=\"mdui-ripple\"><style>h1{font-size:30px}</style><h1>加载中……</h1></div></strong></br></br></br></br>");
        $($page).fadeIn();
        _mingyan.starApi.getRanking().then(function (data) {
            let o = `
            <h1 style="text-align: center;">排行榜</h1>
            <div class="container">
            `;
            let res = data.data;
            let width = [];
            if (ua.device == "PC") {
                width = [2, 8, 2];
            } else {
                width = [2, 7, 3];
            }
            // // db(res);
            for (let i in res) {
                o += `
        <!-- ${res[i].text} -->
        <div id="star-ranking-item">
          <div class="columns">
            <div class="column col-${width[0]}" id="star-ranking-num">${new Number(i) + 1}</div>
            <div class="column col-${width[1]} my--star-ranking-text" id="star-ranking-text" onclick="_mingyan.rankingOnclick(this)">${res[i].text}</div>
            <div class="column col-${width[2]}">
              <i class="mdui-icon material-icons" id="star-ranking-thumb" style="color: rgba(0,0,0,0.64)">&#xe8dc;</i>
              <span id="star-ranking-thumb-num">
                ${res[i].num}
              </span>
            </div>
          </div>
        </div>
        `;
            }
            o += "</div></br></br></br>";
            $($page).html(o);
        });
    };


    /**
     * 旧版historypush路由 已废弃 2021-01-24
     */
    switch (location.pathname) {
    case "/about":
        location.hash = "#/about";
        break;
    case "/search":
        location.hash = "#/search";
        break;
    case "/more":
        location.hash = "#/more";
        break;
    case "/index.html":
    case "/": // 这边还没废弃
        $(document).ready(function () {
            _mingyan.show();
            db("s1");
        });
        if (qs("force_action") == "2020" || !localStorage.getItem("___mingyan_2021_ranking_data__")) { // 如果是新用户
            _mingyan.ranking();
        }
        switch (qs("force_action") || qs("do")) {
        case "clear_save":
            localStorage.removeItem("___mingyan_2021_ranking_data__");
            break;
        case "auto_reload":
            // 自动刷新名言
            setInterval(function () {
                _mingyan.reload();
            }, 3000);
            break;
        }
        break;
    default:
        // 也应该是废弃了 2021-01-24
        if (location.pathname.split("/")[1].length == 32) {
            let id = _mingyan.decodeMingyan(location.pathname.split("/")[1]);
            let myid = new Number(id);
            $(document).ready(function () {
                _mingyan.show(myid.toString());
                // db("s2");
            });
        } else {
            // 否则返回404
            clearInterval(search);
            $(".app").load("./src/_404.html");
        }
    }


    /**
     * 初始化Headroom.js
     */
    if (Headroom.cutsTheMustard) {
        let myElement = document.getElementById("my--header");
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
    function _initfancybox() {
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
    }
    /**
     * 控制台输出彩蛋
     * （知不知道我做这个彩蛋我弄了多久……）
     */
    function _console() {
        let purple = "font-weight: 900;color: #9b4dca;font-size: 15px";
        let yellow = "font-weight: 900;color: #ffb700;font-size: 15px";
        db("欢迎！");
        console.log("\n" +
            "%c诗曰：                  %c________\n%c" +
            "  王颢维尼熊猫，        %c| ERSS |\n%c" +
            "  老杜金门菜刀，        %c| 名言 |\n%c" +
            "  老王还在抠脚。        %c|______|\n%c" +
            "  三天之内，\n" +
            "  抠出一根面条。\n" +
            "      ————— 天净沙·梗" +
            "\n", purple, yellow, purple, yellow, purple, yellow, purple, yellow, purple); // 就是这一段颜色做了好久……
        _.get("https://api.github.com/repos/xhemj/mingyan/commits", function (res) {
            db(`版本：${res[0]["sha"].slice(0, 7)}`);
        }, true);
    }
    _console();


    /**
     * 清除hash路由（回到首页）
     */
    _mingyan.clearHash = function () {
        document.title = "名言 | ERSS";
        skipCheckHash = true;
        location.hash = "";
        _mingyan.hideElement();
        skipCheckHash = false;
        _mingyan.show();
        // db("s3");
    };

    /**
     * 防止显示界面出问题（测试功能）
     */
    function _checkPage() {
        function isShow(el) {
            return !$(el).is(":hidden");
        }
        // 看hash路由有没有记录页面
        function checkHash() {
            let hash = location.hash;
            if (hashName[hash]) {
                // 有的话就按照路由的走
                switch (hash) {
                case "#/more":
                    _mingyan.page.more();
                    break;
                case "#/search":
                    _showAll();
                    break;
                case "#/about":
                    _mingyan.page.about();
                    break;
                case "#/ranking":
                    _mingyan.starRanking();
                    break;
                case "#/submit":
                    _mingyan.page.contribute();
                    break;
                default:
                    return;
                }
            } else {
                // if (!/\#\d/.test(hash)) _mingyan.clearHash();
                if (/\#\d/.test(hash)) _mingyan.clearHash();
            }
        }
        // 如果既显示名言又显示搜索界面
        if (isShow($main) && isShow($search)) {
            checkHash();
        }
        // 如果既显示名言又显示更多界面
        if (isShow($main) && isShow($page)) {
            checkHash();
        }
        // 如果既显示搜索又显示更多界面
        if (isShow($search) && isShow($page)) {
            checkHash();
        }
        // ……待添加
    }
    setInterval(_checkPage, 1000); // 500ms会出现闪现的Bug，好像调到1000ms就比较刚好……

    /**
     * PWA应用安装按钮
     */
    _mingyan.installPwa = function () {
        let script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/@pwabuilder/pwainstall@1.6.7/dist/pwa-install.js";
        script.type = "module";
        let s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(script, s);
        const pwa = document.getElementById("installComponent");
        pwa.installbuttontext = "安装";
        pwa.cancelbuttontext = "取消";
        pwa.descriptionheader = "描述";
        pwa.manifestpath = "manifest.webmanifest?t=" + _mingyan.config.___date_version___;
        pwa.explainer = "该应用可以安装在您的PC或移动设备上。这将使该Web应用程序外观和行为与任何其他已安装的应用程序相同。您将在应用程序列表中找到它，并将其固定到主屏幕，开始菜单或任务栏。此安装的Web应用程序还将能够与其他应用程序和您的操作系统安全地进行交互。";
        pwa.iosinstallinfotext = "点击共享按钮，然后点击“添加到主屏幕”";
        if (ua.device == "PC") {
            $("#pwa-install").show();
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
    let starApiUrl = apiUrls.star;
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
            if (!Promise) return;
            if (!my) my = $(".my--mingyan-name").text().trim() + "：" + $(".my--mingyan-text").text().trim();
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
                    // db(json.data[0]);
                    resolve(json.data[0]);
                }).catch(function (e) {
                    reject(e);
                });
            });
        },

        /**
         * 点赞
         * @param {String} my 完整名言
         */
        "addStar": function (my) {
            if (!Promise) return;
            if (!my) my = $(".my--mingyan-name").text().trim() + "：" + $(".my--mingyan-text").text().trim();
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
                    // db(json.data[0]);
                    resolve(json.data[0]);
                }).catch(function (e) {
                    reject(e);
                });
            });
        },

        /**
         * 取消点赞
         * @param {String} my 完整名言
         */
        "removeStar": function (my) {
            if (!Promise) return;
            if (!my) my = $(".my--mingyan-name").text().trim() + "：" + $(".my--mingyan-text").text().trim();
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
                    // db(json.data[0]);
                    resolve(json.data[0]);
                }).catch(function (e) {
                    reject(e);
                });
            });
        },

        /**
         * 获取排行榜
         */
        "getRanking": function () {
            if (!Promise) return;
            return new Promise(function (resolve, reject) {
                fetch(starApiUrl, {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "event": "ranking",
                        "data": {
                            "t": new Date().getTime()
                        }
                    })
                }).then(res => res.json()).then(json => {
                    // db(json);
                    resolve(json);
                }).catch(function (e) {
                    reject(e);
                });
            });
        },
    };

    /**
     * 名言点赞系统主函数
     * @param {String} event 事件名
     */
    _mingyan.star = function (event) {
        let loadingHtml = `
        <!-- 点赞 -->
        <i class="mdui-icon material-icons" id="star-logo" style="cursor: pointer;" onclick="_mingyan.star('loading')">&#xe8dc;</i>
        <span class="my--star-num">
        <!-- 加载动画 -->
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto;background: none;shape-rendering: auto;position: relative;transform: translateY(10px);" width="15px" height="25px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
          <circle cx="50" cy="50" fill="none" stroke="rgba(0,0,0,.65)" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.75s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
          </circle>
        <!-- https://loading.io/ --></svg>
        </span>
        `;
        if (!event) event = "getnum";
        // 兼容内测时的数据格式
        if (localStorage.getItem("___mingyan_star_data__") && localStorage.getItem("___mingyan_star_data__").indexOf("，") != -1) {
            let oData = localStorage.getItem("___mingyan_star_data__");
            oData = oData.split("，");
            // db(oData);
            let nData = "";
            for (let i = 0; i < oData.length; i++) {
                if (oData[i]) {
                    nData += "<" + oData[i] + ">";
                }
            }
            // db(nData);
            localStorage.setItem("___mingyan_star_data__", nData);
        }
        // db("event" + event);

        // 是否已经点赞 
        let isAlreadyStar = false;

        swal({
            title: $(".my--mingyan-text").text(),
            text: "加载出错了？刷新试试？",
            icon: "",
            button: "关闭"
        })
            .then(function () {
                // db("==位置：_mingyan.star->swal()->then()");
                // 若关掉了弹窗
                // 为了防止下一次不读取数据库而导致点赞数不同步的问题
                // 强制下一次读取数据库
                // db("then");
                _mingyan.starApi.isForceReadDb = true;
                // db("_mingyan.starApi.isForceReadDb：" + _mingyan.starApi.isForceReadDb);
            });

        $(".swal-text").html(loadingHtml); // 默认显示加载动画
        let alreadyStarData = localStorage.getItem("___mingyan_star_data__") || "";
        // db("alreadyStarData：" + alreadyStarData);
        if (!alreadyStarData) isAlreadyStar = false;
        // db("isAlreadyStar：" + isAlreadyStar);
        _mingyan.starApi.getNum()
            .then(function (res) {
                // db("==位置：_mingyan.star->Api.getNum()");
                // db("====getNum1");
                let id = res.id;
                db("id：" + id);
                if (alreadyStarData.indexOf("<" + id + ">") != -1) isAlreadyStar = true;
                // db("isAlreadyStar：" + isAlreadyStar);
                return {
                    "isAlreadyStar": isAlreadyStar,
                    "res": res
                };
            }).then(function (opt) {
                // db("==位置：_mingyan.star->Api.getNum()->then()");
                let isAlreadyStar = opt["isAlreadyStar"];
                let res = opt["res"];
                // 请求当前名言点赞数量
                switch (event) {
                // 增加点赞
                case "addstar":
                    // db("==位置：switch(event)->'addstar'");
                    _addstar(res);
                    break;
                    // 移除点赞
                case "removestar":
                    // db("==位置：switch(event)->'removestar'");
                    _removestar();
                    break;
                    // 获取点赞数
                case "getnum":
                    // db("==位置：switch(event)->'getnum'");
                    _getnum(res);
                    break;
                default:
                    break;
                }
                // ======================================================
                // ======================================================
                /**
                 * 获取点赞数主函数
                 */
                function _getnum(res) {
                    // db("==位置：_getnum()");
                    // 弹窗
                    swal({
                        title: $(".my--mingyan-text").text(),
                        text: "加载出错了？刷新试试？",
                        icon: "",
                        button: "关闭"
                    })
                        .then(function () {
                            // 若关掉了弹窗
                            // 为了防止下一次不读取数据库而导致点赞数不同步的问题
                            // 强制下一次读取数据库
                            // db("关闭弹窗");
                            _mingyan.starApi.isForceReadDb = true;
                            // db("_mingyan.starApi.isForceReadDb：" + _mingyan.starApi.isForceReadDb);
                        });
                    $(".swal-text").html(loadingHtml); // 默认显示加载动画
                    if (!isAlreadyStar || _mingyan.starApi.isForceReadDb) {
                        // db("==位置：_getnum()->if(!isAlreadyStar || _mingyan.starApi.isForceReadDb)");
                        // 调整动画的位置
                        $(".my--star-num").css({
                            "position": "relative",
                            "transform": "translateY(10px)"
                        });
                        if (!res) {
                            _mingyan.starApi.getNum()
                                .then(function (res1) {
                                    // db("====getNum2");
                                    res = res1;
                                })
                                .catch(function (e) {
                                    console.error(e);
                                });
                        }
                        // ===
                        $(".my--star-num").html(res.num);
                        // 加载完成后
                        $("#star-logo").attr("onclick", "_mingyan.star('addstar')");
                        // rgba(0,0,0,.65)
                        if (!isAlreadyStar) {
                            // db("==位置：_getnum()->if(!isAlreadyStar || _mingyan.starApi.isForceReadDb)->if(!isAlreadyStar)");
                            $("#star-logo").css({
                                "color": "rgba(0,0,0,.65)"
                            });
                            // db("_getnum()中的变换颜色");
                        } else {
                            // db("==位置：_getnum()->if(!isAlreadyStar || _mingyan.starApi.isForceReadDb)->if(!isAlreadyStar)else");
                            $("#star-logo").css({
                                "color": "red"
                            });
                            // db("_getnum()中的变换颜色2");
                            // 再次点击就变成取消点赞
                            $("#star-logo").attr("onclick", "_mingyan.star('removestar')");
                        }
                        // 若是因为要求强制读取数据而触发就改回来
                        if (_mingyan.starApi.isForceReadDb) {
                            // db("==位置：_getnum()->if(!isAlreadyStar || _mingyan.starApi.isForceReadDb)->if(_mingyan.starApi.isForceReadDb)");
                            _mingyan.starApi.isForceReadDb = false;
                            // _getnum();
                        }
                    } else {
                        // db("==位置：_getnum()->if(!isAlreadyStar || _mingyan.starApi.isForceReadDb)else");
                        // 若已经点赞过：
                        // 再次点击就变成取消点赞
                        $("#star-logo").attr("onclick", "_mingyan.star('removestar')");
                        // db("_getnum()中的变换onclick");
                        let num1 = res["num"] || "";
                        if (!num1) {
                            _mingyan.starApi.getNum()
                                .then(function (res) {
                                    // db("====getNum3");
                                    num1 = res["num"];
                                })
                                .catch(function (e) {
                                    console.error(e);
                                });
                        }
                        // 默认显示当前点赞数
                        $(".my--star-num").html(num1);
                        $("#star-logo").css({
                            "color": "red"
                        });
                        // db("_getnum()中的变换颜色2");
                    }
                }

                /**
                 * 点赞主函数
                 */
                function _addstar(res) {
                    // db("==位置：_addstar()");
                    // 若已经点赞过的名言未包含当前要点赞的名言
                    // （还没点赞过当前名言）
                    // db(isAlreadyStar);
                    if (!isAlreadyStar) {
                        // db("==位置：_addstar()->if(!isAlreadyStar)");
                        $(".swal-text").html(loadingHtml); // 默认显示加载动画
                        // 点赞
                        // db("_addstar()中的Api.addStar");
                        _mingyan.starApi
                            .addStar()
                            .then(function (addstar_res) {
                                // db("==位置：_addstar()->if(!isAlreadyStar)->Api.addStar()");
                                // 若有正常返回数据
                                if (addstar_res) {
                                    // db("==位置：_addstar()->if(!isAlreadyStar)->Api.addStar()->if(addstar_res)");
                                    // db("点赞成功");
                                    // 点赞的按钮变红
                                    $("#star-logo").css({
                                        "color": "red"
                                    });
                                    // db("_addstar()中的变换颜色");
                                    let oldNum = addstar_res.num;
                                    // 将已点赞的名言编号加入
                                    let odata = localStorage.getItem("___mingyan_star_data__") || "";
                                    // db(addstar_res);
                                    // db(oldNum + 1);
                                    localStorage.setItem("___mingyan_star_data__", odata + "<" + addstar_res["id"] + ">");
                                    // 显示点赞数加+1
                                    $(".my--star-num").html(oldNum + 1);
                                    // 点赞后更换
                                    $("#star-logo").attr("onclick", "_mingyan.star('removestar')");
                                    // db("_addstar()中的变换onclick");
                                }
                            })
                            .catch(function (e) {
                                console.error(e);
                            });
                    } else {
                        // db("==位置：_addstar()->if(!isAlreadyStar)else");
                        // db("点过赞了");
                        // 若已经点赞过：
                        // 再次点击就变成取消点赞
                        $("#star-logo").attr("onclick", "_mingyan.star('removestar')");
                        // db("_addstar()中的变换onclick2");
                        // 默认显示当前点赞数
                        // db("_addstar() else 中的Api.getNum");
                        let num1 = res["num"] || "";
                        if (!num1) {
                            _mingyan.starApi.getNum()
                                .then(function (res) {
                                    // db("====getNum4");
                                    num1 = res["num"];
                                })
                                .catch(function (e) {
                                    console.error(e);
                                });
                        }
                        $(".my--star-num").html(num1);
                        $("#star-logo").css({
                            "color": "red"
                        });
                        db("_addstar()中的变换颜色2");
                    }
                }

                // ======================================================
                // 上下镜像翻转[doge]
                // （好吧，还是改了很多）
                // ======================================================

                /**
                 * 取消点赞主函数
                 */
                function _removestar() {
                    // db("==位置：_removestar()");
                    // db("==位置：_removestar()->if(!isAlreadyStar)");
                    $(".swal-text").html(loadingHtml); // 默认显示加载动画
                    // db("_removestar()中的Api.removeStar");
                    _mingyan.starApi
                        .removeStar()
                        .then(function (removestar_res) {
                            // db("==位置：_removestar()->if(!isAlreadyStar)->Api.removeStar()");
                            // 若有正常返回数据
                            if (removestar_res) {
                                // db("==位置：_removestar()->if(!isAlreadyStar)->Api.removeStar()->if(removestar_res)");
                                // db("取消点赞成功");
                                // 点赞的按钮还原颜色
                                $("#star-logo").css({
                                    "color": "rgba(0,0,0,.65)"
                                });
                                // db("_removestar()中的变换颜色");
                                let oldNum = removestar_res.num;
                                // 将已点赞的名言编号移除
                                let odata = localStorage.getItem("___mingyan_star_data__") || "";
                                // db(removestar_res);
                                // db(oldNum - 1);
                                localStorage.setItem("___mingyan_star_data__", odata.replace("<" + removestar_res["id"] + ">", ""));
                                // 显示点赞数加-1
                                $(".my--star-num").html(oldNum - 1);
                                // 点赞后更换
                                $("#star-logo").attr("onclick", "_mingyan.star('addstar')");
                                // db("_removestar()中的变换onclick");
                            }
                        })
                        .catch(function (e) {
                            console.error(e);
                        });
                }
            });
    };

    /**
     * hash路由主函数
     */
    _mingyan.onHashChange = function () {
        _initfancybox();
        _checkTextForMobie();
        _mingyan.initLogo();
        function _hide() {
            location.pathname = "/";
            _mingyan.hideElement();
            _hideMain();
            isLogoOpacity = true;
            if (!/\#\d/.test(location.hash)) {
                $("#logo").css("opacity", 0.5);
            } else {
                $("#logo").css("opacity", "");
            }
        }
        if (hashName[location.hash] == true) { // 如果在hash保留路径中
            switch (location.hash) {
            case "#/about":
                _hide();
                document.title = "名言 | 关于";
                _mingyan.page.about();
                break;
            case "#/search":
                _hide();
                document.title = "名言 | 搜索";
                _showAll();
                break;
            case "#/more":
                _hide();
                document.title = "名言 | 更多";
                _mingyan.page.more();
                break;
            case "#/ranking":
                _hide();
                document.title = "名言 | 排行榜";
                _mingyan.starRanking();
                $($page).show();
                break;
            case "#/submit":
                _hide();
                document.title = "名言 | 名言投稿";
                _mingyan.page.contribute();
                break;
            default:
                break;
            }
        } else if (location.hash.split("#").length > 1 && !skipCheckHash && /\#\d/.test(location.hash)) { // 否则就显示名言
            _mingyan.show(location.hash.split("#")[1]);
            isLogoOpacity = false;
        }
    };
    _mingyan.onHashChange();
    window.addEventListener("hashchange", _mingyan.onHashChange);

    // /**
    //  * 隐藏名言Api
    //  */
    // _mingyan.specialModeApi = {
    //     "isAnswerErr": false,
    //     "gettoken": function () {
    //         if (!Promise) return;
    //         return new Promise(function (resolve, reject) {
    //             fetch("https://api.mingyan.eu.org/api/gettoken", {
    //                 method: "POST",
    //                 mode: "cors",
    //                 headers: {
    //                     "Content-Type": "application/json"
    //                 },
    //                 body: JSON.stringify({
    //                     "key": "xhemj"
    //                 })
    //             }).then(json => json.json()).then((res) => {
    //                 db(res);
    //                 if (res.code == 0) resolve(res.data.refreshtoken);
    //                 reject(res.msg);
    //             }).catch(function (err) {
    //                 reject(err);
    //             });
    //         });
    //     },
    //     "getquestion": function (token) {
    //         if (!Promise) return;
    //         return new Promise(function (resolve, reject) {
    //             fetch("https://api.mingyan.eu.org/api/getquestion", {
    //                 method: "POST",
    //                 mode: "cors",
    //                 headers: {
    //                     "Content-Type": "application/json"
    //                 },
    //                 body: JSON.stringify({
    //                     "token": token
    //                 })
    //             }).then(json => json.json()).then((res) => {
    //                 db(res);
    //                 if (res.code == 0) resolve(res.data);
    //                 reject(res.msg);
    //             }).catch(function (err) {
    //                 reject(err);
    //             });
    //         });
    //     },
    //     "verify": function (token, question, answer) {
    //         if (!Promise) return;
    //         return new Promise(function (resolve, reject) {
    //             fetch("https://api.mingyan.eu.org/api/verify", {
    //                 method: "POST",
    //                 mode: "cors",
    //                 headers: {
    //                     "Content-Type": "application/json"
    //                 },
    //                 body: JSON.stringify({
    //                     "token": token,
    //                     "q": question,
    //                     "a": answer
    //                 })
    //             }).then(json => json.json()).then((res) => {
    //                 db(res);
    //                 if (res.code == 0) resolve(res.info);
    //                 reject(res.msg);
    //             }).catch(function (err) {
    //                 reject(err);
    //             });
    //         });
    //     },
    //     isSpecialMode: sessionStorage.getItem("___mingyan_is_special_mode__") || false
    // };
    // /**
    //  * 隐藏名言
    //  */
    // _mingyan.specialMode = function () {
    //     let loading = `<!-- 加载动画 -->
    //     <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto;background: none;shape-rendering: auto;position: relative;transform: translateY(10px);" width="15px" height="25px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
    //       <circle cx="50" cy="50" fill="none" stroke="rgba(0,0,0,.65)" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
    //         <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.75s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
    //       </circle>
    //     <!-- https://loading.io/ --></svg>
    //     `;
    //     swal({
    //         title: "问题加载中",
    //         text: "回答问题查看更多精彩名言",
    //         icon: "info",
    //         button: "关闭",
    //         closeOnClickOutside: false
    //     });
    //     $(".swal-text").html(loading);
    //     let tk = "";
    //     let q = "";
    //     _mingyan.specialModeApi.gettoken()
    //         .then(function (rftoken) {
    //             tk = rftoken;
    //             return _mingyan.specialModeApi.getquestion(rftoken);
    //         }).then(function (question) {
    //             q = question;
    //             let text = "回答问题查看更多名言！";
    //             if (_mingyan.specialModeApi.isAnswerErr) text = "回答错误或已超时，请重新回答";
    //             return swal({
    //                 title: question,
    //                 text: text,
    //                 icon: "info",
    //                 button: "提交",
    //                 closeOnClickOutside: false,
    //                 content: {
    //                     element: "input",
    //                     attributes: {
    //                         placeholder: "请输入答案哦！",
    //                         value: "",
    //                         type: "text"
    //                     }
    //                 }
    //             });
    //         }).then(function (answer) {
    //             if (!answer) return (new Promise(() => { }));
    //             swal({
    //                 title: "加载中",
    //                 text: "回答问题查看更多精彩名言",
    //                 icon: "info",
    //                 button: "关闭",
    //                 closeOnClickOutside: false
    //             });
    //             $(".swal-text").html(loading);
    //             return _mingyan.specialModeApi.verify(tk, q, answer);
    //         }).then(function (res) {
    //             // 成功
    //             _mingyan.specialModeApi.isAnswerErr = false;
    //             db(res);
    //             let s_title = res["welcome-title"];
    //             let s_msg = res["welcome-msg"];
    //             let s_mingyan = res["S-mingyan"];
    //             _readSpecialMingyan(s_mingyan);
    //             swal({
    //                 title: s_title,
    //                 text: s_msg,
    //                 icon: "info",
    //                 button: "关闭",
    //             });
    //             _mingyan.specialModeApi.isSpecialMode = true;
    //             sessionStorage.setItem("___mingyan_is_special_mode__", true);
    //         }).catch(function (err) {
    //             showPop({
    //                 "text": err
    //             });
    //             _mingyan.specialMode();
    //             _mingyan.specialModeApi.isAnswerErr = true;
    //         });
    // };

    // /**
    //  * 隐藏名言：储存名言
    //  */
    // function _readSpecialMingyan(my) {
    //     if (!my) return;
    //     mingyan = mingyan || [];
    //     mingyanPicUrl = mingyanPicUrl || {};
    //     specialVerbList = specialVerbList || {};
    //     sessionStorage.setItem("___mingyan_special_data__", JSON.stringify(my));
    //     location.reload();
    // }

    // /**
    //  * 隐藏名言：展示名言
    //  */
    // function _writeSpecialMingyan(my) {
    //     if (!sessionStorage.getItem("___mingyan_special_data__")) return (new Promise(function (resolve) { resolve(); }));
    //     if (!sessionStorage.getItem("___mingyan_is_special_mode__")) return (new Promise(function (resolve) { resolve(); }));
    //     db("specialmode");
    //     return new Promise(function (resolve) {
    //         my = my || JSON.parse(sessionStorage.getItem("___mingyan_special_data__"));
    //         if (my.length) {
    //             for (let i = 0; i < my.length; i++) {
    //                 let text = my[i]["text"].split("：")[1];
    //                 mingyan.push(my[i]["text"]);
    //                 mingyanPicUrl[text] = my[i]["pic"];
    //                 specialVerbList[text] = my[i]["verb"];
    //             }
    //             $(".my--header").addClass("my--special-mode");
    //             $($footer).addClass("my--special-mode");
    //         }

    //         resolve();
    //     });
    // }

    // /**
    //  * 隐藏名言：是否是隐藏名言
    //  * @param {String} my 名言
    //  */
    // function isSpecialMingyan(my) {
    //     let omy = JSON.parse(sessionStorage.getItem("___mingyan_special_data__"));
    //     if (omy.length) {
    //         let o = "";
    //         for (let i = 0; i < omy.length; i++) {
    //             o += omy[i]["text"];
    //         };
    //         if (o.indexOf(my) != -1) return true;
    //         return false
    //     }
    // }

    // document.querySelector("#logo").addEventListener("click", _mingyan.specialMode);

    /**
     * 中考加油名言（未公开）
     */
    let zk_mingyan = localStorage.getItem("zkmy") || "";
    (function () {
        let count = 0;
        if (!zk_mingyan) return;
        zk_mingyan = zk_mingyan.split("&");
        // function inArr(arr, str) {
        //     for (let i in arr) {
        //         if (arr[i] == str) return true;
        //     }
        //     return false;
        // }
        window.addEventListener("hashchange", function () {
            count++;
            db(count);
            // let name = $(".my--mingyan-name").text().trim();
            // let my = $(".my--mingyan-text").text().trim();
            if (count == 15) {
                let m = zk_mingyan[randomNumber(0, zk_mingyan.length - 1)];
                $(".my--mingyan-text").text(m.split("：")[1]);
                $(".my--mingyan-name").text(m.split("：")[0]);
                $(".my--mingyan-verb").text("也许想要说");
                db("中考名言");
                $(".my--mingyan-text").removeClass("label-secondary");
                $(".my--mingyan-text").addClass("label-error");
                count = 0;
            } else {
                $(".my--mingyan-text").removeClass("label-error");
                $(".my--mingyan-text").addClass("label-secondary");
            }
        });
    })();


    window._mingyan = _mingyan;
    window.isSupportWebp = isSupportWebp;
    window.qs = qs;
    window.randomNumber = randomNumber;
    window.loadJs = loadJs;
    window.db = db;
    window.log = log;
    window._ = _;
    window._$ = _$;

    return {
        _mingyan,
        mingyan
    };

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


