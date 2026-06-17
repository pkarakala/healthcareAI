import React from "react";
import ReactDOM from "react-dom/client";
import LegalPage from "./pages/LegalPage.jsx";
import { privacyDoc } from "./data/legal.js";
import { initAnalytics } from "./lib/analytics.js";
import "./index.css";

initAnalytics();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LegalPage doc={privacyDoc} />
  </React.StrictMode>
);
