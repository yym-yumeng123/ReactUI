import React, { FC, ReactElement, useEffect, useRef, useState } from "react";
import Icon from "lib/Icon/icon";
import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClass = addPrefixAndMergeClass("yui-collapse-item");

interface CollapseItemProps {
  title: string | ReactElement;
  name: string;

  // 父元素传参
  single?: boolean;
  selected?: string[];
  isCollapsed?: boolean;
  handleClick?: () => {};
}

const CollapseItem: FC<CollapseItemProps> = props => {
  const {
    title,
    name,
    isCollapsed = false,
    single,
    selected = [],
    handleClick,
    children,
  } = props;
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (selected.indexOf(name) > -1) {
      setOpen(true);
    }
  }, []);

  const handleToggle = () => {
    setOpen(!open);
    handleClick && handleClick();
  };

  return (
    <div className={mergeClass("")}>
      <header className={mergeClass("header")} onClick={handleToggle}>
        <div className={mergeClass("title")}>{title}</div>
        <Icon
          className={mergeClass("icon")}
          name="arrow_right"
          size="12"
          color="#575757"
          style={{
            transform: `rotate(${
              (single ? isCollapsed : open) ? "90deg" : "0"
            })`
          }}
        />
      </header>
      {/* 是否 single, 如果 true, 只看 自己的 state */}
      {(single ? isCollapsed : open) && (
        <main ref={contentRef}>{children}</main>
      )}
    </div>
  );
};

export default CollapseItem;
