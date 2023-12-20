import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomeView",
      component: HomeView,
    },
    {
      path: "/favorite",
      name: "favorite",
      component: () => import("../views/FavoritesView.vue"),
    },
    {
      path: "/albums/:id",
      name: "AlbumView",
      component: () => import("../views/AlbumView.vue"),
    },
    {
      path: "/:notFound",
      name: "notFound",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

export default router;
