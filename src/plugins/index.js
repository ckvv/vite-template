import ElementPlus from '@/plugins/element-plus.js';
import NaiveUi from '@/plugins/naive-ui.js';
import GlobalProperties from '@/plugins/global-properties.js';

export default {
  install(app) {
    app.use(ElementPlus);
    app.use(NaiveUi);
    app.use(GlobalProperties);
  },
};
