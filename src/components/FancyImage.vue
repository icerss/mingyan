<template>
  <div class="fancy-img">
    <CoolLightBox :items="nowImgItem" :index="index" @close="index = null">
    </CoolLightBox>
    <img
      :alt="alt"
      v-lazy="src"
      class="fancy-img-item"
      :class="className"
      v-for="(image, imageIndex) in nowImgItem"
      :key="imageIndex"
      @click="index = imageIndex"
    />
  </div>
</template>

<script>
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
import { fadeIn } from '../js/tools';

export default {
  name: "FancyImage",
  components: {
    CoolLightBox,
  },
  props: {
    src: String,
    title: String,
    description: String,
    alt: String,
    className: String,
  },
  data() {
    return {
      index: null,
    };
  },
  mounted() {
    fadeIn(".fancy-img");
  },
  computed: {
    nowImgItem() {
      return [
        {
          title: this.title || "",
          description: this.description || "",
          src: this.src,
        },
      ];
    },
  },
};
</script>

<style scoped>
.fancy-img-item {
    cursor: pointer;
}
</style>