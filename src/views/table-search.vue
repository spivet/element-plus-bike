<template>
  <PageBlock>
    <ElProTableSearch
      v-model="searchForm"
      :fields="fields"
      @search="handleSearch"
    />
  </PageBlock>
</template>

<script setup>
import PageBlock from '@/components/page-block.vue'

const searchForm = {}
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
const handleSearch = (form) => {
    console.log(form)
}
</script>
