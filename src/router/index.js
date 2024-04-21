import HostMainView from "@/views/HostMainView.vue";
import HostingListView from "@/views/HostingListView.vue";
import HostingNewRoomView from "@/views/HostingNewRoomView.vue";
import { createWebHistory, createRouter } from "vue-router";
import LoginView from "../views/LoginView";
import MainView from "../views/MainView.vue";
import RoomDetailView from "../views/RoomDetailView.vue";
import SearchView from "../views/SearchView.vue";
import UserInfoView from "../views/UserInfoView.vue";
import WishListView from "../views/WishListView.vue";

const routes = [
  {
    path: "/",
    component: MainView,
  },
  {
    path: "/search/city=:city&checkIn=:checkIn&checkOut=:checkOut&guestNum=:guestNum",
    component: SearchView,
  },
  {
    path: "/wishlists",
    component: WishListView,
  },
  {
    path: "/personal-info",
    component: UserInfoView,
  },
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
  {
    path: "/roomDetail/:id",
    component: RoomDetailView,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
