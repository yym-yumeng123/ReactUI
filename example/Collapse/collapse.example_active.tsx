import React from "react";
import Collapse from "lib/Collapse/collapse";
import CollapseItem from "lib/Collapse/collapseItem";

const CollapseActiveExample = () => {
  return (
    <Collapse selected={["1", "3"]}>
      <CollapseItem name="1" title="我是展开标题一">
        我是内容一
      </CollapseItem>
      <CollapseItem name="2" title="标题二">
        我是内容二我是内容二我是内容二我是内容二我是内容二我是内容二我是内容二
      </CollapseItem>
      <CollapseItem name="3" title="我是展开标题三">
        我是内容三
      </CollapseItem>
    </Collapse>
  );
};

export default CollapseActiveExample;
