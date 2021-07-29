import instance from '@/api/instance.js';

const user = {
  signUp(params) {
    return instance.post('/sign/signup', params);
  },
  signIn(params) {
    return instance.put('/sign/signin', params);
  },
  signOut() {
    return instance.get('/sign/signout');
  },
  info() {
    return instance.get('/sign/info');
  },
};

const log = {
  list(params) {
    return instance.get('/log/list', { params });
  },
};

export default {
  user,
  log,
};
