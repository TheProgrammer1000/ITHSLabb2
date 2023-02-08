<template>
  <input
    id="btn"
    type="button"
    :value="text"
    :style="{ backgroundColor: backgroundColor, color: textColor }"
  />
</template>

<script>
export default {
  data() {
    return {};
  },

  props: {
    text: String,
    backgroundColor: String,
    textColor: String,
  },
};
</script>

<style></style>
