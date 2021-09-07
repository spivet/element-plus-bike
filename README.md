# element-plus-bike

基于 element-plus 封装的高阶组件库，目的是尽量通过配置的方式实现页面开发，减少重复代码。

## 使用

```javascript
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import ElementPlusBike from 'element-plus-bike'
import 'element-plus-bike/lib/style.css'
import App from './App.vue';

createApp(App)
  .use(ElementPlus)
  .use(ElementPlusBike)
  .mount('#app');
```

更多请查看[文档]()。
