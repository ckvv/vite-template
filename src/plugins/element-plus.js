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

function elNotify(type, message, options) {
  return ElNotification({
    type,
    message,
    ...options,
  });
}

const success = (message, options) => elNotify('success', message, options);
const error = (message, options) => elNotify('error', message, options);

export const notify = {
  success,
  error,
};

export default {
  install(app) {
    app.use(makeInstaller(components), {
      size: 'default',
    });
  },
};
