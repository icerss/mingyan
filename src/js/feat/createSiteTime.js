let now = new Date();
export let createtime = function () {
    let grt = new Date("04/30/2020 00:00:00");
    now.setTime(now.getTime() + 250);
    let days = (now - grt) / 1000 / 60 / 60 / 24;
    let dnum = Math.floor(days);
    let hours = (now - grt) / 1000 / 60 / 60 - (24 * dnum);
    let hnum = Math.floor(hours);
    if (String(hnum).length == 1) {
        hnum = "0" + hnum;
    }
    let minutes = (now - grt) / 1000 / 60 - (24 * 60 * dnum) - (60 * hnum);
    let mnum = Math.floor(minutes);
    if (String(mnum).length == 1) {
        mnum = "0" + mnum;
    }
    let seconds = (now - grt) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
    let snum = Math.round(seconds);
    if (String(snum).length == 1) {
        snum = "0" + snum;
    }
    try {
        document.getElementById("more-times").innerHTML = dnum + " 天 " + hnum + " 小时 " + mnum + " 分 " + snum + " 秒";
    } catch { } // eslint-disable-line
};
try {
    setInterval(createtime, 250);
} catch { } // eslint-disable-line
