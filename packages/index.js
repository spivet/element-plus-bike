import DmForm from './form';
import DmTable from './table';

const components = [
  DmForm,
  DmTable,
];

const install = (app) => {
  components.forEach(item => {
    app.component(item.name, item);
  });
};

export default {
  install
};

export * from './uses';
