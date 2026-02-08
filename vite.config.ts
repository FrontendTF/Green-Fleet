import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// PWA
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  base: "/", // wichtig: explizit
  // Dev-Server Konfiguration für Handy Testing
  /* server: {
    host: true, // oder "0.0.0.0"
    port: 5173,
  },*/
  plugins: [
    react(),
    VitePWA({
      base: "/", // wichtig: explizit
      buildBase: "/", // wichtig: explizit

      workbox: {
        navigateFallback: "/index.html",
      },
      registerType: "autoUpdate", // "prompt" wäre Update-Flow (du entscheidest, wann reload), autoUpdate = sofort neu laden
      // inclues assests im public-ordner später einfügen
      manifest: {
        name: "Green Fleet",
        short_name: "GreenFleet",
        description: "Green Fleet - Deine nachhaltige Tracking-App",
        start_url: "/",
        scope: "/",
        display: "standalone",
        theme_color: "#0ea5e9",
        background_color: "#ffffff",
        icons: [{ src: "/logo2.png", sizes: "512x512", type: "image/png" }],
      },
      // Optional: auch im Dev-Modus Service Worker testen
      devOptions: {
        enabled: false,
      },
    }),
  ],
});
