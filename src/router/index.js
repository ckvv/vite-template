import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Sign from '@/views/Sign.vue';
import { ROLE } from '@/constant';

const ADMIN = [ROLE.ADMIN];
const ALL = [ROLE.USER, ROLE.ADMIN];

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { role: ALL },
  },
  {
    path: '/sign',
    name: 'Sign',
    component: Sign,
  },
  {
    path: '/chat',
    name: 'Chat',
    component() {
      return import(/* webpackChunkName: "User" */ '../views/Chat.vue');
    },
    meta: { role: ALL },
  },
  {
    path: '/admin',
    name: 'Admin',
    component() {
      return import(/* webpackChunkName: "Admin" */ '../views/Admin.vue');
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
    next({
      name: 'Sign',
    });
  }
  if (userInfo) {
    const { meta } = to;
    if (meta && meta.role) {
      if (meta.role.indexOf(userInfo.role) === -1) {
        router.push({
          name: 'Sign',
        });
      }
    }
  }
  next();
});

export default router;
