import AppLayout from '@/layout/AppLayout.vue';
import HomeView from '@/views/HomeView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                   path: '/',
                   component: HomeView
                }
            ]
        }
    ]
});

export default router;
