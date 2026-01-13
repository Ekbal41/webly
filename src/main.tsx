import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";
import "./i18n";
import Fallback from "./Fallback";
import { ThemeProvider } from "./components/theme-provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Suspense fallback={<Fallback />}>
        <App />
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>
);
