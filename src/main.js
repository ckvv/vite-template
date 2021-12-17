import { createApp } from 'vue';

import plugins from '@/plugins';
import App from '@/App.vue';
import router from '@/router';
import { userAPI } from '@/api';
import { checkRes } from '@/utils/helpers';
import '@/assets/style/index.scss';

async function getUserInfo() {
  const userRes = await userAPI.info();
  return checkRes(userRes) ? userRes.data.data : null;
}

(async () => {
  const userInfo = await getUserInfo();
  router.$user = userInfo;

  const app = createApp(App);

  app.use(plugins);
  app.use(router);

  app.mount('#app');
})();
