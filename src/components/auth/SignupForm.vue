<template>
  <form @submit.prevent="signupSubmit">
    <div class="input-box">
      <label for="user_id">아이디</label>
      <input
        type="text"
        id="user_id"
        v-model="user_id"
        placeholder="사용할 아이디를 입력해주세요."
      />
    </div>
    <div class="input-box">
      <label for="password">비밀번호</label>
      <input
        type="text"
        id="password"
        v-model="password"
        placeholder="사용할 비밀번호를 입력해주세요."
      />
    </div>
    <div class="input-box">
      <label for="passwordCheck">비밀번호</label>
      <input
        type="text"
        id="passwordCheck"
        v-model="passwordCheck"
        placeholder="사용할 비밀번호를 입력해주세요."
      />
    </div>
    <div class="input-box">
      <label for="nickname">닉네임</label>
      <input
        type="text"
        id="nickname"
        v-model="nickname"
        placeholder="사용할 닉네임을 입력해주세요."
      />
    </div>
    <div class="input-box">
      <label for="phone">연락처</label>
      <input
        type="text"
        id="phone"
        v-model="phone"
        placeholder="연락처를 입력해주세요."
      />
    </div>
    <div class="input-box">
      <label for="name">이름</label>
      <input
        type="text"
        id="name"
        v-model="name"
        placeholder="이름를 입력해주세요."
      />
    </div>
    <div class="input-box">
      <label for="email">이메일</label>
      <input
        type="text"
        id="email"
        v-model="email"
        placeholder="이메일을 입력해주세요."
      />
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
      passwordCheck: "",
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
  margin-bottom: 10px;
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