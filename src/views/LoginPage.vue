<template>
  <div class="login-container">
    <div class="login-form">
      <auth-title :title="`로그인`"></auth-title>
      <login-form></login-form>
    </div>
  </div>
</template>

<script>
import AuthTitle from "@/components/auth/authTitle.vue";
import LoginForm from "@/components/auth/LoginForm.vue";

export default {
  components: {
    AuthTitle,
    LoginForm,
  },
};
</script>

<style scoped>
.login-container {
  width: 100%;
  min-height: 100vh;
  max-width: 760px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  box-shadow: 0 8px 20px #ebe3f1;
}
.login-form {
  width: 90%;
  max-width: 430px;
  margin: 0 auto;
}
</style>