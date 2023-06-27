import React, { FC, ReactElement, cloneElement, useState } from "react";
import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
import CollapseItem from "./collapseItem";
import "./collapse.scss";

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

  const childWithProps = React.Children.map(children, (child, index) => {
    if (child.type !== CollapseItem) {
      throw new Error("折叠面板的子元素必须是 CollapseItem");
    }

    return cloneElement(child, {
      handleClick: () => {
        setBindIndex(index);
      },
      single,
      selected,
      isCollapsed: index === bindIndex
    });
  });

  return <div className={mergeClass("")}>{childWithProps}</div>;
};

export default Collapse;
