import * as React from "react";
import { ReactNode } from "react";
import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
import "./nav.scss";
const mergeClass = addPrefixAndMergeClass("yui-nav");

export type ItemProps = {
  label: ReactNode;
  key: string;
};

interface NavProps {
  type?: "default" | "primary";
  // 垂直很是水平
  mode?: "hortizontal" | "vertical";
  items: ItemProps[]; // 每一项的内容
  activeKeys: string[];
  onClick: (val: string) => void;
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

  const handleChangeActive = (item: ItemProps) => onClick(item.key);

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
            const { label, key } = item;
            return (
              <li
                key={key}
                onClick={() => handleChangeActive(item)}
                className={mergeClass({
                  item: true,
                  active: activeKeys.indexOf(key) != -1,
                })}
              >
                {label}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
