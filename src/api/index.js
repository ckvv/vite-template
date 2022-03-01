import instance from '@/api/instance';
import useAxios from '@/api/useAxios';

const sign = {
  signUp(data, options) {
    return useAxios.post('/sign/signup', { data }, options);
    // return instance.post('/sign/signup', params);
  },
  signIn(options) {
    return useAxios.put('/sign/signin', options);
    // return instance.put('/sign/signin', params);
  },
  signOut() {
    return instance.get('/sign/signout');
  },

};

const user = {
  info() {
    return instance.get('/user/info');
  },
  list(params, options) {
    return useAxios('/user/list', { params }, options);
  },
};

const log = {
  list(params) {
    return instance.get('/log/list', { params });
  },
};

export {
  sign as signAPI,
  user as userAPI,
  log as logAPI,
};
