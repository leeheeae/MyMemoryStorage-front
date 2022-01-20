<template>
  <top-menu></top-menu>
  <router-view />
</template>
<script>
import TopMenu from "@/components/common/TopMenu.vue";
export default {
  components: {
    TopMenu,
  },
};
</script>

<style>
@import url("./assets/css/reset.css");
@import url("./assets/css/common.css");

#app {
  font-family: "IBMPlexSansKR";
}
</style>
