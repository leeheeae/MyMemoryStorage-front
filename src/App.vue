<template>
  <div class="app-container">
    <!-- 로그인 했을 경우에만 보이도록 설정 -->
    <template v-if="isLogin">
      <side-menu />
      <login-info />
    </template>

    <router-view />
  </div>
</template>
<script>
import SideMenu from "@/components/common/SideMenu.vue";
import LoginInfo from "@/components/common/LoginInfo.vue";
export default {
  components: { SideMenu, LoginInfo },
  computed: {
    isLogin() {
      return this.$store.getters.isLogin;
    },
  },
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
