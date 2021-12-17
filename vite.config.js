import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { visualizer } from 'rollup-plugin-visualizer';
import PACKAGE from './package.json';

const visualizerPlugin = visualizer({
  name: `${PACKAGE.name}-report`,
  template: 'treemap',
  filename: 'report/report.html',
  gzipSize: true,
});
visualizerPlugin.outputOptions = () => {
  console.info(`\nReport: file://${__dirname}/report/report.html\n`);
};

const plugins = [vue(), visualizerPlugin];

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8000,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/assets/style/mixin.scss" as *;\n@use "@/assets/style/variable.scss" as *;',
      },
    },
  },
  plugins,
  // @开头的路径，会导致vscode 无法语法提示,需配合jsconfig.json使用
  // 参考: https://code.visualstudio.com/docs/languages/jsconfig
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
    },
  },
});
