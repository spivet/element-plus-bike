import ElProTable from './table';
import ElProTableSearch from './table-search';

const components = [
  ElProTable,
  ElProTableSearch
];

const install = (app) => {
  components.forEach(item => {
    app.component(item.name, item);
  });
};

export default {
  install
};