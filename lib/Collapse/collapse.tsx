import React, { FC, ReactElement, useState } from "react";
import CollapseItem from "./collapseItem";
import "./collapse.scss";

import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClass = addPrefixAndMergeClass("yui-collapse");
interface CollapseProps {
  // 是否默认每次打开只展示一个
  single?: boolean;
  selected?: string[]
  children: Array<ReactElement>;
}

const Collapse: FC<CollapseProps> = props => {
  const { children, single = false, selected= [] } = props;

  const [bindIndex, setBindIndex] = useState(-1); // 没有选择的 index
  const [collapsed, setCollapsed] = useState(false); // item 展开

  const childWithProps = React.Children.map(children, (child, index) => {
    if (child.type !== CollapseItem) {
      throw new Error("折叠面板的子元素必须是 CollapseItem");
    }

    return React.cloneElement(child, {
      handleClick: (index: number, collapsed: boolean) => {
        setBindIndex(index);
        setCollapsed(collapsed);
      },
      single,
      index,
      selected,
      isCollapsed: collapsed ? false : index === bindIndex
    });
  });

  return <div className={mergeClass("")}>{childWithProps}</div>;
};

export default Collapse;
