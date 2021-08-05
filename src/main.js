import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import ElementPlusPro from 'packages/index'
import App from './App.vue';
import router from './router';

createApp(App)
  .use(router)
  .use(ElementPlus)
  .use(ElementPlusPro)
  .mount('#app');
