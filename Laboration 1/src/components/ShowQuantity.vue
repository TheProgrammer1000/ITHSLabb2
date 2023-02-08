<template>
  <div v-for="item in orderList" :key="item.id">
    <p>{{ item.title }} {{ item.quantity }}</p>
  </div>
</template>

<script>
export default {
  props: {
    orderList: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      order: Array,
    };
  },
};
</script>

<style></style>
