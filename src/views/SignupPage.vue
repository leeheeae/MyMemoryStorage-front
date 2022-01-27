<template>
  <div class="signup-container">
    <div class="signup-form">
      <auth-title :title="title" />
      <signup-form></signup-form>
      <link-text :="linkTextChange('login')" />
    </div>
  </div>
</template>

<script>
import SignupForm from "@/components/auth/SignupForm.vue";
import AuthTitle from "@/components/auth/authTitle.vue";
import LinkText from "@/components/auth/linkText.vue";

export default {
  components: {
    SignupForm,
    AuthTitle,
    LinkText,
  },
  data() {
    return {
      title: "회원가입",
      login: {
        textTitle: "가입된 아이디가 있으신가요?",
        pushLink: "/login",
        linkText: "로그인으로 이동",
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
.signup-container {
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
.signup-form {
  width: 84%;
  max-width: 430px;
  margin: 4rem auto;
}
</style>