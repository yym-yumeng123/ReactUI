import React from "react";
import Demo from "lib/Demo/demo";
import Card from "lib/Card/card";

import NavExample from "./nav.example";

// tslint:disable-next-line: no-var-requires
const codeLevel = require("!!raw-loader!./nav.example.tsx");

const NavDemo = () => {
  return (
    <div className="content">
      <Card title="Nav">
        <Demo code={codeLevel.default}>
          <NavExample />
        </Demo>
      </Card>
    </div>
  );
};

export default NavDemo;
