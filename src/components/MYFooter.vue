<template>
  <footer class="my--footer">
    <div class="my--footer-normal" v-if="!mode || mode === 'normal'">
      <div class="my--footer-html">
        当前名言数量：{{ length }}<br />
        <router-link class="my-el-a" to="/submit">投稿</router-link
        >&nbsp;&nbsp;|&nbsp;&nbsp;
        <router-link class="my-el-a" to="/search">搜索</router-link
        >&nbsp;&nbsp;|&nbsp;&nbsp;
        <a class="my-el-a" href="https://jq.qq.com/?_wv=1027&k=jKy2qW7R"
          >交流群</a
        >&nbsp;&nbsp;|&nbsp;&nbsp;
        <router-link class="my-el-a" to="/more">更多</router-link>
      </div>
      <PopoverItem :content="words">
        <i
          class="icon my--mingyan-boy"
          @mouseenter="handleWords"
          @click="handleWords"
        ></i>
      </PopoverItem>
    </div>
    <div class="my--footer-back" v-else-if="mode === 'back'">
      <div class="my--footer-html">
        <div class="my--footer-html">
          当前名言数量：{{ length }}<br /><a @click="back" class="aline"
            >返回</a
          >
        </div>
      </div>
      <PopoverItem :content="words">
        <i
          class="icon my--mingyan-boy"
          @mouseenter="handleWords"
          @click="handleWords"
          style="opacity: 0.5"
        ></i>
      </PopoverItem>
    </div>
  </footer>
</template>

<script>
import { mingyan } from "../js/mingyan";
import { randomNumber } from "../js/tools";
import router from "../router";
import PopoverItem from "./PopoverItem.vue";

export default {
  name: "MYFooter",
  props: {
    mode: String,
  },
  components: {
    PopoverItem,
  },
  data() {
    return {
      length: mingyan.length,
      wordsList: ["欢迎来看耳斯名言！！"],
      words: "",
    };
  },
  mounted() {
    this.handleWords();
  },
  methods: {
    back() {
      // window.history.go(-1);
      router.go(-1);
    },

    handleWords() {
      this.words = this.wordsList[randomNumber(0, this.wordsList.length - 1)];
    },
  },
};
</script>

<style scoped>
.my--footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 55px;
  background-color: #d6d9e2;
  text-align: center;
  font-weight: bold;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid #e3e4e6;
  z-index: 10;
  line-height: 1.6;
}

.my-el-a {
  text-decoration: none;
  position: relative;
}

.my-el-a:after {
  content: "";
  position: absolute;
  z-index: -1;
  top: 60%;
  left: -0.1em;
  right: -0.1em;
  bottom: 0;
  transition: top 200ms cubic-bezier(0, 0.8, 0.13, 1);
  background-color: rgba(79, 192, 141, 0.5);
}

.my-el-a:hover:after {
  top: 0%;
}

.my--mingyan-boy {
  position: absolute;
  right: 0px;
  bottom: 55px;
  width: 150px;
  height: 260px;
}

.icon.my--mingyan-boy {
  background: transparent center/contain no-repeat;
  background-image: url("https://s-sh-1943-pic1.oss.dogecdn.com/2021/04/24/EJxXqGilNZLCgba.png");
}

@media only screen and (max-width: 480px) {
  .my--mingyan-boy {
    height: 207px;
    width: 120px;
  }
}

.aline {
  cursor: pointer;
}
</style>