import React, { FC, ReactElement, useState } from "react";
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
      <header onClick={handleOpen}>{title}</header>
      {open && <main>{children}</main>}
    </div>
  );
};

export default CollapseItem;
