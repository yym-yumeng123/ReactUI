import React from "react";
import Demo from "lib/Demo/demo";
import API from "example/API/api";
import Card from "lib/Card/card";

import PagerBasicExample from "./pager.example.basic";
const codeBasic = require("!!raw-loader!./pager.example.basic.tsx");

const PagerDemo = () => {
  return (
    <div>
      <Card title="Popover 基本使用">
        <Demo code={codeBasic.default}>
          <PagerBasicExample />
        </Demo>
      </Card>

      <Card title="API">
        <API type="popover" />
      </Card>
    </div>
  );
};

export default PagerDemo;
