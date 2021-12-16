import ElementPlus from '@/plugins/element-plus';
import GlobalProperties from '@/plugins/global-properties';

export default {
  install(app) {
    app.use(ElementPlus);
    app.use(GlobalProperties);
  },
};
