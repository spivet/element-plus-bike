import DmCrud from './crud';
import DmForm from './form';
import DmTable from './table';

const components = [
  DmCrud,
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