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
import { formatMingyan, mingyanPicUrl, solvePicUrl } from "../js/mingyan";
import { deviceIsPhone } from "../js/utils";
// import { picBaseUrl } from "../js/init";
// import { EventBus } from "../js/eventBus";
// import { loadingImg } from "../js/init";

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
      imgClassName: "",
      styleMinWidth: 0,
      commonVersion: "1.0.2",
    };
  },
  // watch: {
  //   "$route.path"() {
  //     this.imgSrc = loadingImg;
  //   },
  // },
  mounted() {
    let text = formatMingyan(this.rawMingyan).text;
    if (deviceIsPhone()) {
      this.styleMinWidth = 28 * text.split("").length - 50;
      this.imgClassName = "phone-img";
    } else {
      this.styleMinWidth = 28 * text.split("").length - 50;
      this.imgClassName = "pc-img";
    }

    // // 监听从 MYInfo 传来的图片信息
    // EventBus.$on("PicUrlLoaded", function(info) {
    //   info = JSON.parse(info);
    //   log(info);
    //   let url = {};
    //   if (isSupportWebp()) {
    //     url = info.webp;
    //   } else {
    //     url = info.normal;
    //   }
    //   if (url)
    //     root.imgSrc =
    //       "https://cdn.jsdelivr.net/npm/@icerss/mingyan-oss/" + url.path;
    // });
  },
  // beforeDestroy() {
  //   EventBus.$off("PicUrlLoaded");
  // },
  computed: {
    imgSrc() {
      let text = formatMingyan(this.rawMingyan).text;
      let name = formatMingyan(this.rawMingyan).teacher;
      let cdnUrl = "https://cdn.jsdelivr.net/npm/@icerss/mingyan-oss@[version]";
      if (text === "解") {
        let url = cdnUrl;
        let path = solvePicUrl[name];
        let targetVersion = path.split("@")[1] || this.commonVersion;
        url = url.replace("[version]", targetVersion);
        return url + path;
      }
      let url = cdnUrl;
      let path = mingyanPicUrl[text];
      let targetVersion = path.split("@")[1] || this.commonVersion;
      url = url.replace("[version]", targetVersion);
      return url + path.split("@")[0];
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
