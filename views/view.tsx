import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "./src/routes/routes";

import ErrorBoundary from "./src/components/error.jsx";

// const isTouchDevice = "ontouchstart" in document.documentElement;
// console.log(isTouchDevice, "isTouchDevice");

import "./src/assets/style/var.scss";
import "./src/assets/style/reset.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<h2>Something went wrong.</h2>}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>
);
