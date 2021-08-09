import ElProTableList from './table-list';
import ElProTableSearchForm from './table-search-form';

const components = [
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