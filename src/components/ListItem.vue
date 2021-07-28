<template>
  <a-list item-layout="horizontal">
    <a-list-item>
      <a-list-item-meta :description="description">
        <h3 slot="title" :class="{ 'my--list-title': !description }">
          <a :href="href" target="_blank" rel="nofollow ugc">
            <slot></slot>
          </a>
        </h3>
        <a-avatar slot="avatar" :src="imgSrc" v-if="imgSrc" />
      </a-list-item-meta>
    </a-list-item>
  </a-list>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    href: String,
    imgSrc: String,
    description: String,
  },
};
</script>

<style scoped>
.my--list-title {
  margin-left: 16px;
  transform: translateY(5px);
}

.ant-list {
  zoom: 1.2;
  margin-top: 8px;
  margin-bottom: 8px;
  margin-left: 8px;
}

a {
  color: #303742;
}
</style>
