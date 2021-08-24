import { defineConfig } from 'vite';
import { createPlugin, vueDocFiles } from 'vite-plugin-vuedoc';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { vite2Ext } from "apite";

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createPlugin({}),
    vue({
      include: [...vueDocFiles] // 2. Must include .md | .vd files
    }),
    vueJsx({}),
    vite2Ext({})
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      packages: path.resolve(__dirname, './packages'),
    },
  },

  build: {
    lib: {
      entry: path.resolve(__dirname, 'packages/index.js'),
      name: 'Plato',
      filename: 'index.js',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', 'element-plus'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
