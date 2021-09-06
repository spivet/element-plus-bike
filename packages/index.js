import BiForm from './form';
import BiTable from './table';
import BiImageViewer from './image-viewer';

import { setConfig } from './utils/config';

const components = [
  BiForm,
  BiTable,
  BiImageViewer
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
