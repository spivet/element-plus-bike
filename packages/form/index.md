### 常规表单

通过配置而非 DOM 的形式创建表单，表单字段都通过 `fields` 属性设置。

```vue demo
<template>
  <BiForm
    v-model="searchForm"
    :fields="fields"
    @submit="handleSearch"
    @reset="handleReset"
  />
</template>

<script setup>
const searchForm = {checkbox: []};
const fields = [
  {
    prop: 'input',
    label: '输入框',
    component: 'el-input',
    componentAttrs: {
      placeholder: '我是输入框',
    },
  },
  {
    prop: 'select',
    label: '下拉框',
    component: 'el-select',
    componentAttrs: {
      placeholder: '我是选择器',
    },
    subComponent: 'el-option',
    options: [
      {label: '选项一', value: 'one'},
      {label: '选项二', value: 'two'},
    ]
  },
  {
    prop: 'radio',
    label: '单选框',
    component: 'el-radio-group',
    subComponent: 'el-radio',
    options: [
      {label: '单选框一', value: 'one'},
      {label: '单选框二', value: 'two'},
      {label: '单选框三', value: 'three'}
    ]
  },
  {
    prop: 'checkbox',
    label: '复选框',
    component: 'el-checkbox-group',
    subComponent: 'el-checkbox',
    options: [
      {label: '复选框一', value: 'one'},
      {label: '复选框二', value: 'two'},
    ]
  },
  {
    prop: 'textarea',
    label: '文本框',
    component: 'el-input',
    componentAttrs: {
      placeholder: '我是文本框',
      type: 'textarea'
    },
  },
  {
    prop: 'date',
    label: '时间选择器',
    component: 'el-date-picker',
    componentAttrs: {
      startPlaceholder: '开始时间',
      endPlaceholder: '结束时间',
      type: 'datetimerange'
    },
  },
];
const handleSearch = (form) => {
  console.log(form);
};
const handleReset = (form) => {
  console.log(form);
};
</script>
```

### 栅格化表单

通过 `colAttrs` 参数控制表格的栅格化，`colAttrs` 配置与 [el-col](https://element-plus.gitee.io/#/zh-CN/component/layout#col-attributes) 组件相同。

```vue demo
<template>
  <BiForm
    v-model="searchForm"
    :fields="fields"
    @submit="handleSearch"
    @reset="handleReset"
  />
</template>

<script setup>
const searchForm = {};
const fields = [
  {
    prop: 'accept',
    label: '收货地址',
    component: 'el-input',
    componentAttrs: {
      placeholder: '请输入收货地址',
    },
  },
  {
    prop: 'name',
    label: '联系人',
    component: 'el-input',
    componentAttrs: {
      placeholder: '请输入联系人姓名',
    },
    colAttrs: {
      span: 8
    },
  },
  {
    prop: 'phone',
    label: '联系电话',
    component: 'el-input',
    componentAttrs: {
      placeholder: '请输入联系人电话',
      maxLength: 11
    },
    colAttrs: {
      span: 8
    },
  },
  {
    prop: 'postcode',
    label: '邮编',
    component: 'el-input',
    componentAttrs: {
      placeholder: '请输入邮编号',
    },
    colAttrs: {
      span: 8
    },
  },
  {
    prop: 'send',
    label: '发货地址',
    component: 'el-input',
    props: {
      placeholder: '请输入发货地址',
    },
  },
];
const handleSearch = (form) => {
  console.log(form);
};
const handleReset = (form) => {
  console.log(form);
};
</script>
```

### 表单验证

在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误，`onError` 属性接收一个验证失败的处理函数。

```vue demo
<template>
  <BiForm
    v-model="searchForm"
    :fields="fields"
    @submit="handleSearch"
    @reset="handleReset"
  />
</template>

<script setup>
const searchForm = {checkbox: []};
const fields = [
  {
    prop: 'name',
    label: '姓名',
    component: 'el-input',
    componentAttrs: {
      placeholder: '请输入姓名',
    },
    formItemAttrs: {
      rules: [
        { required: true, message: '请输入姓名', trigger: 'blur' },
        { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
      ]
    }
  },
  {
    prop: 'address',
    label: '城市',
    component: 'el-select',
    componentAttrs: {
      placeholder: '请选择地址',
    },
    subComponent: 'el-option',
    options: [
      {label: '上海', value: 'one'},
      {label: '北京', value: 'two'},
    ],
    formItemAttrs: {
      rules: [{ required: true, message: '请选择地址', trigger: 'change' }]
    }
  },
  {
    prop: 'job',
    label: '职业',
    component: 'el-radio-group',
    subComponent: 'el-radio',
    options: [
      {label: '老师', value: 'teacher'},
      {label: '工程师', value: 'engineer'},
      {label: '医生', value: 'doctor'}
    ],
    formItemAttrs: {
      rules: [{ required: true, message: '请选择职业', trigger: 'change' }]
    }
  },
  {
    prop: 'date',
    label: '工作时间',
    component: 'el-date-picker',
    componentAttrs: {
      startPlaceholder: '开始时间',
      endPlaceholder: '结束时间',
      type: 'datetimerange'
    },
    formItemAttrs: {
      rules: [{ required: true, message: '请选择日期', trigger: 'change' }]
    }
  },
  {
    prop: 'signature',
    label: '个性签名',
    component: 'el-input',
    componentAttrs: {
      placeholder: '请填写你的个性签名',
      type: 'textarea'
    },
    formItemAttrs: {
      rules: [{ required: true, message: '请输入你的个性签名', trigger: 'blur' }]
    }
  },
];
const handleSearch = (form) => {
  console.log(form);
};
const handleReset = (form) => {
  console.log(form);
};
</script>
```

### 自定义表单字段

配置的方式比较简单，但也只能支持普通的表单场景，当表单字段需要更加个性化时，则可以通过 Slot 插入的方式进行自定义。

> 另外级联组件 `el-cascader` 现在只能通过 Slot 的方式传入，否则选择时无法显示选项字符。

```vue demo
<template>
  <dm-form
    v-model="searchForm"
    :fields="fields"
    @submit="handleSearch"
    @reset="handleReset"
  >
    <template #cascader>
      <el-cascader v-model="searchForm.cascader" :options="options" placeholder="请选择"></el-cascader>
    </template>
  </dm-form>
</template>

<script setup>
const searchForm = {checkbox: []};
const fields = [
  {
    prop: 'input',
    label: '输入框',
    component: 'el-input',
    componentAttrs: {
      placeholder: '我是输入框',
    },
  },
  {
    prop: 'cascader',
    label: '级联选择器',
  },
  {
    prop: 'select',
    label: '下拉框',
    component: 'el-select',
    componentAttrs: {
      placeholder: '我是选择器',
    },
    subComponent: 'el-option',
    options: [
      {label: '选项一', value: 'one'},
      {label: '选项二', value: 'two'},
    ]
  },
];
const options = [{
  value: 'zhinan',
  label: '指南',
  children: [{
    value: 'shejiyuanze',
    label: '设计原则',
    children: [{
      value: 'yizhi',
      label: '一致',
    }, {
      value: 'fankui',
      label: '反馈'
    }, {
      value: 'xiaolv',
      label: '效率'
    }, {
      value: 'kekong',
      label: '可控'
    }]
  }]
}]
const handleSearch = (form) => {
  console.log(form);
};
const handleReset = (form) => {
  console.log(form);
};
</script>
```

### 查询表单

通过 `mode` 属性控制表单模式，查询模式一般用于 CRUD 页面，对列表进行筛选。

```vue demo
<template>
  <dm-form
    v-model="searchForm"
    :fields="fields"
    mode="search"
    @submit="handleSearch"
    @reset="handleReset"
  >
  </dm-form>
</template>

<script setup>
const searchForm = {checkbox: []};
const fields = [
  {
    prop: 'name',
    label: '顾客姓名',
    component: 'el-input',
    componentAttrs: {
      placeholder: '请输入顾客姓名',
    },
  },
  {
    prop: 'goodsName',
    label: '商品名称',
    component: 'el-input',
    componentAttrs: {
      placeholder: '请输入商品名称',
    },
  },
  {
    prop: 'address',
    label: '地址',
    component: 'el-input',
    componentAttrs: {
      placeholder: '请输入地址',
    },
  },
  {
    prop: 'date',
    label: '时间',
    component: 'el-date-picker',
    componentAttrs: {
      startPlaceholder: '开始时间',
      endPlaceholder: '结束时间',
      type: 'datetimerange'
    },
    formItemAttrs: {
      rules: [{ required: true, message: '请选择日期', trigger: 'change' }]
    }
  },
  {
    prop: 'select',
    label: '商品类型',
    component: 'el-select',
    componentAttrs: {
      placeholder: '请选择商品类型',
    },
    subComponent: 'el-option',
    options: [
      {label: '衣服', value: 'one'},
      {label: '裤子', value: 'two'},
    ]
  },
];
const handleSearch = (form) => {
  console.log(form);
};
const handleReset = (form) => {
  console.log(form);
};
</script>
```

通常用于 CRUD 页面，响应式设计

### Form Attributes

| 参数        | 说明         | 类型         | 可选值       | 默认值       |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| model-value / v-model   | 表单绑定值        | -- | -- | -- |
| formProps   | [el-form 属性](https://element-plus.gitee.io/#/zh-CN/component/form)       | Object | -- | {} |
| fields   | 表单字段，具体参数见下表       | Array | -- | [] |
| mode   | 表单模式，目前包括普通模式和查询模式       | String | normal/search | normal |
| showOperation   | 是否展示表单操作按钮       | Boolean | -- | true |
| submitBtnText   | 确认按钮文本      | String | -- | 确认 |
| resetBtnText   | 重置按钮文本       | String | -- | 重置 |
| collapse   | 表单是否默认收起状态      | Boolean | -- | true |
| showCollapseBtn   | 是否显示【展开/收起】按钮       | Boolean | -- | true |
| onError   | 处理表单验证失败的方法       | Function | -- | -- |

### Fields

| 参数        | 说明         | 类型         | 可选值       | 默认值       |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| prop   | 作用与 `el-form-item` 组件的 `prop` 属性一样，同时还会作为自定义组件的 slot 名        | String | -- | -- |
| label  | 表单字段的中文名，与 `el-form-item` 组件的 `label` 属性一样       | String | -- | -- |
| formItemAttrs  | `el-form-item` 组件的属性配置，具体查看 [Form-Item Attributes](https://element-plus.gitee.io/#/zh-CN/component/form#form-item-attributes)      | Objec | -- | -- |
| component  | `element-plus` 的表单组件名，用短横线格式       | String | -- | -- |
| componentAttrs  | 对应组件的属性，具体查看对应的 `element-plus` 表单组件的属性文档       | Object | -- | -- |
| rowAttrs  | `el-row` 组件的属性配置，具体查看 [Row Attributes](https://element-plus.gitee.io/#/zh-CN/component/layout#row-attributes)      | Objec | -- | -- |
| colAttrs  | `el-form-item` 组件的属性配置，具体查看 [Col Attributes](https://element-plus.gitee.io/#/zh-CN/component/layout#col-attributes)      | Objec | -- | -- |
| options  | 遍历生成 `el-option/el-checkbox/el-radio` 组件，具体属性见下表      | Array | -- | -- |

### Options

| 参数        | 说明         | 类型         | 可选值       | 默认值       |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| label  | `el-option/el-checkbox/el-radio` 元素的中文名      | String | -- | -- |
| value  | `el-option/el-checkbox/el-radio` 元素的具体值       | String/Number/Boolean | -- | -- |
| --      | `el-option/el-checkbox/el-radio` 组件的额外属性，具体查看对应的 `element-plus` 组件文档       | -- | -- | -- |

### Form Slot

| name        | 说明         |
| ----------- | ----------- |
| --           | slot 的 `name` 值与字段的 `prop` 属性一一对应 |
