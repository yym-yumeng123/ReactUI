import React from "react";
import Demo from "lib/Demo/demo";
import API from "example/API/api";
import IconExampleCode from "./icon.example_code";
import IconExample_AllIcon from "./icon.example_allIcon";
import Card from "lib/Card/card";
// tslint:disable-next-line: no-var-requires
const codeAllIcon = require("!!raw-loader!./icon.example_allIcon.tsx");
const codeDemo = require("!!raw-loader!./icon.example_code.tsx");

const IconDemo = () => {
  return (
    <>
      <Card title="代码演示">
        <Demo code={codeDemo.default}>
          <IconExampleCode />
        </Demo>
      </Card>

      <Card title="API">
        <API type="icon" />
      </Card>

      <Card title="所有图标">
        <Demo code={codeAllIcon.default} buttonVisible={false}>
          <IconExample_AllIcon />
        </Demo>
      </Card>
    </>
  );
};

export default IconDemo;
