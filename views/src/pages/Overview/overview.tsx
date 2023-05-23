import React from "react";
import { Outlet } from "react-router-dom";

import Icon from "lib/Icon/icon";

export default function Overview() {
  return (
    <>
      <div id="detail">
        <Outlet />
      </div>
      <div id="sidebar">
        <Icon name="alipay"></Icon>
      </div>
    </>
  );
}
