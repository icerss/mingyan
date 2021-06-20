import { MY_showAll } from "./showAll";

/**
 * 打印功能
 */
export let MY_print = function () {
    MY_showAll();
    let oldstr = $("body").html();
    let headstr = "<title>ERSS名言 · ERSS</title>";
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