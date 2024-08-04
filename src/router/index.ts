import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/lifeCycle',
        name: 'LifeCycle',
        component: () => import('@/views/LifeCycle.vue')
    }, {
        path: '/lifeCycleOptionAPI',
        name: 'LifeCycleOptionAPI',
        component: () => import('@/views/LifeCycleOptionAPI.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
