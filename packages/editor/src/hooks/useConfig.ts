import { IToolbarConfig, IEditorConfig } from '@wangeditor/editor'

export default function useConfig() {
  // 编辑器模式
  const mode = 'simple'

  // 编辑器工具栏配置
  const toolbarConfig: Partial<IToolbarConfig> = {
    toolbarKeys: ['color', 'fontSize', 'bold', 'underline', 'bgColor'],
  }

  // 编辑器编辑配置
  const editorConfig: Partial<IEditorConfig> = {
    placeholder: '请输入内容...',
  }

  return {
    mode,
    toolbarConfig,
    editorConfig,
  }
}
