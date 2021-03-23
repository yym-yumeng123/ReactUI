import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import { addPrefixAndscopedClassMarker } from "../utils/classes";
import useClickOutside from "lib/hooks/useClickOutside";
import "./popover.scss";
import ReactDOM from "react-dom";

interface PopoverProps {
  title: string | ReactNode;
  content: string | ReactNode;
}

const prefix = addPrefixAndscopedClassMarker("yui-popover");

const Popover: FC<PopoverProps> = props => {
  const { children, title, content } = props;
  const [visible, setVisible] = useState(false);
  const popRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const triggerWrapperRef = useRef<HTMLDivElement>(null);

  useClickOutside(popRef, () => {
    setVisible(false);
  });

  const handlerToggle = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    const {
      left,
      top
    } = (triggerWrapperRef.current as HTMLDivElement).getBoundingClientRect();

    if (visible) {
      (contentRef.current as HTMLDivElement).style.left = `${left + window.scrollX}px`;
      (contentRef.current as HTMLDivElement).style.top = `${top + window.scrollY}px`;
    }
  }, [visible]);

  const contentPortal = visible && (
    <div className={prefix("wrap")} ref={contentRef}>
      <div className={prefix("header")}>{title}</div>
      <div className={prefix("content")}>{content}</div>
    </div>
  );

  const toBodyContent = ReactDOM.createPortal(contentPortal, document.body);

  return (
    <div className={prefix("")} onClick={handlerToggle} ref={popRef}>
      {toBodyContent}
      <span className={prefix("triggerWrap")} ref={triggerWrapperRef}>
        {children}
      </span>
    </div>
  );
};

export default Popover;
