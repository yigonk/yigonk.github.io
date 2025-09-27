import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/theme.css";
import "./index.css";
import "./styles/nav.css";
import "./styles/sections.css";
import "./styles/footer.css";

const rootEl = document.getElementById("root");
createRoot(rootEl).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
