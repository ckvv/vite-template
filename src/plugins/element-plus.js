import {
  ElButton,
  ElInput,
  ElForm,
  ElNotification,
} from 'element-plus';
import 'element-plus/dist/index.css';

const components = [
  ElButton,
  ElInput,
  ElForm,
];

function notify(type, message, options) {
  return ElNotification({
    type,
    message,
    ...options,
  });
}

export const success = (message, options) => notify('success', message, options);
export const error = (message, options) => notify('error', message, options);

export default {
  install(app) {
    app.config.globalProperties.$ELEMENT = {
      size: 'small',
    };
    app.config.globalProperties.$success = success;
    app.config.globalProperties.$error = error;

    components.forEach((component) => {
      app.use(component);
    });
  },
};
