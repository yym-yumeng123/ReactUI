import React, { FC, ReactNode } from "react";
import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";

const mergeClass = addPrefixAndMergeClass("yui-tabpane");

interface TabPaneProps {
  children: ReactNode;
  title: string;
  name: string;
  disabled?: boolean;
  icon?: string; // 添加 icon 的名字
}

const TabPane: FC<TabPaneProps> = ({ children }) => (
  <div className={mergeClass("")}>{children}</div>
);

export default TabPane;
