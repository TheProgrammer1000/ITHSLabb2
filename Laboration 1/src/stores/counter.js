import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      sales: 0,
    };
  },
  mutations: {
    Sold(state) {
      state.sales += 1;
    },
  },
  strict: true,
});
