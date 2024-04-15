import HostMainView from "@/views/HostMainView.vue";
import HostingListView from "@/views/HostingListView.vue";
import HostingNewRoomView from "@/views/HostingNewRoomView.vue";
import { createWebHistory, createRouter } from "vue-router";

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
    }
  ];
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  export default router;