import { computed } from 'vue';

export default function usePagination($emit, pagination) {
  const paginationProps = computed(() => {
    const paginationVal = pagination.value;
    return {
      background: true,
      layout: 'prev, pager, next, sizes, jumper',
      ...paginationVal,
    };
  });

  const handleSizeChange = (pageSize) => {
    $emit('update:pagination', {
      ...pagination.value,
      pageSize,
    });
  };
  const handleCurrentChange = (currentPage) => {
    $emit('update:pagination', {
      ...pagination.value,
      currentPage,
    });
  };

  return {
    paginationProps,
    handleSizeChange,
    handleCurrentChange,
  };
}
