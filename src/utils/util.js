function checkRes(res) {
  return (res && res.data && res.data.code === 0);
}

function setToken(token) {
  window.localStorage.setItem('token', token);
}

function getToken() {
  return window.localStorage.getItem('token');
}

/**
 * 退出登录
 * @param {string} href 地址
 */
function signOut(href = '') {
  window.localStorage.removeItem('token');
  window.location.href = href;
}

export {
  checkRes,
  setToken,
  getToken,
  signOut,
};
