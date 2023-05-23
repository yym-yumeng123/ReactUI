import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "./src/routes/routes";

// import { routeList } from "./config";

// import All from "lib/All/all";
// import { Layout, Footer, Header, SideBar, Content } from "lib/Layout/layout";
// import { Button } from "lib";
// import Scroll from "lib/Scroll/scroll";
// import "./view.scss";
// // @ts-ignore
// import logo from "./logo.png";

// const isTouchDevice = "ontouchstart" in document.documentElement;
// console.log(isTouchDevice, "isTouchDevice");

import "./src/style/var.scss";
import "./src/style/reset.scss";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
