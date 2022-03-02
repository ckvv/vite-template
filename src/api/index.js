import instance from '@/api/instance';
import useAxios from '@/api/useAxios';

const sign = {
  signUp() {
    return useAxios({
      url: '/sign/signup',
      method: 'post',
    }, {}, instance);
  },
  signIn() {
    return useAxios({
      url: '/sign/signin',
      method: 'put',
    }, {}, instance);
  },
  signOut() {
    return instance.get('/sign/signout');
  },

};

const user = {
  info() {
    return instance.get('/user/info');
  },
  list() {
    return useAxios({
      url: '/user/list',
      method: 'get',
    }, {}, instance);
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
