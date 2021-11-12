import React from "react";
import Demo from "lib/Demo/demo";
import API from "example/API/api";
import Card from "lib/Card/card";

import "./popover.demo.scss";

import PopoverBasicExample from "./popover.example_basic";
import PopoverPositionExample from "./popover.example_position";
const codeBasic = require("!!raw-loader!./popover.example_basic.tsx");
const codePosition = require("!!raw-loader!./popover.example_position.tsx");

const PopoverDemo = () => {
  return (
    <div>
      <Card title="Popover 基本使用">
        <Demo code={codeBasic.default}>
          <PopoverBasicExample />
        </Demo>
      </Card>

      <Card title="Popover 四个方向">
        <Demo code={codePosition.default}>
          <PopoverPositionExample />
        </Demo>
      </Card>
      <Card title="API">
        <API type="popover" />
      </Card>
    </div>
  );
};

export default PopoverDemo;
