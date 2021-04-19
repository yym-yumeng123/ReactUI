import React from "react";
import Demo from "lib/demo";
import ButtonTypeExample from "./buttonType.example";
import ButtonDisabled from "./buttonDisabled.example";
import ButtonBlock from "./buttonBlock.example";
import ButtonSize from "./buttonSize.example";
// tslint:disable-next-line: no-var-requires
const codeLevel = require("!!raw-loader!./buttonType.example.tsx");
const codeDisabled = require("!!raw-loader!./buttonType.example.tsx");
const codeBlock = require("!!raw-loader!./buttonBlock.example.tsx");
const codeSize = require("!!raw-loader!./buttonSize.example.tsx");

const IconDemo = () => {
  return (
    <>
      <Demo code={codeLevel.default}>
        <ButtonTypeExample />
      </Demo>
      <Demo code={codeDisabled.default}>
        <ButtonDisabled />
      </Demo>
      <Demo code={codeBlock.default}>
        <ButtonBlock />
      </Demo>
      <Demo code={codeSize.default}>
        <ButtonSize />
      </Demo>
    </>
  );
};

export default IconDemo;
