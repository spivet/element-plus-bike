import DxQueryForm from './query-form';
import DxCard from './card';
import { setConfig } from './utils/config';
import type { App } from 'vue';


const components = [
  DxQueryForm,
  DxCard,
];

const install = (app: App, options: any) => {
  setConfig(options);
  components.forEach(item => {
    app.component(item.name, item);
  });
};

export default {
  install
};
