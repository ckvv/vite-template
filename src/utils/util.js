function setToken(token) {
  window.localStorage.setItem('token', token);
}

function getToken() {
  return window.localStorage.getItem('token');
}

export {
  setToken,
  getToken,
};
