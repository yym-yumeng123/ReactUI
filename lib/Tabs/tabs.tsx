import React, {
  FC,
  ReactElement,
  MouseEvent,
  useState,
  useRef,
  useEffect
} from "react";
import TabPane from "./tabPane";
import { addPrefixAndscopedClassMarker } from "../utils/classes";
import "./tabs.scss";

const prefix = addPrefixAndscopedClassMarker("yui-tabs");

interface TabsProps {
  active: string;
  onChange?: (name: string) => void;
  children: Array<ReactElement>;
}

const Tabs: FC<TabsProps> = props => {
  const { children, active, onChange } = props;
  const [current, setCurrent] = useState(active);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const navWrapRef = useRef<HTMLDivElement>(null);
  // 判断子元素是否都是 TabPane
  const isChidlrenElement = children.every(item => item.type === TabPane);
  if (!isChidlrenElement) {
    throw new Error("Tabs 子标签必须是 TabPane");
  }

  // 设置高亮线的动画
  useEffect(() => {
    // 获取子元素循环的值
    const spans = navWrapRef.current?.childNodes;
    // @ts-ignore
    const result = Array.from(spans).filter(item =>
      // @ts-ignore
      item.classList.contains("yui-tabs-active")
    )[0];

    // 计算 active and 父元素 宽高
    const {
      width,
      left: leftItem
    } = (result as HTMLSpanElement).getBoundingClientRect();
    const {
      left
    } = (navWrapRef.current as HTMLDivElement).getBoundingClientRect();

    // 计算 left 差值
    const deltaLeft = leftItem - left;

    // 设置 高亮线的 marginLeft 和 宽度
    (indicatorRef.current as HTMLDivElement).style.width = width + "px";
    (indicatorRef.current as HTMLDivElement).style.marginLeft = deltaLeft + "px";
  }, [current]);

  const handleSelect = (name: string, e: MouseEvent<HTMLSpanElement>) => {
    setCurrent(name);
    onChange && onChange(name);
  };

  // 获取子元素的 title
  const items = children.map((item, index) => {
    return (
      <span
        className={prefix({ nav: true, active: item.props.name === current })}
        data-name={item.props.name}
        key={index}
        onClick={e => handleSelect(item.props.name, e)}
      >
        {item.props.title}
      </span>
    );
  });

  return (
    <div className={prefix("")}>
      <div ref={navWrapRef} className={prefix("nav-wrap")}>
        {items}
      </div>
      <div ref={indicatorRef} className={prefix("indicator")}></div>
      {
        children.filter(item => {
          return item.props.name === current;
        })[0]
      }
    </div>
  );
};

// Tabs.TabPane = TabPane
export default Tabs;
