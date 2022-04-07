import PlRest from './src/index.vue';

PlRest.install = (app) => {
  app.component(PlRest.name, PlRest);
};

export default PlRest;
