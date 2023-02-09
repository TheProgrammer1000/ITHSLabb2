<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Dennis Café</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link class="nav-link" to="/">Hem</router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            :to="'/about/' + this.$store.state.sales"
            >About</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      orderListFinal: [],
    };
  },
  created() {},
  methods: {
    showCart() {
      console.log("clicked");
    },
    GetOrderList(orderList) {
      console.log(orderList);
    },
  },
};
</script>

<style>
nav {
  margin-bottom: 20vh;
}
</style>
