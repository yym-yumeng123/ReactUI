import React, { FC } from "react";
import { addPrefixAndscopedClassMarker } from "../utils/classes";
import "./row.scss";

const prefix = addPrefixAndscopedClassMarker("yui-row");

interface RowProps {}

const Row: FC<RowProps> = props => {
  const { children } = props;
  return <div className={prefix("")}>{children}</div>;
};

export default Row;
