import QueryForm from './src/form.vue';
import { fixComponentName } from '../utils/config';
import type { App } from 'vue';

QueryForm.install = (app: App) => {
  app.component(fixComponentName(QueryForm.name), QueryForm);
};

export type CardInstance = InstanceType<typeof QueryForm>;
export default QueryForm;