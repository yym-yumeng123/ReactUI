import React, { FC, HTMLAttributes } from "react";
import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
import "./col.scss";

const mergeClass = addPrefixAndMergeClass("yui-col");

interface ColProps extends HTMLAttributes<HTMLElement> {
  span: number;
  offset?: number;
  gutter?: number;
}

const Col: FC<ColProps> = ({ children, span, offset = 0, gutter = 0 }) => {
  const classes = {
    "": true,
    [`${span}`]: true,
    [`offset-${offset}`]: !!offset,
  };

  return (
    <div
      className={mergeClass(classes)}
      style={{
        paddingLeft: `${gutter / 2}px`,
        paddingRight: `${gutter / 2}px`,
      }}
    >
      {children}
    </div>
  );
};

export default Col;
