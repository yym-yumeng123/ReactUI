import React, { FC } from "react";
import PropTypes from "prop-types";

export interface TabPaneProps {
  title: string;
}

const TabPane: FC<TabPaneProps> = props => {
  const { children } = props;
  return <div>{children}</div>;
};

TabPane.propTypes = {
  title: PropTypes.string.isRequired,
  // name: PropTypes.string.isRequired
};

export default TabPane;
