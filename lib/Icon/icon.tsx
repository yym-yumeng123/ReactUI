import React from "react";
import "./importAllIcons";
import "./icon.scss";
interface IconProps {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = props => {
  return (
    <svg className="yui-icon">
      <use xlinkHref={`#${props.name}`}></use>
    </svg>
  );
};

export default Icon;
