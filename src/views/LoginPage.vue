<template>
  <div class="login-container">
    <div class="login-form">
      <auth-title :title="title"></auth-title>
      <login-form></login-form>
      <link-text :="linkTextChange('join')"></link-text>
      <link-text :="linkTextChange('find')"></link-text>
    </div>
  </div>
</template>

<script>
import AuthTitle from "@/components/auth/authTitle.vue";
import LoginForm from "@/components/auth/LoginForm.vue";
import LinkText from "@/components/auth/linkText.vue";

export default {
  components: {
    AuthTitle,
    LoginForm,
    LinkText,
  },
  data() {
    return {
      title: "로그인",
      join: {
        textTitle: "기억 저장소 아이디가 없으신가요?",
        pushLink: "/join",
        linkText: "기억 저장소 가입",
      },
      find: {
        textTitle: "아이디 또는 비밀번호를 잊어버리셨나요?",
        pushLink: "/find",
        linkText: "아이디/비밀번호 찾기",
      },
    };
  },
  methods: {
    linkTextChange(link) {
      const linkText = {
        textTitle: eval(`this.$data.${link}.textTitle`),
        pushLink: eval(`this.$data.${link}.pushLink`),
        linkText: eval(`this.$data.${link}.linkText`),
      };
      return linkText;
    },
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
  width: 84%;
  max-width: 430px;
  margin: 0 auto;
}
</style>