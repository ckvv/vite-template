import instance from '@/api/instance.js';

const sign = {
  signUp(params) {
    return instance.post('/sign/signup', params);
  },
  signIn(params) {
    return instance.put('/sign/signin', params);
  },
  signOut() {
    return instance.get('/sign/signout');
  },

};

const user = {
  info() {
    return instance.get('/user/info');
  },
  list(params) {
    return instance.get('/user/list', { params });
  },
};

const log = {
  list(params) {
    return instance.get('/log/list', { params });
  },
};

export default {
  sign,
  user,
  log,
};
