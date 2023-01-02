import { createApp } from "vue";
import "./style.css";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import About from "./pages/About.vue";
import Home from "./pages/Home.vue";
import Team from "./pages/Team.vue"

let locale

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/:locale", name: "home", component: Home, props:  {locale: locale } },
    { path: "/about/:locale", name: "about", component: About },
    { path: "/team/:locale", name: "team", component: Team },
  ],
});

createApp(App).use(router).mount("#app");
