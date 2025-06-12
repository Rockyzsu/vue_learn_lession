import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import LoginPage from "../components/LoginPage.vue";
const routes = [
  {
    path: "/",
    name: "HomePage",
    component:HomePage
  },
    {
    path: "/login",
    name: "LoignPage",
    component:LoginPage
  },
];
const router = createRouter({ history: createWebHashHistory(), routes });

export default router;