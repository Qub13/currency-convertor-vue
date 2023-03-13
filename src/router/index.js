import { createRouter, createWebHashHistory } from "vue-router";
import ConvertView from "@/views/ConvertView.vue";
import CurrenciesPriceView from "@/views/CurrenciesPriceView/CurrenciesPriceView.vue";

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
      path: "/currency-price",
      name: "currency-price",
      component: CurrenciesPriceView
    }
  ]
});

export default router;