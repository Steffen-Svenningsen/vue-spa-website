import { createApp } from "vue";
import { MotionPlugin } from "@vueuse/motion";
import App from "./App.vue";
import router from "./router";

import "reset-css";
import "@/assets/global.sass";

const app = createApp(App);

app.use(router);
app.use(MotionPlugin);

app.mount("#app");
