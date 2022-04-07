import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/play/table',
      name: 'table',
      component: () => import('./table.vue'),
    },
  ],
});


export default router;
