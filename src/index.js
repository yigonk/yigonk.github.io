import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/theme.css";
import "./index.css";
import "./styles/nav.css";
import "./styles/sections.css";
import "./styles/footer.css";
import "./styles/transitions.css";
import "./styles/photo.css";

const navigationEntries = window.performance?.getEntriesByType?.("navigation");
const navType = navigationEntries?.[0]?.type;
const legacyNavType = window.performance?.navigation?.type;
const isReload = navType === "reload" || legacyNavType === 1;

if (isReload && window.location.hash) {
  const target = `${window.location.origin}${window.location.pathname}${window.location.search}`;
  window.location.replace(target);
}

const rootEl = document.getElementById("root");
createRoot(rootEl).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
