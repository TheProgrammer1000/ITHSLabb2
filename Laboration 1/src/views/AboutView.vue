<template>
  <div class="about">
    <h1>Dennis cafe succe!</h1>

    <div v-if="$route.params.sales > 0">
      Sådär nu har du {{ $route.params.sales }} mer kaffe att njuta av!
    </div>
    <!-- {isSelected && <HomeView/>} -->
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      bought: false,
    };
  },
};
</script>
