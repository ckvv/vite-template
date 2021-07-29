function checkRes(res) {
  return (res && res.data && res.data.code === 0);
}

function setToken(token) {
  window.localStorage.setItem('token', token);
}

function getToken() {
  return window.localStorage.getItem('token');
}

function signOut() {
  window.localStorage.removeItem('token');
  window.location.href = '';
}

export {
  checkRes,
  setToken,
  getToken,
  signOut,
};
