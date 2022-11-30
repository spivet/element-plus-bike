<template>
    <dx-card>
        <h2>dx-query-form</h2>
        <dx-query-form :fields="formFields" showCollapseBtn></dx-query-form>
    </dx-card>
</template>

<script setup lang="ts">
const formFields = [
  {
    prop: 'studyCard',
    label: '用户编号',
    component: 'a-input',
    componentAttrs: {
      placeholder: '请输入用户编号',
    },
  },
  {
    prop: 'mobile',
    label: '手机号',
    component: 'a-input',
    componentAttrs: {
      placeholder: '请输入手机号',
    },
  },
  {
    prop: 'userId',
    label: '用户ID',
    component: 'a-input',
    componentAttrs: {
      placeholder: '请输入用户ID',
    },
  },
  {
    prop: 'date',
    label: '月份',
    component: 'a-month-picker',
    componentAttrs: {
        placeholder: '请选择月份',
        valueFormat: 'YYYYMM',
    },
  },
  {
    prop: 'time-range',
    label: '时间范围',
    component: 'a-range-picker',
    componentAttrs: {
      placeholder: ['开始时间', '结束时间'],
    },
  },
];
</script>

<style scoped>

</style>