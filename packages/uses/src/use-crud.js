import { ref, watch } from 'vue';

export function useCrud(pagination, request) {
  const initPagination = JSON.parse(JSON.stringify(pagination.value));

  const data = ref([]);
  const loading = ref(false);
  const fetchTableData = async () => {
    loading.value = true;
    const {tableData, total} = await request();
    data.value = tableData;
    pagination.value.total = total;
    loading.value = false;
  };

  watch(pagination, () => {
    fetchTableData();
  });

  const onSubmit = () => {
    pagination.value = initPagination;
  };
  const onReset = () => {
    pagination.value = initPagination;
  };

  fetchTableData();

  return {
    data,
    loading,
    onSubmit,
    onReset,
    fetchTableData
  };
}