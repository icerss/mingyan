<template>
  <div class="my--mingyan-pic" :class="imgClassName">
    <FancyImage
      :src="imgSrc"
      :title="rawMingyan"
      description="拍摄：耳斯名言制作团队"
      className="mdui-img-rounded my--mingyan-pic"
      :alt="rawMingyan"
    />
  </div>
</template>

<script>
import FancyImage from "./FancyImage.vue";
import { mingyanPicUrl, solvePicUrl } from "../js/mingyan";
import { deviceIsPhone } from "../js/tools";
import { picBaseUrl } from "../js/init";

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
    };
  },
  mounted() {
    //console.log(this.rawMingyan);
    if (deviceIsPhone()) {
      this.styleMinWidth = 28 * this.text.split("").length - 50;
      this.imgClassName = "phone-img";
    } else {
      this.styleMinWidth = 28 * this.text.split("").length - 50;
      this.imgClassName = "pc-img";
    }
  },
  computed: {
    text() {
      return (
        this.rawMingyan.split("：")[1] +
        (this.rawMingyan.split("：")[2] ? "：" : "") +
        (this.rawMingyan.split("：")[2] || "")
      );
    },
    imgSrc() {
      if (this.rawMingyan.split("：")[1] === "解")
        return picBaseUrl + this.solvePicUrl[this.rawMingyan.split("：")[0]];
      return picBaseUrl + this.mingyanPicUrl[this.text];
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
