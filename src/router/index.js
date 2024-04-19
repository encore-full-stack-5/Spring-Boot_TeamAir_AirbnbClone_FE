import HostMainView from "@/views/HostMainView.vue";
import HostingListView from "@/views/HostingListView.vue";
import HostingNewRoomView from "@/views/HostingNewRoomView.vue";
import { createWebHistory, createRouter } from "vue-router";
import LoginView from "../views/LoginView";
import ReservationListView from "../views/ReservationListView";
import WishListView from "../views/WishListView";

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
    path: "/become-a-host",
    component: HostingNewRoomView,
  },
  {
    path: "/login",
    component: LoginView,
  },
  {
    path: "/reservation",
    component: ReservationListView,
  },
  {
    path: "/wishlist",
    component: WishListView,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
