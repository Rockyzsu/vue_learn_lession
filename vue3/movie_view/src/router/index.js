import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import NewHello from "../views/NewHello.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
    {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/hello",
    name: "NewHello",
    component: NewHello,
  },
];

const router = createRouter({ history: createWebHashHistory(), routes });

export default router;
