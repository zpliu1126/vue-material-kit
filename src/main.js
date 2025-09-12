import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

// Nucleo Icons
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";

import materialKit from "./material-kit";


//request
// import axios from 'axios';


const app = createApp(App);
// app.config.globalProperties.$axios = axios;
app.use(createPinia());
app.use(router);
app.use(materialKit);
app.mount("#app");
