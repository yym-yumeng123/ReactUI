import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
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

import './src/style/var.scss'
import "lib/assets/stylesheets/reset.scss";

import Home from "./src/pages/Home/home";
import Root from "./src/routes/root";
import ErrorPage from "./src/error-page";
import Contact from "./src/contact";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/components",
    element: <Root />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
