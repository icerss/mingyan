<template>
  <div id="my--main-app">
    <div class="my--main" :class="mainClassName">
      <!-- <MYStory
        nofade
        @onClickStoryTips="onClickStoryTips"
        :isClickStoryTips="isClickStoryTips"
      /> -->
      <h3 class="my--mingyan-show">
        <span class="my--mingyan-name icon my--name-wave label">
          {{ teacher }} </span
        ><span class="my--mingyan-conj" v-html="mingyanConj"></span>：
      </h3>
      <h1>
        <span class="my--mingyan-text label label-secondary">
          <span class="my--mingyan-raw">
            {{ text }}
          </span>
          <MYImage
            :rawMingyan="rawMingyan"
            v-if="text === '解' || mingyanPicUrl[text]"
          />
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
    <MYComment :rawMingyan="rawMingyan" />
  </div>
</template>

<script>
const MYStar = () =>
  import(/* webpackChunkName: "MYStar" */ "../components/MYStar.vue");
const MYInfo = () =>
  import(/* webpackChunkName: "MYInfo" */ "../components/MYInfo.vue");
const MYImage = () =>
  import(/* webpackChunkName: "MYImage" */ "../components/MYImage.vue");
// import MYStory from "../components/MYStory.vue";
import {
  mingyan,
  getNowId,
  formatMingyan,
  genNextId,
  mingyanPicUrl,
  specialConjList,
} from "../js/mingyan";
import { fadeIn, kv, kvName, querySelector } from "../js/utils";
import router from "../router";
import { MY_incidents } from "../js/feat/incidentsReport";
import { getConfig } from "../js/init";
import { EventBus } from "../js/eventBus";
import {
  recordEvent,
  recordEventId,
  recordSayingTextEvent,
} from "../js/logReporter";
const MYComment = () =>
  import(/* webpackChunkName: "MYComment" */ "../components/MYComment.vue");

export default {
  name: "MYMain",
  components: {
    MYStar,
    MYInfo,
    MYImage,
    MYComment,
    // MYStory,
  },
  data() {
    return {
      mingyanPicUrl: mingyanPicUrl,
      teacher: "有一位老师",
      text: "名言找不到咯！！o(*￣▽￣*)ブ",
      rawMingyan: mingyan[getNowId()],
      starEvent: "addstar",
      isFirstTime: true,
      isClickStoryTips: false,
      mainClassName: "",
    };
  },
  watch: {
    "$route.path"() {
      this.showMingyan(getNowId());
    },
    isClickStoryTips() {
      this.mainClassName = this.isClickStoryTips
        ? "is-open-story"
        : "is-close-story";
    },
    rawMingyan() {
      recordSayingTextEvent(this.rawMingyan);
    },
  },
  mounted() {
    this.showMingyan(getNowId());
    MY_incidents();
    // if (location.pathname !== "/") location.pathname = "/";
    let root = this;
    window.onresize = function () {
      root.isClickStoryTips = false;
      querySelector(".my--main").classList.remove("is-close-story");
    };
    EventBus.$on("onReload", function () {
      root.isClickStoryTips = false;
      querySelector(".my--main").classList.remove("is-close-story");
    });
  },
  beforeDestroy() {
    EventBus.$off("onReload");
  },
  computed: {
    mingyanConj() {
      return specialConjList[this.text]
        ? specialConjList[this.text]
        : "曾经说过";
    },
  },
  methods: {
    showMingyan(id) {
      if (this.isFirstTime && !getConfig("isAutoShowMingyan")) {
        this.isFirstTime = false;
        return;
      }
      this.rawMingyan = mingyan[id];
      this.teacher = formatMingyan(id).teacher;
      this.text = formatMingyan(id).text;
      kv.put(kvName.mingyanId, id);
      fadeIn(".my--main");
    },
    nextMingyan() {
      recordEvent(recordEventId.clickMYReloadButton);
      let nextId = genNextId();
      router.push("/@" + nextId);
      this.showMingyan(nextId);
    },
    onTextClick() {
      alert("你点击了名言");
    },
    onClickStoryTips(event) {
      this.isClickStoryTips = event.isClickTips;
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
  transition: 1s cubic-bezier(0, 0, 0.2, 1);
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

.my--main.is-open-story > *:not([class="my--story"]) {
  transition: 1s cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(100vw);
}

.my--main.is-close-story > *:not([class="my--story"]) {
  transition: 1s cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
}

.is-close-story,
.is-open-story {
  overflow: hidden;
}
</style>
