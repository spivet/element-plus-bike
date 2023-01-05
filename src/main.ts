import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import '@arco-design/web-vue/dist/arco.css';
// import arcoDesignDx from '../es'
import arcoDesignDx from '../packages'
import router from './router'
import App from './App.vue'
import './style.css'

createApp(App)
    .use(router)
    .use(ArcoVue)
    .use(ArcoVueIcon)
    .use(arcoDesignDx)
    .mount('#app')
