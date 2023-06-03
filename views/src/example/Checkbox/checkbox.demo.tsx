import React from "react";
import Demo from "views/src/components/demo";
import API from "../API/api";
import Card from "lib/Card/card";

import CheckboxExampleBasic from "./checkbox.example_basic";
import CheckboxExampleGroup from "./checkbox.example_group";

// tslint:disable-next-line: no-var-requires
const codeCheck = require("!!raw-loader!./checkbox.example_basic.tsx");
const codeGroup = require("!!raw-loader!./checkbox.example_group.tsx");

const CheckboxDemo = () => {
  return (
    <div className="content">
      <Card title="Checkbox 组件基本使用">
        <Demo code={codeCheck.default}>
          <CheckboxExampleBasic />
        </Demo>
      </Card>
      <Card title="RadioGroup 组件使用">
        <Demo code={codeGroup.default}>
          <CheckboxExampleGroup />
        </Demo>
      </Card>

      <Card title="API">
        <API type="checkbox" />
      </Card>
    </div>
  );
};

export default CheckboxDemo;
