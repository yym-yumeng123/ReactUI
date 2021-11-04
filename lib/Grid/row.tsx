import React, { FC, HTMLAttributes, ReactElement } from "react";
import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
import Col from "./col";
import "./row.scss";

const mergeClass = addPrefixAndMergeClass("yui-row");

interface RowProps extends HTMLAttributes<HTMLElement> {
  // 子元素之间的间距
  gutter?: number;
  // align 可以让字元素在左中右的哪边
  align?: "left" | "right" | "center";
  children: Array<ReactElement>;
}

const Row: FC<RowProps> = props => {
  const { children, gutter = 0, align = "left" } = props;

  // 判断子元素是否都是 Col 组件
  const isCol = children.every(item => item.type === Col);
  if (!isCol) {
    throw new Error("Row 子标签必须是 Col");
  }

  const styles = {
    marginLeft: `${-gutter / 2}px`,
    marginRight: `${-gutter / 2}px`,
  };

  const childWithProps = React.Children.map(children, child => {
    return React.cloneElement(child, { gutter });
  });

  return (
    <div
      className={mergeClass({ "": true, [`${align}`]: !!align })}
      style={styles}
    >
      {childWithProps}
    </div>
  );
};

export default Row;
