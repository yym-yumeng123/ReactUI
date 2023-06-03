import React from "react";
import Demo from "views/src/components/demo";
import API from "../API/api";
import Card from "lib/Card/card";

import RadioExampleBasic from "./radio.example_basic";
import RadioGroupExample from "./radio.example_group";

// tslint:disable-next-line: no-var-requires
const codeRadio = require("!!raw-loader!./radio.example_basic.tsx");
const codeRadioGroup = require("!!raw-loader!./radio.example_group.tsx");

const RadioDemo = () => {
  return (
    <div className="content">
      <Card title="Radio 组件基本使用">
        <Demo code={codeRadio.default}>
          <RadioExampleBasic />
        </Demo>
      </Card>
      <Card title="RadioGroup 组件使用">
        <Demo code={codeRadioGroup.default}>
          <RadioGroupExample />
        </Demo>
      </Card>

      <Card title="API">
        <API type="radio" />
      </Card>
    </div>
  );
};

export default RadioDemo;
