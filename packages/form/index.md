### 常规表单

```vue demo
<template>
    <DmForm
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
    prop: 'name',
    label: '系统名称',
    component: 'el-input',
    componentAttrs: {
      placeholder: '请输入系统名称',
    },
  },
  {
    prop: 'ip',
    label: '系统地址',
    component: 'el-input',
  },
  {
    prop: 'systemCode',
    label: '系统类型',
    component: 'el-input',
  },
  {
    prop: 'status',
    label: '状态',
    component: 'el-select',
    options: [
      {label: '开启', value: 0},
      {label: '关闭', value: 1}
    ]
  },
  {
    prop: 'prop4',
    label: '系统名称',
    component: 'el-input',
    props: {
      placeholder: '请输入系统名称',
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
