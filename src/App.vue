<template>
  <AppLayout>
    <RouterView />
  </AppLayout>
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

<style lang="sass">
@import "@/assets/styles/main.scss"
</style>
