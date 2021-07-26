<template>
  <span class="search-highlight" v-html="handleSearch" :data-text="text"></span>
</template>

<script>
export default {
  name: "MYSearchHighlight",
  props: {
    text: String,
    searchText: String,
  },
  computed: {
    handleSearch() {
      let reg = new RegExp(this.searchText, "ig");
      return this.text.replace(
        reg,
        `<span class="label label-secondary" data-text="${this.text}">` +
          this.searchText +
          `</span>`
      );
    },
  },
};
</script>