import React from "react";
import Demo from "lib/Demo/demo";
import API from "example/API/api";
import Card from "lib/Card/card";
import { Row, Col } from "lib/Grid/row";

import CollapseBasicExample from "./collapse.example_basic";
import CollapseActiveExample from "./collapse.example_active";
import CollapseSingleExample from "./collapse.example_single";
const codeBasic = require("!!raw-loader!./collapse.example_basic.tsx");
const codeActive = require("!!raw-loader!./collapse.example_active.tsx");
const codeSingle = require("!!raw-loader!./collapse.example_single.tsx");

const CollapseDemo = () => {
  return (
    <>
      <Row gutter={20}>
        <Col span={12}>
          <Card title="Collapse 折叠面板基本使用">
            <Demo code={codeBasic.default}>
              <CollapseBasicExample />
            </Demo>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Collapse 折叠面板 默认展开">
            <Demo code={codeActive.default}>
              <CollapseActiveExample />
            </Demo>
          </Card>
        </Col>
      </Row>
      <Row gutter={20}>
        <Col span={12}>
          <Card title="Collapse 折叠面板只能打开一个">
            <Demo code={codeSingle.default}>
              <CollapseSingleExample />
            </Demo>
          </Card>
        </Col>
        <Col span={12}></Col>
      </Row>

      <Card title="API">
        <API type="collapse" />
      </Card>
    </>
  );
};

export default CollapseDemo;
