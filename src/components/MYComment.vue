<template>
  <div class="my--comment-app">
    <div class="my--comment">
      <div class="my--comment-input"></div>
      <div class="my--comment-show"></div>
    </div>
    <MYFooter mode="back" />
  </div>
</template>

<script>
import MYFooter from "./MYFooter.vue";
export default {
  name: "MYComment",
  components: {
    MYFooter,
  },
  props: {
      rawMingyan: String
  },
  mounted() {
  },
};
</script>

<style>
</style>