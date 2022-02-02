import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";

const routes = [
    {
        path: "/",
        redirect: "/login",
    },
    {
        path: "/signup",
        name: "SignupPage",
        component: () => import("../views/SignupPage.vue"),
    },
    {
        path: "/login",
        name: "LoginPage",
        component: () => import("@/views/LoginPage.vue"),
    },
    {
        path: "/main",
        name: "MainPage",
        component: () => import("@/views/MainPage.vue"),
        meta: { auth: true },
    },
    {
        path: "/diary",
        name: "DiaryPage",
        component: () => import("@/views/DiaryPage.vue"),
        meta: { auth: true },
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFoundPage",
        component: () => import("@/views/NotFoundPage.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    //라우터의 meta.auth가 true이고 getters에 있는 isLogin이 false일 경우 로그인페이지로 이동
    if (to.meta.auth && !store.getters.isLogin) {
        alert("로그인이 필요합니다.");
        next("/login");
        return;
    }
    next();
});

export default router;
