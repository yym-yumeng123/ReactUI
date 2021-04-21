import React, { useState } from "react";
import Pager from "lib/Pager/pager";

const PagerDemo = () => {
  const [current, setCurrent] = useState(1);
  const handleChange = (n: number) => {
    setCurrent(n)
  }
  return (
    <div>
      <Pager totalPage={5} current={current} onChange={handleChange} />
      <br/>
      <Pager totalPage={200} current={3} />
      <Pager totalPage={6} current={3} />
      <Pager totalPage={80} current={30} />
      <Pager />
      <Pager totalPage={5} />
    </div>
  );
};

export default PagerDemo;
