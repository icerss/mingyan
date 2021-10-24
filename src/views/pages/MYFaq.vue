<template>
  <div class="my--faq">
    <pre class="markdown-raw">
      <!-- Start faq.html -->
<div data-id="page.faq">
<h1 style="text-align: center" class="markdown-title">🍕一篇文章教你如何玩转耳斯名言🍕 <br/> （FAQ）</h1>

<blockquote>
<p>文档更新日期：2021年5月2日</p>
</blockquote>

# 浏览名言相关：

## Q：如何刷新名言？/ 怎么看不到别的名言了？
## A：仔细看哦，在每条名言的下方都可以点击刷新哦
![](https://cdn.erssmy.com/image/2021/05/02/bDscHVdMeUj9Zmn.png)

---

## Q：我找到了刷新的地方，但字也太小了吧！/ 拜托，刷新字那么小怎么看？
## A：没关系，我们的开发人员最 ~~体贴人了哦(不是)~~ ，右上角有一个大大的按钮哦
![](https://cdn.erssmy.com/image/2021/05/02/RFcjmBOUzKYCdq7.png)

---

## Q：如何搜索名言？/ 怎么看我想看的名言？/ 有什么推荐看的名言吗？
## A：右上角那么大的一个搜索嘞！
![](https://cdn.erssmy.com/image/2021/05/02/n6qhzDQOefLUybV.png)

---

## Q：为什么无法点赞？/ 点赞数很久都卡不出来？/ 为什么加载那么久？
## A：别那么心急嘛！首次查看等个3秒钟就好啦！这主要还是因为我们使用的是[vercel](https://vercel.com/dashboard)的云函数来开发的点赞功能，而它们的的云函数会有休眠措施，只要长时间不用就会休眠。所以， ~~多多点赞就可以造福人类啦~~ ~~

---

## Q：妈妈我看不到排行榜啊！/ 排行榜加载不出来 / 为什么加载花那么长时间？
## A：这点和上面一点是一样的原因哦！等个3秒就ok啦！

---

## Q：为什么还要回答问题？/ 隐藏名言是什么鬼？
## A：这里面呢主要是放一些我们班级自己班里的东西，所以就暂时不开放咯~~

---

## Q：如何投稿名言？
## A：投稿名言在更多页面的`名言投稿`那里，也可以直接点击[链接](https://www.erss.club/#/submit)直达。

---

# 评论区相关：

## Q：妈妈我想评论！/ 为什么找不到在哪里留言？/ 有没有评论区？
## A：有的有的，点击左上角的`更多`进入更多页面就可以留言啦！
![](https://cdn.erssmy.com/image/2021/05/02/8cOp1oRtgKqCsMk.png)

---

## Q：头像咋搞的？好炫酷 / 如何更换评论区头像？
## A：别急！评论区的头像用了[Gravatar](https://cn.gravatar.com/)的头像，要换头像的可以去那里注册个账号换头像就好啦。再不会的就百度去搜搜吧
![](https://cdn.erssmy.com/image/2021/05/02/qoUKulr1j9mdJQA.png)

---

## Q：为什么上不了Gravatar？/ 为什么按照你的方法还是进不去换头像的网站？
## A：呃，这个……你可能需要下面这一样东西来辅助你上这个网……又或者你可以直接使用你发评论的邮箱发有你的头像的邮件给我（[xhemj@erss.club](mailto:xhemj@erss.club)）。
![](https://cdn.erssmy.com/image/2021/05/02/2yNOgC1WihkcaXl.png)

---

## Q：评论区为什么一定要填邮箱？
## A：评论区使用了Gravatar的评论头像，而它就是靠邮箱来给每个用户他自己的头像的，所以要填呀！

---

## Q：为什么换了头像还是没有变化？
## A：为了节省图片流量，所有图片都加了强缓存，只需要去浏览器那里清除一下缓存就可以了。

---

## Q：有没有更简单的使用头像的方式？/ 填QQ号又是什么鬼？
## A：有有有！你只需要在昵称处填写你的QQ号，就会自动显示你的QQ头像啦！

---

# 其它相关：

## Q：有没有联系方式？/ 怎么找到你们？/ 小哥哥，加个QQ呗~~
## A：来了来了！在最底下就有呀`交流群`呀！再不行就看这里吧
| 渠道 | 加入方式 |
| :------: | :------: |
| QQ群 | [点我加入](https://jq.qq.com/?_wv=1027&k=jKy2qW7R) |
| 邮箱 | [xhemj@erss.club](xhemj@erss.club) |
| 微信公众号 | 微信搜索`ERSS名言` |
| 评论区 | [更多页面](https://www.erss.club/#/more) |
| 投稿区 | [投稿页面](https://www.erss.club/#/submit) |

---

## Q：LOGO真好看！谁画的？
## A：~~确实好看！~~ LOGO是`解恪布TOY`画的呀。
![](https://cdn.erssmy.com/image/2021/05/23/ldzxMt9PYQ3LNyU.png)

---

## Q：你们做这个，老师不会生气——吧！
## A：也许不会。谁知道呢\[doge\]

</div>
<!-- END faq.html -->
    </pre>
    <div class="markdown-html" v-html="rawHtml"></div>
  </div>
</template>

<script>
import marked from "marked";
import { fadeIn, querySelector } from "../../js/utils";

export default {
  name: "MYFaq",
  data() {
    return {
      rawHtml: "",
    };
  },
  mounted() {
    fadeIn(".my--faq");

    marked.setOptions({
      breaks: true,
    });
    this.rawHtml = marked(querySelector(".markdown-raw").innerHTML);
    querySelector(".markdown-raw").remove();
  },
};
</script>

<style>
.markdown-raw {
  display: none;
}

.markdown-title {
  color: #5676dc;
}

.markdown-html {
  text-align: left;
}

h2 {
  font-size: 2rem;
}

code {
  font-family: "ZCOOL KuaiLe";
}

img {
  border-radius: 5px;
  max-width: 400px;
}

.markdown-html {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}

@media (max-width: 767px) {
  .markdown-html {
    padding: 15px;
  }
}
</style>
