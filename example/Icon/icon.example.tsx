import React from "react";
import Icon from "lib/Icon/icon";
import "./icon.demo.scss";
import { iconNames } from "./config";

const IconExample: React.FunctionComponent = () => {
  const viewIcon = iconNames.map(item => {
    return (
      <li key={item}>
        <Icon name={item} />
        <span>{item}</span>
      </li>
    );
  });

  return (
    <div className="ym-icon-wrap">
      <ul>{viewIcon}</ul>
    </div>
  );
};

export default IconExample;
