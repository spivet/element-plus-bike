import { defineConfig } from 'vite';
import { createPlugin, vueDocFiles } from 'vite-plugin-vuedoc';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { vite2Ext } from "apite";

const path = require('path');
const lib = require('./build/lib');
const web = require('./build/web');

console.log(process.env.MODE);
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

  build: process.env.MODE === 'lib' ? lib : web,
});
