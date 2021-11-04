import React, { FC, HTMLAttributes } from "react";
import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClass = addPrefixAndMergeClass("yui-col");

import "./col.scss";
interface ColProps extends HTMLAttributes<HTMLElement> {
  span: number;
  offset?: number;
  gutter?: number;
}

const Col: FC<ColProps> = props => {
  const {
    children,
    span,
    offset = 0,
    gutter = 0,
  } = props;

  // 间距比如 40px, 两个之间, 每个元素相对20px
  const styles = {
    paddingLeft: `${gutter / 2}px`,
    paddingRight: `${gutter / 2}px`
  };

  const classes = {
    "": true,
    [`${span}`]: true,
    [`offset-${offset}`]: !!offset
  };

  return (
    <div className={mergeClass(classes)} style={styles}>
      {children}
    </div>
  );
};

export default Col;
