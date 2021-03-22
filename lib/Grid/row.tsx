import React, { FC, ReactElement, useEffect } from "react";
import { addPrefixAndscopedClassMarker } from "../utils/classes";
import "./row.scss";

const prefix = addPrefixAndscopedClassMarker("yui-row");

interface RowProps {
  gutter?: number | string;
  children: Array<ReactElement>;
}

const Row: FC<RowProps> = props => {
  const { children, gutter } = props;

  const styles = {
    marginLeft: `${(gutter as number) / 2}px`,
    marginRight: `${(gutter as number) / 2}px`
  };

  useEffect(() => {
    console.log(children, "12121");
    children.forEach(vm => {
      console.log(vm, "1212");
    });
  }, []);
  return (
    <div className={prefix("")} style={styles}>
      {children}
    </div>
  );
};

export default Row;
