<template>
  <div class="my-storage-container">
    <div class="title-box">
      <h2>My Storage</h2>
    </div>
    <div class="storage-list">
      <ul>
        <li class="all">
          <router-link to="/storage">
            <h4>전체</h4>
            <div class="num">3,050</div>
            <div class="line"></div>
          </router-link>
        </li>
        <li>
          <router-link to="/diary">
            <h4>
              <svg viewBox="0 0 24 24">
                <g>
                  <path
                    d="M22.47,5.2C22,4.96,21.51,4.76,21,4.59v12.03C19.86,16.21,18.69,16,17.5,16c-1.9,0-3.78,0.54-5.5,1.58V5.48 C10.38,4.55,8.51,4,6.5,4C4.71,4,3.02,4.44,1.53,5.2C1.2,5.36,1,5.71,1,6.08v12.08c0,0.58,0.47,0.99,1,0.99 c0.16,0,0.32-0.04,0.48-0.12C3.69,18.4,5.05,18,6.5,18c2.07,0,3.98,0.82,5.5,2c1.52-1.18,3.43-2,5.5-2c1.45,0,2.81,0.4,4.02,1.04 c0.16,0.08,0.32,0.12,0.48,0.12c0.52,0,1-0.41,1-0.99V6.08C23,5.71,22.8,5.36,22.47,5.2z M10,16.62C8.86,16.21,7.69,16,6.5,16 c-1.19,0-2.36,0.21-3.5,0.62V6.71C4.11,6.24,5.28,6,6.5,6C7.7,6,8.89,6.25,10,6.72V16.62z M19,0.5l-5,5V15l5-4.5V0.5z"
                  />
                </g>
              </svg>
              Diary
            </h4>
            <div class="num">3,050</div>
            <div class="line"></div>
          </router-link>
        </li>
        <li>
          <router-link to="/movie">
            <h4>
              <svg viewBox="0 0 24 24">
                <path
                  d="M4 6.47L5.76 10H20v8H4V6.47M22 4h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4z"
                />
              </svg>
              Movie
            </h4>
            <div class="num">3,050</div>
            <div class="line"></div>
          </router-link>
        </li>
        <li>
          <router-link to="/music">
            <h4>
              <svg viewBox="0 0 24 24">
                <path
                  d="M12 3l.01 10.55c-.59-.34-1.27-.55-2-.55C7.79 13 6 14.79 6 17s1.79 4 4.01 4S14 19.21 14 17V7h4V3h-6zm-1.99 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                />
              </svg>
              Music
            </h4>
            <div class="num">3,050</div>
            <div class="line"></div>
          </router-link>
        </li>
        <li>
          <router-link to="/schedule">
            <h4>
              <svg viewBox="0 0 24 24">
                <path
                  d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"
                />
              </svg>
              Schedule
            </h4>
            <div class="num">3,050</div>
            <div class="line"></div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.title-box {
  margin-bottom: 10px;
}
.title-box h2 {
  font-size: 24px;
  font-weight: 800;
}
.storage-list {
  overflow-x: auto;
}
.storage-list ul {
  display: flex;
}
.storage-list ul li {
  margin-right: 1.6rem;
}
.storage-list ul li:last-child {
  margin-right: 0;
}
.storage-list ul li > a {
  width: 200px;
  height: 150px;
  padding: 1.4rem 1.8rem;
  display: block;
  border-radius: 1.6rem;
}
.storage-list ul li .num {
  font-size: 36px;
  font-weight: 800;
  color: #fff;
}
.storage-list ul li h4 {
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
}
.storage-list ul li h4 svg {
  width: 24px;
  margin-right: 5px;
  fill: #4f0c81;
}

/* 전체 제외 나머지 */
.storage-list ul li:not(.all) a {
  background: #f1eaf6;
}
.storage-list ul li:not(.all):hover a {
  background: linear-gradient(#f1eaf6, #e6dbef, #d8b1f3);
}
.storage-list ul li:not(.all) a .num,
.storage-list ul li:not(.all) a h4 {
  color: #4f0c81;
}

/* 전체 */
.storage-list ul li.all > a {
  background: linear-gradient(#a36acf, #8a4bbb, #7c38ae, #50008a);
}
.storage-list ul li.all .num,
.storage-list ul li.all h4 {
  color: #fff;
}
</style>