import React from "react";
import Demo from "lib/demo";
import API from "example/API/api";
import Card from "lib/Card/card";

import GridExample from "./grid.example";
// tslint:disable-next-line: no-var-requires
const codeLevel = require("!!raw-loader!./grid.example.tsx");


const GridDemo = () => {
  return (
    <div className="content">
      <Card title="Grid 布局">
        <Demo code={codeLevel.default}>
          <GridExample />
        </Demo>
      </Card>
    </div>
  );
};

export default GridDemo;
