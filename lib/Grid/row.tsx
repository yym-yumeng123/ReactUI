import React, { FC, ReactElement } from "react";
import { addPrefixAndscopedClassMarker } from "../utils/classes";
import Col from './col'
import "./row.scss";

const prefix = addPrefixAndscopedClassMarker("yui-row");

interface RowProps {
  gutter?: number;
  align?: 'left' | 'right' | 'center'
  children: Array<ReactElement>;
}

const Row: FC<RowProps> = props => {
  const { children, gutter = 0, align = 'left' } = props;

    // 判断子元素是否都是 TabPane
    const isChildlrenElement = children.every(item => item.type === Col);

    if (!isChildlrenElement) {
      throw new Error("Row 子标签必须是 Col");
    }

  const styles = {
    marginLeft: `${-gutter / 2}px`,
    marginRight: `${-gutter / 2}px`
  };

  const childWithProps = React.Children.map(children, child => {
    return React.cloneElement(child, { gutter });
  });
  return (
    <div className={prefix({"": true, [`${align}`]: !!align})} style={styles}>
      {childWithProps}
    </div>
  );
};

export default Row;
