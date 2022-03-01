function setToken(token) {
  window.localStorage.setItem('token', token);
}

function getToken() {
  return window.localStorage.getItem('token');
}

function getType(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}

function isFunction(fn) {
  return typeof fn === 'function';
}

export {
  setToken,
  getToken,
  getType,
  isFunction,
};
