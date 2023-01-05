<template>
    <div class="dx-query-form-root">
        <a-form
            ref="searchForm"
            class="dx-query-form__form"
            :model="formData"
            size="small"
            v-bind="formProps"
        >
            <!-- 查询表单模块 -->
            <a-row class="dx-query-form__row">
                <a-col
                    v-for="(field) in actualFields"
                    :key="field.prop"
                    class="dx-query-form__col"
                    :xl="DifferentSizeData.xl.span"
                    :lg="DifferentSizeData.lg.span"
                    :md="DifferentSizeData.md.span"
                    :sm="DifferentSizeData.sm.span"
                    v-bind="field.colAttrs"
                >
                    <a-form-item
                        :label="field.label"
                        :field="field.prop"
                        v-bind="field.formItemAttrs"
                    >
                        <slot v-if="$slots[field.prop]" :name="field.prop" />
                        <component
                            :is="field.component"
                            v-else
                            v-model="formData[field.prop]"
                            v-bind="getFormFieldProps(field.component, field.componentAttrs)"
                        >
                            <FormItemSub
                              v-if="field.options"
                              :parent-name="field.component"
                              :options="field.options" />
                        </component>
                    </a-form-item>
                </a-col>

                <a-space class="dx-query-form__operation">
                    <a-button
                        type="primary"
                        @click="handleSubmit"
                    >
                        {{ submitBtnText }}
                    </a-button>
                    <a-button size="small" @click="handleReset">
                        {{ resetBtnText }}
                    </a-button>
                    <a-button
                        v-if="showCollapseBtn"
                        type="text"
                        size="small"
                        @click="toggleCollapse"
                    >
                        {{ isCollapse ? '展开' : '收起' }}
                        <icon-down v-if="isCollapse" />
                        <icon-up v-else />
                    </a-button>
                </a-space>
            </a-row>
        </a-form>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent, PropType } from 'vue';
import FormItemSub from './form-item-sub.vue';
import { DifferentSizeData } from './constant';
import useFields from './hooks/useFields';
import useForm from './hooks/useForm';
import type { FormProps, Field } from './type';

export default defineComponent({
  name: 'QueryForm',
  components: {
    FormItemSub,
  },
  props: {
    modelValue: {
      type: Object,
      default: () => ({}),
    },
    // a-form attributes
    formProps: {
      type: Object as PropType<FormProps>,
      default: () => ({}),
    },
    // 表单字段
    fields: {
      type: Array as PropType<Field[]>,
      default: () => [],
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
      default: false,
    },
    onError: {
      type: Function,
      default: () => {},
    },
  },
  emits: ['submit', 'reset', 'update:modelValue'],
  setup(props, {emit, expose}) {
    const { searchForm, formData } = useForm(props, emit);
    // const isCollapse = computed(() => formOperation.value?.isCollapse);
    // const emit = defineEmits(['submit', 'reset']);
    // 切换表单展开收起
    const isCollapse = ref(props.collapse);
    const toggleCollapse = () => {
      isCollapse.value = !isCollapse.value;
    };
    const handleSubmit = () => {
      emit('submit', formData.value);
    };
    const handleReset = () => {
      searchForm.value?.resetFields()
      emit('reset', formData.value);
    };
    const { actualFields, getFormFieldProps } = useFields(props, isCollapse);

    // const formData = inject<{}>(FormInjectionKey);
    expose({
      validate: searchForm.value?.validate,
    })


    return {
      searchForm, formData,
      isCollapse, toggleCollapse,
      handleSubmit, handleReset,
      actualFields, getFormFieldProps,
    }
  },
  data() {
    return {
      DifferentSizeData,
    }
  }
})
</script>

<style lang="less">
/**  查询表单模块样式  **/
.dx-query-form__form {
  display: flex;
  flex-wrap: wrap;
}

.dx-query-form__row {
  width: 100%;
}

.dx-query-form__col {
  .arco-picker {
    width: 100%;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
}

.dx-query-form__operation {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 20px;
}
</style>
