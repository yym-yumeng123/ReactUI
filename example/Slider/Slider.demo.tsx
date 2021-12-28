import React from "react";
import Slider from "lib/Slider/slider";

const SliderDemo = () => {
  const handleChange = (value: number) => {
    console.log(value, "value....");
  };
  return (
    <div>
      <Slider initialValue={30} onChange={handleChange} />
      <br />
      <br />
      <Slider />
    </div>
  );
};

export default SliderDemo;
