import React from "react";
import Demo from "lib/Demo/demo";
import API from "example/API/api";
import Card from "lib/Card/card";

import CardDefaultExample from "./collapse.example";
const codeDefaultDemo = require("!!raw-loader!./collapse.example.tsx");

const CollapseDemo = () => {
  return (
    <>
      <Demo code={codeDefaultDemo.default}>
        <CardDefaultExample />
      </Demo>

      <Card title="API">
        <API type="card" />
      </Card>
    </>
  );
};

export default CollapseDemo;
