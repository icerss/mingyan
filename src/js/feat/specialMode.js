// import { mingyan, mingyanPicUrl, specialVerbList } from "../../mingyan";
// import { $footer } from "../init";
// import { db } from "../log";
// import { htmlTemp } from "../templete";
// import { showPop } from "../tools";
// import { MY_specialModeApi } from "./specialModeApi";

// // 施工中……

// let isErr = false;
// /**
//  * 隐藏名言：储存名言
//  */
// export let MY_readSpecialMingyan = function (my) {
//     if (!my) return;
//     mingyan = mingyan || [];
//     mingyanPicUrl = mingyanPicUrl || {};
//     specialVerbList = specialVerbList || {};
//     sessionStorage.setItem("___mingyan_special_data__", JSON.stringify(my));
//     location.reload();
// };

// /**
//  * 隐藏名言：展示名言
//  */
// export let MY_writeSpecialMingyan = function (my) {
//     if (!sessionStorage.getItem("___mingyan_special_data__")) return (new Promise(function (resolve) { resolve(); }));
//     if (!sessionStorage.getItem("___mingyan_is_special_mode__")) return (new Promise(function (resolve) { resolve(); }));
//     db("specialmode");
//     return new Promise(function (resolve) {
//         my = my || JSON.parse(sessionStorage.getItem("___mingyan_special_data__"));
//         if (my.length) {
//             for (let i = 0; i < my.length; i++) {
//                 let text = my[i]["text"].split("：")[1];
//                 window["mingyan"].push(my[i]["text"]);
//                 window["mingyanPicUrl"][text] = my[i]["pic"];
//                 window["specialVerbList"][text] = my[i]["verb"];
//             }
//             $(".my--header").addClass("my--special-mode");
//             $($footer).addClass("my--special-mode");
//         }

//         resolve();
//     });
// };

// /**
//  * 隐藏名言
//  */
// export let MY_specialMode = function () {
//     let loading = htmlTemp.SMAILL_LOADING_SVG;
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
//     MY_specialModeApi.gettoken()
//         .then(function (rftoken) {
//             tk = rftoken;
//             return MY_specialModeApi.getquestion(rftoken);
//         }).then(function (question) {
//             q = question;
//             let text = "回答问题查看更多名言！";
//             if (isErr) text = "回答错误或已超时，请重新回答";
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
//             return MY_specialModeApi.verify(tk, q, answer);
//         }).then(function (res) {
//             // 成功
//             isErr = false;
//             db(res);
//             let s_title = res["welcome-title"];
//             let s_msg = res["welcome-msg"];
//             let s_mingyan = res["S-mingyan"];
//             MY_readSpecialMingyan(s_mingyan);
//             swal({
//                 title: s_title,
//                 text: s_msg,
//                 icon: "info",
//                 button: "关闭",
//             });
//             isSpecialMode = true;
//             sessionStorage.setItem("___mingyan_is_special_mode__", true);
//         }).catch(function (err) {
//             showPop({
//                 "text": err
//             });
//             MY_specialMode();
//             isErr = true;
//         });
// };
// // fix
// // $(document).on("click", ".my--mingyan-boy", function() {
// //     MY_specialMode();
// // })


