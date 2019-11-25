import React from "react";
import "./importAllIcons";
import "./icon.scss";
interface IconProps {
  name: string;
  onClick: (e: React.MouseEvent) => void;
}

const Icon: React.FunctionComponent<IconProps> = props => {
  return (
    <svg className="yui-icon" onClick={props.onClick}>
      <use xlinkHref={`#${props.name}`}></use>
    </svg>
  );
};

export default Icon;
