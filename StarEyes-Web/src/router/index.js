import { createRouter, createWebHistory } from "vue-router";
import request from "../utils/request";
import { getToken, getID, user, getFlashFlag, setFlashFlag } from "../common/localStorage";

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
      title: "首页 - StarEyes",
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue"),
    meta: {
      title: "登录 - StarEyes",
    },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    redirect: "/dashboard/overview",
    component: () => import("../views/dashboard.vue"),
    meta: {
      title: "控制台 - StarEyes",
      requiresAuth: true,
    },
    children: [
      {
        name: "overview",
        path: "overview",
        component: () => import("../views/overview.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        name: "monitors",
        path: "monitors",
        component: () => import("../views/monitors.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        name: "events",
        path: "events",
        component: () => import("../views/events.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        name: "servers",
        path: "servers",
        component: () => import("../views/servers.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        name: "account",
        path: "account",
        component: () => import("../views/account.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        name: "about",
        path: "about",
        component: () => import("../views/about.vue"),
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },
  {
    name: "404",
    path: "/404",
    component: () => import("@/views/404.vue"),
    meta: {
      title: "404 - StarEyes",
    },
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes: routes,
});
// setFlashFlag(true);
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth == true) {
    if (getToken()) {
      // 有token, 交给后端进行验证
      request.post("/api/auth/verify", user).then((res) => {
        if (res == true) {
          next();
          // console.log(getFlashFlag());
          // console.log("before if");
          // console.log(from.path);
          // console.log(to.path);
          // if( from.path!=to.path && from.path!="/login" && from.path!="/" ){
          //   router.go(0);
          //   console.log("flush");           
          // }
          // setFlashFlag(true);
        } else {
          next({
            path: "/login",
          });
        }
      });
    } else {
      next({
        path: "/login",
      });
      ElNotification({
        type: "warning",
        message: "登录会话已过期，请重新登录!",
      });
    }
  } else {
    next();
  }
  if (to.meta.title) {
    document.title = to.meta.title;
  }
}
// routerclick


);

export default router;
