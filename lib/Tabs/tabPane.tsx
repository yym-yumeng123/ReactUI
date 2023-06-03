import React, { FC, ReactNode } from "react";

import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClass = addPrefixAndMergeClass("yui-tabpane");

export interface TabPaneProps {
  children: ReactNode;
  title: string;
  name: string;
  icon?: string; // 添加 icon 的名字
  disabled?: boolean;
}

const TabPane: FC<TabPaneProps> = (props) => {
  const { children } = props;
  return <div className={mergeClass("")}>{children}</div>;
};

export default TabPane;
