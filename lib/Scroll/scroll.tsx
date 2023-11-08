import React, {
  FC,
  useState,
  useEffect,
  useRef,
  TouchEventHandler,
  MouseEventHandler,
  HTMLAttributes,
  UIEventHandler,
} from "react";
import Icon from "../Icon/icon";
import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
import scrollbarWidth from "./scrollbar-width";

import "./scroll.scss";

const mergeClass = addPrefixAndMergeClass("yui-scroll");

// 继承 HTML元素 的属性
interface ScrollProps extends HTMLAttributes<HTMLDivElement> {
  onPull?: () => void;
}

const Scroll: FC<ScrollProps> = ({ children, onPull, ...restProps }) => {
  const [barHeight, setBarHeight] = useState(0); // 块的高度
  const [barTopHeight, _setBarTopHeight] = useState(0); // 块距离上面的高度
  const [barVisible, setBarVisible] = useState<Boolean>(false); // 块的显示和隐藏

  const containerRef = useRef<HTMLDivElement>(null);
  const timerIdRef = useRef<number | null>(null);

  // 手机下拉更新变量
  // 下拉的值
  const [translateY, _setTranslateY] = useState(0);
  // 上一次 的 Y 坐标
  const lastYRef = useRef(0);
  // 记录第几次在运动
  const moveCount = useRef(0);
  // 正在下拉状态, 默认不拉
  const pulling = useRef(false);

  // drag 滚动时 的 设置
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

  // 滚动 set 滑块的高度 和 距离上面的高度
  const onScroll: UIEventHandler = (e) => {
    setBarVisible(true);
    // 滚动全高
    const scrollHeight = e.currentTarget.scrollHeight;
    // 可见视图向上滚动的距离
    const scrollTop = e.currentTarget.scrollTop;
    // 视图高度
    const viewHeight = e.currentTarget.getBoundingClientRect().height;
    const barHeight = (viewHeight * viewHeight) / scrollHeight;
    // 滑块距离顶部的距离
    const barTopHeight = (scrollTop * viewHeight) / scrollHeight;
    setBarHeight(barHeight);
    setBarTopHeight(barTopHeight);

    // 设置定时器, 已经设置了, 清除掉
    if (timerIdRef.current !== null) {
      window.clearTimeout(timerIdRef.current);
    }
    // 1s 后让 bar 隐藏
    timerIdRef.current = window.setTimeout(() => {
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

  const onMouseDownBar: MouseEventHandler = (e) => {
    draggingRef.current = true;
    startYRef.current = e.clientY;
    startBarTopRef.current = barTopHeight;
  };

  const onMouseMoveBar = (e: MouseEvent) => {
    const { current } = containerRef;
    if (draggingRef.current) {
      const delta = e.clientY - startYRef.current;
      // 每次移动 最初的 top
      const newBarTop = delta + startBarTopRef.current;
      setBarTopHeight(newBarTop);

      // 当 move 滚动条, 自动计算 内容区的 scrollTop
      const scrollHeight = current!.scrollHeight;
      const viewHeight = current!.getBoundingClientRect().height;
      current!.scrollTop = (newBarTop * scrollHeight) / viewHeight;
    }
  };
  const onMouseUpBar = () => {
    draggingRef.current = false;
  };

  const onSelect = (e: Event) => {
    // 在拖动中 禁止 默认事件
    if (draggingRef.current) {
      e.preventDefault();
    }
  };

  // 进来之后监听 drag 的行为事件
  useEffect(() => {
    document.addEventListener("mousemove", onMouseMoveBar);
    document.addEventListener("mouseup", onMouseUpBar);
    document.addEventListener("selectstart", onSelect);
    return () => {
      document.removeEventListener("mousemove", onMouseMoveBar);
      document.removeEventListener("mouseup", onMouseUpBar);
      // 滚动时 取消 选择事件
      document.removeEventListener("selectstart", onSelect);
    };
  }, []);

  // 下面是下拉更新的相关操作
  // 对拉动的距离做一个限制
  const setTranslateY = (y: number) => {
    if (y < 0) {
      y = 0;
    } else if (y > 100) {
      y = 100;
    }
    _setTranslateY(y);
  };

  const onTouchStart: TouchEventHandler = (e) => {
    // scrollTop 为 0时, 设置下拉状态
    const scrollTop = containerRef.current!.scrollTop;
    if (scrollTop !== 0) {
      return;
    }
    pulling.current = true;
    // y 坐标
    lastYRef.current = e.touches[0].clientY;
    console.log("lastYRef.current", lastYRef.current);

    moveCount.current = 0;
  };
  const onTouchMove: TouchEventHandler = (e) => {
    // 每次 move moveCount++
    moveCount.current++;
    const deltaY = e.touches[0].clientY - lastYRef.current;
    // 第一次滚 & 是往上, 看下面的内容
    if (moveCount.current === 1 && deltaY < 0) {
      // 手指不是下拉, 是往上, 重置 false
      pulling.current = false;
      return
    }

    // 第二次看 状态
    if (!pulling.current) {
      return;
    }

    setTranslateY(translateY + deltaY);

    // 每次移动, lastRef 都为第一个手指触摸的点, 更新 lastRef
    lastYRef.current = e.touches[0].clientY;
  };

  const onTouchEnd: TouchEventHandler = (e) => {
    if (pulling.current === true) {
      setTranslateY(0);
      onPull?.();
      pulling.current = false;
    }
  };

  return (
    // 外面的 div 没有滚动条, 起的作用隐藏 原有滚动条
    <div className={mergeClass("")} {...restProps}>
      {/* inner 有滚动条, overflow: auto */}
      <div
        className={mergeClass("inner")}
        style={{
          right: -scrollbarWidth(),
          transform: `translateY(${translateY}px)`,
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
        // 轨道
        <div className={mergeClass("track")}>
          {/* 自建滚动 */}
          <div
            onMouseDown={onMouseDownBar}
            className={mergeClass("bar")}
            style={{
              height: barHeight,
              transform: `translateY(${barTopHeight}px)`,
            }}
          ></div>
        </div>
      )}

      {/*下拉箭头*/}
      <div className={mergeClass("pulling")} style={{ height: translateY }}>
        {translateY === 100 ? "开始刷新" : <Icon name="refresh" spin />}
      </div>
    </div>
  );
};

export default Scroll;
