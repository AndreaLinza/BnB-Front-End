import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/Home.vue";

const routes = [
  {  //HOME
    path: "/",
    name: "home",
    component: HomePage,
  },

  //{ //NOT FOUND
  //  path: "/:pathMatch(.*)*",
  //  name: "not-found",
  //  component: NotFoundPage
  //}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };