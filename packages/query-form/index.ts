import QueryForm from './src/form.vue';
import type { App } from 'vue';

QueryForm.install = (app: App) => {
  app.component(QueryForm.name, QueryForm);
};

export default QueryForm;