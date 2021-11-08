import React, { FC } from "react";
import PropTypes from "prop-types";

import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClass = addPrefixAndMergeClass("yui-tabpane");

export interface TabPaneProps {
  title: string;
  name: string
  icon?: string; // 添加 icon 的名字
}

const TabPane: FC<TabPaneProps> = props => {
  const { children } = props;
  return <div className={mergeClass('')}>{children}</div>;
};

TabPane.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default TabPane;
