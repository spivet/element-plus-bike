import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/table-search',
            name: 'table-search',
            component: () => import('../views/table-search.vue'),
        },
    ],
});


export default router;
