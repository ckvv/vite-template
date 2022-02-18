import {
  ElButton,
  ElInput,
  ElForm,
  ElNotification,
  makeInstaller,
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
    app.config.globalProperties.$success = success;
    app.config.globalProperties.$error = error;

    app.use(makeInstaller(components), {
      size: 'default',
    });
  },
};
