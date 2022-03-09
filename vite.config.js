/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';
import { visualizer } from 'rollup-plugin-visualizer';
import Components from 'unplugin-vue-components/vite';
import {
  ArcoResolver,
  TDesignResolver,
  NaiveUiResolver,
  ElementPlusResolver,
} from 'unplugin-vue-components/resolvers';

const UI = Components({
  dts: true,
  resolvers: [
    ArcoResolver(),
    TDesignResolver({
      library: 'vue-next',
    }),
    NaiveUiResolver(),
    ElementPlusResolver(),
  ],
});

const plugins = [WindiCSS(), vue(), UI];
const rootPath = path.resolve();
if (process.env.visualizer) {
  const visualizerPlugin = visualizer({
    name: 'build-report',
    template: 'treemap',
    filename: 'report/index.html',
    gzipSize: true,
  });
  visualizerPlugin.outputOptions = () => {
    console.info(`\nReport: file://${rootPath}/report/index.html\n`);
  };
  plugins.push(visualizerPlugin);
}
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8000,
  },
  plugins,
  // @开头的路径，会导致vscode 无法语法提示,需配合jsconfig.json使用
  // 参考: https://code.visualstudio.com/docs/languages/jsconfig
  resolve: {
    alias: {
      '@': path.resolve(rootPath, '/src'),
    },
  },
});
