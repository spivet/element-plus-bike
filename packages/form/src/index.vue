<template>
  <div class="dm-form-root">
    <el-form
      ref="searchForm"
      class="dm-form__form"
      :model="formData"
      size="small"
      label-width="100px"
      v-bind="formProps"
    >
      <!-- 查询表单模块 -->
      <el-row class="dm-form__row">
        <el-col
          v-for="(field) in actualFields"
          :key="field.prop"
          class="dm-form__col"
          :lg="isSearchMode ? DifferentSizeData.lg.span : {}"
          :md="isSearchMode ? DifferentSizeData.md.span : {}"
          :sm="isSearchMode ? DifferentSizeData.sm.span : {}"
          :xs="isSearchMode ? DifferentSizeData.xs.span : {}"
          v-bind="field.colAttrs"
        >
          <el-form-item
            :label="field.label"
            :prop="field.prop"
            v-bind="field.formItemAttrs"
          >
            <slot v-if="$slots[field.prop]" :name="field.name" />
            <component
              :is="field.component"
              v-else
              v-model="formData[field.prop]"
              v-bind="field.componentAttrs"
            >
              <FieldSub :parent-name="field.component" :options="field.options" />
            </component>
          </el-form-item>
        </el-col>

        <!-- 操作按钮模块 -->
        <FormOperation
          v-if="isSearchMode && showOperation"
          ref="formOperation"
          :collapse="collapse"
          :show-collapse-btn="showCollapseBtn"
          :submit-btn-text="submitBtnText"
          :reset-btn-text="resetBtnText"
          @submit="handleSubmit"
          @reset="handleReset"
        />
      </el-row>

      <!-- 操作按钮模块 -->
      <FormOperation
        v-if="isNormalMode && showOperation"
        ref="formOperation"
        :collapse="collapse"
        :show-collapse-btn="false"
        :submit-btn-text="submitBtnText"
        :reset-btn-text="resetBtnText"
        @submit="handleSubmit"
        @reset="handleReset"
      />
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'DmForm',
};
</script>

<script setup>
import { watchEffect, ref } from 'vue';
import FieldSub from './field-sub.vue';
import FormOperation from './form-operation.vue';
import { DifferentSizeData } from './constant';
import useMode from './uses/useMode';

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({}),
  },
  // el-form attributes
  formProps: {
    type: Object,
    default: () => ({}),
  },
  // 表单字段
  fields: {
    type: Array,
    default: () => [],
  },
  // 表单模式：normal/search
  mode: {
    type: String,
    default: 'normal'
  },
  // 是否展示表单操作按钮
  showOperation: {
    type: Boolean,
    default: true,
  },
  submitBtnText: {
    type: String,
    default: '确认',
  },
  resetBtnText: {
    type: String,
    default: '重置',
  },
  collapse: {
    type: Boolean,
    default: true,
  },
  showCollapseBtn: {
    type: Boolean,
    default: true,
  },
  onError: {
    type: Function,
    default: () => {}
  }
});
const emit = defineEmits(['submit', 'reset', 'update:modelValue']);

const {isSearchMode, isNormalMode} = useMode(props.mode);

const formData = ref({ ...props.modelValue });
watchEffect(() => {
  emit('update:modelValue', formData.value);
});

const formOperation = ref(null);
// 获取每一行表单字段的数量
const getPerLineFieldQuantity = () => {
  const documentScrollWidth = document.documentElement.scrollWidth;
  const size = Object.values(DifferentSizeData).find((item) => documentScrollWidth >= item.width);
  return size.quantity;
};
// 展开/收起时，实际展示的表单字段
let actualFields = ref([]);
watchEffect(() => {
  if(isSearchMode.value && formOperation.value?.isCollapse) {
    const quantity = getPerLineFieldQuantity();
    actualFields.value = props.fields.slice(0, quantity - 1);
  } else {
    actualFields.value = props.fields;
  }
}, {flush: 'post'});

const searchForm = ref('searchForm');
const handleSubmit = async () => {
  if (isSearchMode.value) {
    emit('submit', formData.value);
    return;
  }

  try {
    await searchForm.value.validate();
    emit('submit', formData.value);
  } catch(err) {
    props.onError(err);
  }
};
const handleReset = () => {
  searchForm.value.resetFields();
  emit('reset', formData.value);
};

defineExpose({
  validate: searchForm.value.validate
});
</script>

<style lang="scss">
/**  查询表单模块样式  **/
.dm-form__form {
  display: flex;
  flex-wrap: wrap;
}

.dm-form__row {
  width: 100%;
}

.dm-form__col:last-of-type {
  margin-bottom: 0;
}

.el-form-item__label {
  white-space: nowrap;
  overflow: hidden;
}

.el-select,
.el-cascader,
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

.dm-form__item--hidden {
  display: none;
}
</style>
