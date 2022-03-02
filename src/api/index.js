import instance from '@/api/instance';
import useAxios from '@/api/useAxios';

const sign = {
  signUp(config, options) {
    return useAxios({
      url: '/sign/signup',
      method: 'post',
      ...config,
    }, options, instance);
  },
  signIn(config, options) {
    return useAxios({
      url: '/sign/signin',
      method: 'put',
      ...config,
    }, options, instance);
  },
  signOut() {
    return instance.get('/sign/signout');
  },

};

const user = {
  info() {
    return instance.get('/user/info');
  },
  list(config, options) {
    return useAxios({
      url: '/user/list',
      method: 'get',
      ...config,
    }, options, instance);
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
