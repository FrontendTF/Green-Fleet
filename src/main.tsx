import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";

import { registerSW } from "virtual:pwa-register";

const updateSW = registerSW({
  onNeedRefresh() {
    // z.B. Dialog/Toast anzeigen
    if (confirm("Update verfügbar. Neu laden?")) updateSW(true);
  },
  onOfflineReady() {
    // optional: Hinweis "Offline bereit"
    console.log("App ist offline verfügbar.");
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
