const { promises: { readFile, writeFile } } = require('fs');
const path = require("path");
const log = console.log;
const SYMBLO_REGEXP = /\/\* @(.*?)!! \*\//g;
const MINGYAN_FILE_PATH = path.resolve(__dirname, "../../src/mingyan.js");

let newMingyan = [
    "数学潘哥：这是测试名言哦！",
    "啊啊啊啊：测试测试",
    "你好：啊啊啊啊啊啊啊",
    "数学老王：aaaaaaaaaaaaaaaa"
];

async function writeMingyan(opt = {}) {
    log("writeMingyan");
    let needWriteMingyan = opt.text;
    let originMingyanFile = await readFile(MINGYAN_FILE_PATH, "utf-8");
    log(originMingyanFile);
    /**
     * 获取所有的记号： \/* @[教师名]!! *\/
     */
    let symbol = originMingyanFile.match(SYMBLO_REGEXP);
    // =>["/* @XX老师!! */", "/* @XX老师!! */"]
    symbol = symbol.map(d => d.replace(`/* @`, "").replace(`!! */`, ""));
    // => ["XX老师", "XX老师"]
    log(symbol);

    let newMingyanFile = originMingyanFile;
    for (let my of newMingyan) {
        let raw_name = my.split("：")[0];
        // let raw_my = my.split("：")[1] + (my.split("：")[2] ? "：" : "") + (my.split("：")[2] || "");
        // 若包含已有的名言表示
        if (symbol.includes(raw_name)) {
            newMingyanFile = newMingyanFile.replace(`/* @${raw_name}!! */`, `"${my}",
    /* @${raw_name}!! */`);
        } else {
            newMingyanFile = newMingyanFile.replace(`/* @其它名言!! */`, `//====${raw_name}====
    "${my}",
    /* @${raw_name}!! */`);
        };
    };

    await writeFile(path.resolve(__dirname, "a.js"), String(newMingyanFile), "utf-8");
}

writeMingyan();