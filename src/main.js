/* eslint-disable */
import { createApp } from 'vue';
import plugins from '@/plugins';
import App from '@/App.vue';
import router from '@/router';
import { userAPI } from '@/api';
import '@/assets/style/index.css';
import 'virtual:windi.css';


(async () => {
  const { data, execute } = userAPI.info();
  await execute();
  router.$user = data.value;

  const app = createApp(App);
  app.use(plugins);
  app.use(router);

  app.mount('#app');
})();
