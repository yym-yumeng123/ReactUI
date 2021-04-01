import React, { FC, ReactElement } from "react";
import { addPrefixAndscopedClassMarker } from "../utils/classes";
import "./collapse.scss";
import CollapseItem from "./collapseItem";

const prefix = addPrefixAndscopedClassMarker("yui-collapse");
interface CollapseProps {
  single?: boolean;
  children: Array<ReactElement>;
}

const Collapse: FC<CollapseProps> = props => {
  const { children, single = false } = props;

  const childWithProps = React.Children.map(children, (child, index) => {
    if (child.type !== CollapseItem) {
      throw new Error("折叠面板的子元素必须是 CollapseItem");
    }
    return React.cloneElement(child, { single, index, parent: children });
  });

  return <div className={prefix("")}>{childWithProps}</div>;
};

export default Collapse;
