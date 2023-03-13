<template>
  <input v-model="status" class="star" type="checkbox" title="Add to favourite">
</template>

<script>
import { ref, watch } from "vue";

export default {
  name: "FavouriteCheckbox",
  props: {
    checkboxStatusProp: {
      type: Boolean,
      default: false
    }
  },
  emits: ["changeCheckboxValue"],
  setup(props, { emit }) {
    const status = ref(props.checkboxStatusProp);

    watch(() => status.value, (val) => {
      emit("changeCheckboxValue", val);
    });

    return {
      status
    };
  }
};
</script>

<style scoped lang="scss">
.star {
  visibility: hidden;
  font-size: 14px;
  cursor: pointer;
  position: relative;
}

.star:before {
  content: "\2606";
  position: absolute;
  visibility: visible;
  color: #ffcc00;

}

.star:checked:before {
  content: "\2605";
  position: absolute;
  color: #ffcc00;

}
</style>