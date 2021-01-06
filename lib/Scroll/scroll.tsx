import React, {
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

const Scroll: React.FC<ScrollProps> = props => {
  const { children, ...restProps } = props;
  const [barHeight, setBarHeight] = useState(0);
  const [barTopHeight, setBarTopHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const onScroll: UIEventHandler = e => {
    console.log(e.currentTarget.scrollTop, e.currentTarget.scrollHeight);
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
    const { current } = containerRef
    // 视图包含 超出的高度
    const scrollHeight = current!.scrollHeight;
    // 可视高度
    const viewHeight = current!.getBoundingClientRect().height;
    // 滚动滑块的高度
    const barHeight = (viewHeight * viewHeight) / scrollHeight;
    setBarHeight(barHeight);
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
      <div className={prefix("track")}>
        <div
          className={prefix("bar")}
          style={{ height: barHeight, transform: `translateY(${barTopHeight}px)`, }}
        ></div>
      </div>
    </div>
  );
};

export default Scroll;
