import mitt from 'mitt';

export default {
  install(app) {
    app.config.globalProperties.$bus = mitt();
  },
};
