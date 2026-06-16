import React from "react";
import ReactDOM from "react-dom/client";
import PricingPage from "./pages/PricingPage.jsx";
import { initAnalytics } from "./lib/analytics.js";
import "./index.css";

initAnalytics();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PricingPage />
  </React.StrictMode>
);
