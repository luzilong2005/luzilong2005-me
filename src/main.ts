import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import { router } from "./router";
import Particles from "@tsparticles/vue3";
import { loadSlim } from "@tsparticles/slim";
import { printBanner, printMiniBanner } from "./banner";
createApp(App)
  .use(router)
  .use(Particles, {
    init: async (engine) => {
      await loadSlim(engine);
    },
  })
  .mount("#app");

printBanner();
printMiniBanner();
