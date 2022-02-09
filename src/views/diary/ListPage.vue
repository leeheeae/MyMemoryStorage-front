<template>
  <main class="main-container">
    <!-- 타이틀 -->
    <div class="title-box">
      <div class="title-contents">
        <h1>Diary List</h1>
        <h3>오늘 하루를 기록해보세요.</h3>
      </div>
      <div class="today-contents">
        <div class="weather-icon">
          <img src="@/assets/img/weather/night.svg" alt="night" title="night" />
        </div>
        <div class="today-text">
          <h4>TODAY</h4>
          <div class="today">2022/02/01</div>
        </div>
      </div>
      <router-link to="/diary/write" class="write-btn"> Add Diary </router-link>
    </div>

    <!-- 세팅박스 -->
    <div class="setting-container">
      <!-- 필터 리스트 -->
      <div class="setting-contents">
        <button class="filter-btn">
          <img
            src="@/assets/img/icon/filter.svg"
            alt="filter-button"
            title="filter-button"
          />
        </button>
        <button class="calendar-btn">
          <img
            src="@/assets/img/icon/calendar.svg"
            alt="calendar-button"
            title="calendar-button"
          />
        </button>
        <ul class="active-filter">
          <li>2022/02/01</li>
        </ul>
      </div>

      <!-- 보기방식 선택 -->
      <div class="change-view">
        <button class="type-01">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M3,5V19H21V5Zm16,6H15.67V7H19Zm-5.33,0H10.34V7h3.33ZM8.33,7v4H5V7ZM5,17V13H8.33v4Zm5.33,0V13h3.33v4Zm5.34,0V13H19v4Z"
              transform="translate(0 0.3)"
            />
          </svg>
        </button>
        <button class="type-02">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <rect width="24" height="24" fill="none" />
            <path
              d="M3,7V17a2.006,2.006,0,0,0,2,2H19a2.006,2.006,0,0,0,2-2V7a2.006,2.006,0,0,0-2-2H5A2.006,2.006,0,0,0,3,7ZM19,17H5V13H19ZM5,11V7H19v4Z"
              transform="translate(0 0.3)"
            />
          </svg>
        </button>
        <button class="type-03 active">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M0,0H24V24H0Z" fill="none" />
            <path d="M4,15H20V13H4Zm0,4H20V17H4Zm0-8H20V9H4ZM4,5V7H20V5Z" />
          </svg>
        </button>
      </div>
    </div>

    <!-- 다이어리 리스트 -->
    <div class="diary-list-container">
      <ListType01 />
      <ListType02 />
      <ListType03 />
    </div>
  </main>
</template>

<script>
import ListType01 from "@/components/diary/ListType01.vue";
import ListType02 from "@/components/diary/ListType02.vue";
import ListType03 from "@/components/diary/ListType02.vue";

export default {
  components: {
    ListType01,
    ListType02,
    ListType03,
  },
  data() {
    return {
      changeView: {
        type01: true,
        type02: false,
        type03: false,
      },
    };
  },
};
</script>

<style scoped>
.title-box {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}

/* 타이틀 내용 */
.title-contents {
  margin-right: auto;
}
.title-contents h1 {
  font-size: 32px;
  font-weight: 800;
  color: #3b0762;
}
.title-contents h3 {
  font-size: 15px;
  font-weight: 400;
  color: #93869c;
}

/* 오늘 날짜 */
.today-contents {
  width: 180px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border: 1px solid #dddbde;
  border-radius: 30px;
  line-height: 1.2;
}
.today-contents .weather-icon {
  margin-right: 6px;
}
.today-contents .today-text h4 {
  font-size: 12px;
  font-weight: 600;
  color: #93869c;
}
.today-contents .today-text .today {
  font-weight: 18px;
  font-weight: 600;
  color: #3b0762;
}

/* 등록하기 버튼 */
.write-btn {
  width: 150px;
  height: 60px;
  margin-left: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: #3b0762;
  border-radius: 30px;
  font-weight: 600;
}
.write-btn::before {
  content: "+";
  font-size: 22px;
  font-weight: 400;
  color: #fff;
  margin-right: 8px;
}

/* 세팅박스 */
.setting-container {
  padding: 45px 0 35px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
}
.setting-contents {
  display: flex;
  align-items: center;
}
.setting-contents button {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
}
.setting-contents .filter-btn {
  background: #545151;
  margin-right: 10px;
}
.setting-contents .calendar-btn {
  background: #ff6f6f;
}
.setting-contents .active-filter {
  margin-left: 16px;
  font-size: 16px;
  font-weight: 600;
  color: #555;
}

.change-view {
  display: flex;
  box-shadow: 0 3px 30px rgba(0, 0, 0, 0.18);
  border-radius: 30px;
  overflow: hidden;
}
.change-view button {
  width: 60px;
  height: 50px;
  background: #fff;
  border-right: 1px solid #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
}
.change-vieww button:last-child {
  border-right: none;
}
.change-view button svg {
  fill: #cdc7c7;
  /* fill: #3b0762; */
}
.change-view button.active svg {
  fill: #3b0762;
}

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