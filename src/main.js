import { createApp } from 'vue';
import elementPlusPlugins from '@/plugins/element-plus.js';
import App from '@/App.vue';
import router from '@/router';

const app = createApp(App);

app.use(elementPlusPlugins);
app.use(router);
app.mount('#app');
