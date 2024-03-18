import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import icon from "@yu_design/components/icon/src/icon.vue";

const plugins = [icon];
const app = createApp(App);
plugins.forEach((plugin) => app.use(plugin));

app.mount("#app");
