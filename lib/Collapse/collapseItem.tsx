import React, { FC, ReactElement, ReactNode, useEffect, useState } from "react";
import Icon from "lib/Icon/icon";
import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";

const mergeClass = addPrefixAndMergeClass("yui-collapse-item");

interface CollapseItemProps {
  title: string | ReactElement;
  name: string;

  // 父元素传参
  single?: boolean; // 如果传递父元素, 使用, 为传参, 是有自有 state open
  selected?: string[];
  isCollapsed?: boolean;
  handleClick?: () => void;
  children: ReactNode;
}

const CollapseItem: FC<CollapseItemProps> = (props) => {
  const { title, name, handleClick, children, single, selected, isCollapsed } =
    props;

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (selected!.indexOf(name) > -1) {
      setOpen(true);
    }
  }, []);

  const handleToggle = () => {
    setOpen(!open);
    if (single) {
      handleClick && handleClick();
    }
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
            })`,
          }}
        />
      </header>
      {/* 是否 single, 如果 true, 只看 自己的 state */}
      {(single ? isCollapsed : open) && <main>{children}</main>}
    </div>
  );
};

export default CollapseItem;
