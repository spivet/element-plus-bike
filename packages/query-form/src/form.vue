<template>
    <div class="dx-form-root">
        <a-form
            ref="searchForm"
            class="dx-form__form"
            :model="formData"
            size="small"
            v-bind="formProps"
        >
            <!-- 查询表单模块 -->
            <a-row class="dx-form__row">
                <a-col
                    v-for="(field) in actualFields"
                    :key="field.prop"
                    class="dx-form__col"
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

                <a-space class="bts">
                    <a-button
                        type="primary"
                        @click="handleSubmit"
                    >
                        {{ submitBtnText }}
                    </a-button>
                    <a-button size="small" @click="handleReset">
                        {{ resetBtnText }}
                    </a-button>
                    <span
                        v-if="showCollapseBtn"
                        class="dx-form__btn--filter ml-28"
                        @click="toggleCollapse"
                    >
                        {{ isCollapse ? '展开' : '收起' }}
                        <icon-down v-if="isCollapse" />
                        <icon-up v-else />
                    </span>
                </a-space>
            </a-row>
        </a-form>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import FormItemSub from './form-item-sub.vue';
import { DifferentSizeData } from './constant';
import useFields from './hooks/useFields';
import useForm from './hooks/useForm';

export default defineComponent({
  name: 'DxQueryForm',
  components: {
    FormItemSub,
  },
  props: {
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
      default: 'normal',
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
.dx-form__form {
  display: flex;
  flex-wrap: wrap;
}
.dx-form__row {
  width: 100%;
}
.dx-form__col:last-of-type {
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
.dx-form__item--hidden {
  display: none;
}

.bts {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 20px;
}
</style>
