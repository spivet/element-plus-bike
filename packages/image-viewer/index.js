import DmImageViewer from './src/index.vue';

DmImageViewer.install = (app) => {
  app.component(DmImageViewer.name, DmImageViewer);
};

export default DmImageViewer;