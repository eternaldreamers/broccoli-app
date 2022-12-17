import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import GlobalFooter from "./components/Footer";
import GlobalHeader from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "font-awesome/css/font-awesome.min.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(GlobalFooter);
app.use(GlobalHeader);

app.mount("#app");
