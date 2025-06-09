import { createRouter, createWebHashHistory } from "vue-router";
// import Home from "../views/Home.vue";
// import About from "../views/About.vue";
// import User from "../views/User.vue";
// import Product from "../views/Product.vue";
// import ProductDetail from "../views/ProductDetail.vue";
// import UserParent from "../views/UserParent.vue";
// import SettingPage from "../views/Setting.vue";

import Header from "@/views/Header.vue";
import Footer from "@/views/Footer.vue";
import Content from "@/views/Content.vue";
const routes = [
  {
    path: "/",
    name: "HomePage",
    components: {
        default:Content,
        header:Header,
        footer:Footer
    }
  }
];
const router = createRouter({ history: createWebHashHistory(), routes });

export default router;
