<template>
  <div class="my--mingyan-pic" :class="imgClassName">
    <FancyImage
      :src="imgSrc"
      :title="rawMingyan"
      description="拍摄：耳斯名言制作团队"
      className="my--mingyan-pic"
      :alt="rawMingyan"
    />
  </div>
</template>

<script>
import FancyImage from "./FancyImage.vue";
import { mingyanPicUrl, solvePicUrl } from "../js/mingyan";
import { deviceIsPhone, isSupportWebp, log } from "../js/tools";
// import { picBaseUrl } from "../js/init";
import { EventBus } from "../js/eventBus";
import { loadingImg } from "../js/init";

export default {
  name: "MYImage",
  components: {
    FancyImage,
  },
  props: {
    rawMingyan: String,
  },
  data() {
    return {
      mingyanPicUrl: mingyanPicUrl,
      solvePicUrl: solvePicUrl,
      imgClassName: "",
      styleMinWidth: 0,
      imgSrc: loadingImg,
    };
  },
  watch: {
    "$route.path"() {
      this.imgSrc = loadingImg;
    },
  },
  mounted() {
    let root = this;
    if (deviceIsPhone()) {
      this.styleMinWidth = 28 * this.text.split("").length - 50;
      this.imgClassName = "phone-img";
    } else {
      this.styleMinWidth = 28 * this.text.split("").length - 50;
      this.imgClassName = "pc-img";
    }

    // 监听从 MYInfo 传来的图片信息
    EventBus.$on("PicUrlLoaded", function(info) {
      info = JSON.parse(info);
      log(info);
      let url = {};
      if (isSupportWebp()) {
        url = info.webp;
      } else {
        url = info.normal;
      }
      if (url) root.imgSrc = url.href + url.path + "?" + url.query;
    });
  },
  destroyed() {
    EventBus.$off("PicUrlLoaded");
  },
  computed: {
    text() {
      return (
        this.rawMingyan.split("：")[1] +
        (this.rawMingyan.split("：")[2] ? "：" : "") +
        (this.rawMingyan.split("：")[2] || "")
      );
    },
  },
};
</script>

<style>
.my--mingyan-pic {
  max-width: 200px;
  border-radius: 5px;
}

.pc-img {
  margin-left: 25px;
  margin-right: 25px;
  margin-bottom: 25px;
}

.phone-img {
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
}
</style>
