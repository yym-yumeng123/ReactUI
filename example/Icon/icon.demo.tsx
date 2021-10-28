import React from "react";
import Demo from "lib/demo";
import API from "example/API/api";
import IconExampleCode from "./icon.example_code";
import IconExample_AllIcon from "./icon.example_allIcon";
// tslint:disable-next-line: no-var-requires
const codeAllIcon = require("!!raw-loader!./icon.example_allIcon.tsx");
const codeDemo = require("!!raw-loader!./icon.example_code.tsx");

import { Api_Data } from "./config";

const IconDemo = () => {
  return (
    <>
      <h1 className="margin_bottom">代码演示</h1>
      <Demo code={codeDemo.default}>
        <IconExampleCode />
      </Demo>
      <API data={Api_Data} />
      <h1 className="margin_bottom">所有图标</h1>
      <Demo code={codeAllIcon.default} buttonVisible={false}>
        <IconExample_AllIcon />
      </Demo>

    </>
  );
};

export default IconDemo;
