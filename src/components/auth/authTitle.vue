<template>
  <div class="title-contents">
    <div class="logo">
      <img src="@/assets/img/logo.svg" alt="logo" />
    </div>
    <h1 class="main-title">
      나의 <span class="point">기억</span> 저장소 :
      <span class="pagename">{{ title }}</span>
    </h1>
    <p class="sub-text">
      노래, 영화, 여행에 대한 기억 전부 가능합니다.<br />
      나만의 소중한 기억을 나의 기억 저장소에 저장해보세요.
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style scoped>
.title-contents {
  margin-bottom: 50px;
}
.title-contents .main-title {
  margin: 10px 0;
  font-size: 30px;
  font-weight: 600;
  color: #313131;
}
.title-contents .main-title .point {
  color: #945fbc;
}
.title-contents .sub-text {
  font-size: 15px;
  font-weight: 400;
  color: #999;
}
.title-contents .sub-text::after {
  content: "";
  display: block;
  margin-top: 12px;
  width: 40px;
  height: 5px;
  background: #945fbc;
}

@media (max-width: 500px) {
  .title-contents .main-title .pagename {
    display: block;
  }
}
</style>