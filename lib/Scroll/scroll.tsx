import React from "react";
import {
  MouseEventHandler,
  HTMLAttributes,
  UIEventHandler,
  useEffect,
  useRef,
  useState
} from "react";
import { addPrefixAndscopedClassMarker } from "../utils/classes";
import "./scroll.scss";
import scrollbarWidth from "./scrollbar-width";

const prefix = addPrefixAndscopedClassMarker("yui-scroll");

interface ScrollProps extends HTMLAttributes<HTMLDivElement> {}

const isTouchDevice: boolean = "ontouchstart" in document.documentElement;

const Scroll: React.FC<ScrollProps> = props => {
  const { children, ...restProps } = props;
  const [barHeight, setBarHeight] = useState(0);
  const [barTopHeight, _setBarTopHeight] = useState(0);
  const [barVisible, setBarVisible] = useState<Boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const setBarTopHeight = (number: number) => {
    const { current } = containerRef;
    const scrollHeight = current!.scrollHeight;
    const viewHeight = current!.getBoundingClientRect().height;
    const maxBarTop = ((scrollHeight - viewHeight) * viewHeight) / scrollHeight;
    if (number < 0 || number > maxBarTop) return;
    _setBarTopHeight(number);
  };

  const onScroll: UIEventHandler = e => {
    const scrollHeight = e.currentTarget.scrollHeight;
    // 可见视图向上滚动的距离
    const scrollTop = e.currentTarget.scrollTop;
    const viewHeight = e.currentTarget.getBoundingClientRect().height;
    const barHeight = (viewHeight * viewHeight) / scrollHeight;
    // 滑块距离顶部的距离
    const barTopHeight = (scrollTop * viewHeight) / scrollHeight;
    setBarHeight(barHeight);
    setBarTopHeight(barTopHeight);
  };

  /**
   * @description 第一次进来计算 bar 的高度
   */
  useEffect(() => {
    const { current } = containerRef;
    // 视图包含 超出的高度
    const scrollHeight = current!.scrollHeight;
    // 可视高度
    const viewHeight = current!.getBoundingClientRect().height;
    // 滚动滑块的高度
    const barHeight = (viewHeight * viewHeight) / scrollHeight;
    setBarHeight(barHeight);
  }, []);

  const draggingRef = useRef(false);
  const startYRef = useRef(0);
  const startBarTopRef = useRef(0);
  const onMouseDownBar: MouseEventHandler = e => {
    draggingRef.current = true;
    startYRef.current = e.clientY;
    startBarTopRef.current = barTopHeight;
  };
  const onMouseMoveBar = (e: MouseEvent) => {
    const { current } = containerRef;
    if (draggingRef.current) {
      const delta = e.clientY - startYRef.current;
      const newBarTop = delta + startBarTopRef.current;
      setBarTopHeight(newBarTop);
      const scrollHeight = current!.scrollHeight;
      const viewHeight = current!.getBoundingClientRect().height;
      current!.scrollTop = (newBarTop * scrollHeight) / viewHeight;
    }
  };
  const onMouseUpBar = () => {
    draggingRef.current = false;
  };

  const onSelect = (e: Event) => {
    if (draggingRef.current) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMoveBar);
    document.addEventListener("mouseup", onMouseUpBar);
    document.addEventListener("selectstart", onSelect);
    return () => {
      document.removeEventListener("mousemove", onMouseMoveBar);
      document.removeEventListener("mouseup", onMouseUpBar);
      document.removeEventListener("selectstart", onSelect);
    };
  }, []);

  return (
    <div className={prefix("")} {...restProps}>
      <div
        className={prefix("inner")}
        style={{ right: -scrollbarWidth() }}
        ref={containerRef}
        onScroll={onScroll}
      >
        {children}
      </div>
      {/* 滚动条 */}
      {barVisible && (
        <div className={prefix("track")}>
          <div
            onMouseDown={onMouseDownBar}
            className={prefix("bar")}
            style={{
              height: barHeight,
              transform: `translateY(${barTopHeight}px)`
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Scroll;
