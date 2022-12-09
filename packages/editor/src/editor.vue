<template>
    <div class="dx-editor-wrapper">
        <Toolbar class="dx-editor-toolbar" :editor="editorRef" :defaultConfig="toolbarConfig" :mode="mode" />
        <div class="dx-editor-textarea">
            <Editor
                v-model="content"
                :default-html="props.defaultContent"
                :defaultConfig="editorConfig"
                :mode="mode"
                @on-created="createHandler"
                @on-change="onChange"
                @custom-paste="customPaste"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
// 编辑器文档：https://www.wangeditor.com/v5/
import { onBeforeUnmount, shallowRef, ref, watch, ShallowRef } from 'vue';
import '@wangeditor/editor/dist/css/style.css';
import { IDomEditor } from '@wangeditor/editor';
import { Editor, Toolbar } from '@wangeditor/editor-for-vue';
import useConfig from './hooks/useConfig';

const props = defineProps({
    modelValue: {
        type: String,
    },
    placeholder: {
        type: String,
    },
    defaultContent: {
        type: String,
    },
    readonly: {
        type: Boolean,
    },
});

const emits = defineEmits(['update:modelValue']);

const { mode, editorConfig, toolbarConfig } = useConfig()
// 编辑器实例
const editorRef: ShallowRef = shallowRef();

// 内容 HTML
const content = ref(props.modelValue);

const createHandler = (editor: IDomEditor) => {
    editorRef.value = editor;
};
const onChange = () => {
    emits('update:modelValue', content.value);
};
// 阻止复制的样式，保留文字、字符和排版
const customPaste = (editor: IDomEditor, event: ClipboardEvent) => {
    const text = event.clipboardData?.getData('text/plain');
    editor.insertText(text || '');
    event.preventDefault();
    return true;
};

watch(
    () => props.readonly,
    (newV) => {
        newV ? editorRef.value.disable() : editorRef.value.enable();
    },
);

watch(
    () => props.placeholder,
    (newV) => {
        editorConfig.placeholder = newV;
    },
);

// 销毁编辑器
onBeforeUnmount(() => {
    const editor = editorRef.value;
    if (editor === null) return;
    editor.destroy();
});
</script>
<script lang="ts">
export default {
    name: 'Editor',
}
</script>

<style lang="less" scoped>
.dx-editor-wrapper {
    border: 1px solid #ccc;
    width: 100%;
}
.dx-editor-toolbar {
    border-bottom: 1px solid #ccc;
}
.dx-editor-textarea {
    height: 300px;
}
</style>
