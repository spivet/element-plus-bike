<template>
    <div>
        <h2>dx-query-form</h2>
        <dx-query-form :fields="formFields"></dx-query-form>
    </div>
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
];
</script>

<style scoped>

</style>