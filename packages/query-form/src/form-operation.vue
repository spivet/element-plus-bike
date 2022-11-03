<template>
    <a-space class="bts">
        <a-button
            type="primary"
            html-type="submit"
        >
            {{ submitBtnText }}
        </a-button>
        <a-button size="small" @click="handleReset">
            {{ resetBtnText }}
        </a-button>
        <span
            v-if="showCollapseBtn"
            class="dm-form__btn--filter ml-28"
            @click="toggleCollapse"
        >
            {{ isCollapse ? '展开' : '收起' }}
            <i :class="isCollapse ? 'el-icon-caret-bottom' : 'el-icon-caret-top'" />
        </span>
    </a-space>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  // 确认按钮文本
  submitBtnText: {
    type: String,
    default: '确认',
  },
  // 重置按钮文本
  resetBtnText: {
    type: String,
    default: '重置',
  },
  // 表单是否默认收起状态
  collapse: {
    type: Boolean,
    default: true,
  },
  // 是否显示【展开/收起】按钮
  showCollapseBtn: {
    type: Boolean,
    default: true,
  },
});

// 按钮点击事件
const emit = defineEmits(['submit', 'reset']);
// 切换表单展开收起
const isCollapse = ref(props.collapse);
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
  isCollapse,
});
</script>

<!-- <style scoped>

</style> -->
