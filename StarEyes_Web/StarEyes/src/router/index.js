import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/home.vue'),
        meat: {
            title: "首页"
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login.vue'),
        meat: {
            title: "登录"
        }
    }

]

const router = createRouter({
    history: createWebHistory("/"),
    routes: routes
})

/* 路由发生变化修改页面title */
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

export default router