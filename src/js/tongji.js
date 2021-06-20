let _hmt = [];
(function () {
    /**
     * 百度统计代码
     */
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
})();

export { _hmt };