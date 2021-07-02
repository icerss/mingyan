import { mingyan, mingyanPicUrl, specialVerbList, solvePicUrl, mingyanSpecialEvent } from "../../mingyan";
import { hashName, picBaseUrl } from "../init";
import { db } from "../log";
import { randomNumber, qs } from "../tools";
let defaultTemplate = {
    "MY_text": {
        "full": "",
        "name": "",
        "mingyan": ""
    },
    "MY_conj": "曾经说过：",
    "MY_pic": {
        "show": false,
        "url": ""
    },
    "MY_click": {
        "action": {
            $swal: {
                "show": false,
                "tile": "",
                "content": ""
            },
            $music: {
                "show": false,
                "name": "",
                "artist": "",
                "url": "",
                "cover": "",
                "lrc": ""
            }
        }
    }
};

/**
 * 处理名言id
 * @param {*} id 名言id
 * @returns 名言id
 */
let handleId = function (id) {
    if (String(id) !== "undefined") id = String(id);
    if (id) return String(id);
    if (qs("id") != "") return qs("id"); // 如果有传入?id=xx就用传入的ID
    if (location.hash != "" && hashName[location.hash] != true /* 排除保留的hash路由地址 */) return location.hash.replace("#", "");
    if (localStorage.getItem("___mingyan_id__")) return localStorage.getItem("___mingyan_id__"); // 如果有储存上一次看到哪一条就用这个id
    return randomNumber(0, mingyan.length - 1); // 否则就随机生成
};

/**
 * 处理名言格式
 * @param {*} id 名言id
 */
let _handleMingyan = function (id) {
    this._id = handleId(id);
    this.format = defaultTemplate;

    let my = mingyan[this._id];
    this.format.MY_text.full = my;
    this.format.MY_text.name = my.split("：")[0];

    /* 防止名言中有字符“：” */
    this.format.MY_text.mingyan = my.split("：")[1] + (my.split("：")[2] ? "：" : "") + (my.split("：")[2] || "");
    this.format.MY_conj = specialVerbList[this.format.MY_text.mingyan] || this.format.MY_conj;

    if (this.format.MY_text.mingyan === "解") {
        /* 若名言为“解” */
        this.format.MY_pic.show = solvePicUrl[this.format.MY_text.name] ? true : false;
        this.format.MY_pic.show && (this.format.MY_pic.url = picBaseUrl + mingyanPicUrl[this.format.MY_text.name]);
    } else {
        /* 若名言为正常名言（名言不重复） */
        this.format.MY_pic.show = mingyanPicUrl[this.format.MY_text.mingyan] ? true : false;
        this.format.MY_pic.show && (this.format.MY_pic.url = picBaseUrl + mingyanPicUrl[this.format.MY_text.mingyan]);
    };

    this.format.MY_click.action.$swal.show = mingyanSpecialEvent.swal[this.format.MY_text.mingyan] ? true : false;
    if (this.format.MY_click.action.$swal.show) {
        this.format.MY_click.action.$swal.title = mingyanSpecialEvent.swal[this.format.MY_text.mingyan].title;
        this.format.MY_click.action.$swal.content = mingyanSpecialEvent.swal[this.format.MY_text.mingyan].text;
    };

    this.format.MY_click.action.$music.show = mingyanSpecialEvent.music[this.format.MY_text.mingyan] ? true : false;
    if (this.format.MY_click.action.$music.show) {
        this.format.MY_click.action.$music.artist = mingyanSpecialEvent.music[this.format.MY_text.mingyan].artist;
        this.format.MY_click.action.$music.name = mingyanSpecialEvent.music[this.format.MY_text.mingyan].name;
        this.format.MY_click.action.$music.url = mingyanSpecialEvent.music[this.format.MY_text.mingyan].url;
        this.format.MY_click.action.$music.lrc = mingyanSpecialEvent.music[this.format.MY_text.mingyan].lrc;
        this.format.MY_click.action.$music.cover = mingyanSpecialEvent.music[this.format.MY_text.mingyan].cover;
    };

    db(this);
    return this.format;
};

export function handleMingyan(id) {
    return new _handleMingyan(id)
};



export let _MY_ = {
    /**
     * 获取完整名言
     * @returns 完整名言
     */
    getFullMingyan(id) {
        return handleMingyan(id).MY_text.full;
    },
    /**
     * 获取人名
     * @returns 人名
     */
    getFullName(id) {
        return handleMingyan(id).MY_text.name
    },
    /**
     * 获取名言
     * @returns 名言
     */
    getFullText(id) {
        return handleMingyan(id).MY_text.text
    },
    /**
     * 获取名言连接词
     * @returns 名言
     */
    getConj(id) {
        return handleMingyan(id).MY_conj
    },
    /**
     * 获取音乐配置
     * @returns 配置
     */
    getMusicOptions(id) {
        return handleMingyan(id).MY_click.$music
    },
    /**
     * 获取弹窗配置
     * @returns 配置
     */
    getSwalOptions(id) {
        return handleMingyan(id).MY_click.$swal
    },
    /**
     * 获取图片配置
     * @returns 配置
     */
    getPicOptions(id) {
        return handleMingyan(id).MY_pic
    }
};

window["_MY_"] = _MY_;
window["handleMingyan"] = handleMingyan;
window["handleId"] = handleId;