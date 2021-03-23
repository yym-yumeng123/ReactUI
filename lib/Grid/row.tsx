import React, { FC, ReactElement, useContext } from "react";
import { addPrefixAndscopedClassMarker } from "../utils/classes";
import "./row.scss";

const prefix = addPrefixAndscopedClassMarker("yui-row");

interface RowProps {
  gutter?: number;
  align?: 'left' | 'right' | 'center'
  children: Array<ReactElement>;
}

const Row: FC<RowProps> = props => {
  const { children, gutter, align } = props;

  const styles = {
    marginLeft: `${-(gutter as number) / 2}px`,
    marginRight: `${-(gutter as number) / 2}px`
  };

  const childWithProps = React.Children.map(children, child => {
    return React.cloneElement(child, { gutter: gutter || 0 });
  });
  return (
    <div className={prefix({"": true, [`${align}`]: !!align})} style={styles}>
      {childWithProps}
    </div>
  );
};

export default Row;
