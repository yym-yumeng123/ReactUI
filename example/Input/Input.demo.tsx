import React from "react";
import Demo from "lib/Demo/demo";
import API from "example/API/api";
import Card from "lib/Card/card";
import { Row, Col } from "lib/Grid/row";
import "./input.scss";

import InputExample from "./Input.example_prepend_append";
import InputSizeExample from "./input.example_size";
import InputDisabledExample from "./input.example_disabled";
import InputPrependExample from "./input.example_prepend";
import InputAppendExample from "./input.example_append";
import InputBasicExample from "./input.example_close";
// tslint:disable-next-line: no-var-requires
const codesize = require("!!raw-loader!./input.example_size.tsx");
const codeDisabled = require("!!raw-loader!./input.example_disabled.tsx");
const codePre = require("!!raw-loader!./input.example_prepend.tsx");
const codeAppend = require("!!raw-loader!./input.example_append.tsx");
const codeUnite = require("!!raw-loader!./Input.example_prepend_append.tsx");
const codeBasic = require("!!raw-loader!./input.example_close.tsx");

const InputDemo = () => {
  return (
    <div className="content">
      <Row gutter={20}>
        <Col span={12}>
          <Card title="Input 基础使用">
            <Demo code={codeBasic.default}>
              <InputBasicExample />
            </Demo>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Input 不可点击">
            <Demo code={codeDisabled.default}>
              <InputDisabledExample />
            </Demo>
          </Card>
        </Col>
      </Row>

      <Row gutter={20}>
        <Col span={12}>
          <Card title="Input 不同尺寸">
            <Demo code={codesize.default}>
              <InputSizeExample />
            </Demo>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Input 添加前缀">
            <Demo code={codePre.default}>
              <InputPrependExample />
            </Demo>
          </Card>
        </Col>
      </Row>

      <Row gutter={20}>
        <Col span={12}>
          <Card title="Input 添加后缀">
            <Demo code={codeAppend.default}>
              <InputAppendExample />
            </Demo>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Input 添加前缀和后缀">
            <Demo code={codeUnite.default}>
              <InputExample />
            </Demo>
          </Card>
        </Col>
      </Row>

      <Card title="API">
        <API type="input" />
      </Card>
    </div>
  );
};

export default InputDemo;
