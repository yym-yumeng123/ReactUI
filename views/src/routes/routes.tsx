import React from "react";
import { createHashRouter } from "react-router-dom";

import Home from "../pages/Home/home";
import Overview from "views/src/pages/Overview/overview";
import IconDemo from "views/src/example/Icon/Icon.demo";


const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>错误路由进入页</div>
  },
  {
    path: "/overview",
    element: <Overview />,
    children: [
      {
        path: 'icon',
        element: <IconDemo />,
        index: true
      },
      {
        path: 'layout',
        element: <IconDemo />,
      },
    ]
  },
]);

export default router;
