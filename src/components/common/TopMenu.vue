<template>
  <header class="header">
    <div class="inner-header">
      <router-link to="/">
        <div class="logo">나의 기억 저장소 📖</div>
      </router-link>
      <nav class="nav">
        <div
          class="menu-toggle-btn"
          :class="{ active: menuToggle }"
          @click="menuClick"
        >
          {{ menuText }}
        </div>
      </nav>
    </div>
    <mobile-menu :menu="this.menuToggle"></mobile-menu>
  </header>
</template>

<script>
import MobileMenu from "./MobileMenu.vue";

export default {
  components: {
    MobileMenu,
  },
  data() {
    return {
      menuToggle: true,
      menuText: "열기",
    };
  },
  methods: {
    menuClick() {
      this.menuToggle = !this.menuToggle;
      this.menuText = !this.menuToggle ? "열기" : "닫기";
    },
  },
};
</script>

<style scoped>
.header {
  border-bottom: 1px solid #ccc;
}
.inner-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.8rem 1rem;
}
.logo {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--main-color);
}
</style>