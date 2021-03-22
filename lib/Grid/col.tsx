import React, { FC } from "react";
import { addPrefixAndscopedClassMarker } from "../utils/classes";
import "./col.scss";
const prefix = addPrefixAndscopedClassMarker("yui-col");

interface ColProps {
  span: number | string;
  offset?: number | string;
}

const Col: FC<ColProps> = props => {
  const { children, span, offset } = props;

  return (
    <div
      className={prefix({
        "": true,
        [`${span}`]: true,
        [`offset-${offset}`]: !!offset
      })}
    >
      {children}
    </div>
  );
};

export default Col;
