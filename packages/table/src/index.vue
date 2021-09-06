<template>
  <div class="dm-table">
    <el-table
      ref="elTable"
      v-loading="loading"
      :header-row-style="defaultHeaderRowStyle"
      :header-cell-style="defaultHeaderCellStyle"
      :cell-style="defaultCellStyle"
      v-bind="$attrs"
      class="dm-table__main"
    >
      <template #empty>
        <el-empty description="暂无数据" />
      </template>
      <el-table-column
        v-for="field in columns"
        :key="field.prop"
        v-bind="field"
      >
        <template v-if="$slots[field.prop]" #default="scope">
          <slot :name="field.prop" :row="scope.row" />
        </template>
      </el-table-column>
    </el-table>

    <div v-if="pagination" class="dm-table__footer">
      <el-pagination
        v-bind="paginationProps"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
      />
    </div>
  </div>
</template>

<script>
import { ref, toRefs } from 'vue';
import useTable from './uses/useTable';
import usePagination from './uses/usePagination';

export default {
  name: 'BiTable',
  inheritAttrs: false,
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    // 表格列
    columns: {
      type: Array,
      default: () => [],
    },
    pagination: {
      type: Object,
      default: () => null,
    },
  },
  emits: ['update:pagination'],
  setup(props, { emit }) {
    const { pagination } = toRefs(props);
    const elTable = ref(null);

    const {
      defaultHeaderRowStyle,
      defaultHeaderCellStyle,
      defaultCellStyle,
    } = useTable();

    const {
      paginationProps,
      handleSizeChange,
      handleCurrentChange,
    } = usePagination(emit, pagination);
    return {
      elTable,
      defaultHeaderRowStyle,
      defaultHeaderCellStyle,
      defaultCellStyle,
      paginationProps,
      handleSizeChange,
      handleCurrentChange,
    };
  },
};
</script>

<style scoped>
.dm-table__footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
}
</style>
