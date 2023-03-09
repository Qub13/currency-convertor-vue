import { createRouter, createWebHashHistory } from "vue-router";
import ConvertView from "@/views/ConvertView.vue";
import CoursesView from "@/views/CoursesView.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/convert"
    },
    {
      path: "/convert",
      name: "convert",
      component: ConvertView
    },
    {
      path: "/courses",
      name: "courses",
      component: CoursesView
    }
  ]
});

export default router;