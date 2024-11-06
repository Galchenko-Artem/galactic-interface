import { createRouter, createWebHistory } from "vue-router";
import StarshipList from "../views/StarshipList.vue";
import StarshipDetail from "../views/StarshipDetail.vue";

const routes = [
  {
    path: "/",
    name: "StarshipList",
    component: StarshipList,
  },
  {
    path: "/starship/:id",
    name: "StarshipDetail",
    component: StarshipDetail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
