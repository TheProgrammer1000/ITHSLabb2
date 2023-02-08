<template>
  <Button>
    :text="'AddProduct'" :backgroundColor="'brown'" :text-color="'white'"
    @click="showForm" ></Button
  >

  <div v-if="showAddProduct">
    <form @submit="onSubmit" class="add-form">
      <div class="form-control">
        <label>Product</label>
        <input type="text" v-model="text" name="text" />
      </div>

      <input
        type="button"
        @click="$emit('addedproduct', text)"
        value="Save Product"
        class="btn btn-block"
      />
    </form>
  </div>
</template>

<script>
import Button from "../components/button-component.vue";

export default {
  name: "AddTask",
  components: {
    Button,
  },

  data() {
    return {
      showAddProduct: false,
      text: "",
    };
  },

  methods: {
    showForm() {
      this.showAddProduct = !this.showAddProduct;
    },
  },

  emits: {
    addedproduct: {},
  },
};
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}
.add-product-container {
  display: flex;
  margin-top: 5vh;
  background-color: red;
}
</style>
