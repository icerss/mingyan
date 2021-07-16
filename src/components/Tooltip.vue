<template>
  <a-tooltip placement="bottom">
    <template slot="title">
      <span>{{ tip }}</span>
    </template>
    <slot></slot>
  </a-tooltip>
</template>

<script>
export default {
  name: "Tooltip",
  props: {
    tip: String,
  },
};
</script>

<style>
.ant-tooltip {
  font-weight: normal;
}
</style>