import Card from './src/card.vue';
import type { App } from 'vue';

Card.install = (app: App) => {
  app.component(Card.name, Card);
};

export type CardInstance = InstanceType<typeof Card>;
export default Card;