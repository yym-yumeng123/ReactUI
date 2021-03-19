import React, { FC, ReactElement } from "react";
import TabPane from "./tabPane";
import { addPrefixAndscopedClassMarker } from "../utils/classes";

const prefix = addPrefixAndscopedClassMarker("yui-tabs");

interface TabsProps {
  // children: Array<ReactElement>
}

const Tabs: FC<TabsProps> = props => {
  const { children } = props;
  const child = children as Array<ReactElement>;
  console.log(children, "3232");

  // 判断子元素是否都是 TabPane
  const isChidlrenElement = child.every(item => item.type === TabPane);
  if (!isChidlrenElement) {
    throw new Error("Tabs 子标签必须是 TabPane");
  }

  // 获取子元素的 title
  const items = child.map((item, index) => {
    return <span key={index}>{item.props.title}</span>;
  });

  return (
    <div className={prefix("")}>
      {items}
      {children}
    </div>
  );
};

// Tabs.TabPane = TabPane
export default Tabs;
