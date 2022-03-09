/* eslint-disable */
import { Button } from '@arco-design/web-vue';
import '@arco-design/web-vue/es/button/style/css';
// import '@arco-design/web-vue/dist/arco.css';

const components = [
  Button,
];

export default {
  install(app) {
    components.forEach((component) => {
      app.use(component);
    });
  },
};
