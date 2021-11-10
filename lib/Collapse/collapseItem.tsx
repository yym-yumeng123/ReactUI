import React, { FC, ReactElement, useState } from "react";
import Icon from "lib/Icon/icon";
import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClass = addPrefixAndMergeClass("yui-collapse-item");

interface CollapseItemProps {
  title: string | ReactElement;

  // 父元素传参
  single?: boolean;
  index?: number;
  isCollapsed?: boolean;
  handleClick?: (index: number, isCollapsed: boolean) => {};
}

const CollapseItem: FC<CollapseItemProps> = props => {
  const [open, setOpen] = useState(false);
  const {
    title,
    children,
    index = 0,
    isCollapsed = false,
    single,
    handleClick
  } = props;

  const handleToggle = () => {
    setOpen(!open);
    handleClick && handleClick(index, isCollapsed);
  };

  return (
    <div className={mergeClass("")}>
      <header className={mergeClass("header")} onClick={handleToggle}>
        <div className={mergeClass("title")}>{title}</div>
        <div className={mergeClass("icon")}>
          <Icon name={"arrow_up"} size="12" color="#575757" />
        </div>
      </header>
      {/* 是否 single, 如果 true, 只看 自己的 state */}
      {(single ? isCollapsed : open) && <main>{children}</main>}
    </div>
  );
};

export default CollapseItem;
