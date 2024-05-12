import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

let logoURL = "/logo-black.svg";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "script-defer",
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "Yukitoshi Portfolio",
        short_name: "Yukitoshi Imaizumi-Zhou",
        description: "Yukitoshi's Portfolio made with React Vite",
        theme_color: "#ffffff",
        icons: [
          {
            src: "logoURL",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "logoURL",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,svg,jpg,pdf,jsx}"],
        runtimeCaching: [
          {
            urlPattern: ({ url }) => {
              return url.pathname.startsWith("/src/assets");
            },
            handler: "CacheFirst",
            options: {
              cacheName: "assets-cache",
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],
  server: {
    port: 3000,
    open: true,
    host: true,
  },
});
