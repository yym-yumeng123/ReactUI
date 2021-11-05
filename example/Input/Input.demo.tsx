import React from "react";
import Demo from "lib/demo";
import API from "example/API/api";
import Card from "lib/Card/card";

import InputExample from "./Input.example";
// tslint:disable-next-line: no-var-requires
const codeBasic = require("!!raw-loader!./Input.example.tsx");


const InputDemo = () => {
  return (
    <div className="content">
      <Card title="Input 基本输入框">
        <Demo code={codeBasic.default}>
          <InputExample />
        </Demo>
      </Card>

      <Card title="API">
        <API type="grid" />
      </Card>
    </div>
  );
};

export default InputDemo;
