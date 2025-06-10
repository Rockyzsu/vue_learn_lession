import { createRouter, createWebHashHistory } from "vue-router";
import Counter1 from "../components/Counter1.vue";
import Counter2 from "../components/Counter2.vue";

const routes = [
  {
    path: "/",
    components: {
      counter1: Counter1,
      counter2: Counter2,
    },
  },
];

const router = createRouter({ history: createWebHashHistory(), routes: routes });

export default router;
