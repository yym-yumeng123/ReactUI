import React, { FC, ReactElement, useState } from "react";
import Icon from "lib/Icon/icon";
import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClass = addPrefixAndMergeClass("yui-collapse-item");

interface CollapseItemProps {
  title: string | ReactElement;
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
    single = false,
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
          {single ? (
            !isCollapsed
          ) : (
            <Icon
              name={!open ? "arrow_down" : "arrow_up"}
              size="12"
              color="#575757"
            />
          )}
        </div>
      </header>
      {(single ? isCollapsed : open) && <main>{children}</main>}
    </div>
  );
};

export default CollapseItem;
