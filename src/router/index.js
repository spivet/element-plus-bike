import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/table-search',
      name: 'table-search',
      component: () => import('../views/table-search.vue'),
    },
    {
      path: '/table-list',
      name: 'table',
      component: () => import('../views/table-list.vue'),
    },
    {
      path: '/dm-form',
      name: 'dm-form',
      component: () => import('../views/dm-form.vue'),
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('packages/form/index.md'),
    },
    {
      path: '/table',
      name: 'table',
      component: () => import('packages/table/index.md'),
    },
  ],
});


export default router;
