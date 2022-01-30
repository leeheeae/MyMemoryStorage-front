<template>
  <div class="login-info">
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
</template>

<style scoped>
.login-info {
  display: flex;
  align-items: center;
  position: fixed;
  top: 1rem;
  right: 1.5rem;
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
.login-info .login-id .login-img svg.front {
}
</style>