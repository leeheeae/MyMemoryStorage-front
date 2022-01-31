import { createStore } from "vuex";

/* cookie */
import {
    getAuthFromCookie,
    getUserFromCookie,
    saveAuthToCookie,
    saveUserToCookie,
} from "@/utils/cookies";
import { loginUser } from "@/api";

export default createStore({
    state: {
        username: getUserFromCookie() || "",
        token: getAuthFromCookie() || "",
    },
    getters: {
        isLogin(state) {
            return state.username !== "";
        },
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        setUsername(state, username) {
            state.username = username;
        },
    },
    actions: {
        async LOGIN({ commit }, userData) {
            //로그인 api 이용하여 데이터 받아오기
            const { data } = await loginUser(userData);
            return console.log(data);

            console.log(data.token);

            //로그인 토큰 저장
            commit("setToken", data.token);

            //로그인 유저이름 저장
            commit("setUsername", data.user.username);

            //쿠키 토큰 저장
            saveAuthToCookie(data.token);

            //쿠키 유저이름 저장
            saveUserToCookie(data.nickname);
        },
    },
    modules: {},
});
