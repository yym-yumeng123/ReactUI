import React from "react";
import Pager from "lib/Pager/pager";

const PagerDemo = () => {
  return (
    <div>
      <Pager total={200} current={3} />
    </div>
  );
};

export default PagerDemo;
