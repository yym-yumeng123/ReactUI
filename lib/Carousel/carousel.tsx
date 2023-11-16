import React, {
  FC,
  useState,
  useEffect,
  MouseEventHandler,
  ReactElement,
  useRef,
} from "react";
import CarouselItem from "./carouselItem";
import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
import "./carousel.scss";

const mergeClass = addPrefixAndMergeClass("yui-carousel");

interface CarouselProps {
  children: Array<ReactElement>;
  selected?: string;
  autoPlay?: boolean; // 是否自动切换
  autoTime?: number;
  width?: number;
  height?: number;
  className?: string;
}

const Carousel: FC<CarouselProps> = (props) => {
  const {
    children,
    selected,
    autoPlay = true,
    autoTime = 3,
    width,
    height,
    className,
  } = props;
  const [select, setSelect] = useState(selected || children[0].props.name);
  let timerId = useRef<any>(undefined);

  // 获取所有轮播子元素的 name
  const names = React.Children.map(children, (child) => child.props.name);

  useEffect(() => {
    if (autoPlay) {
      playAutomatically();
    }
  }, []);

  const playAutomatically = () => {
    // 用 setTimeout 模拟 setInterval
    if (timerId.current) return;
    let index = names.indexOf(select);
    let run = () => {
      if (index === names.length) {
        index = 0;
      }

      setSelect(names[index]);
      index++;
      timerId.current = setTimeout(run, autoTime * 1000);
    };

    // 第一次就开始跳转
    timerId.current = setTimeout(run, autoTime * 1000);
    index++;
  };

  const pauseAutomatically = () => {
    window.clearTimeout(timerId.current);
    timerId.current = undefined;
  };

  const handleMouseEnter = () => {
    pauseAutomatically();
  };

  const handleMouseLeave = () => {
    playAutomatically();
  };

  // 设置选中的
  const handleSelect: MouseEventHandler<HTMLSpanElement> = (e) => {
    setSelect(e.currentTarget.getAttribute("data-name"));
  };

  const renderItem = React.Children.map(children, (child, index) => {
    if (child.type !== CarouselItem) {
      throw new Error("Carousel 的子元素必须是 CarouselItem");
    }
    return React.cloneElement(child, {
      // 设置选中的值 === name 没设置第一个
      visible: select === child.props.name,
    });
  });

  return (
    <div
      style={{ width: `${width}px`, height: `${height}px` }}
      className={mergeClass("", { extra: className })}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={mergeClass("viewport")}>
        <div className={mergeClass("wrapper")}>{renderItem}</div>
      </div>

      {/* 浮点 */}
      <div className={mergeClass("dots")}>
        {React.Children.map(children, (child) => {
          const {
            props: { name },
          } = child;
          return (
            <span
              data-name={name}
              onClick={handleSelect}
              className={mergeClass({
                dot: true,
                active: select === name,
              })}
            ></span>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
export { CarouselItem };
