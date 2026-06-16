import React from "react";
import ReactDOM from "react-dom/client";
import SecurityPage from "./pages/SecurityPage.jsx";
import { initAnalytics } from "./lib/analytics.js";
import "./index.css";

initAnalytics();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SecurityPage />
  </React.StrictMode>
);
