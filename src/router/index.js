import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
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
      path: '/table',
      name: 'table',
      component: () => import('../views/table.vue'),
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
  ],
});


export default router;
