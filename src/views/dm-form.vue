<template>
  <PageBlock>
    <DmForm
      v-model="searchForm"
      :fields="fields"
      @submit="handleSearch"
      @reset="handleReset"
    />
  </PageBlock>
</template>

<script setup>
import PageBlock from '@/components/page-block.vue';

const searchForm = {};
const fields = [
  {
    prop: 'name',
    label: '系统名称',
    component: 'el-input',
    modifier: 'number',
    colAttrs: {
      lg: 24, // large
      md: 12, // middle
      sm: 12, // small
    },
    props: {
      placeholder: '请输入系统名称',
    },
    formItem: {
      rules:[
        { required: true, message: '年龄不能为空'},
        { type: 'number', message: '年龄必须为数字值'}
      ]
    }
  },
  {
    prop: 'ip',
    label: '系统地址',
    component: 'el-input',
    col: {
      lg: 8, // large
      md: 12, // middle
      sm: 12, // small
    },
    props: {
      placeholder: '请输入系统名称',
    },
  },
  {
    prop: 'systemCode',
    label: '系统类型',
    component: 'el-input',
    props: {
      placeholder: '请输入系统名称',
    },
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
