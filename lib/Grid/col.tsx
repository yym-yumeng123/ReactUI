import React, { FC, useState } from "react";
import { addPrefixAndscopedClassMarker } from "../utils/classes";
import "./col.scss";
const prefix = addPrefixAndscopedClassMarker("yui-col");

interface ColProps {
  span: number | string;
  offset?: number | string;
}

const Col: FC<ColProps> = props => {
  const { children, span, offset } = props;
  const [gutter, setgGutter] = useState(0);

  const styles = {
    paddingLeft: `${gutter}px`,
    paddingRight: `${gutter}px`
  };

  const classes = {
    "": true,
    [`${span}`]: true,
    [`offset-${offset}`]: !!offset
  };

  return (
    <div className={prefix(classes)} style={styles}>
      {children}
    </div>
  );
};

export default Col;
