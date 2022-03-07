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
  signOut(config, options) {
    return useAxios({
      url: '/sign/signout',
      method: 'get',
      ...config,
    }, options, instance);
  },

};

const user = {
  info(config, options) {
    return useAxios({
      url: '/user/info',
      method: 'get',
      ...config,
    }, options, instance);
  },
  list(config, options) {
    return useAxios({
      url: '/user/list',
      method: 'get',
      ...config,
    }, options, instance);
  },
};

export {
  sign as signAPI,
  user as userAPI,
};
