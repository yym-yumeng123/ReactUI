import React from "react";
import Row from "lib/Grid/row";
import Col from "lib/Grid/col";
import "./grid.scss";

const GridBasicExample = () => {
  return (
    <div className="grid-example">
      <Row>
        <Col span="12">
          <span>我是12份</span>
        </Col>
        <Col span="12">
          <span>我是12份</span>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <span>我是8份</span>
        </Col>
        <Col span={8}>
          <span>我是8份</span>
        </Col>
        <Col span={8}>
          <span>我是8份</span>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <span>我是6份</span>
        </Col>
        <Col span={6}>
          <span>我是6份</span>
        </Col>
        <Col span={6}>
          <span>我是6份</span>
        </Col>
        <Col span={6}>
          <span>我是6份</span>
        </Col>
      </Row>
    </div>
  );
};

export default GridBasicExample;
