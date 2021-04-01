import React, { FC, ReactElement, useEffect, useState } from "react";
import Icon from "lib/Icon/icon";
import { addPrefixAndscopedClassMarker } from "../utils/classes";
import "./collapse.scss";

const prefix = addPrefixAndscopedClassMarker("yui-collapse-item");

interface CollapseItemProps {
  title: string | ReactElement;
  // single?: boolean;
  index?: number;
  isCollapsed?: boolean;
  handleClick: (index: number) => {};
}

const CollapseItem: FC<CollapseItemProps> = props => {
  const [open, setOpen] = useState(false);
  const {
    title,
    children,
    index = 0,
    isCollapsed = false,
    handleClick
  } = props;

  const handleToggle = () => {
    setOpen(!open);
      handleClick(index);
  };

  useEffect(() => {
    console.log(isCollapsed, props, "22332");
  }, [open]);

  return (
    <div className={prefix("")}>
      <header>
        <div className={prefix("title")}>{title}</div>
        <div className={prefix("icon")} onClick={handleToggle}>
          {!open ? (
            <Icon name="arrow_down" size="12" />
          ) : (
            <Icon name="arrow_up" size="12" />
          )}
        </div>
      </header>
      {isCollapsed && <main>{children}</main>}
    </div>
  );
};

export default CollapseItem;
