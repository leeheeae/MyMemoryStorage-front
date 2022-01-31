import { createStore } from "vuex";

/* cookie */
import {
    getAuthFromCookie,
    getNicknameFromCookie,
    getUserFromCookie,
    saveAuthToCookie,
    saveUserToCookie,
} from "@/utils/cookies";
import { loginUser } from "@/api";

export default createStore({
    state: {
        nickname: getNicknameFromCookie() || "",
        userid: getUserFromCookie() || "",
        token: getAuthFromCookie() || "",
    },
    getters: {
        isLogin(state) {
            return state.nickname !== "";
        },
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        setNickname(state, nickname) {
            state.nickname = nickname;
        },
        setUserid(state, userid) {
            state.userid = userid;
        },
        clearToken(state) {
            state.token = "";
        },
        clearNickname(state) {
            state.nickname = "";
        },
        clearUserid(state) {
            state.userid = "";
        },
    },
    actions: {
        async LOGIN({ commit }, userData) {
            //로그인 api 이용하여 데이터 받아오기
            const { data } = await loginUser(userData);
            console.log(data.token);

            //로그인 토큰 저장
            commit("setToken", data.token);

            //로그인 유저정보 저장
            commit("setNickname", data.user.nickname);
            commit("setUserid", data.user.user_id);

            //쿠키 토큰 저장
            saveAuthToCookie(data.token);

            //쿠키 유저이름 저장
            saveUserToCookie(data.user.nickname, data.user.user_id);

            return data;
        },
    },
    modules: {},
});
