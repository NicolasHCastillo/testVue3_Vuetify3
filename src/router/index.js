import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home'
import Menu from '@/pages/Menu'
import NotFound from '@/pages/NotFound'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/menu',
        name: 'Menu',
        component: Menu
    },
    {
        path: '/menu',
        name: 'Tables',
        component: Menu
    },
    {
        path: '/',
        name: 'Typography',
        component: Home
    },
    {
        path: '/menu',
        name: 'Icons',
        component: Menu
    },
    {
        path: '/menu',
        name: 'Maps',
        component: Menu
    },
    {
        path: '/menu',
        name: 'Notifications',
        component: Menu
    },
    
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFousnd',
        component: NotFound
      }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router