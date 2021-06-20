/**
 * 初始化fancybox的函数
 */
export let MY_initfancybox = function () {
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