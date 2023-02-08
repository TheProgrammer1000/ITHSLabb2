<template>
  <div
    v-for="product in this.productAllList"
    :style="{
      'background-image': 'url(' + product.image + ')',
      backgroundSize: 'cover',
    }"
    :key="product.id"
    class="product-item"
  >
    <Product @deltask="deltask" :product="product"></Product>

    <Button
      :text="'Add'"
      @click="this.$emit('addedToOrder', product)"
      :backgroundColor="'green'"
      :textColor="'white'"
    ></Button>
  </div>
</template>

<script>
import Product from "../components/product-component.vue";
import Button from "../components/button-component.vue";

export default {
  name: "HomeView",

  components: {
    Product,
    Button,
  },

  data() {
    return {};
  },

  methods: {
    deltask(id) {
      this.$emit("deltask", id);
    },
  },

  emits: ["deltask", "addedToOrder"],

  props: {
    image: String,
    productAllList: Object,
    orderList: Object,
  },
};
</script>

<style></style>
