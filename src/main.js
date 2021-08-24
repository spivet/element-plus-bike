import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import ElementPlusPro from 'packages/index';
import 'vite-plugin-vuedoc/style.css';
import App from './App.vue';
import router from './router';
import './theme/index.scss';

createApp(App)
  .use(router)
  .use(ElementPlus)
  .use(ElementPlusPro)
  .mount('#app');
