import HostMainView from "@/views/hostViews/HostMainView.vue";
import HostingListView from "@/views/hostViews/HostingListView.vue";
import HostingNewRoomView from "@/views/hostViews/HostingNewRoomView.vue";
import { createWebHistory, createRouter } from "vue-router";
import LoginView from "../views/LoginView";
import ReservationListView from "../views/ReservationListView";
import WishListView from "../views/WishViews/WishListView";
import WishDetailView from "../views/WishViews/WishDetailView";
import SignupView from "../views/SignupView";
import MainView from "../views/MainView.vue";
import RoomDetailView from "../views/RoomDetailView.vue";
import SearchView from "../views/SearchView.vue";
import UserInfoView from "../views/UserInfoView.vue";

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
    path: "/personal-info",
    component: UserInfoView,
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
