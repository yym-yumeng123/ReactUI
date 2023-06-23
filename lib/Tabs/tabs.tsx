import React, {
  FC,
  ReactElement,
  useState,
  useRef,
  useEffect,
  ReactNode,
} from "react";
import Icon from "lib/Icon/icon";
import TabPane from "./tabPane";
import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
import { getKey } from "lib/Helpers/key";

import "./tabs.scss";

const mergeClass = addPrefixAndMergeClass("yui-tabs");

interface TabsProps {
  active: string;
  extra?: ReactNode;
  onChange?: (e: MouseEvent, name: string) => void;
  children: Array<ReactElement>;
}

const Tabs: FC<TabsProps> = (props) => {
  const { children, active, extra, onChange } = props;
  const [current, setCurrent] = useState(active);

  const navWrapRef = useRef<HTMLDivElement>(null);
  const currentItemRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  // 设置高亮线的动画
  useEffect(() => {
    // 计算 active and 父元素 宽高
    const { width, left: leftItem } =
      currentItemRef.current!.getBoundingClientRect();

    // 包裹 头部的 距离左边的距离
    const { left } = navWrapRef.current!.getBoundingClientRect();

    // 计算 left 差值
    const deltaLeft = leftItem - left;

    // 设置 高亮线的 marginLeft 和 宽度
    indicatorRef.current!.style.width = `${width}px`;
    indicatorRef.current!.style.marginLeft = `${deltaLeft}px`;
  }, [current]);

  const handleSelect = (e: any, name: string, disabled: boolean) => {
    if (disabled) return;
    setCurrent(name);
    onChange && onChange(e, name);
  };

  const items = React.Children.map(children, ({ props, type }, index) => {
    const { name, title, icon, disabled = false } = props;

    if (type !== TabPane) {
      throw new Error("Tabs 子标签必须是 TabPane");
    }

    return (
      <span
        className={mergeClass({
          item: true,
          active: name === current,
          disabled,
        })}
        data-name={name}
        key={getKey(index)}
        ref={name === current ? currentItemRef : null}
        onClick={(e) => handleSelect(e, name, disabled)}
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
      <div ref={navWrapRef} className={mergeClass("nav-wrap")}>
        <div className={mergeClass("item-wrap")}>{items}</div>
        {extra && <span className={mergeClass("extra")}>{extra}</span>}
      </div>
      <div ref={indicatorRef} className={mergeClass("indicator")}></div>
      {/* 显示选中的那一个组件 */}
      {children.filter(({ props }) => props.name === current)[0]}
    </div>
  );
};

export default Tabs;
