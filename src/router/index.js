import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Sign from '@/views/Sign.vue';
import { ROLE } from '@/constant';

const USER = [ROLE.USER];
const ADMIN = [ROLE.ADMIN];

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/sign',
    name: 'Sign',
    component: Sign,
  },
  {
    path: '/user',
    name: 'User',
    component() {
      return import(/* webpackChunkName: "about" */ '../views/User.vue');
    },
    meta: { role: USER },
  },
  {
    path: '/admin',
    name: 'Admin',
    component() {
      return import(/* webpackChunkName: "about" */ '../views/Admin.vue');
    },
    meta: { role: ADMIN },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const userInfo = router.$user;

  if (to.name !== 'Sign' && !userInfo) {
    return next({
      name: 'Sign',
    });
  }

  if (userInfo) {
    if (to.name === 'Sign') {
      return router.push({
        path: userInfo.role === ADMIN ? '/admin' : '/user',
      });
    }
    const { meta } = to;
    if (meta && meta.role) {
      if (meta.role.indexOf(userInfo.role) === -1) {
        return router.push({
          name: 'Sign',
        });
      }
    }
  }
  return next();
});

export default router;
