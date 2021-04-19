import React from "react";
import Demo from "lib/demo";
import IconExample from "./icon.example";
import IconExample2 from "./icon.example2";
// tslint:disable-next-line: no-var-requires
const code = require("!!raw-loader!./icon.example.tsx");
const code2 = require("!!raw-loader!./icon.example2.tsx");

const IconDemo = () => {
  return (
    <>
      <Demo code={code2.default}>
        <IconExample2 />
      </Demo>
      <Demo code={code.default} buttonVisible={false}>
        <IconExample />
      </Demo>
    </>
  );
};

export default IconDemo;
