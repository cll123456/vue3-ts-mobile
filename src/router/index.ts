import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    meta: {
      title: "工作台",
      keepAlive: true
    },
    component: () => import("../views/Home/index.vue"),
  },
  {
    path: "/mine",
    name: "Mine",
    meta: {
      title: "个人中心",
      keepAlive: true
    },
    component: () => import("../views/mine/index.vue"),
  },
 
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;