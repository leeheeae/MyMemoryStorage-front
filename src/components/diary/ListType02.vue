<template>
  <div class="diary-list type-02-list">
    <h3 class="date">2022/02</h3>
    <ul>
      <li v-for="item in listData" :key="item">
        <div class="day" :style="{ background: item.color }">11</div>
        <router-link :to="`/diary/view/${item.idx}`">
          <div class="board-title-box">
            <p class="board-date">{{ item.create_date }}</p>
            <div class="board-title">{{ item.title }}</div>
            <div class="preview">
              {{ item.content }}
            </div>
          </div>
        </router-link>
        <div class="board-ctrl">
          <button
            class="bookmark-btn"
            :class="{ active: item.bookmark }"
            @click="bookmarkChange(item.bookmark)"
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M0,0H24V24H0Z" fill="none" />
              <path
                d="M12,21.35l-1.45-1.32C5.4,15.36,2,12.28,2,8.5A5.447,5.447,0,0,1,7.5,3,5.988,5.988,0,0,1,12,5.09,5.988,5.988,0,0,1,16.5,3,5.447,5.447,0,0,1,22,8.5c0,3.78-3.4,6.86-8.55,11.54Z"
              />
            </svg>
          </button>
          <button class="modify-btn">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <g transform="translate(0.363)">
                <rect
                  width="24"
                  height="24"
                  transform="translate(-0.363)"
                  fill="none"
                />
                <g transform="translate(2.484 2.997)">
                  <g transform="translate(0 3.192)">
                    <path
                      d="M3,21H6.75L17.81,9.94,14.06,6.19,3,17.25Zm2-2.92,9.06-9.06.92.92L5.92,19H5Z"
                      transform="translate(-3 -6.19)"
                    />
                  </g>
                  <g transform="translate(12.13)">
                    <path
                      d="M18.37,3.29a1,1,0,0,0-1.41,0L15.13,5.12l3.75,3.75,1.83-1.83a1,1,0,0,0,0-1.41Z"
                      transform="translate(-15.13 -2.997)"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </button>
          <button class="comment-btn">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <g transform="translate(0.363)">
                <rect
                  width="24"
                  height="24"
                  transform="translate(-0.363)"
                  fill="none"
                />
                <g transform="translate(0.484 2)">
                  <path
                    d="M12,4a8,8,0,0,1,0,16,7.925,7.925,0,0,1-3.43-.78,1.963,1.963,0,0,0-.86-.19,2.1,2.1,0,0,0-.56.08l-3.2.94.94-3.2a1.991,1.991,0,0,0-.11-1.42A7.925,7.925,0,0,1,4,12a8.011,8.011,0,0,1,8-8m0-2A10,10,0,0,0,2,12a10.105,10.105,0,0,0,.97,4.29L1,23l6.71-1.97A10.105,10.105,0,0,0,12,22,10,10,0,0,0,12,2Z"
                    transform="translate(-1 -2)"
                  />
                </g>
                <path
                  d="M13,8H11v3H8v2h3v3h2V13h3V11H13Z"
                  transform="translate(-0.516)"
                  fill-rule="evenodd"
                />
              </g>
            </svg>
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["listData"],
  methods: {
    bookmarkChange(bookmark) {
      bookmark = !bookmark;
      console.log(bookmark);
    },
  },
};
</script>

<style scoped>
/* 다이어리 리스트 */
.diary-list {
  padding-top: 50px;
}
.diary-list .date {
  color: #a3a3a3;
  font-size: 16px;
  font-weight: 600;
}
.diary-list li {
  display: flex;
  align-items: center;
  box-shadow: 0 3px 30px rgba(0, 0, 0, 0.18);
  border-radius: 20px;
  padding: 25px;
  margin-top: 8px;
  background: #fff;
}
.diary-list li .day {
  width: 40px;
  height: 40px;
  margin-right: 16px;
  text-align: center;
  line-height: 42px;
  font-size: 16px;
  font-weight: 700;
  background: #4f4f4f;
  color: #fff;
  border-radius: 50%;
  user-select: none;
}
.diary-list li > a {
  width: calc(100% - 280px);
}
.diary-list li .board-title-box .board-date {
  font-size: 14px;
  font-weight: 500;
  color: #93869c;
}
.diary-list li .board-title-box .board-title {
  margin-top: 2px;
  font-size: 16px;
  font-weight: 600;
  color: #391d4e;
}
.diary-list li .board-title-box .preview {
  margin-top: 2px;
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: #82758b;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.diary-list li .board-ctrl {
  margin-left: auto;
  height: 42px;
  display: flex;
  box-shadow: 0 3px 30px rgba(0, 0, 0, 0.18);
  border-radius: 20px;
  overflow: hidden;
}
.diary-list li .board-ctrl button {
  width: 56px;
  height: 42px;
  background: #fff;
  border-right: 1px solid #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
}
.diary-list li .board-ctrl button:last-child {
  border-right: none;
}
.diary-list li .board-ctrl button svg {
  fill: #cdc7c7;
}
.diary-list li .board-ctrl button.bookmark-btn:hover svg,
.diary-list li .board-ctrl button.bookmark-btn.active svg {
  fill: #ff3c3c;
}
.diary-list li .board-ctrl button.modify-btn:hover svg {
  fill: #391d4e;
}
.diary-list li .board-ctrl button.comment-btn:hover svg {
  fill: #391d4e;
}
</style>