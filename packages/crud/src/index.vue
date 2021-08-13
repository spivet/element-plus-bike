<template>
  <div class="table-list-root">
    <el-card class="mb-20">
      <DmForm
        v-model="searchForm"
        :inline="true"
        :fields="fields"
        @submit="handleSearch"
        @reset="handleReset"
      />
    </el-card>

    <el-card>
      <DmTable
        v-model:pagination="pagination"
        :loading="loading"
        :columns="columns"
        :data="tableData"
      />
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'DmCrud'
};
</script>
<script setup>
import DmForm from 'packages/form';
import DmTable from 'packages/table';
import { ref, toRefs, watch } from 'vue';

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
    total: 0,
    currentPage: 1,
    pageSize: 10
  };
};
const pagination = ref(initPagination());
watch(pagination, (newVal, oldVal) => {
  if (newVal === oldVal) return;
  fetchTableData();
});

const {total} = toRefs(props);
watch(total, (val) => {
  pagination.value.total = val;
});

const searchForm = ref({});
const loading = ref(false);
const fetchTableData = async () => {
  loading.value = true;
  await props.request(searchForm.value, pagination.value);
  loading.value = false;
};

const handleSearch = () => {
  pagination.value = initPagination();
};
const handleReset = () => {
  pagination.value = initPagination();
};

fetchTableData();
</script>

<style scoped>
.mb-20 {
  margin-bottom: 20px;
}
</style>
