import React from "react";
import Row from "lib/Grid/row";
import Col from "lib/Grid/col";

const GridExample = () => {
  return (
    <div style={{border: '2px solid black'}}>
      <Row>
        <Col span={12}>1</Col>
        <Col span={12}>2</Col>
      </Row>
      <br />
      <Row>
        <Col span={8}>1</Col>
        <Col span={8}>2</Col>
        <Col span={8}>3</Col>
      </Row>
      <br />
      <Row>
        <Col span={6}>1</Col>
        <Col span={6}>2</Col>
        <Col span={6}>3</Col>
        <Col span={6}>4</Col>
      </Row>

      <h1>偏移 offset</h1>
      <Row>
        <Col span={8}>1</Col>
        <Col span={8} offset={8}>
          2
        </Col>
      </Row>
      <br/>
      <Row>
        <Col span={6}>1</Col>
        <Col span={6} offset={6}>2</Col>
        <Col span={6}>3</Col>
      </Row>

      <h1>gutter</h1>
      <Row gutter={30}>
        <Col span={10}>1</Col>
        <Col span={14}>2</Col>
      </Row>

      <h1>align</h1>
      <Row gutter={30} align="right">
        <Col span={4}>1</Col>
        <Col span={4}>2</Col>
      </Row>
      <Row gutter={30} align="left">
        <Col span={5}>1</Col>
        <Col span={6}>2</Col>
      </Row>
      <Row gutter={30} align="center">
        <Col span={5}>1</Col>
        <Col span={6}>2</Col>
      </Row>
    </div>
  );
};

export default GridExample;
