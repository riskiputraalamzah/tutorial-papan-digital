import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/style.css";

const MAINTENANCE = false;

const app = createApp(App);
app.provide("maintenance", MAINTENANCE);
app.use(router);

app.mount("#app");
