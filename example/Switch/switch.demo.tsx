import React from "react";
import Demo from "lib/Demo/demo";
import API from "example/API/api";
import Card from "lib/Card/card";
import { Row, Col } from "lib/Grid/row";


import SwitchBasicExample from "./switch.example_basic";
const codeBasic = require("!!raw-loader!./switch.example_basic.tsx");

const SwitchDemo = () => {
  return (
    <div className="pager-demo">
      <Row gutter={30}>
        <Col span={12}>
          <Card title="Switch 基本使用">
            <Demo code={codeBasic.default}>
              <SwitchBasicExample />
            </Demo>
          </Card>
        </Col>
        <Col span={12}>
        </Col>
      </Row>

      <Card title="API">
        <API type="pager" />
      </Card>
    </div>
  );
};

export default SwitchDemo;
