import React from "react";
import Pager from "lib/Pager/pager";

const PagerDemo = () => {
  return (
    <div>
      <Pager totalPage={20001} current={3} />
    </div>
  );
};

export default PagerDemo;
