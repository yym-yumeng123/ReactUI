import React from "react";
import { createHashRouter } from "react-router-dom";

import Home from "../pages/Home/home";
import Overview from "../pages/Overview/overview";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>错误路由进入页</div>
  },
  {
    path: "/overview",
    element: <Overview />,
  },
]);

export default router;
