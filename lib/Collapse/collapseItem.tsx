import React, { FC, ReactElement, useState } from "react";
import Icon from "lib/Icon/icon";
import { addPrefixAndscopedClassMarker } from "../utils/classes";
import "./collapse.scss";

const prefix = addPrefixAndscopedClassMarker("yui-collapse-item");

interface CollapseItemProps {
  title: string | ReactElement;
}

const CollapseItem: FC<CollapseItemProps> = props => {
  const [open, setOpen] = useState(false);
  const { title, children } = props;

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={prefix("")}>
      <header onClick={handleOpen}>
        <div className="title">{title}</div>
        <div className="icon">
          {!open ? (
            <Icon name="arrow_down" size="12" />
          ) : (
            <Icon name="arrow_up" size="12" />
          )}
        </div>
      </header>
      {open && <main>{children}</main>}
    </div>
  );
};

export default CollapseItem;
