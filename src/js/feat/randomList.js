import { mingyan, mingyan1, mingyan3 } from "../../mingyan";
import { randomNumber } from "../tools";

/**
 * 是否存在某一项
 * @param {*} val 值
 */
Array.prototype.indexOf = function (val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
    }
    return -1;
};

/**
 * 删除某一项
 * @param {*} val 值
 */
Array.prototype.remove = function (val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
    return this;
};

/**
 * 随机展示名言的预随机列表
 */
export let MY_randomList = {
    "list": [], // 储存名言id
    "data": {
        _my1: mingyan1, // eslint-disable-line
        _my2: mingyan, // eslint-disable-line
        _my3: mingyan3, // eslint-disable-line
        _otherMingyan: [
            ...mingyan1, // eslint-disable-line
            ...mingyan3 // eslint-disable-line
        ]
    },
    "chance": {
        "数学潘哥": "1,2,3,4,5,6" // 大约14%
    },
    "done": false,
    "nowListId": 0,
    "checkProb": function () {
        let prob = randomNumber(0, 40);
        if (this.chance["数学潘哥"].indexOf(prob) != -1) {
            let n = randomNumber(0, this.data._my2.length - 1);
            let my = this.data._my2[n];
            this.data._my2.remove(my);
            return my;
        }
        let n = randomNumber(0, this.data._otherMingyan.length - 1);
        let my = this.data._otherMingyan[n];
        this.data._otherMingyan.remove(my);
        return my;
    },
    "getNext": function () {
        if (this.nowListId > this.list.length - 5) {
            this.init();
        }
        this.nowListId++;
        let o = this.list[this.nowListId];
        if (!o) {
            this.nowListId++;
            return this.getNext();
        }
        return this.list[this.nowListId];
    },
    "getPrev": function () {
        this.nowListId = (this.nowListId-- == 0 ? 0 : this.nowListId--);
        return this.list[this.nowListId];
    },
    "init": function () {
        this.list = [];
        this.nowListId = 0;
        this.data = {
            _my1: mingyan1, // eslint-disable-line
            _my2: mingyan2, // eslint-disable-line
            _my3: mingyan3, // eslint-disable-line
            _otherMingyan: [
                ...mingyan1, // eslint-disable-line
                ...mingyan3 // eslint-disable-line
            ]
        };
        for (let i = 0; i < 100; i++) {
            this.list.push(this.checkProb());
        }
        if (this.list.length == 300) this.done = true;
        return this.list;
    }
};

MY_randomList.init();