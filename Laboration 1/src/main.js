import { createApp } from "vue";
import { store } from "./stores/counter.js";
import "bootstrap/dist/css/bootstrap.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(router);
app.use(bootstrap);
app.use(store);

app.mount("#app");
