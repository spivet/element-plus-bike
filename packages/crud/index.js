import DmCrud from './src/index.vue';

DmCrud.install = (app) => {
  app.component(DmCrud.name, DmCrud);
};

export default DmCrud;