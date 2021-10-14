import router from "../router";
import { kv, kvName, randomNumber } from "./utils";
import { mingyan } from "./rawMingyan";

export { mingyan };
/**
 * 格式：
 * "名言": "图片链接"
 */
export let mingyanPicUrl = {
  // eslint-disable-line
  虾扯蛋: "/2020/10/16/TQ3i5EH2wD9KF6d.jpg",
  //https://xhemj.coding.net/api/share/download/5642985d-4d3d-40e8-8196-686744cb84f8
  //https://ae01.alicdn.com/kf/U4cc17e6537ff4e0ea028b59088da67aeJ.jpg
  真让人头大: "/2020/12/05/QiXVSahT3kAJf6B.jpg",
  对称轴平行: "/2020/12/05/qv1RkDBbt6CyEJf.jpg",
  零食杜绝: "/2020/12/05/SWx85EvdXBOqloJ.jpg",
  耳散伞: "/2020/12/05/jpH7LQiaqTnXyCf.jpg",
  歪瓜裂枣: "/2020/12/05/6k7czyYqmfvlWPn.jpg",
  悲伤: "/2020/12/05/hHv8U3EGt4P12IX.jpg",
  肾虚: "/2020/12/05/wBHo8kezKDnEcAP.jpg",
  眉目清秀: "/2020/12/05/KQsc8YDEHf1vi2x.jpg",
  困死了: "/2020/12/05/lmcDK2MCrO8nAtw.jpg",
  我在打麻将: "/2020/12/05/QwzvoYL1daXq8in.jpg",
  松鼠: "/2020/12/05/C1Zq9nXfaTW2hDe.jpg",
  来看王雷吧: "/2020/12/05/Uxg3OpL2eBArP7s.jpg",
  跑面: "/2020/12/05/UAV5BHjlwQxcznN.jpg",
  绿帽子: "/2020/12/05/TNgspLGvQWVKxCw.jpg",
  "搞那么夸张干什么啊？": "/2020/12/06/5yaWEP1KdwVcCIu.png",
  垃圾真好吃: "/2020/12/19/kDxAfJ8dg7IlhaO.png",
  "我先吃柠檬，你先别吃，好吃": "/2020/12/22/UPHZQG8YszhRgpb.png",
  "卷星人冲击波！": "/2020/12/20/TuGmYhQX9LorMZc.jpg",
  赌金: "/2020/12/20/aRZ8pVl7WgmOJUv.jpg",
  老王乌贼: "/2020/12/20/2j1cZKYHwFQlDdC.jpg",
  "Boom！": "/2020/12/20/9p64wZyFHB8DblA.jpg",
  功夫面条: "/2020/12/20/XkAf3Oq9PEyQmpI.jpg",
  水果战车: "/2020/12/20/JBilT9zCbkI1LKN.jpg",
  "替身：面条达人！": "/2020/12/22/T8C2Hjm74Ookfp6.jpg",
  茶水: "/2021/01/24/QZK5byJdHUMeqsA.jpg",
  食堂培训: "/2021/01/24/CtmquGIc1R8POUB.jpg",
  用棉签在印度上蘸一下: "/2021/01/24/tks4pfNIKHq3OoW.jpg",
  "S=πRL": "/2021/01/24/cRoKMvYzsqfrJ5u.jpg",
  异形: "/2021/01/24/8PEfXgCdY2HztKc.jpg",
  试唱反鸡战: "/2021/01/24/5XklGSjdhaNufxg.jpg",
  天外来J: "/2021/01/24/bXc6UHY4JtGWTQn.jpg",
  跑面节: "/2021/01/24/PnvmZFb96yzsLYK.jpg",
  面包: "/2021/01/24/ulS3M2oRcmyNQqZ.jpg",
  小菊快跑: "/2021/03/30/4XhOQvIlUCzgkPd.jpg",
  "非常近，很快就到了": "/2021/05/16/NTpS7jGxJnwiodt.png",
  "祝潘哥生日快乐！": "/2021/10/13/rQkc3dqw6oRYvAF.jpg",
  /* @图片地址!! */
};
/**
 * 格式：
 * "名言": "动词"
 */
export let specialConjList = {
  // eslint-disable-line
  松鼠: "的课本上</br>曾经出现过",
  来看王雷吧: "曾经在语文课上说过",
  零食杜绝: "曾经出现过",
  耳散伞: "曾经有过",
  略带黄色的淡蓝色: "的视频中</br>曾经说过",
  "毁三观！": "在看木吉时</br>说过",
  "我一直都在操场上啊！": "在为自己找</br>借口时说过",
  "比如说我这个SB......": "在为自己找</br>借口时说",
  大长比小长: "在讲两个矩形时说过",
  你可以变态不可以变性: "在讲词性时说过",
  农场深处的老家: "曾经吹过",
  小菊快跑: "曾经玩过",
  /* @连接词地址!! */
};
/**
 * 格式：
 * "名字": "图片链接"
 */
export let solvePicUrl = {
  // eslint-disable-line
  数学老王: "/2020/11/01/KPVwxYQXM2fLODN.jpg",
  数学潘哥: "/2020/11/01/iTkIWzwKaL92otl.jpg",
  语文老朱: "/2020/11/01/xvUdlJW8XG1zbeZ.jpg",
  英语老俞: "/2020/11/01/lURnTwHouGbM8B7.jpg",
};

export let mingyanSpecialEvent = {
  swal: {
    绿帽子: {
      title: "Fuck ♂ You ♂",
      text: "骚骚恪曾经说过：Fuck ♂ You ♂",
    },
    垃圾真好吃: {
      title: "获得成就",
      text: "最美垃圾人",
    },
    "来一起唱啊！！": {
      title: "获得成就",
      text: "Shape OF You！",
    },
  },
  music: {
    "来一起唱啊！！": {
      name: "Shape of You",
      artist: "Ed Sheeran",
      url:
        "https://cdn.erssmy.com/image/static%2Fmingyan-js-org%2FEd%20Sheeran%20-%20Shape%20of%20You.mp3",
      cover: "https://cdn.erssmy.com/image/2020/12/19/L1NY8U7nhRjyQMa.jpg",
      lrc:
        "https://cdn.erssmy.com/image/static%2Fmingyan-js-org%2FShape%20of%20You.lrc",
    },
  },
};

export let getNowId = function() {
  let routerPath = router.history.current.fullPath;
  if (/\d/.test(routerPath.split("/@")[1])) return routerPath.split("/@")[1];
  return /#\d/.test(location.hash)
    ? location.hash.split("#")[1]
    : window["nowId"];
};

let i = 0;
export let genNextId = function() {
  window["nowId"] = randomNumber(0, mingyan.length - 1);
  let date = new Date().getTime();
  if (date >= 1634054400000 && date <= 1634140800000 && i === 1) {
    window["nowId"] = 486; // 潘哥生日彩蛋
    i = 0;
  } else {
    i = 1;
  }
  kv.put(kvName.mingyanId, window["nowId"]);
  return window["nowId"];
};

export let formatMingyan = function(input) {
  let _my = "";
  if (String(Number(input)) === "NaN") {
    _my = input;
  } else {
    _my = mingyan[input];
  }
  let teacher = _my.split("：")[0];
  let text =
    _my.split("：")[1] +
    (_my.split("：")[2] ? "：" : "") +
    (_my.split("：")[2] || "");
  return { teacher, text };
};

window["mingyan"] = mingyan;
window["nowId"] =
  window["my_cfg"].specifyId ||
  window["nowId"] ||
  kv.get(kvName.mingyanId) ||
  randomNumber(0, mingyan.length - 1) ||
  0;
