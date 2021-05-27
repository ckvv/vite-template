import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';

const elPlugin = styleImport({
  libs: [{
    libraryName: 'element-plus',
    esModule: true,
    ensureStyleFile: true,
    resolveStyle: (name) => `element-plus/packages/theme-chalk/src/${name.slice(3)}.scss`,
    resolveComponent: (name) => `element-plus/lib/${name}`,
  }],
});
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), elPlugin],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
    },
  },
});
