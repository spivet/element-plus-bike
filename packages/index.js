import ElProTable from './table';
import ElProTableList from './table-list';
import ElProTableSearchForm from './table-search-form';

const components = [
  ElProTable,
  ElProTableList,
  ElProTableSearchForm
];

const install = (app) => {
  components.forEach(item => {
    app.component(item.name, item);
  });
};

export default {
  install
};