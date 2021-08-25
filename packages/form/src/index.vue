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
          :lg="DifferentSizeData.lg.span"
          :md="DifferentSizeData.md.span"
          :sm="DifferentSizeData.sm.span"
          :xs="DifferentSizeData.xs.span"
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
              <component
                :is="field.subComponent"
                v-for="option in field.options"
                :key="option.value"
                v-bind="option"
              />
            </component>
          </el-form-item>
        </el-col>

        <!-- 操作按钮模块 -->
        <FormOperation
          v-if="inline && showOperation"
          ref="formOperation"
          :fields-num="fields.length"
          :collapse="collapse"
          :show-collapse-btn="showCollapseBtn"
          :submit-btn-text="submitBtnText"
          @submit="handleSubmit"
          @reset="handleReset"
        />
      </el-row>

      <!-- 操作按钮模块 -->
      <FormOperation
        v-if="!inline && showOperation"
        ref="formOperation"
        :fields-num="fields.length"
        :collapse="collapse"
        :show-collapse-btn="false"
        :submit-btn-text="submitBtnText"
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
import FormOperation from './form-operation.vue';
import { DifferentSizeData } from './constant';

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({}),
  },
  inline: {
    type: Boolean,
    default: false,
  },
  showOperation: {
    type: Boolean,
    default: true,
  },
  formProps: {
    type: Object,
    default: () => ({}),
  },
  fields: {
    type: Array,
    default: () => [],
  },
  submitBtnText: {
    type: String,
    default: '确认',
  },
  collapse: {
    type: Boolean,
    default: true,
  },
  showCollapseBtn: {
    type: Boolean,
    default: true,
  },
});
const emit = defineEmits(['submit', 'reset', 'update:modelValue']);

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
let actualFields = ref([]);
watchEffect(() => {
  if(formOperation.value.isCollapse) {
    const quantity = getPerLineFieldQuantity();
    actualFields.value = props.fields.slice(0, quantity - 1);
  } else {
    actualFields.value = props.fields;
  }
}, {flush: 'post'});

const searchForm = ref('searchForm');
const handleSubmit = () => {
  emit('submit', formData.value);
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
