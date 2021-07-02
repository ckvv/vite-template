import { ElButton } from 'element-plus';

const components = [
  ElButton,
];

export default {
  install(app) {
    components.forEach((component) => {
      app.use(component);
    });
  },
};
