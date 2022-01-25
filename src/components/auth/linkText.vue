<template>
  <div class="link-text">
    <h4>{{ textTitle }}</h4>
    <router-link :to="pushLink">{{ linkText }}</router-link>
  </div>
</template>

<script>
export default {
  props: {
    textTitle: String,
    pushLink: String,
    linkText: String,
  },
};
</script>

<style scoped>
.link-text {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 12px 0;
}
.link-text h4 {
  font-size: 15px;
  font-weight: 500;
  color: #999;
}
.link-text a {
  font-size: 15px;
  font-weight: 600;
  text-decoration: underline;
  color: #747474;
}
</style>