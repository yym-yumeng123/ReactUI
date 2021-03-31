import React, { FC, ReactElement } from "react";
import { addPrefixAndscopedClassMarker } from "../utils/classes";
import "./collapse.scss";

const prefix = addPrefixAndscopedClassMarker("yui-collapse-item");

interface CollapseItemProps {
  title: string | ReactElement;
}

const CollapseItem: FC<CollapseItemProps> = props => {
  const { title, children } = props;
  return (
    <div className={prefix("")}>
      <header>{title}</header>
      <main>{children}</main>
    </div>
  );
};

export default CollapseItem;
