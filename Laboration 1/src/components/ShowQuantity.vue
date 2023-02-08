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

  watch: {
    // orderList: {
    //   deep: true,
    //   handler() {
    //     this.order = this.orderList
    //     console.log(this.order)
    //   }
    // }
  },

  created() {},
};
</script>

<style></style>
