import ProTable from './src/index.vue';

ProTable.install = (app) => {
  app.component(ProTable.name, ProTable);
};

export default ProTable;