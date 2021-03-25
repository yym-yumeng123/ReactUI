import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import { addPrefixAndscopedClassMarker } from "../utils/classes";
import useClickOutside from "lib/hooks/useClickOutside";
import "./popover.scss";
import ReactDOM from "react-dom";

interface PopoverProps {
  title?: string | ReactNode;
  content: string | ReactNode;
  placement?: "top" | "right" | "bottom" | "left";
}

const prefix = addPrefixAndscopedClassMarker("yui-popover");

const Popover: FC<PopoverProps> = props => {
  const { children, title, content, placement = "top" } = props;
  const [visible, setVisible] = useState(false);

  const popRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const triggerWrapperRef = useRef<HTMLDivElement>(null);

  const handlerToggle = () => {
    setVisible(!visible);
  };

  useClickOutside(popRef, () => {
    if (visible) {
      setVisible(false);
    }
  });

  useEffect(() => {
    const {
      left,
      top,
      height,
      width
    } = (triggerWrapperRef.current as HTMLDivElement).getBoundingClientRect();

    if (visible) {
      const contentRefCopy = contentRef.current as HTMLDivElement;
      const { height: contentHeight } = contentRefCopy.getBoundingClientRect();
      switch (placement) {
        // 上下和按钮居中
        case "right":
          contentRefCopy.style.left = `${width + left + window.scrollX}px`;
          contentRefCopy.style.top = `${top +
            window.scrollY -
            (contentHeight - height) / 2}px`;
          break;
        case "left":
          contentRefCopy.style.left = `${left + window.scrollX}px`;
          contentRefCopy.style.top = `${top +
            window.scrollY -
            (contentHeight - height) / 2}px`;
          break;
        case "bottom":
          contentRefCopy.style.left = `${left + window.scrollX}px`;
          contentRefCopy.style.top = `${top + height + window.scrollY}px`;
          break;
        default:
          contentRefCopy.style.left = `${left + window.scrollX}px`;
          contentRefCopy.style.top = `${top + window.scrollY}px`;
          break;
      }
    }
  }, [visible]);

  const contentPortal = visible && (
    <div
      className={prefix({ wrap: true, [`${placement}`]: !!placement })}
      ref={contentRef}
    >
      {title && <div className={prefix("header")}>{title}</div>}
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

Popover.defaultProps = {
  placement: "top"
};

export default Popover;
