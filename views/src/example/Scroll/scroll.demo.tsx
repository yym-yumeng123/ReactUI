import React from "react";
import Demo from "views/src/components/demo";
import API from "../API/api";
import Card from "lib/Card/card";

import ScrollExample from './scroll.example'

// tslint:disable-next-line: no-var-requires
const codeScroll = require("!!raw-loader!./scroll.example.tsx");

const ScrollDemo = () => {
  return (
    <div className="content">
      <Card title="Scroll 组件基本使用">
        <Demo code={codeScroll.default}>
          <ScrollExample />
        </Demo>
      </Card>

      <Card title="API">
        <API type="scroll" />
      </Card>
    </div>
  );
};

export default ScrollDemo;
