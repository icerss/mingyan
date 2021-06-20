import { qs } from "../tools";
import { MY_autoReload } from "./autoReload";
import { MY_decodeMingyan } from "./share";
import { MY_show } from "./show";

export default (function () {
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
            MY_show();
            // db("s1");
        });
        switch (qs("force_action") || qs("do")) {
        case "clear_save":
            localStorage.removeItem("___mingyan_2021_ranking_data__");
            break;
        case "auto_reload":
            // 自动刷新名言
            MY_autoReload();
            break;
        }
        break;
    default:
        // 也应该是废弃了 2021-01-24
        if (location.pathname.split("/")[1].length == 32) {
            let id = MY_decodeMingyan(location.pathname.split("/")[1]);
            let myid = new Number(id);
            $(document).ready(function () {
                MY_show(myid.toString());
                // db("s2");
            });
        } else {
            // 否则返回404
            clearInterval(search);
            location.href = "./";
        }
    }
})();