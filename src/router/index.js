import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Resume from "../views/ResumePage.vue";
import PageNotFound from "../views/PageNotFound.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },

  {
    path: "/resume",
    name: "resume",
    component: Resume,
  },

  {
    path: "/:catchAll(.*)",
    name: "PageNotFound",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
