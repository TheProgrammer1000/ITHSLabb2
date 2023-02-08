<template>
  <div class="home">
    <header>
      <AddProduct @addedproduct="AddProduct"></AddProduct>
      <input @click="DataToPage()" type="button" value="Cart" />
    </header>
    <ShowQuanity :orderList="this.orderList"></ShowQuanity>
    <div class="product-container">
      <Products
        :productAllList="this.productList"
        @addedToOrder="AddOrder"
        @deltask="deltasks"
        :orderList="this.orderList"
      ></Products>
    </div>
  </div>
</template>

<script>
import Products from "../components/products-component.vue";
import AddProduct from "../components/AddProduct.vue";
import router from "../router/index.js";
import ShowQuanity from "../components/ShowQuantity.vue";

export default {
  name: "HomeView",
  components: {
    Products,
    AddProduct,
    ShowQuanity,
    // CartView
  },

  data() {
    return {
      productList: [],
      orderList: [],
      quantity: 0,
    };
  },

  props: {},

  mounted() {
    let orderlistFinal = JSON.parse(localStorage.getItem("orderList"));
    // console.log(orderlistFinal)

    if (orderlistFinal === null) {
      console.log("orderlist är null localStorage");
    } else {
      this.orderList = orderlistFinal;
      console.log(this.orderList);
    }
  },

  watch: {
    orderList: {
      // This will let Vue know to look inside the array

      deep: true,

      // We have to move our method to a handler field
      handler() {
        this.GetList();
      },
    },
  },
  methods: {
    async GetAllCoffe() {
      let response = await fetch("https://api.sampleapis.com/coffee/hot");
      let data = await response.json();
      return data;
    },
    deltasks(id) {
      this.ReduceOrder(id);
      // this.productList = this.productList.filter((element) => element.id !== id)
    },

    DataToPage() {
      localStorage.setItem("orderList", JSON.stringify(this.orderList));
      router.push("/cart");
    },

    AddProduct(product) {
      this.productList.push({
        id: this.productList[this.productList.length - 1].id + 1,
        title: product,
      });
    },

    GetList() {
      localStorage.setItem("orderList", JSON.stringify(this.orderList));
    },

    AddOrder(product) {
      if (this.orderList.length > 0) {
        for (let i = 0; i < this.orderList.length; i++) {
          if (this.orderList[i].id === product.id) {
            this.orderList[i].quantity += 1;
            break;
          } else if (
            this.orderList[i].id !== product.id &&
            i === this.orderList.length - 1
          ) {
            product.quantity = 1;
            this.orderList.push(product);
            break;
          }
        }
      } else {
        product.quantity = 1;
        this.orderList.push(product);
      }
    },

    ReduceOrder(id) {
      if (this.orderList.length > 0) {
        for (let i = 0; i < this.orderList.length; i++) {
          if (this.orderList[i].id === id && this.orderList[i].quantity > 0) {
            this.orderList[i].quantity -= 1;
            if (this.orderList[i].quantity === 0) {
              this.orderList = this.orderList.filter(
                (element) => element.quantity !== 0
              );

              // const result = words.filter(word => word.length > 6);

              console.log(this.orderList);
            }
            break;
          } else if (
            this.orderList[i].id !== id &&
            i === this.orderList.length - 1
          ) {
            console.log(this.orderList[i].id === id);
            alert("Tomt, quantity = 0");
            break;
          }
        }
      } else {
        alert("Inget är lagt i kundkorgen än!");
        // product.quantity = 1
        // this.orderList.push(product)
      }
    },
  },

  updated() {
    console.log("Updated");
  },

  async created() {
    this.productList = await this.GetAllCoffe();
  },
};
</script>

<style>
.product-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  margin: 0 4vw;
  height: 120vh;
  margin-top: 10vh;
}
</style>
