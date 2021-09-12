import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: 'useage',
    },
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
      path: '/useage',
      name: 'useage',
      component: () => import('../views/useage.md'),
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
    {
      path: '/useCrud',
      name: 'useCrud',
      component: () => import('packages/uses/src/use-crud.md'),
    },
  ],
});


export default router;
