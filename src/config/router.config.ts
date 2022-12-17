import { BasicLayout } from "@/layouts";

export const constantRouterMap = [
  {
    path: "/",
    name: "index",
    component: BasicLayout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/HomeView.vue"),
      },
      {
        path: "/profile",
        name: "profile",
        component: () => import("@/views/ProfileView.vue"),
      },
    ],
  },
];
