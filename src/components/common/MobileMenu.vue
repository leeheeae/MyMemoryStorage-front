<template>
  <div class="menu-container" :class="{ active: menu }">
    <div class="menu-contents">
      <div class="top-contents">
        <div class="user-info">
          <!-- 로그인 했을 때 -->
          <template v-if="login">
            <div class="user-img"></div>
            <div class="user-name">Vitaming</div>
            <div class="user-email">vitaming@heeae.com</div>
          </template>

          <!-- 로그인 안 했을 때-->
          <template v-else>
            <div>X</div>
          </template>
        </div>

        <!-- menu -->
        <div class="lnb">
          <ul>
            <router-link to="/">
              <li>
                <div class="icon"></div>
                <span>메뉴01</span>
              </li>
            </router-link>

            <router-link to="/">
              <li>
                <div class="icon"></div>
                <span>메뉴01</span>
              </li>
            </router-link>

            <router-link to="/">
              <li>
                <div class="icon"></div>
                <span>메뉴01</span>
              </li>
            </router-link>
            <router-link to="/">
              <li>
                <div class="icon"></div>
                <span>메뉴01</span>
              </li>
            </router-link>
          </ul>
        </div>
      </div>

      <!-- 로그인 했을 때 보이도록 -->
      <button class="logout-btn">
        <div class="icon"></div>
        Log Out
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menu: {
      type: Boolean,
    },
  },
  data() {
    return {
      login: true,
    };
  },
};
</script>

<style scoped>
.menu-container {
  position: fixed;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(2px);
}
.menu-container.active {
  left: 0;
}
.menu-contents {
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  max-width: 360px;
  height: 100%;
  background: #fff;
  padding: 2rem;
}
.top-contents {
  overflow-y: auto;
  height: calc(100% - 60px);
}
.user-img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: var(--sub-color_02);
}
.user-name {
  margin-top: 4px;
  font-size: 1.1rem;
  font-weight: 700;
}
.user-email {
  line-height: 1.4;
  font-size: 0.7rem;
  color: #666;
}

/* lnb */
.lnb {
  margin-top: 1.8rem;
}
.lnb li {
  width: 100%;
  margin: 1.4rem 0;
  display: flex;
  align-items: center;
}
.lnb .icon {
  width: 28px;
  height: 28px;
  border-radius: 4px;
  margin-right: 8px;
  background: var(--sub-color_03);
}
.lnb li span {
  font-size: 0.95rem;
  font-weight: 500;
}
.logout-btn {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  margin-top: 1.8rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: #333;
}
.logout-btn .icon {
  width: 28px;
  height: 28px;
  border-radius: 4px;
  margin-right: 8px;
  background: #ccc;
}
</style>