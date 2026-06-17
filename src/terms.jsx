import React from "react";
import ReactDOM from "react-dom/client";
import LegalPage from "./pages/LegalPage.jsx";
import { termsDoc } from "./data/legal.js";
import { initAnalytics } from "./lib/analytics.js";
import "./index.css";

initAnalytics();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LegalPage doc={termsDoc} />
  </React.StrictMode>
);
