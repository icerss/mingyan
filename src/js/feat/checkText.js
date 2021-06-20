/**
 * 文字彩蛋
 */
export let MY_checkText = function () {
    let text = $(".my--mingyan-text").text();
    let alTitle = "";
    let alText = "";
    if (text.indexOf("绿帽子") != -1) {
        alTitle = "Fuck ♂ You ♂";
        alText = "骚骚恪曾经说过：Fuck ♂ You ♂";
    }
    if (text.indexOf("垃圾真好吃") != -1) {
        alTitle = "获得成就";
        alText = "最美垃圾人";
    }
    if (text.indexOf("来一起唱啊！！") != -1) {
        alTitle = "获得成就";
        alText = "Shape OF You！";
        // 音乐惊喜
        let ap = new APlayer({
            container: document.getElementById("my--player"),
            fixed: true,
            lrcType: 3,
            audio: [{
                name: "Shape of You",
                artist: "Ed Sheeran",
                url: "https://s-sh-1943-pic1.oss.dogecdn.com/static%2Fmingyan-js-org%2FEd%20Sheeran%20-%20Shape%20of%20You.mp3",
                cover: "https://s-sh-1943-pic1.oss.dogecdn.com/2020/12/19/L1NY8U7nhRjyQMa.jpg",
                lrc: "https://s-sh-1943-pic1.oss.dogecdn.com/static%2Fmingyan-js-org%2FShape%20of%20You.lrc"
            }]
        });
        // 调整字幕位置
        // $(".aplayer .aplayer-lrc").css("transform", "translateY(-55px)");
        ap.play();
    }

    if (alText && alTitle) {
        swal({
            title: alTitle,
            text: alText,
            icon: "info",
            button: "关闭",
        });
    }
};

$(document).on("click", ".my--mingyan-text>div:first", function () {
    MY_checkText();
});