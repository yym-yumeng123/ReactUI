import React from "react";
import Demo from "lib/Demo/demo";
import API from "example/API/api";
import Card from "lib/Card/card";
import { Row, Col } from "lib/Grid/row";

import CollapseSingleExample from "./popover.example";
const codeBasic = require("!!raw-loader!./popover.example.tsx");

const PopoverDemo = () => {
  return (
    <div>
      <Row gutter={20}>
        <Col span={12}>
          <Card title="Popover 基本使用">
            <Demo code={codeBasic.default}>
              <CollapseSingleExample />
            </Demo>
          </Card>
        </Col>
        <Col span={12}></Col>
      </Row>

      <Card title="API">
        <API type="collapse" />
      </Card>
    </div>
  );
};

export default PopoverDemo;
