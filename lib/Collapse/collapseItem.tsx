import React, { FC, ReactElement, useEffect, useState } from "react";
import Icon from "lib/Icon/icon";
import { addPrefixAndscopedClassMarker } from "../utils/classes";
import "./collapse.scss";

const prefix = addPrefixAndscopedClassMarker("yui-collapse-item");

interface CollapseItemProps {
  title: string | ReactElement;
  single?: boolean;
  index?: number;
  parent?: Array<ReactElement>;
}

const CollapseItem: FC<CollapseItemProps> = props => {
  const [open, setOpen] = useState(false);
  const { title, children, single = false, parent } = props;

  const handleToggle = () => {
    if (open) {
      setOpen(false);
    } else {
      // TODO: 触发事件
      setOpen(true);
    }
  };

  const close = () => {
    setOpen(false)
  }

  useEffect(() => {
    parent?.forEach(item => {
      const { title: singleTitle } = item.props
      if(open && singleTitle !== title) {
        close()
      }
    })
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
      {open && <main>{children}</main>}
    </div>
  );
};

export default CollapseItem;
