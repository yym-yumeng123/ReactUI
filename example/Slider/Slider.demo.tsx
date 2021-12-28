import React, { useState } from "react";
import Slider from "lib/Slider/slider";
import Input from "lib/Input/Input";
import Row from "lib/Grid/row";
import Col from "lib/Grid/col";
import "./slider.demo.scss";

const SliderDemo = () => {
  const [initiValue, setInitiValue] = useState(10);
  const handleChange = (value: number) => {
    console.log(value, "value....");
    setInitiValue(value);
  };
  return (
    <div>
      <Row className="slider-wrap" gutter={30}>
        <Col span={20}>
          <Slider initialValue={initiValue} onChange={handleChange} />
        </Col>
        <Col span={4}>
          <Input placeholder="请输入..." value={String(initiValue)} disabled />
        </Col>
      </Row>
    </div>
  );
};

export default SliderDemo;
