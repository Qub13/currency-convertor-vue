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

  width: 80vw;
  min-width: 350px;
  max-height: calc(100vh - 30%);
  overflow: auto;
  margin: 0 auto;
  position: relative;
  background-color: #ffffff;

  box-shadow: 0 0 22.2286px rgba(0, 0, 0, 0.05);
  border-radius: 10px;

  .app-main {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 400px;
  }
}
</style>