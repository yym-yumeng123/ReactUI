import React, { FC, useState } from "react";
import { addPrefixAndscopedClassMarker } from "../utils/classes";
import "./col.scss";
const prefix = addPrefixAndscopedClassMarker("yui-col");

interface ColProps {
  span: number | string;
  offset?: number | string;
  gutter?: number | string;
}

const Col: FC<ColProps> = props => {
  const { children, span, offset, gutter } = props;
  console.log(props, "props....");

  const styles = {
    paddingLeft: `${(gutter as number) / 2}px`,
    paddingRight: `${(gutter as number) / 2}px`
  };

  const classes = {
    "": true,
    [`${span}`]: true,
    [`offset-${offset}`]: !!offset
  };

  return (
    <div className={prefix(classes)} style={styles}>
      <div style={{border: '1px solid green', height: '100px'}}>{children}</div>
    </div>
  );
};

export default Col;
