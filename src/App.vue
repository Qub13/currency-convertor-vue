<template>
  <div class="app-wrapper">
    <AppLayout>
      <RouterView />
    </AppLayout>
  </div>
</template>

<script>
import AppLayout from "@/components/layout/AppLayout.vue";
import { RouterView } from "vue-router";


export default {
  name: "App",
  components: {
    AppLayout,
    RouterView
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";

.app-wrapper {
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
