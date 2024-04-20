import HostMainView from "@/views/hostViews/HostMainView.vue";
import HostingListView from "@/views/hostViews/HostingListView.vue";
import HostingNewRoomView from "@/views/hostViews/HostingNewRoomView.vue";
import { createWebHistory, createRouter } from "vue-router";
import LoginView from "../views/LoginView";
import ReservationListView from "../views/ReservationListView";
import WishListView from "../views/WishViews/WishListView";
import WishDetailView from "../views/WishViews/WishDetailView";
import MainView from "../views/MainView";
import SignupView from "../views/SignupView";

const routes = [
  {
    path: "/",
    component: MainView,
  },
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
    path: "/signup",
    component: SignupView,
  },
  {
    path: "/reservation",
    component: ReservationListView,
  },
  {
    path: "/wishlist",
    component: WishListView,
  },
  {
    path: "/wishdetail",
    component: WishDetailView,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
