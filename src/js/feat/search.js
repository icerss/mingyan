import { $search } from "../init";
import { qs } from "../tools";
/**
 * 搜索主函数
 */
export let MY_search = function () {
    if (($("#searchbar").is(":focus") || qs("q") != "") && $("input#searchbar").val()) { // 若有点击搜索框或有传入?q=
        switch ($("input#searchbar").val()) {
        // 若输入::auto_reload，则进入自动刷新模式
        case "::auto_reload":
            location.href = "./?force_action=auto_reload";
            break;
        default: {
            // 显示排行榜名言
            $(".search-history-list").hide();
            $(".search-list").show();
            try {
                $("a#showall_item").each(function () {
                    if ($(this).text().indexOf($("input#searchbar").val()) != -1) {
                        let reg = "/" + $("input#searchbar").val() + "/gi"; // 拼接正规表达式
                        $(this).html($(this).text().replace(eval(reg), `<span class="label label-secondary">${$("input#searchbar").val()}</span>`)); // 关键词加颜色凸显
                        $(this).show();
                    } else {
                        $(this).hide();
                    }
                });
                } catch { } // eslint-disable-line
            $(".e").hide(); // “无结果”隐藏
        }
        }
    } else {
        try {
            // 若搜索框内有文字，则不显示精选名言
            if (!$("input#searchbar").val()) {
                // 调整回来
                $(".search-list").hide();
                $(".search-history-list").show();
            }

            // 若搜索框内没有文字，就把高亮的调回来
            if (($("a#showall_item").html().indexOf("<span class=\"label label-secondary\">") != -1) && !$("input#searchbar").val()) {
                // 否则把高亮的取消
                $("a#showall_item").show();
                $("a#showall_item").each(function () {
                    $(this).html($(this).html().replace("<span class=\"label label-secondary\">", ""));
                    $(this).html($(this).html().replace("</span>", ""));
                });
            }

        } catch { } // eslint-disable-line
    }
    // 若无结果
    if ($($search)[0]["innerText"].match(/^\s*$/) != null) {

        if ($(".e").text() != "无结果") $(".e").text("无结果");
        $(".e").show();
    } else {
        // 否则隐藏“无结果”
        if ($("#searchbar").is(":focus") && $("input#searchbar").val()) {
            $(".e").hide();
        }
    }
};

// 没100ms执行一次
let _search = function () {
    MY_search();
    requestAnimationFrame(_search);
};
requestAnimationFrame(_search);

