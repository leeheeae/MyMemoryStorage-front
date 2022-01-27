<template>
  <nav class="sidemenu">
    <!-- 로고 -->
    <router-link to="/main">
      <div class="logo">
        <img src="@/assets/img/logo.svg" alt="logo" />
        <h1>
          나의<br />
          <span>기억</span>저장소
        </h1>
      </div>
    </router-link>

    <!-- 메인 메뉴 -->
    <div class="main-menu">
      <router-link to="/main">
        <div class="menu-item">
          <svg viewBox="0 0 24 24">
            <path
              d="M3,3v8h8V3H3z M9,9H5V5h4V9z M3,13v8h8v-8H3z M9,19H5v-4h4V19z M13,3v8h8V3H13z M19,9h-4V5h4V9z M13,13v8h8v-8H13z M19,19h-4v-4h4V19z"
            />
          </svg>
          <h3>Dashboard</h3>
        </div>
      </router-link>
      <router-link to="/calendar">
        <div class="menu-item">
          <svg viewBox="0 0 24 24">
            <g>
              <path
                d="M19,4h-1V2h-2v2H8V2H6v2H5C3.89,4,3.01,4.9,3.01,6L3,20c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V6C21,4.9,20.1,4,19,4z M19,20 H5V10h14V20z M19,8H5V6h14V8z M9,14H7v-2h2V14z M13,14h-2v-2h2V14z M17,14h-2v-2h2V14z M9,18H7v-2h2V18z M13,18h-2v-2h2V18z M17,18 h-2v-2h2V18z"
              />
            </g>
          </svg>
          <h3>Calendar</h3>
        </div>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.sidemenu {
  width: 220px;
  min-height: 100vh;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
}
.logo {
  display: flex;
  padding: 1.8rem;
}
.logo img {
  width: 42px;
  margin-right: 8px;
}
.logo h1 {
  font-size: 21px;
  font-weight: 600;
  line-height: 1.3;
  color: #313131;
}
.logo h1 span {
  color: #945fbc;
}

/* main-menu */
.main-menu .menu-item {
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  position: relative;
  transition: 0.25s;
}
.main-menu .menu-item svg {
  width: 24px;
  margin-right: 6px;
  fill: #313131;
}
.main-menu .menu-item h3 {
  font-size: 16px;
  font-weight: 600;
}

/* hover 했을 경우 */
.main-menu .menu-item:hover {
  padding: 1rem 0.7rem;
  margin: 0 0.7rem;
  background-color: #f4f0f6;
  border-radius: 4px;
}
.main-menu .menu-item:hover svg {
  fill: #3b0762;
}
.main-menu .menu-item:hover h3 {
  color: #3b0762;
}

/* 해당 페이지일 경우 */
.main-menu .router-link-exact-active .menu-item {
  padding: 1rem 2rem;
  margin: 0;
  background-color: transparent;
}
.main-menu .router-link-exact-active .menu-item svg {
  fill: #945fbc;
}
.main-menu .router-link-exact-active .menu-item h3 {
  color: #945fbc;
}
.main-menu .router-link-exact-active .menu-item::after {
  content: "";
  position: absolute;
  top: 50%;
  right: -1px;
  margin-top: -18px;
  display: block;
  width: 6px;
  height: 36px;
  background: #945fbc;
  border-radius: 3px 0 0 3px;
}
</style>