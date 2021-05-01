<!-- Start contribute.html -->

<style>
    h1[data-id="page.contribute"] {
        font-size: 30px;
        text-align: center;
    }
    label[data-id="page.contribute"] {
        font-size: 15px;
        font-weight: 100;
    }
    input[data-id="page.contribute"] {
        margin-bottom: 10px;
        height: 38px;
        border-radius: 5px;
        background: transparent;
    }
    #form-story[data-id="page.contribute"] {
        background: transparent;
        border-radius: 5px;
        height: 150px;
    }
    #submit[data-id="page.contribute"] {
        width: 134px;
        height: 36px;
        border-radius: 5px;
    }
</style>
<div id="contribute-form" class="container" data-id="page.contribute">
    <div class="columns" data-id="page.contribute">
        <div class="column col-12" data-id="page.contribute">
            <div class="form-group" data-id="page.contribute">
                <h1 data-id="page.contribute">名言投稿</h1>
                <label class="form-label" for="form-name" data-id="page.contribute">昵称</label>
                <input class="form-input" type="text" id="form-name" placeholder="请输入昵称" data-id="page.contribute" required >
                <label class="form-label" for="form-school" data-id="page.contribute">学校（选填）</label>
                <input class="form-input" type="text" id="form-school" placeholder="选填" data-id="page.contribute">
                <label class="form-label" for="form-class" data-id="page.contribute">班级（选填）</label>
                <input class="form-input" type="text" id="form-class" placeholder="选填" data-id="page.contribute">
                <label class="form-label" for="form-mail" data-id="page.contribute">邮箱（选填）</label>
                <input class="form-input" type="mail" pattern="^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$" id="form-mail" placeholder="选填，若您的名言被入选，我们将会第一时间联系您" data-id="page.contribute">
                <label class="form-label" for="form-mingyan" data-id="page.contribute">名言</label>
                <input class="form-input" type="text" id="form-mingyan" placeholder="格式：老师名 + 名言"
                    data-id="page.contribute" required >
                <label class="form-label" for="form-story" data-id="page.contribute">名言故事（选填）</label>
                <textarea id="form-story" placeholder="有机会选入ERSS名言微信公众号哦！" rows="10"
                    data-id="page.contribute"></textarea>
            </div>
            <button class="btn btn-primary" id="submit" onclick="submit()" data-id="page.contribute">提交</button>
        </div>
    </div>
</div>
<script>
    function submit() {
        // let apiUrl = "http://localhost:3000/api/contribute";
        let apiUrl = "https://star-api.xhemj.now.sh/api/contribute";
        let name = $("#form-name").val();
        let school = $("#form-school").val();
        let classname = $("#form-class").val();
        let my = $("#form-mingyan").val();
        let story = $("#form-story").val();
        let mail = $("#form-mail").val();
        //
        if (!name) {
            $("#form-name").addClass("is-error");
            return
        };
        //
        if (!my) {
            $("#form-name").removeClass("is-error");
            $("#form-mingyan").addClass("is-error");
            return
        };
        //
        $("#form-name").removeClass("is-error");
        $("#form-mingyan").removeClass("is-error");
        $("#submit").addClass("loading");
        //
        fetch(apiUrl, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "event": "mingyan-contribute",
                "data": {
                    "my": my,
                    "name": name,
                    "story": story,
                    "class": classname,
                    "school": school,
                    "mail": mail,
                    "t": new Date().getTime()
                }
            })
        }).then(res => {
            console.log(res);
            $("#submit").removeClass("loading");
        //
            swal({
                title: "名言投稿成功！",
                text: "名言：" + my + "\n请等待审核",
                icon: "success",
                button: "关闭",
                closeOnClickOutside: false
            })
            .then(function () {
                location.href = "./?from=mingyan-contribute";
            })
        }).catch(function (e) {
            console.error(e);
            $("#submit").removeClass("loading");
            swal({
                title: "名言投稿失败！",
                text: "建议稍后再试",
                icon: "error",
                button: "关闭",
                closeOnClickOutside: false
            });
        })
    }
</script>

<!-- End contribute.html -->