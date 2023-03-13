<template>
  <header class="app-header">
    <nav class="app-header__menu">
      <RouterLink class="menu__link" :to="{name: 'convert'}">Convert
      </RouterLink>
      <RouterLink class="menu__link" :to="{name: 'currency-price'}">
        Currencies price
      </RouterLink>
    </nav>
  </header>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  components: {
    RouterLink
  },
  name: "AppHeader"
};
</script>

<style scoped lang="scss">
.app-header {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px;

  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  height: 50px;

  &__menu {
    display: flex;
    column-gap: 20px;

    font-weight: 600;
    text-transform: uppercase;

    cursor: pointer;

    .menu__link {
      transition: color .3s;

      &:hover {
        color: $accent-color;
      }
    }
  }
}

</style>