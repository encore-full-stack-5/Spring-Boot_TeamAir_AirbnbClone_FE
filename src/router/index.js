import HostMainView from "@/views/hostViews/HostMainView.vue";
import HostingListView from "@/views/hostViews/HostingListView.vue";
import HostingNewRoomView from "@/views/hostViews/HostingNewRoomView.vue";
import { createWebHistory, createRouter } from "vue-router";
import LoginView from "../views/LoginView";

const routes = [
  {
    path: "/hosting",
    component: HostMainView
  },
  {
    path: "/hosting/listings",
    component: HostingListView
  },
  {
    path: "/become-a-host",
    component: HostingNewRoomView
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