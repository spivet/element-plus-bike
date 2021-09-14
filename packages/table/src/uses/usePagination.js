import { computed } from 'vue';
import { getConfig } from 'packages/utils/config';

export default function usePagination($emit, pagination) {
  const paginationConfig = getConfig('pagination');
  const paginationProps = computed(() => {
    const paginationVal = pagination.value;
    return {
      background: true,
      layout: 'prev, pager, next, sizes, jumper',
      ...paginationConfig,
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
