import DmForm from './form';
import DmTable from './table';

import { setConfig } from './utils/config';

const components = [
  DmForm,
  DmTable,
];

const install = (app, options) => {
  setConfig(options);
  components.forEach(item => {
    app.component(item.name, item);
  });
};

export default {
  install
};

export * from './uses';
