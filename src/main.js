/* eslint-disable */
import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import { userAPI } from '@/api';
import { checkRes } from '@/utils/helpers';
import '@/assets/style/index.css';
import 'virtual:windi.css';

async function getUserInfo() {
  const userRes = await userAPI.info();
  return checkRes(userRes) ? userRes.data.data : null;
}

(async () => {
  const userInfo = await getUserInfo();
  router.$user = userInfo;

  const app = createApp(App);

  app.use(router);

  app.mount('#app');
})();
