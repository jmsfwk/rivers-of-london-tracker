import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddCharacterView from "../views/AddCharacterView.vue";
import LuckView from "../views/LuckView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/luck",
      name: "luck",
      component: LuckView,
    },
    {
      path: "/add-character",
      name: "add-character",
      component: AddCharacterView,
    },
  ],
});

export default router;
