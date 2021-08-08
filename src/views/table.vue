<template>
  <PageBlock>
    <ElProTable
      :columns="columns"
      :data="tableData"
      :pagination="pagination"
    />
  </PageBlock>
</template>

<script setup>
import {ref} from 'vue';
import axios from 'axios';
import PageBlock from '@/components/page-block.vue';

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

const pagination = ref({
  total: 0,
  currentPage: 1,
  pageSize: 10,
});

const tableData = ref([]);
axios.get('/api/list').then(res => {
  const data = res.data;
  tableData.value = data.list;
  pagination.value.total = data.total;
});
</script>
