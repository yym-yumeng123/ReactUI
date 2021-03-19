import React, { FC, ReactElement, MouseEvent, useState } from "react";
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
  // 判断子元素是否都是 TabPane
  const isChidlrenElement = children.every(item => item.type === TabPane);
  if (!isChidlrenElement) {
    throw new Error("Tabs 子标签必须是 TabPane");
  }

  const handleSelect = (name: string, e: MouseEvent<HTMLSpanElement>) => {
    setCurrent(name)
    onChange && onChange(name);
  };

  // 获取子元素的 title
  const items = children.map((item, index) => {
    return (
      <span
        className={prefix({ header: true, active: item.props.name === current })}
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
      <div className={prefix("header-wrap")}>{items}</div>
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
