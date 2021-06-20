import { mingyan1, mingyan2, mingyan3 } from "../../mingyan";
import { randomNumber } from "../tools";
import { MY_findmingyan } from "./findMingyan";

/**
 * 设置名言显示概率
 * @returns 名言id
 */
export let checkProbability = function () {
    let otherMingyan = [
        ...mingyan1,  // eslint-disable-line
        ...mingyan3  // eslint-disable-line
    ];
    let chance = {
        "数学潘哥": "1,2,3,4,5,6" // 大约14%
    };
    let n = randomNumber(0, 40);
    if (chance["数学潘哥"].indexOf(n) != -1) return MY_findmingyan(mingyan2[randomNumber(0, mingyan2.length - 1)]);  // eslint-disable-line
    return MY_findmingyan(otherMingyan[randomNumber(0, otherMingyan.length - 1)]);
};

/*

let sum = [];
let teacher = [
    "数学老王",
    "英语老俞",
    "数学潘哥",
    "语文老朱",
    "物理刘老师",
    "物理王老师",
    "地理吴老师",
    "地理朱老师",
    "政治王老师",
    "化学吴老师",
    "历史李老师",
    "美术林老师",
    "体育吴老师",
    "体育俞老师",
    "生物吴老师",
    "音乐苏老师",
    "历史杰哥",
    "恪人",
    "耳斯恪",
    "Oranjezelf",
    "解恪布TOY",
    "xhemj",
    "小菊",
    "小柳DJ",
    "吹恪",
    "八班",
    "保安",
    "学校",
];
for (let i of teacher) {
    let name = i; // 人名
    let time = 99999; // 测试次数

    let count = 0;
    for (let i = 0; i < time; i++) {
        let my = mingyan[_checkMingyan()];
        if (my.indexOf(name) != -1) count++
    };
    db("===========================");
    db(`测试次数：${time} 次`)
    db(`测试人名：${name}`)
    db(" 命中次数   |   概率（%）");
    db(`   ${count}    |   ${((count / time) * 100).toFixed(3)}`);
    db("===========================");
    sum.push(`${i}：${((count / time) * 100).toFixed(3)} %`);
};
db(sum);

*/