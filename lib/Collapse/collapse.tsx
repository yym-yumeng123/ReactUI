import React, { FC } from "react";
import { addPrefixAndscopedClassMarker } from "../utils/classes";
import "./collapse.scss";

const prefix = addPrefixAndscopedClassMarker("yui-collapse");
interface CollapseProps {}

const Collapse: FC<CollapseProps> = props => {
  const { children } = props;
  return <div className={prefix("")}>{children}</div>;
};

export default Collapse;
