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

      <!-- Storage menu -->
      <h4 class="menu-sub-title">Storage</h4>
      <router-link to="/diary">
        <div class="menu-item">
          <svg viewBox="0 0 24 24">
            <g>
              <path
                d="M22.47,5.2C22,4.96,21.51,4.76,21,4.59v12.03C19.86,16.21,18.69,16,17.5,16c-1.9,0-3.78,0.54-5.5,1.58V5.48 C10.38,4.55,8.51,4,6.5,4C4.71,4,3.02,4.44,1.53,5.2C1.2,5.36,1,5.71,1,6.08v12.08c0,0.58,0.47,0.99,1,0.99 c0.16,0,0.32-0.04,0.48-0.12C3.69,18.4,5.05,18,6.5,18c2.07,0,3.98,0.82,5.5,2c1.52-1.18,3.43-2,5.5-2c1.45,0,2.81,0.4,4.02,1.04 c0.16,0.08,0.32,0.12,0.48,0.12c0.52,0,1-0.41,1-0.99V6.08C23,5.71,22.8,5.36,22.47,5.2z M10,16.62C8.86,16.21,7.69,16,6.5,16 c-1.19,0-2.36,0.21-3.5,0.62V6.71C4.11,6.24,5.28,6,6.5,6C7.7,6,8.89,6.25,10,6.72V16.62z M19,0.5l-5,5V15l5-4.5V0.5z"
              />
            </g>
          </svg>
          <h3>Diary</h3>
        </div>
      </router-link>

      <router-link to="/movie">
        <div class="menu-item">
          <svg viewBox="0 0 24 24">
            <path
              d="M4 6.47L5.76 10H20v8H4V6.47M22 4h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4z"
            />
          </svg>
          <h3>Movie</h3>
        </div>
      </router-link>

      <router-link to="/music">
        <div class="menu-item">
          <svg viewBox="0 0 24 24">
            <path
              d="M12 3l.01 10.55c-.59-.34-1.27-.55-2-.55C7.79 13 6 14.79 6 17s1.79 4 4.01 4S14 19.21 14 17V7h4V3h-6zm-1.99 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
            />
          </svg>
          <h3>Music</h3>
        </div>
      </router-link>

      <router-link to="/schedule">
        <div class="menu-item">
          <svg viewBox="0 0 24 24">
            <path
              d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"
            />
          </svg>
          <h3>Schedule</h3>
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
  width: 240px;
  min-height: 100vh;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
}
.logo {
  display: flex;
  padding: 2.1rem 2rem;
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
  margin-right: 8px;
  fill: #808080;
}
.main-menu .menu-item h3 {
  font-size: 16px;
  font-weight: 600;
  color: #808080;
}

/* hover 했을 경우 */
.main-menu .menu-item:hover {
  padding: 1rem 1.2rem;
  margin: 0 1rem;
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

.menu-sub-title {
  font-size: 15px;
  font-weight: 600;
  color: #b8b8b8;
  margin-top: 1rem;
  padding: 1rem 2rem;
}
</style>