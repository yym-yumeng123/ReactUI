import React from "react";
import Collapse from "lib/Collapse/collapse";
import CollapseItem from "lib/Collapse/collapseItem";

const CollapseExample = () => {
  return (
    <div>
      <Collapse>
        <CollapseItem title="内容1">1111</CollapseItem>
        <CollapseItem title="内容2">2222</CollapseItem>
        <CollapseItem title="内容3">33333</CollapseItem>
      </Collapse>
    </div>
  );
};

export default CollapseExample;
