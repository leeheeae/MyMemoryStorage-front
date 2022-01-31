function saveAuthToCookie(value) {
    document.cookie = `til_auth=${value}`;
}

function saveUserToCookie(nickname, userid) {
    document.cookie = `til_nickname=${nickname}`;
    document.cookie = `til_userid=${userid}`;
}

function getAuthFromCookie() {
    return document.cookie.replace(
        /(?:(?:^|.*;\s*)til_auth\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
    );
}

function getNicknameFromCookie() {
    return document.cookie.replace(
        /(?:(?:^|.*;\s*)til_nickname\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
    );
}

function getUserFromCookie() {
    return document.cookie.replace(
        /(?:(?:^|.*;\s*)til_userid\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
    );
}
function deleteCookie(value) {
    document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

export {
    saveAuthToCookie,
    saveUserToCookie,
    getAuthFromCookie,
    getNicknameFromCookie,
    getUserFromCookie,
    deleteCookie,
};
