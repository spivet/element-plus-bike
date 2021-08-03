<template>
  <div class="table-search-root">
    <el-form
      ref="searchForm"
      class="table-search__form"
      :model="formData"
      size="small"
      label-width="128px"
      v-bind="formProps"
    >
      <!-- 查询表单模块 -->
      <el-row class="table-search__row">
        <el-col
          v-for="(field, index) in fields"
          :key="field.name"
          class="table-search__col"
          :class="{'form__item--hidden': shouldCollapse(index)}"
          :xl="6"
          :lg="8"
          :md="12"
          :sm="24"
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
        <div class="table-search__btns">
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
            class="table-search__btn--filter ml-28"
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
import { ref, watchEffect } from 'vue';

const FieldsType = {
  INPUT: 'input',
  SELECT: 'select',
};
// 不同尺寸所对应的页面宽度和每行 ElFormItem 个数
const DifferentSizeData = [
  { width: 1900, quantity: 4 }, // xl
  { width: 1200, quantity: 3 }, // large
  { width: 992, quantity: 2 }, // middle
  { width: 768, quantity: 1 }, // small
  { width: 0, quantity: 1 }, // less than small
];

export default {
  name: 'LichiProTableSearch',
  props: {
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
    defaultCollapse: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['search', 'reset', 'update:modelValue'],
  setup(props, { emit }) {
    const formData = ref({ ...props.modelValue });
    watchEffect(() => {
      emit('update:modelValue', formData.value);
    });
    return { formData };
  },
  data() {
    return {
      FieldsType,
      isCollapse: this.defaultCollapse,
    };
  },
  computed: {
    showCollapseBtn() {
      const quantity = this.getPerLineItemQuantity();
      return this.fields.length >= quantity;
    },
  },
  methods: {
    shouldCollapse(index) {
      const quantity = this.getPerLineItemQuantity();
      return index > (quantity - 2) && this.isCollapse;
    },
    getPerLineItemQuantity() {
      const documentScrollWidth = document.documentElement.scrollWidth;
      const size = DifferentSizeData.find((item) => documentScrollWidth >= item.width);
      return size.quantity;
    },
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    handleSearch() {
      this.$emit('search', this.formData);
    },
    handleReset() {
      this.$refs.searchForm.resetFields();
      // this.formData = {};
      this.$emit('reset', this.formData);
    },
  },
};
</script>

<style lang="scss" scoped>
/**  查询表单模块样式  **/
.table-search__form {
  display: flex;
  flex-wrap: wrap;
}

.table-search__row {
  width: 100%;
}

.table-search__col:last-of-type {
  margin-bottom: 0;
}

:deep(.el-form-item__label) {
  width: 128px;
  white-space: nowrap;
  overflow: hidden;
}

:deep(.el-select),
:deep(.el-date-editor--daterange.el-input),
:deep(.el-date-editor--daterange.el-input__inner),
:deep(.el-date-editor--timerange.el-input),
:deep(.el-date-editor--timerange.el-input__inner),
:deep(.el-date-editor--datetimerange.el-input),
:deep(.el-date-editor--datetimerange.el-input__inner) {
  width: 100%;
}

:deep(.el-date-editor .el-range-separator) {
  width: auto;
}

.form__item--hidden {
  display: none;
}

/**  操作按钮模块样式  **/
.table-search__btns {
  margin-left: auto;
  margin-bottom: 16px;
}

.table-search__btn--filter {
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
