<template>
  <ElProTable
    :fields="fields"
    :columns="columns"
    :request="fetchData"
    :table-data="tableData"
    :total="total"
  />
</template>

<script setup>
import {ref} from 'vue';
import axios from 'axios';

const fields = [
  {
    name: 'name',
    label: '系统名称',
    type: 'input',
    props: {
      placeholder: '请输入系统名称',
    },
  },
  {
    name: 'ip',
    label: '系统地址',
    type: 'input',
    props: {
      placeholder: '请输入系统名称',
    },
  },
  {
    name: 'systemCode',
    label: '系统类型',
    type: 'input',
    props: {
      placeholder: '请输入系统名称',
    },
  },
  {
    name: 'status',
    label: '状态',
    type: 'select',
    options: [
      {label: '开启', value: 0},
      {label: '关闭', value: 1}
    ]
  },
  {
    name: 'name4',
    label: '系统名称',
    type: 'input',
    props: {
      placeholder: '请输入系统名称',
    },
  },
];
const columns = [
  {
    type: 'selection',
  },
  {
    label: '序号',
    type: 'index',
  },
  {
    label: '姓名',
    prop: 'name',
  },
  {
    label: '电话',
    prop: 'phone',
  },
  {
    label: '地址',
    prop: 'address',
  },
  {
    label: '职业',
    prop: 'job',
  },
  {
    label: '状态',
    prop: 'status',
  },
  {
    label: '操作',
    prop: 'action',
  },
];

const total = ref(0);

const tableData = ref([]);
const fetchData = async (query, pagination) => {
  return axios.get('/api/list').then(res => {
    const data = res.data;
    tableData.value = data.list;
    total.value = data.total;
  });
};
</script>
