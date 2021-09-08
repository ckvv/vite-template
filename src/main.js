import { createApp } from 'vue';

import plugins from '@/plugins';
import App from '@/App.vue';
import router from '@/router';
import api from '@/api';
import { checkRes } from '@/utils/helpers';

async function getUserInfo() {
  const userRes = await api.user.info();
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
