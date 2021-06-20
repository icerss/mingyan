/**
 * 刷新彩蛋
 */
export let MY_addReloadTime = function () {
    reloadTime++;
    localStorage.setItem("___mingyan_reload_time__", reloadTime);
    // db(reloadTime);
    let title = "获得成就", text;
    switch (reloadTime) {
    case 10:
        text = "点击 100 次有惊喜";
        break;
    case 100:
        text = "点击 500 次有惊喜";
        break;
    case 500:
        text = "点击 1000 次有惊喜，\n很大的惊喜哦！";
        break;
    case 1000:
        text = "点击 10000 次有惊喜，\n你都到这一步了，干嘛不看看后面的惊喜呢？";
        break;
    case 10000:
        text = "你好无聊啊……";
        break;
    default:
        text = "";
    }
    // 弹窗
    if (text) {
        swal({
            title: title,
            text: text,
            icon: "success",
            button: "关闭",
        });
    }
};

$(document).on("click", "#reload_buttom", function() {
    MY_addReloadTime();
});
$(document).on("click", "reload", function() {
    MY_addReloadTime();
});