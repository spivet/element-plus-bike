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
          v-for="(field, index) in fields"
          :key="field.prop"
          :class="['dm-form__col', shouldCollapse(index) ? 'dm-form__item--hidden' : '']"
          :lg="field.colAttrs?.lg??DifferentSizeData.lg.span"
          :md="field.colAttrs?.md??DifferentSizeData.md.span"
          :sm="field.colAttrs?.sm??DifferentSizeData.sm.span"
          :xs="field.colAttrs?.xs??DifferentSizeData.xs.span"
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
              v-model.number="formData[field.prop]"
              v-bind="field.componentAttrs"
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
        <FormOperation
          v-if="inline"
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
        v-if="!inline"
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
import {FieldsType, DifferentSizeData} from './constant';

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({}),
  },
  inline: {
    type: Boolean,
    default: false,
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
let shouldCollapse = ref(() => {});
watchEffect(() => {
  shouldCollapse.value = formOperation.value.shouldCollapse;
}, {flush: 'post'});

const searchForm = ref('searchForm');
const handleSubmit = () => {
  emit('submit', formData.value);
};
const handleReset = () => {
  searchForm.value.resetFields();
  emit('reset', formData.value);
};
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
