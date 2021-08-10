<template>
  <div class="table-list-root">
    <ElProTableSearchForm
      v-model="searchForm"
      :fields="fields"
      @search="handleSearch"
      @reset="handleReset"
    />
    <ElProTableList
      v-model:pagination="pagination"
      :loading="loading"
      :columns="columns"
      :data="tableData"
    />
  </div>
</template>

<script>
export default {
  name: 'ElProTable'
};
</script>
<script setup>
import ElProTableSearchForm from 'packages/table-search-form';
import ElProTableList from 'packages/table-list';
import { defineProps, ref, watch } from 'vue';

const props = defineProps({
  request: {
    type: Function,
    default: () => {}
  },
  fields: {
    type: Array,
    default: () => [],
  },
  columns: {
    type: Array,
    default: () => [],
  },
  tableData: {
    type: Array,
    default: () => [],
  },
  total: {
    type: Number,
    default: 0
  }
});

const initPagination = () => {
  return {
    total: 100,
    currentPage: 1,
    pageSize: 10
  };
};
const pagination = ref(initPagination());
const searchForm = ref({});
const loading = ref(true);
const fetchTableData = async () => {
  loading.value = true;
  await props.request(searchForm.value, pagination.value);
  loading.value = false;
};
watch(pagination, (newVal, oldVal) => {
  if (newVal === oldVal) return;
  fetchTableData();
});
const handleSearch = () => {
  pagination.value = initPagination();
  fetchTableData();
};
const handleReset = () => {
  pagination.value = initPagination();
  fetchTableData();
};
fetchTableData();
</script>

<style scoped>
.table-list__footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
}
</style>
