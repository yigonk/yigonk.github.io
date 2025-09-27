import React, { useMemo } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/theme.css";
import "./index.css";
import "./styles/nav.css";
import "./styles/sections.css";
import "./styles/footer.css";

const normalizePath = (path) => {
  if (!path) return "/";
  const trimmed = path.replace(/\/+$/, "");
  if (!trimmed) return "/";
  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
};

const computeBasename = () => {
  const publicUrl = process.env.PUBLIC_URL;
  if (!publicUrl || publicUrl === ".") return undefined;
  try {
    const url = new URL(publicUrl, "http://localhost");
    const normalized = normalizePath(url.pathname);
    return normalized === "/" ? undefined : normalized;
  } catch (err) {
    const normalized = normalizePath(publicUrl);
    return normalized === "/" ? undefined : normalized;
  }
};

const AppWithRouter = () => {
  const basename = useMemo(computeBasename, []);

  return (
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  );
};

const rootEl = document.getElementById("root");
createRoot(rootEl).render(<AppWithRouter />);
