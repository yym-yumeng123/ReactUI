import * as React from "react";
import { ReactNode } from "react";
import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
import "./nav.scss";
import Icon from "lib/Icon/icon";
const mergeClass = addPrefixAndMergeClass("yui-nav");

export type ItemProps = {
  label: ReactNode;
  key: string;
  children?: ItemProps[];
};

interface NavProps {
  type?: "default" | "primary"; // 主题色
  items: ItemProps[]; // 每一项的内容
  activeKeys: string[]; // 默认激活项
  onClick?: (val: string) => void;
}

const NavBar: React.FC<NavProps> = (props) => {
  const {
    items,
    onClick,
    activeKeys = [],
    type = "default",
  } = props;
  console.log(items, activeKeys, type);

  const handleChangeActive = (
    e: React.MouseEvent<HTMLElement>,
    item: ItemProps
  ) => {
    // console.log("item", item);
    if (item.children) return;
    e.stopPropagation();
    onClick?.(item.key);
  };

  const subItem = (children: ItemProps[], level: number) => {
    if (level > 0) {
      throw new Error("子导航暂时只支持两层嵌套");
    }
    return (
      children.length > 0 && (
        <div className={mergeClass("sub-item-wrap")}>
          {children.map((sub) => {
            return (
              <span
                className={mergeClass({
                  "sub-item": true,
                  "sub-active": activeKeys.indexOf(sub.key) != -1,
                })}
                key={sub.key}
                onClick={(e) => handleChangeActive(e, sub)}
              >
                {sub.label}
                {sub.children && subItem(sub.children, level + 1)}
              </span>
            );
          })}
        </div>
      )
    );
  };

  return (
    <div
      className={mergeClass({
        "": true,
        primary: type === "primary",
      })}
    >
      <div className={mergeClass("item-wrap")}>
        <ul>
          {items.map((item) => {
            const { label, key, children = [] } = item;
            return (
              <li
                key={key}
                onClick={(e) => handleChangeActive(e, item)}
                className={mergeClass({
                  item: true,
                  active: activeKeys.indexOf(key) != -1,
                })}
              >
                <span className={mergeClass("more-sub")}>
                  {label}
                  {children.length > 0 && (
                    <Icon
                      size={12}
                      color={type === "primary" ? "#fff" : "#575757"}
                      name="arrow_down"
                    />
                  )}
                </span>
                {subItem(children, 0)}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
