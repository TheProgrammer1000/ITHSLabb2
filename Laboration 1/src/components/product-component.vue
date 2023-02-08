<template>
  <h3>{{ product.title }}</h3>

  <div v-if="product.quantity > 0">
    <h3>{{ product.quantity }}</h3>
  </div>

  <input type="button" @click="this.$emit('deltask', product.id)" value="-" />
</template>

<script>
  export default {
    data() {
      return {};
    },

    mounted() {
      this.ShowQuanity();
    },

    emits: ['deltask'],

    methods: {
      ShowQuanity() {}
    },

    props: {
      product: Object,
      orderList: Object
    }
  };
</script>

<style></style>
