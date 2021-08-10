import ElementPlus from '@/plugins/element-plus';
import NaiveUi from '@/plugins/naive-ui';
import GlobalProperties from '@/plugins/global-properties';

export default {
  install(app) {
    app.use(ElementPlus);
    app.use(NaiveUi);
    app.use(GlobalProperties);
  },
};
