import { createApp } from "vue";
import "./style.css";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import About from "./pages/About.vue";
import Home from "./pages/Home.vue";

let locale = "uk"

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/:locale", name: "home", component: Home, props: {locale: locale} },
    { path: "/about", name: "about", component: About },
  ],
});

createApp(App).use(router).mount("#app");
