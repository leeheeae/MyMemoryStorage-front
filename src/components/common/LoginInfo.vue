<template>
  <div class="login-info-container">
    <div class="login-info" @click="loginInfoToggle">
      <div class="login-id">
        <h3>비타밍구리얍얍</h3>
        <p>chromeee</p>
      </div>
      <div class="login-img">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="61.807"
          height="60.821"
          viewBox="0 0 61.807 60.821"
          class="back"
        >
          <path
            d="M22.2,4.667c13.065,0,20.8,9.2,20.8,23.879s-16.664,29.04-29.729,29.04S-8.667,50.7-8.667,36.018c0-8.947,8.515-14.843,14.294-20.1C12.574,9.587,17.473,4.966,22.2,4.667Z"
            transform="translate(58.182 7.617) rotate(79)"
            fill="#d7c3e6"
          />
        </svg>
      </div>
    </div>

    <!-- toggle on일 경우 show -->
    <div class="info-more" v-show="toggle">
      <div>
        <router-link to="/mypage" class="mypage-btn">내 정보 수정</router-link>
      </div>
      <div>
        <button class="logout-btn" @click="logoutUser">로그아웃</button>
      </div>
    </div>
  </div>
</template>

<script>
import { deleteCookie } from "@/utils/cookies";

export default {
  data() {
    return {
      toggle: false,
    };
  },
  methods: {
    loginInfoToggle() {
      this.toggle = !this.toggle;
    },
    logoutUser() {
      //스토어 토큰 clear
      this.$store.commit("clearToken");
      //스토어 유저 정보 clear
      this.$store.commit("clearUsername");
      //쿠키 토큰 clear
      deleteCookie("til_auth");
      //쿠키 유저 정보 clear
      deleteCookie("til_user");
      //로그인 페이지로 이동
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.login-info-container {
  position: fixed;
  top: 1rem;
  right: 1.5rem;
}
.login-info {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.login-info .login-id {
  margin-right: 8px;
}
.login-info .login-id h3 {
  font-size: 14px;
  font-weight: 600;
  color: #313131;
}
.login-info .login-id p {
  font-size: 12px;
  font-weight: 500;
  color: #313131;
}
.login-info .login-id .login-img {
  position: relative;
}
.login-info .login-id .login-img svg {
  position: absolute;
  top: 0;
  left: 0;
}
.login-info .login-id .login-img svg.back {
  top: 0;
}

/* info-more */
.info-more {
  position: absolute;
  top: 110%;
  left: 50%;
  margin-left: -75px;
  width: 150px;
  background: #fff;
  box-shadow: 0 -5px 20px #e2d5eb;
  border-radius: 1rem;
}
.info-more::before {
  position: absolute;
  top: -28px;
  left: 50%;
  margin-left: -14px;
  display: block;
  content: "";
  width: 0;
  height: 0;
  border-bottom: 14px solid #fff;
  border-top: 14px solid transparent;
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
}
.info-more > div {
  border-bottom: 1px solid #ebe0f3;
}
.info-more > div:hover {
  background: #f1eaf6;
}
.info-more > div:first-child {
  border-radius: 1rem 1rem 0 0;
}
.info-more > div:last-child {
  border-radius: 0 0 1rem 1rem;
  border-bottom: 0;
}
.info-more a,
.info-more button {
  display: block;
  width: 100%;
  padding: 12px 20px;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
}
</style>