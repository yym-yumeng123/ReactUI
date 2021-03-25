import React, { FC } from "react";
import { addPrefixAndscopedClassMarker } from "../utils/classes";
import "./col.scss";
const prefix = addPrefixAndscopedClassMarker("yui-col");
interface ColProps {
  span: number;
  offset?: number;
  gutter?: number;
}

const Col: FC<ColProps> = props => {
  const { children, span, offset = 0, gutter = 0 } = props;

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
    <div className={prefix(classes)} style={styles}>
      <div style={{ border: "1px solid green", height: "100px" }}>
        {children}
      </div>
    </div>
  );
};

export default Col;
