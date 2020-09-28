import React from "react";
import "./importAllIcons";
import classes from "../helpers/classes";
import "./icon.scss";

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
  color?: string;
  size?: string;
}

const Icon: React.FunctionComponent<IconProps> = ({
  className,
  name,
  color,
  size,
  ...restProps
}) => {
  return (
    <svg
      style={{ fill: color, fontSize: size, }}
      className={classes("yui-icon", className)}
      {...restProps}
    >
      <use xlinkHref={`#${name}`}></use>
    </svg>
  );
};

export default Icon;
