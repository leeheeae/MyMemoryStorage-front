import axios from "axios";

function createInstance() {
    return axios.create({
        baseURL: process.env.VUE_APP_API_URL,
    });
}

const instance = createInstance();

//회원가입
function signupUser(userData) {
    return instance.post("auth/signup", userData);
}

//로그인
function loginUser(userData) {
    return instance.post("auth/login", userData);
}

//다이어리
function diaryList(user_id) {
    return instance.get("diary/list", {
        params: { user_id },
    });
}

export { signupUser, loginUser, diaryList };
