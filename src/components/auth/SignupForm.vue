<template>
  <form @submit.prevent="signupSubmit">
    <div class="input-box">
      <label for="user_id">아이디</label>
      <input type="text" id="user_id" v-model="user_id" />
    </div>
    <div class="input-box">
      <label for="password">비밀번호</label>
      <input type="text" id="password" v-model="password" />
    </div>
    <div class="input-box">
      <label for="nickname">닉네임</label>
      <input type="text" id="nickname" v-model="nickname" />
    </div>
    <div class="input-box">
      <label for="phone">연락처</label>
      <input type="text" id="phone" v-model="phone" />
    </div>
    <div class="input-box">
      <label for="name">이름</label>
      <input type="text" id="name" v-model="name" />
    </div>
    <div class="input-box">
      <label for="email">이메일</label>
      <input type="text" id="email" v-model="email" />
    </div>
    <button type="submit" class="submit-btn">가입하기</button>
  </form>
</template>

<script>
import { signupUser } from "@/api";

export default {
  data() {
    return {
      user_id: "",
      password: "",
      nickname: "",
      phone: "",
      name: "",
      email: "",
    };
  },
  methods: {
    async signupSubmit() {
      try {
        const userData = {
          user_id: this.user_id,
          password: this.password,
          nickname: this.nickname,
          phone: this.phone,
          name: this.name,
          email: this.email,
        };
        await signupUser(userData);
        alert("성공적으로 가입 되었습니다.");
        this.$router.push("/");
      } catch (err) {
        console.error(err);
      }
    },
    initFrom() {
      this.user_id = "";
      this.password = "";
    },
  },
};
</script>

<style scoped>
form {
  padding: 2rem;
}
.input-box {
  width: 100%;
  margin-bottom: 1.4rem;
}
.input-box label {
  font-size: 15px;
  font-weight: 500;
  color: #333;
}
.input-box input {
  width: 100%;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 3px;
}
.submit-btn {
  width: 100%;
  height: 54px;
  background: var(--main-color);
  color: #fff;
  border-radius: 3px;
}
</style>