import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import useClickOutside from "lib/hooks/useClickOutside";

import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClass = addPrefixAndMergeClass("yui-popover");

import "./popover.scss";

type Placement = "top" | "right" | "bottom" | "left";
interface PopoverProps {
  title?: string | ReactNode;
  content: string | ReactNode;
  placement?: Placement; // 方向
  trigger?: "hover" | "click";
}

const Popover: FC<PopoverProps> = props => {
  const {
    title,
    content,
    placement = "top",
    trigger = "hover",
    children
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
      className={mergeClass({ wrap: true, [`${placement}`]: !!placement })}
      ref={contentRef}
    >
      {title && <div className={mergeClass("header")}>{title}</div>}
      <div className={mergeClass("content")}>{content}</div>
    </div>
  );

  const toBodyContent = ReactDOM.createPortal(contentPortal, document.body);

  return (
    <div className={mergeClass("")} ref={popRef}>
      {/* 气泡展示的元素 */}
      {toBodyContent}

      {/* 展示给用户看的元素 */}
      <span
        onClick={handlerToggle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={mergeClass("triggerWrap")}
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
