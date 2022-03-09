/* eslint-disable */
import { Button } from 'tdesign-vue-next';

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