import React from "react";
import Demo from "views/src/components/demo";
import API from "../API/api";
import Card from "lib/Card/card";
import { Row, Col } from "lib/Grid/row";

import TreeExampleSingle from "./tree.exampleSingle";
import TreeExampleMultiple1 from "./tree.exampleMultiple1";
import TreeExampleMultiple2 from "./tree.exampleMultiple2";
const code1 = require("!!raw-loader!./tree.exampleSingle.tsx");
const code2 = require("!!raw-loader!./tree.exampleMultiple1.tsx");
const code3 = require("!!raw-loader!./tree.exampleMultiple2.tsx");

const TreeDemo = () => {
  return (
    <div className="pager-demo">
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Tree单选">
            <Demo code={code1.default}>
              <TreeExampleSingle />
            </Demo>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Tree多选">
            <Demo code={code2.default}>
              <TreeExampleMultiple1 />
            </Demo>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Tree多选以及全选">
            <Demo code={code3.default}>
              <TreeExampleMultiple2 />
            </Demo>
          </Card>
        </Col>
      </Row>

      <Card title="API">
        <API type="tree" />
      </Card>
    </div>
  );
};

export default TreeDemo;
