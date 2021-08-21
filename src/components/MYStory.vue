<template>
  <div class="my--story">
    <div class="story-tips" @click="onClickTips">
      <p class="story-tips-text">点击查看名言小故事</p>
    </div>
    <div class="story-area">
      <h2 class="story-title">小知识</h2>
      <p class="story-text">我是个傻逼！</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MYStory",
  data() {
    return {
      isClickTips: false,
    };
  },
  methods: {
    onClickTips() {
      this.isClickTips = true;
      this.$emit("onClickStoryTips", {
        isClickTips: this.isClickTips,
      });
    },
  },
};
</script>

<style scoped>
.story-tips {
  position: absolute;
  left: 5px;
}

.story-tips-text {
  width: 1px;
  width: min-content;
}

.story-area {
  position: absolute;
  left: 50%;
  transform: translateX(-100vw);
}

.is-open-story > * > .story-tips {
  display: none;
}

.is-open-story > * > .story-area {
  animation: openStoryArea 1s ease-in-out;
  animation-fill-mode: forwards;
}

@keyframes openStoryArea {
  0% {
    transform: translateX(-100vw);
  }
  100% {
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
