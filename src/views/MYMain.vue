<template>
  <div id="my--main-app">
    <div class="my--main">
      <h3 class="my--mingyan-show">
        <span class="my--mingyan-name icon my--name-wave label">
          {{ teacher }} </span
        ><span class="my--mingyan-verb">曾经说过</span>：
      </h3>
      <h1>
        <span class="my--mingyan-text label label-secondary">
          <span class="my--mingyan-raw">
            {{ text }}
          </span>
          <MYImage :rawMingyan="rawMingyan" v-if="mingyanPicUrl[text]" />
        </span>
      </h1>
      <div class="my--mingyan-info info-text">
        <MYInfo :mingyan="rawMingyan" />
        &nbsp;
        <MYStar :mingyan="rawMingyan" />
        <br />
        <div class="tips">
          <a
            style="color: #9b4dc9"
            id="reload"
            @click="nextMingyan"
            onclick="_hmt.push(['_trackEvent', '名言', '刷新', '手动' , '点击查看更多名言']);"
            >点击</a
          >查看更多名言
        </div>
      </div>
    </div>
    <MYFooter />
  </div>
</template>

<script>
import MYStar from "../components/MYStar.vue";
import MYInfo from "../components/MYInfo.vue";
import MYFooter from "../components/MYFooter.vue";
import MYImage from "../components/MYImage.vue";
import {
  mingyan,
  getNowId,
  formatMingyan,
  genNextId,
  mingyanPicUrl,
} from "../js/mingyan";
import { fadeIn } from "../js/tools";
import router from "../router";
import { MY_incidents } from "../js/feat/incidentsReport";

export default {
  name: "MYMain",
  components: {
    MYStar,
    MYInfo,
    MYFooter,
    MYImage,
  },
  data() {
    return {
      mingyanPicUrl: mingyanPicUrl,
      teacher: "有一位老师",
      text: "名言找不到咯！！o(*￣▽￣*)ブ",
      rawMingyan: mingyan[getNowId()],
      starEvent: "addstar",
    };
  },

  mounted() {
    this.showMingyan(getNowId());
    MY_incidents();
    // if (location.pathname !== "/") location.pathname = "/";
  },
  methods: {
    showMingyan(id) {
      this.rawMingyan = mingyan[id];
      this.teacher = formatMingyan(id).teacher;
      this.text = formatMingyan(id).text;
      fadeIn(".my--main");
    },

    nextMingyan() {
      let nextId = genNextId();
      router.push("/@" + nextId);
      this.showMingyan(nextId);
    },

    onTextClick() {
      alert("你点击了名言");
    },
  },
};
</script>

<style scoped>
.my--main {
  font-weight: bold;
  z-index: 1;
  text-align: center;
  margin-top: 90px;
}

.my--mingyan-text {
  border-radius: 5px;
}

.my--mingyan-show {
  font-size: 30px;
}

@media only screen and (max-width: 480px) {
  .my--mingyan-show {
    font-size: 25px;
  }
}

.icon.my--name-wave {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 4'%3E%3Cpath fill='none' stroke='%23333' d='M0 3.5c5 0 5-3 10-3s5 3 10 3 5-3 10-3 5 3 10 3'/%3E%3C/svg%3E")
    repeat-x 0 100%;
  background-size: 20px auto;
}

.my--mingyan-info {
  user-select: none;
  font-size: 16px;
}

.my--showfrom {
  background-color: #5676dc !important;
}

.tips {
  font-weight: 900;
  margin-top: 5px;
  font-size: 14px;
}

#reload {
  cursor: pointer;
}
</style>