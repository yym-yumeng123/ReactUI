import React from "react";
import Row from "lib/Grid/row";
import Col from "lib/Grid/col";
import "./grid.scss";

const GridOffsetExample = () => {
  return (
    <div className="grid-example">
      <Row>
        <Col span={8}>
          <span>我是Col</span>
        </Col>
        <Col span={8} offset={8}>
          <span>我偏移了 8 份</span>
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={6}>
          <span>我是Col</span>
        </Col>
        <Col span={6} offset={6}>
          <span>我偏移了6份</span>
        </Col>
        <Col span={6}>
          <span>我是Col</span>
        </Col>
      </Row>
    </div>
  );
};

export default GridOffsetExample;
