import React from "react";
import Demo from "views/src/components/demo";
import Card from "lib/Card/card";

import NavExample from "./Nav.example";

// tslint:disable-next-line: no-var-requires
const codeNav = require("!!raw-loader!./Nav.example.tsx");

const NavDemo = () => {
  return (
    <div className="layout_demo">
      <Card title="Nav 导航代码演示">
        <Demo code={codeNav.default}>
          <NavExample />
        </Demo>
      </Card>
      {/*
      <Card title="API">
        <API type="layout" />
      </Card> */}
    </div>
  );
};

export default NavDemo;
