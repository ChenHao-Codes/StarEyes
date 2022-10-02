import { createRouter, createWebHistory } from "vue-router";
import request from "../request";
import { getToken, getID, user } from "../common/data";

const routes = [
  {
    path: "/",
    name: "redirect",
    redirect: "/login",
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/home.vue"),
    meta: {
      title: "首页",
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue"),
    meta: {
      title: "登录",
    },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/dashboard.vue"),
    meta: {
      title: "控制台",
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes: routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth == true) {
    if (getToken()) {
      console.log("user.id: " + getID());
      // 有token, 交给后端进行验证
      request.post("/api/auth/verify", user).then((res) => {
        if (res == true) {
          next();
        } else {
          next({
            path: "/login",
          });
        }
      });
    } else {
      ElNotification({
        type: "warning",
        message: "登录会话已过期，请重新登录!",
      });
      next({
        path: "/login",
      });
    }
  } else {
    next();
  }
  if (to.meta.title) {
    document.title = to.meta.title;
  }
});

export default router;
