import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import devtools from "vite-plugin-vue-devtools";
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd()) as unknown as ImportMetaEnv;
  return {
    plugins: [vue(), tailwindcss(), devtools()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    server: {
      port: 55011,
    },
    base: env.VITE_SITE_BASE_URL ?? "/",
  };
});
