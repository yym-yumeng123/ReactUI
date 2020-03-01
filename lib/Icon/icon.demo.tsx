import React from "react";
import Demo from "../../demo";
import IconExample from "./icon.example";
// tslint:disable-next-line: no-var-requires
const code = require("!!raw-loader!./icon.example.tsx");

const IconDemo = () => {
  return (
    <Demo code={code.default}>
      <IconExample />
    </Demo>
  );
};

export default IconDemo;
