import React, { useState } from "react";
import Pager from "lib/Pager/pager";


const PagerBasicExample = () => {
  const [current, setCurrent] = useState(1);
  const handleChange = (n: number) => {
    setCurrent(n)
  }
  return (
    <div>
      <Pager current={current} onChange={handleChange} />
      <br/>
      <Pager totalPage={200} current={3} />
      <Pager totalPage={6} current={2} />
      <Pager totalPage={80} current={30} />
      <Pager />
      <Pager totalPage={5} />
      <Pager totalPage={4} />
      <Pager totalPage={3} />
      <Pager totalPage={2} />
      <Pager totalPage={1} />
    </div>
  );
};

export default PagerBasicExample;
