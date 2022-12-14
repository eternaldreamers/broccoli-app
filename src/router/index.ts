import { constantRouterMap } from "@/config/router.config";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRouterMap,
});

export default router;
