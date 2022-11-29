import DxQueryForm from './query-form';
import DxCard from './card';
import DxEditor from './editor';
import { setConfig, fixComponentName } from './utils/config';
import type { App } from 'vue';


const components = [
  DxQueryForm,
  DxCard,
  DxEditor,
];

const install = (app: App, options: any) => {
  setConfig(options);
  components.forEach(item => {
    app.component(fixComponentName(item.name), item);
  });
};

export default {
  install
};
