<template>
  <div class="pro-image-viewer">
    <el-button type="text" @click="openViewer">
      {{ text }}
    </el-button>
    <teleport to="body" :disabled="!appendToBody">
      <ElImageViewer
        v-if="showViewer"
        v-bind="viewerAttrs"
        @close="closeViewer"
      />
    </teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ElImageViewer } from 'element-plus';

defineProps({
  text: {
    type: String,
    default: '预览',
  },
  appendToBody: {
    type: Boolean,
    default: false,
  },
  viewerAttrs: {
    type: Object,
    default: () => ({}),
  },
});
const showViewer = ref(false);
const openViewer = () => {
  showViewer.value = true;
};
const closeViewer = () => {
  showViewer.value = false;
};
</script>
