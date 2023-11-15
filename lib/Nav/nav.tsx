import * as React from "react";
import { ReactNode } from "react";
import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
import "./nav.scss";
const mergeClass = addPrefixAndMergeClass("yui-nav");

export type ItemProps = {
  label: ReactNode;
  key: string;
  children?: ItemProps[];
};

interface NavProps {
  type?: "default" | "primary";
  // 垂直很是水平
  mode?: "hortizontal" | "vertical";
  items: ItemProps[]; // 每一项的内容
  activeKeys: string[];
  onClick?: (val: string) => void;
}

const NavBar: React.FC<NavProps> = (props) => {
  const {
    items,
    onClick,
    mode = "hortizontal",
    activeKeys = [],
    type = "default",
  } = props;
  console.log(items, mode, activeKeys, type);

  const handleChangeActive = (
    e: React.MouseEvent<HTMLElement>,
    item: ItemProps
  ) => {
    if (item.children) return;
    e.stopPropagation();
    onClick?.(item.key);
  };

  const subItem = (children: ItemProps[]) => {
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
                {sub.children && subItem(sub.children)}
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
                <span>{label}</span>

                {subItem(children)}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
