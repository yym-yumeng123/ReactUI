import React, {
  FC,
  Children,
  HTMLAttributes,
  ReactElement,
  cloneElement,
} from "react";
import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
import Col from "./col";
import "./row.scss";

const mergeClass = addPrefixAndMergeClass("yui-row");

interface RowProps extends HTMLAttributes<HTMLElement> {
  // 子元素之间的间距
  gutter?: number;
  // align 可以让字元素在左中右的哪边
  align?: "left" | "right" | "center";
  className?: string;
  children: Array<ReactElement>;
}

const Row: FC<RowProps> = ({
  children,
  className,
  gutter = 0,
  align = "left",
}) => {
  const styles = {
    marginLeft: `${-gutter / 2}px`,
    marginRight: `${-gutter / 2}px`,
  };

  const childWithProps = Children.map(children, (child) => {
    if (child.type !== Col) {
      throw new Error("Row 子标签必须是 Col");
    }
    return cloneElement(child, { gutter });
  });

  return (
    <div
      className={mergeClass(
        { "": true, [`${align}`]: !!align },
        { extra: className }
      )}
      style={styles}
    >
      {childWithProps}
    </div>
  );
};

export default Row;
export { Row, Col };
