import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("./pages/home"),
    },
    {
      path: "/404",
      name: "Error",
      component: () => import("./pages/error"),
    },
    // {
    //   path: "/:catchAll(.*)",
    //   redirect: "/404",
    // },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/404",
    },
  ],
});
