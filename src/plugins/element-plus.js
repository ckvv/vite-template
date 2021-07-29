import {
  ElButton,
  ElInput,
  ElForm,
  ElFormItem,
  ElNotification,
  ElIcon,
} from 'element-plus';
import 'element-plus/packages/theme-chalk/src/base.scss';

const components = [
  ElButton,
  ElInput,
  ElForm,
  ElFormItem,
  ElIcon,
];

function notify(type, message, options) {
  return ElNotification({
    type,
    message,
    ...options,
  });
}

// form check
async function checkForm(form = 'form') {
  return new Promise((res) => {
    this.$refs[form].validate((valid) => {
      res(valid);
    });
  });
}
function resetForm(form = 'form') {
  this.$nextTick(() => {
    this.$refs[form].resetFields();
  });
}

export default {
  install(app) {
    app.config.globalProperties.$ELEMENT = {
      size: 'small',
    };
    app.config.globalProperties.$notify = ElNotification;
    app.config.globalProperties.$success = (message, options) => notify('success', message, options);
    app.config.globalProperties.$error = (message, options) => notify('error', message, options);
    app.config.globalProperties.checkForm = checkForm;
    app.config.globalProperties.resetForm = resetForm;
    components.forEach((component) => {
      app.use(component);
    });
  },
};
