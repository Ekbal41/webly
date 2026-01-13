import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";
import "./i18n";
import Fallback from "./Fallback";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<Fallback />}>
      <App />
    </Suspense>
  </React.StrictMode>
);
