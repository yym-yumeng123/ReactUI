import React from "react";
import Demo from "views/src/components/demo";
import API from "../API/api";
import Card from "lib/Card/card";
import { Row, Col } from "lib/Grid/row";

import TabsBasicExample from "./tabs.example_basic";
import TabsIconExample from "./tabs.example_icon";
import TabsExtraExample from "./tabs.example_extra";
// tslint:disable-next-line: no-var-requires
const codeBasic = require("!!raw-loader!./tabs.example_basic.tsx");
const codeIcon = require("!!raw-loader!./tabs.example_icon.tsx");
const codeExtra = require("!!raw-loader!./tabs.example_extra.tsx");

const TabsDemo = () => {
  return (
    <div className="content">
      <Row gutter={20}>
        <Col span={12}>
          <Card title="Tabs 基础使用">
            <Demo code={codeBasic.default}>
              <TabsBasicExample />
            </Demo>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Tabs 添加 icon 按钮">
            <Demo code={codeIcon.default}>
              <TabsIconExample />
            </Demo>
          </Card>
        </Col>
      </Row>

      <Row gutter={20}>
        <Col span={12}>
          <Card title="Tabs添加右边额外按钮">
            <Demo code={codeExtra.default}>
              <TabsExtraExample />
            </Demo>
          </Card>
        </Col>
        <Col span={12}></Col>
      </Row>

      <Card title="API">
        <API type="tabs" />
      </Card>
    </div>
  );
};

export default TabsDemo;
