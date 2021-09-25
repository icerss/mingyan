<template>
  <div class="my--story">
    <div class="story-tips" @click="onClickTips" v-show="!isClickTips">
      <p class="story-tips-text">点击查看名言小故事</p>
    </div>
    <div class="story-main">
      <div class="story-area">
        <h2 class="story-title">小故事</h2>
        <p class="story-text">{{ story || "故事还在加载中……" }}</p>
      </div>
      <p class="story-close-tips" @click="onClose" v-if="isClickTips">
        返回
        <a-icon type="right-square" />
      </p>
    </div>
  </div>
</template>

<script>
/**
 * TODO
 */
import { EventBus } from "../js/eventBus";
import { fadeIn, fadeOut, querySelector } from "../js/utils";

export default {
  name: "MYStory",
  props: {
    isClickStoryTips: Boolean,
  },
  data() {
    return {
      isClickTips: false,
      isLoadStory: false,
      story: "",
    };
  },
  watch: {
    isClickStoryTips() {
      fadeIn(".my--comment");
      fadeIn(".story-tips");
    },
  },
  mounted() {
    let root = this;
    EventBus.$on("onReload", function() {
      root.isLoadStory = false;
      root.story = "";
    });
    EventBus.$on("StoryLoaded", function(story) {
      root.isLoadStory = true;
      root.story = story;
    });
    window.onresize = function() {
      root.isClickTips = false;
    };
  },
  beforeDestroy() {
    EventBus.$off("onReload");
  },
  methods: {
    onClickTips() {
      this.isClickTips = true;
      this.$emit("onClickStoryTips", {
        isClickTips: this.isClickTips,
      });
      fadeIn(".story-close-tips");
      fadeOut(".my--comment");
    },
    onClose() {
      this.isClickTips = !this.isClickTips;
      this.$emit("onClickStoryTips", {
        isClickTips: this.isClickTips,
      });
      querySelector(".my--main").style.display = "none";
      fadeIn(".my--main");
      fadeIn(".my--comment");
      fadeIn(".story-tips");
      setTimeout(() => {
        querySelector(".my--main").classList.remove("is-close-story");
      }, 1000);
    },
  },
};
</script>

<style scoped>
.my--story {
  display: none;
}

.story-close-tips {
  display: none;
  cursor: pointer;
}

.story-area {
  position: absolute;
  left: 50%;
  transform: translateX(-200vw);
  background-color: #9b4dc920;
  padding: 2rem;
  margin: 1rem;
  min-height: 3rem;
  border-radius: 9px;
  flex-grow: 1;
  width: 75vw;
}

.story-area > * {
  white-space: pre-wrap;
}

.story-close-tips {
  display: none;
  float: right;
  color: #9b4dc9;
}

.story-tips-text {
  width: 1px;
  width: min-content;
  cursor: pointer;
}

.is-open-story > * > .story-main > .story-close-tips {
  display: block;
  position: relative;
  transform: translateY(-2px);
}

.is-open-story > * > .story-main > .story-area {
  transition: 0.8s cubic-bezier(0, 0, 0.2, 1);
  transform: translate(
    -53%,
    10px
  ); /* 有没有谁能告诉我为什么设置成 -50% 会不居中，一定要设置成 -53% …… */
  left: 50%;
}

.is-close-story > * > .story-main > .story-area {
  transition: 1s cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(-200vw);
}

/* 手机 < 480px */
@media only screen and (max-width: 480px) {
  .my--story {
    display: block;
  }

  .story-tips {
    position: absolute;
    left: 5px;
  }
}

/* 中等大小 480px ~ 1000px */
@media only screen and (min-width: 480px) {
  .my--story {
    display: block;
  }

  .story-tips {
    position: absolute;
    left: 10vw;
    font-size: 15px;
    border: #303742 solid 3px;
    border-radius: 5px;
    padding: 10px;
  }

  .story-area {
    width: 50vw;
  }
}

/* 大屏幕模式 > 1000px */
@media only screen and (min-width: 1000px) {
  .my--story {
    display: block;
  }

  .story-tips {
    position: absolute;
    left: 5px;
  }
}
</style>
