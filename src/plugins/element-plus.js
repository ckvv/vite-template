import {
  ElButton,
  ElInput,
  ElForm,
  ElFormItem,
  ElNotification,
} from 'element-plus';
import 'element-plus/packages/theme-chalk/src/base.scss';

const components = [
  ElButton,
  ElInput,
  ElForm,
  ElFormItem,
];

function notify(type, message, options) {
  return ElNotification({
    type,
    message,
    ...options,
  });
}

export default {
  install(app) {
    app.config.globalProperties.$ELEMENT = {
      size: 'small',
    };
    app.config.globalProperties.$success = (message, options) => notify('success', message, options);
    app.config.globalProperties.$error = (message, options) => notify('error', message, options);

    components.forEach((component) => {
      app.use(component);
    });
  },
};
