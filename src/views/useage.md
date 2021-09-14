## Useage

### 组件依赖

在使用该组件前，请先安装 Vue3.x 和 element-plus。

```bash
yarn add vue@next element-plus
```

> 因为 Vue 和 element-plus，特别是 element-plus 每次升级都可能有较大的修改，所以如果使用时发现控制台警告或者报错，请尝试升级 Vue 和 element-plus。

### 安装

```bash
yarn add element-plus-bike
```

### 引用

在引入 element-plus-bike 时，可以进行全局配置，用来配置 element-plus 表单组件的属性。

```javascript
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import ElementPlusBike from 'element-plus-bike'
import 'element-plus-bike/lib/style.css'
import App from './App.vue';

createApp(App)
  .use(ElementPlus)
  .use(ElementPlusBike, {
    formField: {
      'el-input': {
        clearable: true, // 默认可清空
      }
    }
  })
  .mount('#app');
```

目前支持的字段有：

```javascript
{
  // 对表单字段组件进行配置
  formField: {
    'el-input': {
      // el-input 组件的属性
    }
  },
  // 对分页组件进行配置
  pagination: {
    layout: 'prev next',
  }
}
```
