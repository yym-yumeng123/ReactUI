import React from "react";
import Collapse from "lib/Collapse/collapse";
import CollapseItem from "lib/Collapse/collapseItem";

const CollapseSingleExample = () => {
  return (
    <Collapse single>
      <CollapseItem name="1" title="标题一">
        我是内容一
      </CollapseItem>
      <CollapseItem name="2" title="标题二">
        我是内容二我是内容二我是内容二我是内容二我是内容二我是内容二我是内容二
      </CollapseItem>
      <CollapseItem name="3" title="标题三">
        我是内容三
      </CollapseItem>
    </Collapse>
  );
};

export default CollapseSingleExample;
