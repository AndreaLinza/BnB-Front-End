import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/Home.vue";
import ApartmentShowPage from "./pages/ApartmentShow.vue";

const routes = [
  {  //HOME
    path: "/",
    name: "home",
    component: HomePage,
  },
  { //SHOW
    path:'/apartments/:slug',
    name:'apartments.show',
    component: ApartmentShowPage,
  }


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