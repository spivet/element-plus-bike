<template>
  <!-- 操作按钮模块 -->
  <div class="dm-form__btns">
    <el-button
      type="primary"
      size="small"
      @click="handleSubmit"
    >
      {{ submitBtnText }}
    </el-button>
    <el-button size="small" @click="handleReset">
      重置
    </el-button>
    <span
      v-if="showToggleBtn"
      class="dm-form__btn--filter ml-28"
      @click="toggleCollapse"
    >
      {{ isCollapse ? '展开' : '收起' }}
      <i :class="isCollapse ? 'el-icon-caret-bottom' : 'el-icon-caret-top'" />
    </span>
  </div>
</template>

<script>
export default {
  name: 'FormOperation'
};
</script>
<script setup>
import {ref, computed} from 'vue';
import {DifferentSizeData} from './constant';

const props = defineProps({
  submitBtnText: {
    type: String,
    default: '确认'
  },
  fieldsNum: {
    type: Number,
    default: 0,
  },
  collapse: {
    type: Boolean,
    default: true,
  },
  showCollapseBtn: {
    type: Boolean,
    default: true
  }
});
const emit = defineEmits(['submit', 'reset']);

const isCollapse = ref(props.collapse);

// 获取每一行表单字段的数量
const getPerLineFieldQuantity = () => {
  const documentScrollWidth = document.documentElement.scrollWidth;
  const size = Object.values(DifferentSizeData).find((item) => documentScrollWidth >= item.width);
  return size.quantity;
};
const shouldCollapse = (index) => {
  const quantity = getPerLineFieldQuantity();
  return index > (quantity - 2) && isCollapse.value;
};
const showToggleBtn = computed(() => {
  const quantity = getPerLineFieldQuantity();
  return props.showCollapseBtn && (props.fieldsNum >= quantity);
});
const toggleCollapse = () => {
  isCollapse.value = !isCollapse.value;
};
const handleSubmit = () => {
  emit('submit');
};
const handleReset = () => {
  emit('reset');
};

defineExpose({
  shouldCollapse,
});
</script>

<style lang="scss">
/**  操作按钮模块样式  **/
.dm-form__btns {
  margin-left: auto;
  margin-bottom: 16px;
}

.dm-form__btn--filter {
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