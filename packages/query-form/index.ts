import QueryForm from './src/form.vue';
import type { App } from 'vue';

QueryForm.install = (app: App) => {
  app.component(QueryForm.name, QueryForm);
};

export type CardInstance = InstanceType<typeof QueryForm>;
export default QueryForm;