import React from "react";
import Demo from "lib/Demo/demo";
import API from "example/API/api";
import Card from "lib/Card/card";
import { Row, Col } from "lib/Grid/row";

import "./switch.demo.scss";

import SwitchBasicExample from "./switch.example_basic";
import SwitchSizeExample from "./switch.example_size";
const codeBasic = require("!!raw-loader!./switch.example_basic.tsx");
const codeSize = require("!!raw-loader!./switch.example_size.tsx");

const SwitchDemo = () => {
  return (
    <div className="switch-demo">
      <Row gutter={30}>
        <Col span={12}>
          <Card title="Switch 基本使用">
            <Demo code={codeBasic.default}>
              <SwitchBasicExample />
            </Demo>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Switch 设置不同大小">
            <Demo code={codeSize.default}>
              <SwitchSizeExample />
            </Demo>
          </Card>
        </Col>
      </Row>

      <Card title="API">
        <API type="switch" />
      </Card>
    </div>
  );
};

export default SwitchDemo;
