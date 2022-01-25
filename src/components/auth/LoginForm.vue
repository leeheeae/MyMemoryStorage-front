<template>
  <form @submit.prevent="loginSubmit">
    <div class="input-box">
      <label for="user_id">아이디</label>
      <input
        type="text"
        id="user_id"
        v-model="user_id"
        placeholder="아이디를 입력해주세요."
      />
    </div>
    <div class="input-box">
      <label for="password">비밀번호</label>
      <input
        type="text"
        id="password"
        v-model="password"
        placeholder="비밀번호를 입력해주세요."
      />
    </div>
    <button type="submit" class="submit-btn">저장소 로그인</button>
  </form>
</template>

<script>
import { loginUser } from "@/api";

export default {
  data() {
    return {
      user_id: "",
      password: "",
    };
  },
  methods: {
    async loginSubmit() {
      try {
        const userData = {
          user_id: this.user_id,
          password: this.password,
        };
        await loginUser(userData);
        alert("성공적으로 로그인 되었습니다.");
        this.$router.push("/");
      } catch (err) {
        console.log(err.response.data);
      }
    },
  },
};
</script>

<style scoped>
.input-box {
  margin-bottom: 30px;
}
.input-box label {
  font-size: 15px;
  font-weight: 500;
  color: #313131;
}
.input-box input {
  width: 100%;
  border: none;
  border-bottom: 1px solid #b6b6b6;
  padding: 8px 0;
  outline: none;
}
.input-box input:focus,
.input-box input:active {
  border-bottom: 1px solid #313131;
}
.submit-btn {
  width: 100%;
  height: 56px;
  padding: 0 20px;
  margin-bottom: 20px;
  background: #945fbc;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  border-radius: 3px;
  transition: background 0.3s;
}
.submit-btn:hover {
  background: #7a3ea8;
}
</style>