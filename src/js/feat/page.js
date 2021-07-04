import { mingyan } from "../../mingyan";
import { $page, $main, $search, $footer } from "../init";
import { MY_initLogo as _initLogo } from "./initLogo";
import { ___date_version___ } from "./config";

/**
 * Markdown转成网页
 * @param {String} id 要放的元素id
 * @param {String} url Markdown地址
 */
let _mdToHtml = function (id, url) {
    $($page).hide();
    $($main).hide();
    $($search).hide();
    $(id).html("<strong>" + "<div style=\"text-align: center\" class=\"mdui-ripple\"><style>h1{font-size:30px}</style><h1>加载中……</h1></div></strong></br></br></br></br>");
    fetch(url)
        .then(res => res.text())
        .then(function (data) {
            marked.setOptions({
                breaks: true
            });
            let html = marked(data); // 使用marked.js转换
            html = html.replace(/<a /g, "<a target=\"_blank\" rel=\"nofollow ugc\" "); // 外链新页面打开
            $(id).html("<strong>" + html + "</strong></br></br></br></br>");  // 加换行比较好看
            $(id).fadeIn();
        });
    $($footer).html("当前名言数量：" + mingyan.length + "</br><a class=\"aline\" id=\"clearhash_btn\" href=javascript:;>返回<\/a>"); // 更改footer
    _initLogo();
    $($page).fadeIn();
};

/**
 * 更多页面
 */
export let MY_page = {
    "more": function () {
        return _mdToHtml($page, "./src/page/more.md?t=" + ___date_version___);
    },
    "about": function () {
        return _mdToHtml($page, "./src/page/about.md?t=" + ___date_version___);
    },
    "contribute": function () {
        return _mdToHtml($page, "./src/page/contribute.md?t=" + ___date_version___);
    },
    "faq": function () {
        return _mdToHtml($page, "./src/page/faq.md?t=" + ___date_version___);
    },
    "sponsor": function () {
        return _mdToHtml($page, "./src/page/sponsor.md?t=" + ___date_version___);
    }
};

/**
 * 更多页面
 */
export let MY_page_more = function () {
    twikoo.init({
        envId: 'xhemj-0gjckebwf7276129',
        el: '#tcomment',
        onCommentLoaded: function () {
            document.querySelector(".tk-footer").innerHTML = `Powered by <a href="https://twikoo.js.org" target="_blank" rel="nofollow">Twikoo</a></br>&copy; 2021 <a href="https://mingyan.js.org">ERSS名言</a></div>`
            document.querySelector(".el-textarea__inner").style.height = "150px";
        }
    })
        .then(function () {
            db('评论加载完成');
            document.querySelector(".tk-footer").innerHTML = `Powered by <a href="https://twikoo.js.org" target="_blank" rel="nofollow">Twikoo</a></br>&copy; 2021 <a href="https://mingyan.js.org">ERSS名言</a></div>`
            document.querySelector(".el-textarea__inner").style.height = "150px";
        });
    $.get("https://api.github.com/repos/xhemj/mingyan", function (data) {
        var a = data["updated_at"];
        $("#uptime").text(new Date(a).toLocaleString());
        console.log(new Date(a).toLocaleString());
    });
    if (fetch) fetch("https://hit-count.erss.club/?_my_cache_=no")
        .then(j => j.json())
        .then(res => {
            $("#hit-count").html(res.data.count)
        })
};
import { apiUrls } from "../init";

/**
 * 投稿页面
 */
export let MY_page_submit = function () {
    // let apiUrl = "http://localhost:3000/api/contribute";
    let apiUrl = apiUrls.submit;
    let name = $("#form-name").val();
    let school = $("#form-school").val();
    let classname = $("#form-class").val();
    let my = $("#form-mingyan").val();
    let story = $("#form-story").val();
    let mail = $("#form-mail").val();
    //
    if (!name) {
        $("#form-name").addClass("is-error");
        return
    };
    //
    if (!my) {
        $("#form-name").removeClass("is-error");
        $("#form-mingyan").addClass("is-error");
        return
    };
    //
    $("#form-name").removeClass("is-error");
    $("#form-mingyan").removeClass("is-error");
    $("#submit").addClass("loading");
    //
    fetch(apiUrl, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "event": "mingyan-contribute",
            "data": {
                "my": my,
                "name": name,
                "story": story,
                "class": classname,
                "school": school,
                "mail": mail,
                "t": new Date().getTime()
            }
        })
    }).then(res => {
        console.log(res);
        $("#submit").removeClass("loading");
        //
        swal({
            title: "名言投稿成功！",
            text: "名言：" + my + "\n请等待审核",
            icon: "success",
            button: "关闭",
            closeOnClickOutside: false
        })
            .then(function () {
                location.href = "./?from=mingyan-contribute";
            })
    }).catch(function (e) {
        console.error(e);
        $("#submit").removeClass("loading");
        swal({
            title: "名言投稿失败！",
            text: "建议稍后再试",
            icon: "error",
            button: "关闭",
            closeOnClickOutside: false
        });
    })
};

window["MY_page_submit"] = MY_page_submit;
window["MY_page_more"] = MY_page_more;