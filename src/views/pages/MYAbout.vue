<template>
  <div class="my--about">
    <!-- Start about.html -->
    <h1><strong>耳斯名言</strong></h1>
    <hr />

    <h1>制作人员</h1>
    <ListItem
      href="#"
      imgSrc="https://cdn.erssmy.com/image/2021/05/23/Tp9Q5qaP8A1cG2C.jpg"
    >
      <h3>IYAMAYA菌屋工作室</h3>
    </ListItem>

    <h2>策划：</h2>
    <ListItem
      href="https://space.bilibili.com/337073401"
      imgSrc="https://cdn.erssmy.com/image/2020/11/01/pzaTck9KuqJdHyv.jpg"
      @click="addClickTime('1')"
    >
      <h3>解恪布TOY</h3>
    </ListItem>

    <h2>网页：</h2>
    <ListItem
      href="https://space.bilibili.com/226208916"
      imgSrc="https://cdn.erssmy.com/image/2021/04/05/Bext3hDK1nrZM7y.png"
      @click="addClickTime('2')"
    >
      <h3>Xhemj</h3>
    </ListItem>

    <h2>美术：</h2>
    <ListItem
      href="https://space.bilibili.com/337073401"
      imgSrc="https://cdn.erssmy.com/image/2020/11/01/pzaTck9KuqJdHyv.jpg"
      @click="addClickTime('1')"
    >
      <h3>解恪布TOY</h3>
    </ListItem>

    <h2>推广：</h2>
    <ListItem
      href="https://space.bilibili.com/337073401"
      imgSrc="https://cdn.erssmy.com/image/2020/11/01/pzaTck9KuqJdHyv.jpg"
      @click="addClickTime('1')"
    >
      <h3>解恪布TOY</h3>
    </ListItem>
    <ListItem
      href="https://space.bilibili.com/368095014"
      imgSrc="https://cdn.erssmy.com/image/2020/11/01/ejgOW7QY8MFmDU5.jpg"
      @click="addClickTime('3')"
    >
      <h3>Oranjezelf</h3>
    </ListItem>

    <hr />

    <h1 style="text-align: center; font-size: 22px">
      <a
        class="link-to"
        target="_blank"
        rel="nofollow ugc"
        href="https://mp.weixin.qq.com/s/30jSF8UCw2Pof02_Y7tGYw"
        >耳斯名言是啥？</a
      >
    </h1>
    <h1 style="text-align: center; font-size: 22px">
      <router-link class="link-to" to="faq">如何玩转耳斯名言？</router-link>
    </h1>

    <hr />

    <h1>特别感谢</h1>
    <ListItem>厦门市音乐学校</ListItem>
    <ListItem>厦大食堂</ListItem>
    <ListItem>ERSS 恪人族</ListItem>
    <ListItem>英语俞老师</ListItem>
    <ListItem>厦门市音乐学校的全体老师和同学们</ListItem>

    <h1>联系</h1>
    <ListItem
      description="1084808352"
      href="https://jq.qq.com/?_wv=1027&k=jKy2qW7R"
      ><a-icon type="qq" /> QQ交流群</ListItem
    >
    <ListItem
      description="feedback@erssmy.com"
      href="mailto:feedback@erssmy.com"
      ><a-icon type="mail" /> 反馈邮箱</ListItem
    >
    <ListItem
      description="https://github.com/icerss/mingyan"
      href="https://github.com/icerss/mingyan"
      ><a-icon type="github" /> Github</ListItem
    >

    <hr />

    <div class="google-recaptcha-tip">
      <a-icon type="info-circle" /> This site is protected by reCAPTCHA and the
      Google
      <a
        href="https://policies.google.cn/privacy"
        target="_blank"
        rel="nofollow"
        >Privacy Policy</a
      >
      and
      <a href="https://policies.google.cn/terms" target="_blank" rel="nofollow"
        >Terms of Service</a
      >
      apply.
    </div>

    <!-- End about.html -->
  </div>
</template>

<script>
const ListItem = () => import("../../components/ListItem.vue");
import { fadeIn, querySelector, swal } from "../../js/utils";

export default {
  name: "MYAbout",
  components: {
    ListItem,
  },
  data() {
    return {
      clickTime: "",
    };
  },
  mounted() {
    fadeIn(".my--about");
  },
  watch: {
    clickTime() {
      let root = this;
      console.log(this.clickTime);
      if (
        this.clickTime.indexOf("1") &&
        this.clickTime.indexOf("2") &&
        this.clickTime.indexOf("3")
      ) {
        swal({
          title: "获得成就",
          text: "[]~(￣▽￣)~*]",
          icon: "info",
          button: "关闭",
        }).then(function () {
          querySelector("body").style.transition = "transform 1s ease 0s";
          querySelector("body").style.transform = "rotateY(180deg)";
          root.clickTime = "";
        });
      }
    },
  },
  methods: {
    addClickTime(name) {
      this.clickTime += name;
    },
  },
};
</script>

<style scoped>
.my--about {
  text-align: left;
}

hr {
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  height: 0;
  overflow: visible;
  border: 0;
  border-top: 0.1rem solid #f4f5f6;
  margin: 3rem 0;
}

.link-to {
  text-decoration: underline;
  cursor: pointer;
  color: #5676dc;
}

.google-recaptcha-tip,
.google-recaptcha-tip > a {
  color: rgba(0, 0, 0, 0.45);
}

.google-recaptcha-tip > a {
  text-decoration: underline;
}
</style>
