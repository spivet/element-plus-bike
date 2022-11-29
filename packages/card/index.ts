import Card from './src/card.vue';
import { fixComponentName } from '../utils/config';
import type { App } from 'vue';

Card.install = (app: App) => {
  app.component(fixComponentName(Card.name), Card);
};

export type CardInstance = InstanceType<typeof Card>;
export default Card;