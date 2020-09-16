import React from "react";
import "./importAllIcons";
import "./icon.scss";
import classes from "../helpers/classes";

/**
 * @params {name} icon name
 */

// 声明 icon 属性
interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

// icon 是一个函数组件, 属性类型是 iconprops
const Icon: React.FunctionComponent<IconProps> = ({
  className,
  name,
  ...restProps
}) => {
  return (
    <svg className={classes("yui-icon", className)} {...restProps}>
      <use xlinkHref={`#${name}`}></use>
    </svg>
  );
};

export default Icon;
