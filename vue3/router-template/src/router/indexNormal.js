import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import User from "../views/User.vue";
import Product from "../views/Product.vue";
import ProductDetail from "../views/ProductDetail.vue";
import UserParent from "../views/UserParent.vue";
import SettingPage from "../views/Setting.vue";
const routes = [
  {
    path: "/",
    name: "HomePage",
    component: Home,
  },

  {
    path: "/about",
    name: "AboutPage",
    component: About,
  },

  {
    path: "/user/:id",
    name: "UserPage",
    component: User,
  },

  {
    path: "/product/:id(\\d+)?",
    name: "ProductID",
    component: Product,
  },
  {
    path: "/product/:name(\\D+)",
    name: "ProductDetail",
    component: ProductDetail,
  },
  {
    path: "/setting",
    name: "SettingPage",
    component: UserParent,
    children: [
      {
        path: "detail",
        component: SettingPage,
      },
    ],
  },
];
const router = createRouter({ history: createWebHashHistory(), routes });

export default router;
