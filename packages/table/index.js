import DmTable from './src/index.vue';

DmTable.install = (app) => {
  app.component(DmTable.name, DmTable);
};

export default DmTable;