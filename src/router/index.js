import HostMainView from "@/views/HostMainView.vue";
import HostingListView from "@/views/HostingListView.vue";
import { createWebHistory, createRouter } from "vue-router";
import LoginView from "../views/LoginView";

const routes = [
  {
    path: "/hosting",
    component: HostMainView,
  },
  {
    path: "/hosting/listings",
    component: HostingListView,
  },
  {
    path: "/login",
    component: LoginView,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
