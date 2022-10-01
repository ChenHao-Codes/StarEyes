import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "redirect",
    redirect: "/login",
    meat: {
      title: "首页",
    },
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/home.vue"),
    meat: {
      title: "首页",
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue"),
    meat: {
      title: "登录",
    },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/dashboard.vue"),
    meat: {
      title: "控制台",
    },
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes: routes,
});

router.beforeEach((to, from, next) => {
  // 路由发生变化修改页面title
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;
