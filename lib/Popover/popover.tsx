import React, {
  FC,
  ReactNode,
  useEffect,
  useRef,
  useState,
  MouseEventHandler,
} from "react";
import ReactDOM from "react-dom";
import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
import "./popover.scss";

const mergeClass = addPrefixAndMergeClass("yui-popover");

type Placement = "top" | "right" | "bottom" | "left";

interface PopoverProps {
  children: ReactNode;
  title?: string | ReactNode;
  content: string | ReactNode;
  placement?: Placement; // 方向
  trigger?: "hover" | "click";
}

const Popover: FC<PopoverProps> = (props) => {
  const {
    title,
    content,
    placement = "top",
    trigger = "hover",
    children,
  } = props;
  let timerId: any;

  const [visible, setVisible] = useState(false);

  const popRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const triggerWrapperRef = useRef<HTMLDivElement>(null);

  const positionContent = () => {
    const { left, top, height, width } =
      triggerWrapperRef.current!.getBoundingClientRect();
    const contentRefCopy = contentRef.current as HTMLDivElement;
    const { height: contentHeight } = contentRefCopy.getBoundingClientRect();

    let positions = {
      top: {
        top: `${top + window.scrollY}`, // top 的高度 + 滚动的高度
        left: `${left + window.scrollX}`,
      },
      bottom: {
        top: `${top + height + window.scrollY}`,
        left: `${left + window.scrollX}`,
      },
      left: {
        top: `${top + window.scrollY - (contentHeight - height) / 2}`,
        left: `${left + window.scrollX}`,
      },
      right: {
        top: `${top + window.scrollY - (contentHeight - height) / 2}`,
        left: `${width + left + window.scrollX}`,
      },
    };

    contentRefCopy.style.left = positions[placement].left + "px";
    contentRefCopy.style.top = positions[placement].top + "px";
  };

  useEffect(() => {
    visible && positionContent();
  }, [visible]);

  useEffect(() => {
    if (trigger === "click") {
      popRef.current?.addEventListener("click", handlerToggle);
    }

    return () => {
      if (trigger === "click") {
        popRef.current?.removeEventListener("click", handlerToggle);
      }
    };
  });

  const handlerToggle = (e: MouseEvent) => {
    if (triggerWrapperRef.current?.contains(e.target as Node)) {
      visible ? close() : open();
    }
  };

  const open = () => {
    setVisible(true);
    document.addEventListener("click", onClickDocument);
  };

  const close = () => {
    setVisible(false);
    document.removeEventListener("click", onClickDocument);
  };

  const onClickDocument = (e: MouseEvent) => {
    if (
      popRef.current &&
      (popRef.current === e.target || popRef.current.contains(e.target as Node))
    ) {
      return;
    }
    if (
      contentRef.current &&
      (contentRef.current === e.target ||
        contentRef.current.contains(e.target as Node))
    ) {
      return;
    }
    close();
  };

  const handleContentClick = () => {
    setVisible(true);
  };

  // 鼠标滑入
  const handleMouseEnter: MouseEventHandler<HTMLSpanElement> = () =>
    commonMouseHandle(true);

  // 鼠标移出
  const handleMouseLeave: MouseEventHandler<HTMLSpanElement> = () =>
    commonMouseHandle(false);

  const commonMouseHandle = (bool: boolean) => {
    if (trigger === "hover") {
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => setVisible(bool), 300);
    }
  };

  const contentPortal = visible && (
    <div
      className={mergeClass({ wrap: true, [`${placement}`]: !!placement })}
      ref={contentRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleContentClick}
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

export default Popover;
