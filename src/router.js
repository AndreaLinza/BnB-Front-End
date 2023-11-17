import { createRouter, createWebHistory } from "vue-router";
import{createApp} from 'vue';

import HomePage from "./pages/Home.vue";
import SearchPage from "./pages/SearchPage.vue";
import ApartmentShowPage from "./pages/ApartmentShow.vue";
import NotFound from "./pages/NotFound.vue";



const routes = [
  {  //HOME
    path: "/",
    name: "home",
    component: HomePage,
  },
  {  //SEARCH
    path: "/search",
    name: "search",
    component: SearchPage,
  },
  { //SHOW
    path: '/apartments/:slug',
    name: 'apartments.show',
    component: ApartmentShowPage,
  },
  { //NOT FOUND
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp({})
app.use(router);

router.beforeEach((to,from,next) => {
  window.scrollTo(0,0);
  next();
})


app.mount('#app');

export { router };