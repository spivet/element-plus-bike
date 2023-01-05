<template>
    <dx-card>
        <h2>dx-query-form</h2>
        <dx-query-form
          :fields="formFields"
          showCollapseBtn>
        </dx-query-form>
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
      prop: 'level',
      label: '质检类型',
      component: 'a-select',
      componentAttrs: {
          placeholder: '请选择质检类型',
      },
      options:[
          {
              value: 0,
              label: '合格',
          },
          {
              value: 1,
              label: '一类质检',
          },
          {
              value: 2,
              label: '二类质检',
          },
          {
              value: 3,
              label: '三类质检',
          },
          {
              value: 4,
              label: '四类质检',
          },
      ]
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