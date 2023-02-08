<template>
  <div class="product-container">
    <Products
      :productAllList="this.orderFinal"
      @addedToOrder="AddOrder"
      @deltask="deltasks"
    ></Products>
    <ButtonComp
      @click="Buy()"
      :value="'Köp'"
      :backgroundColor="'green'"
      :textColor="'white'"
    ></ButtonComp>

    <!-- <input id="btn" type="button" :value="text" :style="{backgroundColor: backgroundColor, color: textColor}"> -->
  </div>
</template>

<script>
  import Products from '../components/products-component.vue';
  import ButtonComp from '../components/button-component.vue';

  export default {
    data() {
      return {
        orderFinal: []
      };
    },

    components: {
      Products,
      ButtonComp
    },

    created() {
      this.GetOrder();
    },

    mounted() {},

    watch: {
      orderFinal: {
        deep: true,
        handler() {
          localStorage.setItem('orderList', JSON.stringify(this.orderFinal));
          console.log(JSON.parse(localStorage.getItem('orderList')));
        }
      }
    },

    methods: {
      GetOrder() {
        this.orderFinal = JSON.parse(localStorage.getItem('orderList'));
        console.log(this.orderFinal);
      },
      deltasks(id) {
        this.ReduceOrder(id);
      },
      AddOrder(product) {
        if (this.orderFinal.length > 0) {
          for (let i = 0; i < this.orderFinal.length; i++) {
            if (this.orderFinal[i].id === product.id) {
              this.orderFinal[i].quantity += 1;
              break;
            } else if (
              this.orderFinal[i].id !== product.id &&
              i === this.orderFinal.length - 1
            ) {
              product.quantity = 1;
              this.orderFinal.push(product);
              break;
            }
          }
        } else {
          product.quantity = 1;
          this.orderFinal.push(product);
        }
      },
      Buy() {
        console.log('Köpt!');
        this.orderFinal = null;
      },

      ReduceOrder(id) {
        if (this.orderFinal.length > 0) {
          for (let i = 0; i < this.orderFinal.length; i++) {
            if (
              this.orderFinal[i].id === id &&
              this.orderFinal[i].quantity > 0
            ) {
              this.orderFinal[i].quantity -= 1;
              if (this.orderFinal[i].quantity === 0) {
                this.orderFinal = this.orderFinal.filter(
                  (element) => element.quantity !== 0
                );

                console.log(this.orderFinal);
              }
              break;
            } else if (
              this.orderFinal[i].id !== id &&
              i === this.orderFinal.length - 1
            ) {
              console.log(this.orderFinal[i].id === id);
              alert('Tomt, quantity = 0');
              break;
            }
          }
        } else {
          alert('Inget är lagt i kundkorgen än!');
        }
      }
    }
  };
</script>

<style></style>
