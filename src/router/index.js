import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/dashboard',
        name: 'dashboard',
        component: () =>
            import ('../views/Dashboard.vue'),
        meta: {
            auth: true,
            title: 'Dashboard'
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/Login.vue'),
        meta: {
            auth: false,
            title: 'Login'
        }
    },
    {
        path: '/signup',
        name: 'signup',
        component: () =>
            import ('../views/SignUp.vue'),
        meta: {
            auth: false,
            title: 'Signup'
        }
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router