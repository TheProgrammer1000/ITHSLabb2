<template>
  <nav>
    <ul>
      <router-link to="/"><h2>Hem</h2></router-link>
      <router-link to="/about/40"><h2>About</h2></router-link>
    </ul>
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
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body,
html {
  /* background-color: #faf5e4; */
  background-color: #f6feaa;
}

nav ul {
  display: flex;
  justify-content: space-around;
  background-color: #a77c19;
  height: 8vh;
  list-style: none;
}

nav a {
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-size: 1.2rem;
  font-weight: 700;
}

nav a.router-link-exact-active {
  color: rgb(128, 126, 126);
}
</style>
