import React, { FC, ReactNode, useState } from "react";
import { addPrefixAndscopedClassMarker } from "../utils/classes";
import "./popover.scss";

interface PopoverProps {
  title: string | ReactNode;
  content: string | ReactNode;
}

const prefix = addPrefixAndscopedClassMarker("yui-popover");

const Popover: FC<PopoverProps> = props => {
  const { children, title, content } = props;
  const [visible, setVisible] = useState(false);

  const handlerToggle = () => {
    setVisible(!visible);
  };

  return (
    <div className={prefix("")} onClick={handlerToggle}>
      {visible && (
        <div className={prefix("wrap")}>
          <div className={prefix("header")}>{title}</div>
          <div className={prefix("content")}>{content}</div>
        </div>
      )}
      {children}
    </div>
  );
};

export default Popover;
