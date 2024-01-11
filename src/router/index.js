import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'login',
        component: () => import('../views/Login.vue'),
        // children: [
        //     {

                
        //     }
        // ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

