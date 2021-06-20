import { db } from "../log";

/**
 * 控制台输出彩蛋
 * （知不知道我做这个彩蛋我弄了多久……）
 */
export let MY_console = function () {
    let purple = "font-weight: 900;color: #9b4dca;font-size: 15px";
    let yellow = "font-weight: 900;color: #ffb700;font-size: 15px";
    db("欢迎！");
    console.log("\n" +
        "%c诗曰：                  %c________\n%c" +
        "  王颢维尼熊猫，        %c| ERSS |\n%c" +
        "  老杜金门菜刀，        %c| 名言 |\n%c" +
        "  老王还在抠脚。        %c|______|\n%c" +
        "  三天之内，\n" +
        "  抠出一根面条。\n" +
        "      ————— 天净沙·梗" +
        "\n", purple, yellow, purple, yellow, purple, yellow, purple, yellow, purple); // 就是这一段颜色做了好久……
    fetch("https://api.github.com/repos/xhemj/mingyan/commits")
        .then(r => r.json())
        .then(function (res) {
            db(`版本：${res[0]["sha"].slice(0, 7)}`);
        });
};