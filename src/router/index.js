import HostMainView from "@/views/HostMainView.vue";
import HostingListView from "@/views/HostingListView.vue";
import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
      path: "/hosting",
      component: HostMainView
    },
    {
      path: "/hosting/listings",
      component: HostingListView
    }
  ];
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  export default router;