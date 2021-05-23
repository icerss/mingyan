/**
 * 控制台输出
 */
let dn = 1;
function db(i) {
    let special1 = "";
    let special2 = "";
    console.log(`[ERSS名言]${new Date().getHours()}:${new Date().getMinutes()} #${dn} -> ${special1}`, i, special2);
    dn++;
}

module.exports.db = db;