import React from "react";
import "./importAllIcons";
import "./icon.scss";
interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = props => {
  const { className, ...restProps } = props
  return (
    <svg className={`yui-icon ${className}`} {...restProps}>
      <use xlinkHref={`#${props.name}`}></use>
    </svg>
  );
};

export default Icon;
