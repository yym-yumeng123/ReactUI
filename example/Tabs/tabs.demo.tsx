import React from "react";
import Demo from "lib/Demo/demo";
import API from "example/API/api";
import Card from "lib/Card/card";
import { Row, Col } from "lib/Grid/row";

import TabsExample from "./tabs.example";
// tslint:disable-next-line: no-var-requires
const codeDisabled = require("!!raw-loader!./tabs.example.tsx");

const TabsDemo = () => {
  return (
    <div className="content">
      <Row gutter={20}>
        <Col span={12}>
          <Card title="Input 基础使用">
            <Demo code={codeDisabled.default}>
              <TabsExample />
            </Demo>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Input 不可点击">
            {/* <Demo code={codeDisabled.default}>
              <InputDisabledExample />
            </Demo> */}
          </Card>
        </Col>
      </Row>


      <Card title="API">
        <API type="input" />
      </Card>
    </div>
  );
};

export default TabsDemo;
