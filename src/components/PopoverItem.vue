<template>
  <a-popover :title="title" :placement="placement ? placement : 'top'">
    <template slot="content">
      {{ content }}
    </template>
    <slot></slot>
  </a-popover>
</template>

<script>
export default {
  name: "PopoverItem",
  props: {
    title: String,
    content: String,
    placement: String,
  },
};
</script>
