import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/categories',
        name: 'categories',
        component: () => import('../views/Categories.vue')
    },
    {
        path: '/:slug',
        name: 'post',
        component: () => import('../views/Post.vue')
    },
    {
        path: '/categories/:slug',
        name: 'category',
        component: () => import('../views/Category.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
