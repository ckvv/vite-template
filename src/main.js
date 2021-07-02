import { createApp } from 'vue';
import pluginElementPlus from '@/plugins/element-plus';
import pluginNaiveUi from '@/plugins/naive-ui';
import App from '@/App.vue';
import router from '@/router';

const app = createApp(App);

app.use(pluginElementPlus);
app.use(pluginNaiveUi);
app.use(router);
app.mount('#app');
