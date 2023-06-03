import React, { useState } from "react";
import Pager from "lib/Pager/pager";

const PagerTotalExample = () => {
  const [current, setCurrent] = useState(1);
  const [current1, setCurrent1] = useState(10);
  const [current2, setCurrent2] = useState(30);
  const handleChange = (n: number) => {
    setCurrent(n);
  };
  const handleChange1 = (n: number) => {
    setCurrent1(n);
  };
  const handleChange2 = (n: number) => {
    setCurrent2(n);
  };
  return (
    <div className="pager-wrap">
      <Pager totalPage={10} current={current} onChange={handleChange} />
      <Pager totalPage={50} current={current1} onChange={handleChange1} />
      <Pager totalPage={200} current={current2} onChange={handleChange2} />
    </div>
  );
};

export default PagerTotalExample;
