import Editor from './src/editor.vue';
import { fixComponentName } from '../utils/config';
import type { App } from 'vue';

Editor.install = (app: App) => {
  app.component(fixComponentName('Editor'), Editor);
};

export type EditorInstance = InstanceType<typeof Editor>;
export default Editor;