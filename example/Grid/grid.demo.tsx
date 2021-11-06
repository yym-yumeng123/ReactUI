import React from "react";
import Demo from "lib/Demo/demo";
import API from "example/API/api";
import Card from "lib/Card/card";

import GridBasicExample from "./grid.example_basic";
import GridGutterExample from "./grid.example_gutter";
import GridOffsetExample from "./grid.example_offset";
import GridAlignExample from "./grid.example_align";
// tslint:disable-next-line: no-var-requires
const codeBasic = require("!!raw-loader!./grid.example_basic.tsx");
const codeGutter = require("!!raw-loader!./grid.example_gutter.tsx");
const codeOffset = require("!!raw-loader!./grid.example_offset.tsx");
const codeAlign = require("!!raw-loader!./grid.example_align.tsx");

const GridDemo = () => {
  return (
    <div className="content">
      <Card title="Grid 基本布局">
        <Demo code={codeBasic.default}>
          <GridBasicExample />
        </Demo>
      </Card>
      <Card title="Grid 间距 gutter">
        <Demo code={codeGutter.default}>
          <GridGutterExample />
        </Demo>
      </Card>
      <Card title="Grid 偏移 offset">
        <Demo code={codeOffset.default}>
          <GridOffsetExample />
        </Demo>
      </Card>
      <Card title="Grid Row align">
        <Demo code={codeAlign.default}>
          <GridAlignExample />
        </Demo>
      </Card>
      <Card title="API">
        <API type="grid" />
      </Card>
    </div>
  );
};

export default GridDemo;
