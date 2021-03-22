import React from "react";
import Row from "lib/Grid/row";
import Col from "lib/Grid/col";

const GridExample = () => {
  return (
    <div>
      <Row>
        <Col span="12">1</Col>
        <Col span="12">2</Col>
      </Row>
      <br />
      <Row>
        <Col span="8">1</Col>
        <Col span="8">2</Col>
        <Col span="8">3</Col>
      </Row>
      <br />
      <Row>
        <Col span="6">1</Col>
        <Col span="6">2</Col>
        <Col span="6">3</Col>
        <Col span={6}>4</Col>
      </Row>

      <h1>偏移 offset</h1>
      <Row>
        <Col span="8">1</Col>
        <Col span="8" offset={8}>
          2
        </Col>
      </Row>
      <br/>
      <Row>
        <Col span="6">1</Col>
        <Col span="6" offset="6">2</Col>
        <Col span="6">3</Col>
      </Row>
    </div>
  );
};

export default GridExample;
