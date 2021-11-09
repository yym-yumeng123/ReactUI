import React, {
  FC,
  ReactElement,
  useState,
  useRef,
  useEffect,
  MouseEventHandler,
  ReactNode
} from "react";
import Icon from "lib/Icon/icon";
import TabPane from "./tabPane";
import "./tabs.scss";

import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClass = addPrefixAndMergeClass("yui-tabs");

interface TabsProps {
  active: string;
  extra?: ReactNode
  onChange?: (name: string) => void;
  children: Array<ReactElement>;
}

const Tabs: FC<TabsProps> = props => {
  const { children, active, extra, onChange } = props;
  const [current, setCurrent] = useState(active);

  const navWrapRef = useRef<HTMLDivElement>(null);
  let currentItemRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  // 判断子元素是否都是 TabPane
  const isChildlrenElement = children.every(item => item.type === TabPane);
  if (!isChildlrenElement) {
    throw new Error("Tabs 子标签必须是 TabPane");
  }

  // 设置高亮线的动画
  useEffect(() => {
    // 计算 active and 父元素 宽高
    const {
      width,
      left: leftItem
    } = (currentItemRef.current as HTMLDivElement).getBoundingClientRect();

    // 包裹 头部的 距离左边的距离
    const {
      left
    } = (navWrapRef.current as HTMLDivElement).getBoundingClientRect();

    // 计算 left 差值
    const deltaLeft = leftItem - left;

    // 设置 高亮线的 marginLeft 和 宽度
    (indicatorRef.current as HTMLDivElement).style.width = width + "px";
    (indicatorRef.current as HTMLDivElement).style.marginLeft =
      deltaLeft + "px";
  }, [current]);

  const handleSelect: MouseEventHandler<HTMLSpanElement> = e => {
    const name = e.currentTarget.getAttribute("data-name");
    setCurrent(name!);
    onChange && onChange(name!);
  };

  // 获取子元素的 title
  const items = children.map((item, index) => {
    const { name, title, icon } = item.props;
    return (
      <span
        className={mergeClass({
          item: true,
          active: name === current
        })}
        data-name={name}
        key={index}
        ref={name === current ? currentItemRef : null}
        onClick={e => handleSelect(e)}
      >
        {icon && (
          <span className={mergeClass("icon")}>
            <Icon
              size="10"
              color={name === current ? "#1675e0" : "#8e8e93"}
              name={icon}
            />
          </span>
        )}
        <span className={mergeClass("title")}>{title}</span>
      </span>
    );
  });

  return (
    <div className={mergeClass("")}>
      <>
        <div ref={navWrapRef} className={mergeClass("nav-wrap")}>
          <div className={mergeClass('item-wrap')}>{items}</div>
          {extra && <span className={mergeClass('extra')}>{extra}</span>}
        </div>
        <div ref={indicatorRef} className={mergeClass("indicator")}></div>
      </>
      <>
        {
          children.filter(item => {
            return item.props.name === current;
          })[0]
        }
      </>
    </div>
  );
};

// Tabs.TabPane = TabPane
export default Tabs;
