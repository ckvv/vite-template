import mitt from 'mitt';
import api from '@/api';
import { checkRes } from '@/utils/util';

export default {
  install(app) {
    app.config.globalProperties.checkRes = checkRes;
    app.config.globalProperties.$api = api;
    app.config.globalProperties.$bus = mitt();
  },
};
