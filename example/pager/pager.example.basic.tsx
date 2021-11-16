import React, { useState } from "react";
import Pager from "lib/Pager/pager";


const PagerBasicExample = () => {
  const [current, setCurrent] = useState(2);
  const handleChange = (n: number) => {
    setCurrent(n)
  }
  return (
    <div className="pager-wrap">
      <Pager current={current} onChange={handleChange} />
      <Pager totalPage={3} />
      <Pager totalPage={1} />
      <Pager totalPage={1} hideIfOneTotal />
    </div>
  );
};

export default PagerBasicExample;
