import React from "react";
import Row from "lib/Grid/row";
import Col from "lib/Grid/col";
import "./grid.scss";

const GridGutterExample = () => {
  return (
    <div className="grid-example">
      <Row gutter={20}>
        <Col span={12}>
          <span>我的 gutter 为 20</span>
        </Col>
        <Col span={12}>
          <span>我的 gutter 为 20</span>
        </Col>
      </Row>
      <br />
      <Row gutter={30}>
        <Col span={4}>
          <span>我的 gutter 为 30</span>
        </Col>
        <Col span={8}>
          <span>我的 gutter 为 30</span>
        </Col>
        <Col span={12}>
          <span>我的 gutter 为 30</span>
        </Col>
      </Row>
      <br />
      <Row gutter={40}>
        <Col span={6}>
          <span>我的 gutter 为 40</span>
        </Col>
        <Col span={6}>
          <span>我的 gutter 为 40</span>
        </Col>
        <Col span={6}>
          <span>我的 gutter 为 40</span>
        </Col>
        <Col span={6}>
          <span>我的 gutter 为 40</span>
        </Col>
      </Row>
    </div>
  );
};

export default GridGutterExample;
