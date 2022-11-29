export default [
    {
        path: '/query-form',
        name: 'query-form',
        component: () => import('@/views/form-demo.vue'),
    },
    {
        path: '/editor',
        name: 'editor',
        component: () => import('@/views/editor-demo.vue'),
    },
]