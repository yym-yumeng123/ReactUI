import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import { addPrefixAndscopedClassMarker } from "../utils/classes";
import useClickOutside from "lib/hooks/useClickOutside";
import "./popover.scss";
import ReactDOM from "react-dom";

interface PopoverProps {
  title?: string | ReactNode;
  content: string | ReactNode;
  placement?: "top" | "right" | "bottom" | "left";
  trigger?: "hover" | "click";
}

const prefix = addPrefixAndscopedClassMarker("yui-popover");

const Popover: FC<PopoverProps> = props => {
  const {
    children,
    title,
    content,
    placement = "top",
    trigger = "hover"
  } = props;

  const [visible, setVisible] = useState(false);

  const popRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const triggerWrapperRef = useRef<HTMLDivElement>(null);

  const handlerToggle = () => {
    if (trigger === "click") {
      setVisible(!visible);
    }
  };

  const handleMouseEnter = () => {
    if (trigger === "hover") {
      setVisible(true);
    }
  };

  const handleMouseLeave = () => {
    if (trigger === "hover") {
      setVisible(false);
    }
  };

  useClickOutside(popRef, () => {
    if (visible) {
      setVisible(false);
    }
  });

  const positionContent = () => {
    const {
      left,
      top,
      height,
      width
    } = (triggerWrapperRef.current as HTMLDivElement).getBoundingClientRect();
    const contentRefCopy = contentRef.current as HTMLDivElement;
    const { height: contentHeight } = contentRefCopy.getBoundingClientRect();
    let positions = {
      top: {
        top: `${top + window.scrollY}`,
        left: `${left + window.scrollX}`
      },
      bottom: {
        top: `${top + height + window.scrollY}`,
        left: `${left + window.scrollX}`
      },
      left: {
        top: `${top + window.scrollY - (contentHeight - height) / 2}`,
        left: `${left + window.scrollX}`
      },
      right: {
        top: `${top + window.scrollY - (contentHeight - height) / 2}`,
        left: `${width + left + window.scrollX}`
      }
    };
    contentRefCopy.style.left = positions[placement].left + "px";
    contentRefCopy.style.top = positions[placement].top + "px";
  };

  useEffect(() => {
    if (visible) {
      positionContent();
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
    <div className={prefix("")} ref={popRef}>
      {toBodyContent}
      <span
        onClick={handlerToggle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={prefix("triggerWrap")}
        ref={triggerWrapperRef}
      >
        {children}
      </span>
    </div>
  );
};

Popover.defaultProps = {
  placement: "top"
};

export default Popover;
