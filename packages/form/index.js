import DmForm from './src/index.vue';

DmForm.install = (app) => {
  app.component(DmForm.name, DmForm);
};

export default DmForm;