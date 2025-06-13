import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import LoginPage from "../components/LoginPage.vue";
import AccountStore from "../base/AccountStore";
// const account = AccountStore()
const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
  },
];
const router = createRouter({ history: createWebHashHistory(), routes });

router.beforeEach((to) => {
  if (to.name != "login" && !AccountStore().isLogin) {
    return {
      name: "LoginPage",
    };
  }
});
export default router;
