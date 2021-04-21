import React from "react";
import Pager from "lib/Pager/pager";

const PagerDemo = () => {
  return (
    <div>
      <Pager totalPage={20001} current={1} />
      <br/>
      <Pager totalPage={200} current={3} />
    </div>
  );
};

export default PagerDemo;
