import { computed } from 'vue';

export default function usePagination($emit, pagination) {
  const paginationProps = computed(() => {
    const paginationVal = pagination.value;
    return {
      background: true,
      layout: 'prev, pager, next, sizes, jumper',
      currentPage: paginationVal.page,
      pageSize: paginationVal.size,
      ...paginationVal,
    };
  });

  const handleSizeChange = (pageSize) => {
    $emit('update:pagination', {
      ...pagination.value,
      size: pageSize,
    });
  };
  const handleCurrentChange = (currentPage) => {
    $emit('update:pagination', {
      ...pagination.value,
      page: currentPage,
    });
  };

  return {
    paginationProps,
    handleSizeChange,
    handleCurrentChange,
  };
}
