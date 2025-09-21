import React from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import "./index.css";
import "./styles/sections.css";
import "./styles/theme.css";
import "./styles/nav.css";


const rootEl=document.getElementById("root");
createRoot(rootEl).render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);
