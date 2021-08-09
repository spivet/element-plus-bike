<template>
  <div class="el-pro-table-search-root">
    <el-form
      ref="searchForm"
      class="el-pro-table-search__form"
      :model="formData"
      size="small"
      label-width="100px"
      v-bind="formProps"
    >
      <!-- 查询表单模块 -->
      <el-row class="el-pro-table-search__row">
        <el-col
          v-for="(field, index) in fields"
          :key="field.name"
          :class="['el-pro-table-search__col', shouldCollapse(index) ? 'el-pro-form__item--hidden' : '']"
          :lg="DifferentSizeData.lg.span"
          :md="DifferentSizeData.md.span"
          :sm="DifferentSizeData.sm.span"
          :xs="DifferentSizeData.xs.span"
        >
          <el-form-item
            :label="field.label"
            :prop="field.name"
          >
            <component
              :is="`el-${field.type}`"
              v-model="formData[field.name]"
              v-bind="field.props"
            >
              <template v-if="field.type === FieldsType.SELECT">
                <el-option
                  v-for="option in field.options"
                  :key="option.value"
                  :label="option.label"
                  :value="option.value"
                />
              </template>
            </component>
          </el-form-item>
        </el-col>

        <!-- 操作按钮模块 -->
        <div class="el-pro-table-search__btns">
          <el-button
            type="primary"
            size="small"
            @click="handleSearch"
          >
            查询
          </el-button>
          <el-button size="small" @click="handleReset">
            重置
          </el-button>
          <span
            v-if="showCollapseBtn"
            class="el-pro-table-search__btn--filter ml-28"
            @click="toggleCollapse"
          >
            {{ isCollapse ? '展开' : '收起' }}
            <i :class="isCollapse ? 'el-icon-caret-bottom' : 'el-icon-caret-top'" />
          </span>
        </div>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'ElProTableSearchForm',
};
</script>

<script setup>
import { defineProps, defineEmits, computed, watchEffect, ref } from 'vue';
import {FieldsType, DifferentSizeData} from './constant';

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({}),
  },
  formProps: {
    type: Object,
    default: () => ({}),
  },
  fields: {
    type: Array,
    default: () => [],
  },
  collapse: {
    type: Boolean,
    default: true,
  }
});

const emit = defineEmits(['search', 'reset', 'update:modelValue']);
const formData = ref({ ...props.modelValue });
watchEffect(() => {
  emit('update:modelValue', formData.value);
});

/**
 * 处理表单展开和收起
 */
const isCollapse = ref(props.collapse);
// 获取每一行表单字段的数量
const getPerLineFieldQuantity = () => {
  const documentScrollWidth = document.documentElement.scrollWidth;
  const size = Object.values(DifferentSizeData).find((item) => documentScrollWidth >= item.width);
  return size.quantity;
};
const toggleCollapse = () => {
  isCollapse.value = !isCollapse.value;
};
const shouldCollapse = (index) => {
  const quantity = getPerLineFieldQuantity();
  return index > (quantity - 2) && isCollapse.value;
};
const showCollapseBtn = computed(() => {
  const quantity = getPerLineFieldQuantity();
  return props.fields.length >= quantity;
});

/**
 * 处理表单查询和搜索
 */
const searchForm = ref('searchForm');
const handleSearch = () => {
  emit('search', formData.value);
};
const handleReset = () => {
  searchForm.value.resetFields();
  emit('reset', formData.value);
};
</script>

<style lang="scss">
/**  查询表单模块样式  **/
.el-pro-table-search__form {
  display: flex;
  flex-wrap: wrap;
}

.el-pro-table-search__row {
  width: 100%;
}

.el-pro-table-search__col:last-of-type {
  margin-bottom: 0;
}

.el-form-item__label {
  white-space: nowrap;
  overflow: hidden;
}

.el-select,
.el-date-editor--daterange.el-input,
.el-date-editor--daterange.el-input__inner,
.el-date-editor--timerange.el-input,
.el-date-editor--timerange.el-input__inner,
.el-date-editor--datetimerange.el-input,
.el-date-editor--datetimerange.el-input__inner {
  width: 100%;
}

.el-date-editor .el-range-separator {
  width: auto;
}

.el-pro-form__item--hidden {
  display: none;
}

/**  操作按钮模块样式  **/
.el-pro-table-search__btns {
  margin-left: auto;
  margin-bottom: 16px;
}

.el-pro-table-search__btn--filter {
  font-size: 14px;
  color: #606266;
  cursor: pointer;

  i {
    color: #c0c4cc;
  }
}

/**  功能样式  **/
.ml-28 {
  margin-left: 28px;
}
</style>
