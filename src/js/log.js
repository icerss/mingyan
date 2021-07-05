/**
 * 控制台输出
 */
function _db() {
    let dn = 1;
    return function (...str) {
        let special1 = "";
        let special2 = "";
        console.log(`[耳斯名言]${new Date().getHours()}:${new Date().getMinutes()} #${dn} -> ${special1}`, ...str, special2);
        dn++;
    };
};
export let db = _db();
export let log = _db()
window["log"] = log;