import React from "react";
import {
  TouchEventHandler,
  MouseEventHandler,
  HTMLAttributes,
  UIEventHandler,
  useEffect,
  useRef,
  useState
} from "react";

import "./scroll.scss";
import scrollbarWidth from "./scrollbar-width";
import Icon from "../Icon/icon";

import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClass = addPrefixAndMergeClass("yui-scroll");

interface ScrollProps extends HTMLAttributes<HTMLDivElement> {
  onPull?: () => void;
}

const Scroll: React.FC<ScrollProps> = props => {
  const { children, onPull, ...restProps } = props;
  const [barHeight, setBarHeight] = useState(0);
  const [barTopHeight, _setBarTopHeight] = useState(0);
  const [barVisible, setBarVisible] = useState<Boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const timerIdRef = useRef<number | null>(null);

  const setBarTopHeight = (number: number) => {
    const { current } = containerRef;
    const scrollHeight = current!.scrollHeight;
    const viewHeight = current!.getBoundingClientRect().height;
    const maxBarTop = ((scrollHeight - viewHeight) * viewHeight) / scrollHeight;
    if (number < 0 || number > maxBarTop) {
      return;
    }
    _setBarTopHeight(number);
  };

  const onScroll: UIEventHandler = e => {
    setBarVisible(true);
    const scrollHeight = e.currentTarget.scrollHeight;
    // 可见视图向上滚动的距离
    const scrollTop = e.currentTarget.scrollTop;
    const viewHeight = e.currentTarget.getBoundingClientRect().height;
    const barHeight = (viewHeight * viewHeight) / scrollHeight;
    // 滑块距离顶部的距离
    const barTopHeight = (scrollTop * viewHeight) / scrollHeight;
    setBarHeight(barHeight);
    setBarTopHeight(barTopHeight);

    if (timerIdRef.current !== null) {
      window.clearTimeout(timerIdRef.current);
    }
    timerIdRef.current = window.setTimeout(() => {
      console.log("323");
      setBarVisible(false);
    }, 1000);
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

  // 下拉的值
  const [translateY, _setTranslateY] = useState(0);
  const setTranslateY = (y: number) => {
    if (y < 0) {
      y = 0;
    } else if (y > 100) {
      y = 100;
    }
    _setTranslateY(y);
  };
  const lastYRef = useRef(0);

  // 记录第几次在运动
  const moveCount = useRef(0);
  // 正在下拉状态, 默认不拉
  const pulling = useRef(false);

  const onTouchStart: TouchEventHandler = e => {
    // scrollTop 为 0时, 设置下拉状态
    const scrollTop = containerRef.current!.scrollTop;
    if (scrollTop !== 0) {
      return;
    }
    pulling.current = true;
    lastYRef.current = e.touches[0].clientY;

    moveCount.current = 0;
  };
  const onTouchMove: TouchEventHandler = e => {
    // 每次 move moveCount++
    moveCount.current++;
    const deltaY = e.touches[0].clientY - lastYRef.current;
    if (moveCount.current === 1 && deltaY < 0) {
      // 手指不是下拉, 是往上
      pulling.current = false;
    }
    if (!pulling.current) {
      return;
    }

    console.log(deltaY, "2323");

    setTranslateY(translateY + deltaY);

    lastYRef.current = e.touches[0].clientY;
  };

  const onTouchEnd: TouchEventHandler = e => {
    if (pulling.current === true) {
      setTranslateY(0);
      onPull && onPull();
      pulling.current = false;
    }
  };

  return (
    <div className={mergeClass("")} {...restProps}>
      <div
        className={mergeClass("inner")}
        style={{
          right: -scrollbarWidth(),
          transform: `translateY(${translateY}px)`
        }}
        ref={containerRef}
        onScroll={onScroll}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {children}
      </div>
      {/* 滚动条 */}
      {barVisible && (
        <div className={mergeClass("track")}>
          <div
            onMouseDown={onMouseDownBar}
            className={mergeClass("bar")}
            style={{
              height: barHeight,
              transform: `translateY(${barTopHeight}px)`
            }}
          ></div>
        </div>
      )}

      {/*下拉箭头*/}
      <div className={mergeClass("pulling")} style={{ height: translateY }}>
        {translateY === 100 ? "开始刷新" : <Icon name="down_to_bottom" />}
      </div>
    </div>
  );
};

export default Scroll;
