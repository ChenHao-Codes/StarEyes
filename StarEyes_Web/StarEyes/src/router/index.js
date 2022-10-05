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
    },
    {
        path: '/HomePage',
        name: 'HomePage',
        component: () => import('../views/HomePage.vue'),
        meat: {
            title: "主页"
        },
        children:[
            {
                path: '/HomePage/Overview',
                component: () => import('../components/Overview.vue'),
            },
            {
                path: '/HomePage/MonitorsManagement',
                component: () => import('../components/MonitorsManagement.vue'),
            },
            {
                path: '/HomePage/Events',
                component: () => import('../components/Events.vue'),
            },
            {
                path: '/HomePage/ServersManagement',
                component: () => import('../components/ServersManagement.vue'),
            },
            {
                path: '/HomePage/PersonalInformation',
                component: () => import('../components/PersonalInformation.vue'),
            },
            {
                path: '/HomePage/About',
                component: () => import('../components/About.vue'),
            },
        ],
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