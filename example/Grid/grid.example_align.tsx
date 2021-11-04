import React from "react";
import Row from "lib/Grid/row";
import Col from "lib/Grid/col";
import "./grid.scss";

const GridAlignExample = () => {
  return (
    <div className="grid-example">
      <Row gutter={30} align="right">
        <Col span={4}>
          <span>我被弄到了右边</span>
        </Col>
        <Col span={4}>
          <span>我被弄到了右边</span>
        </Col>
      </Row>
      <Row gutter={30} align="left">
        <Col span={5}>
          <span>我默认是左边</span>
        </Col>
        <Col span={6}>
          <span>我默认是左边</span>
        </Col>
      </Row>
      <Row gutter={30} align="center">
        <Col span={5}>
          <span>我在中间</span>
        </Col>
        <Col span={6}>
          <span>我在中间</span>
        </Col>
      </Row>
    </div>
  );
};

export default GridAlignExample;
