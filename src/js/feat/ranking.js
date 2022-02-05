import { MY_rankingApi } from "./rankingApi";
import { kv, kvName, qs, swal } from "../utils";

/**
 * 2021彩蛋主函数
 * 于 2021/08/09 重写
 */
export let MY_ranking = function() {
  if (new Date().getTime() < 1609430400000 /* 2021-01-01 00:00:00 */) return;
  if (new Date().getTime() > 1640451599000 /* 2021-12-25 24:59:59 */) return;
  if (
    navigator.userAgent.toString().indexOf("bot") != -1 &&
    navigator.userAgent.toString().indexOf("spider") !=
      -1 /* 防止搜索引擎激活 */
  )
    return;
  if (kv.get(kvName.rankingIp)) return;
  if (qs("force_action") == "skip_ranking" || qs("do") == "sr") {
    kv.put(kvName.rankingIp, "__SKIP__");
    return;
  }
  let id = null;
  let ip = null;
  let num = null;
  MY_rankingApi.getIp()
    .then(function(ipRes) {
      ip = ipRes.ip;
      return MY_rankingApi.add("一位不知道名字的访客", ip);
    })
    .then(function(addRes) {
      id = addRes.rid;
      return MY_rankingApi.getNum();
    })
    .then(function(numData) {
      num = numData.num;
      kv.put(kvName.rankingIp, ip);
      return swal({
        title: `第${num}个人！！`,
        text: `恭喜你成为2021年第${num}个查看名言的人！！`,
        icon: "success",
        content: {
          element: "input",
          attributes: {
            placeholder: "写个名字记录一下你是谁吧！",
            type: "text",
          },
        },
        closeOnClickOutside: false,
      });
    })
    .then(function(name) {
      if (!name) return (location.href = "./");
      return MY_rankingApi.update(id, name, num);
    })
    .then(function() {
      location.href = "./";
    })
    .catch(function(e) {
      console.error(e);
    });
};
