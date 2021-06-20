import { MY_rankingApi } from "./rankingApi";
import { qs } from "../tools";

/**
 * 2021彩蛋主函数
 */
export let MY_ranking = function () {
    if (new Date().getTime() < 1609430400000 /* 2021-01-01 00:00:00 */) return;
    if (navigator.userAgent.toString().indexOf("bot") != -1 && navigator.userAgent.toString().indexOf("spider") != -1 /* 防止搜索引擎激活 */) return;
    if (localStorage.getItem("___mingyan_2021_ranking_data__")) return;
    if (qs("force_action") == "skip_ranking" || qs("do") == "sr") {
        localStorage.setItem("___mingyan_2021_ranking_data__", "__SKIP__");
        return;
    }
    let id = null;
    let ip = null;
    let num = null;
    MY_rankingApi.getIp() // 先来一个ip看看
        .then(function (ip_data) {
            // db(ip_data.ip);
            ip = ip_data.ip;
            // 如果没有存过数据
            // db("新用户");
            localStorage.setItem("___mingyan_2021_ranking_data__", `__${ip}__`);  // 那就存一个吧
            return MY_rankingApi.add("一位不知道名字的访客", ip);
        }) // 默认给一个名字
        .then(function (add_data) {
            localStorage.setItem("___mingyan_2021_ranking_data__", `__${ip}__`);  // 不知道为什么要再存一遍，但不想删了
            id = add_data.result.res.id; // 留id以便于之后更新名字
            return MY_rankingApi.getNum();
        })
        .then(function (num_data) { // 获取当前排名
            num = num_data["result"]["res1"]["data"][0]["num"];
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
                return MY_rankingApi.update(id, name, num);
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