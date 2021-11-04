import React from "react";
import Row from "lib/Grid/row";
import Col from "lib/Grid/col";
import "./grid.scss";

const GridExample = () => {
  return (
    <div className="grid-example">
      <Row gutter={30}>
        <Col span="12">
          <span>我是Col</span>
        </Col>
        <Col span="12">
          <span>我是Col</span>
        </Col>
      </Row>
      <br />
      <Row gutter={30}>
        <Col span={8}>
          <span>我是Col</span>
        </Col>
        <Col span={8}>
          <span>我是Col</span>
        </Col>
        <Col span={8}>
          <span>我是Col</span>
        </Col>
      </Row>
      <br />
      <Row gutter={30}>
        <Col span={6}>
          <span>我是Col</span>
        </Col>
        <Col span={6}>
          <span>我是Col</span>
        </Col>
        <Col span={6}>
          <span>我是Col</span>
        </Col>
        <Col span={6}>
          <span>我是Col</span>
        </Col>
      </Row>

      <h1>偏移 offset</h1>
      <Row>
        <Col span={8}>
          <span>我是Col</span>
        </Col>
        <Col span={8} offset={8}>
          <span>我是Col</span>
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={6}>
          <span>我是Col</span>
        </Col>
        <Col span={6} offset={6}>
          <span>我是Col</span>
        </Col>
        <Col span={6}>
          <span>我是Col</span>
        </Col>
      </Row>

      <h1>gutter</h1>
      <Row gutter={30}>
        <Col span={10}>
          <span>我是Col</span>
        </Col>
        <Col span={14}>
          <span>我是Col</span>
        </Col>
      </Row>

      <h1>align</h1>
      <Row gutter={30} align="right">
        <Col span={4}>
          <span>我是Col</span>
        </Col>
        <Col span={4}>
          <span>我是Col</span>
        </Col>
      </Row>
      <Row gutter={30} align="left">
        <Col span={5}>
          <span>我是Col</span>
        </Col>
        <Col span={6}>
          <span>我是Col</span>
        </Col>
      </Row>
      <Row gutter={30} align="center">
        <Col span={5}>
          <span>我是Col</span>
        </Col>
        <Col span={6}>
          <span>我是Col</span>
        </Col>
      </Row>
    </div>
  );
};

export default GridExample;
