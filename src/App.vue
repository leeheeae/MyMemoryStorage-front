<template>
  <div class="app-container">
    <side-menu />
    <router-view />
    <login-info />
  </div>
</template>
<script>
import SideMenu from "@/components/common/SideMenu.vue";
import LoginInfo from "./components/common/LoginInfo.vue";
export default {
  components: { SideMenu, LoginInfo },
};
</script>

<style>
@import url("assets/css/reset.css");
@import url("assets/css/common.css");

#app {
  font-family: "IBMPlexSansKR";
  width: 100%;
  min-height: 100vh;
  background: url("assets/img/bg.png") center center;
}
.app-container {
  display: flex;
}
</style>
