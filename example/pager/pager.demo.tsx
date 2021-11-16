import React from "react";
import Demo from "lib/Demo/demo";
import API from "example/API/api";
import Card from "lib/Card/card";
import { Row, Col } from "lib/Grid/row";

import './pager.demo.scss'

import PagerBasicExample from "./pager.example.basic";
import PagerTotalExample from "./pager.example.total";
const codeBasic = require("!!raw-loader!./pager.example.basic.tsx");
const codeTotal = require("!!raw-loader!./pager.example.total.tsx");

const PagerDemo = () => {
  return (
    <div className="pager-demo">
      <Row gutter={30}>
        <Col span={12}>
          <Card title="Pager 总页数小于7页基本使用">
            <Demo code={codeBasic.default}>
              <PagerBasicExample />
            </Demo>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Pager 总页数大于7基本使用">
            <Demo code={codeTotal.default}>
              <PagerTotalExample />
            </Demo>
          </Card>
        </Col>
      </Row>

      <Card title="API">
        <API type="pager" />
      </Card>
    </div>
  );
};

export default PagerDemo;
