import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/style.css";

const MAINTENANCE = false;
const keyRequest = "1048262968378408960";

const app = createApp(App);
app.provide("maintenance", MAINTENANCE);
app.provide("keyRequest", keyRequest);
app.use(router);

app.mount("#app");
