import React, { FC, CSSProperties, SVGAttributes } from "react";
import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
import "./importAllIcons.js";
import "./icon.scss";

const mergeClass = addPrefixAndMergeClass("yui-icon");

interface IconProps extends SVGAttributes<SVGElement> {
  name: string;
  color?: string;
  size?: string | number;
  spin?: boolean;
}

const Icon: FC<IconProps> = (props) => {
  const { className, name, color, size, spin = false , ...restProps } = props;

  const styles = () => {
    let style: CSSProperties = {};
    if (color) {
      style.fill = color;
    }
    if (size) {
      style.fontSize = `${size}px`;
    }
    return style;
  };

  return (
    <svg
      style={styles()}
      className={mergeClass({ "": true, spin: spin }, { extra: className })}
      // 接受所有事件
      {...restProps}
    >
      <use xlinkHref={`#${name}`}></use>
    </svg>
  );
};

export default Icon;
