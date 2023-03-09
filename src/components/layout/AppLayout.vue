<template>
  <div class="app-layout">
    <AppHeader />
    <main class="app-main">
      <slot></slot>
    </main>
  </div>
</template>

<script>
import AppHeader from "@/components/layout/AppHeader.vue";

export default {
  name: "AppLayout",
  components: {
    AppHeader
  }
};
</script>

<style lang="scss">
.app-layout {
  max-width: 500px;
  width: 90%;
  min-width: 300px;
  max-height: 600px;
  height: 100%;
  background-color: #ffffff;

  box-shadow: 0 0 22.2286px rgba(0, 0, 0, 0.05);
  border-radius: 10px;

  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);

  overflow: scroll;

}
</style>