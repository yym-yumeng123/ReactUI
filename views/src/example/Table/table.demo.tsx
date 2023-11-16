import React from "react";
import Demo from "views/src/components/demo";
import API from "../API/api";
import Card from "lib/Card/card";

import TableExampleBasic from "./table.example_basic";
import TableExamplBorder from "./table.example_border";
import TableExampleCheck from "./table.example_checked";
import TableExampleEmpty from "./table.example_empty";
import TableExampleHeight from "./table.example_height";

// tslint:disable-next-line: no-var-requires
const codeTableBasic = require("!!raw-loader!./table.example_basic.tsx");
const codeTableBorder = require("!!raw-loader!./table.example_border.tsx");
const codeTableChecked = require("!!raw-loader!./table.example_checked.tsx");
const codeTableEmpty = require("!!raw-loader!./table.example_empty.tsx");
const codeTableHeight = require("!!raw-loader!./table.example_height.tsx");
const codeData = require("!!raw-loader!./data.ts");

const SliderDemo = () => {
  return (
    <div className="content">
      <Card title="指定数据源 dataSource 为一个数组">
        <Demo code={codeData.default} showCode />
      </Card>
      <Card title="Table 组件基本使用">
        <Demo code={codeTableBasic.default}>
          <TableExampleBasic />
        </Demo>
      </Card>
      <Card title="Table 组件 border compact props, 可以排序">
        <Demo code={codeTableBorder.default}>
          <TableExamplBorder />
        </Demo>
      </Card>
      <Card title="Table 组件 可多选/全选">
        <Demo code={codeTableChecked.default}>
          <TableExampleCheck />
        </Demo>
      </Card>
      <Card title="Table 组件 可多选/全选, Loading 状态">
        <Demo code={codeTableEmpty.default}>
          <TableExampleEmpty />
        </Demo>
      </Card>

      <Card title="Table 组件可以设置高度, exapanded">
        <Demo code={codeTableHeight.default}>
          <TableExampleHeight />
        </Demo>
      </Card>

      <Card title="API">
        <API type="table" />
      </Card>
    </div>
  );
};

export default SliderDemo;
