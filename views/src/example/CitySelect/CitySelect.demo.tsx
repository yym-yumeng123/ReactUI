import React from "react";
import Demo from "views/src/components/demo";
import Card from "lib/Card/card";

import CitySelectExample from "./cityselect.example";
const codeDefaultDemo = require("!!raw-loader!./cityselect.example.tsx");

const CitySelectDemo = () => {
  return (
    <div>
      <Card title="手机选城市">
        <Demo code={codeDefaultDemo.default}>
          <CitySelectExample />
        </Demo>
      </Card>
    </div>
  );
};

export default CitySelectDemo;
