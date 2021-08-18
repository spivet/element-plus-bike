<template>
  <div class="table-list-root">
    <el-card class="mb-20">
      <DmForm
        v-model="searchForm"
        :inline="true"
        :fields="fields"
        @submit="onSubmit"
        @reset="onReset"
      />
    </el-card>

    <el-card>
      <DmTable
        v-model:pagination="pagination"
        :loading="loading"
        :columns="columns"
        :data="data"
      >
        <slot :name="field.prop" :row="scope.row" />
      </DmTable>
    </el-card>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import axios from 'axios';
import {useCrud} from '../../packages';

const fields = [
  {
    prop: 'name',
    label: '系统名称',
    component: 'el-input',
    modifier: 'number',
    componentAttrs: {
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
    props: {
      placeholder: '请输入系统名称',
    },
  },
  {
    prop: 'systemCode',
    label: '系统类型',
    component: 'el-input',
    componentAttrs: {
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
    componentAttrs: {
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

const searchForm = ref({});
const pagination = ref({
  total: 0,
  pageSize: 10,
  currentPage: 1,
});

const fetchData = async (query, pagination) => {
  const res = await getList();
  const data = res.data;

  return {
    tableData: data.list,
    total: data.total
  };
};

const {data, loading, onSubmit, onReset} = useCrud(pagination, fetchData);

function getList() {
  return axios.get('/api/list');
}
</script>

<style>
.mb-20 {
  margin-bottom: 20px;
}
</style>