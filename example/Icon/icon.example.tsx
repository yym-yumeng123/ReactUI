import React from "react";
import Icon from "lib/Icon/icon";
import "./icon.demo.scss";
import { iconNames } from "./config";

const IconExample: React.FunctionComponent = () => {
  const copyText = (item: string) => {
    let val = document.getElementsByClassName(item)[0];
    window.getSelection()?.selectAllChildren(val);
    document.execCommand("Copy");
    alert(`<Icon name=${item} /> 已复制`)
  };
  const viewIcon = iconNames.map(item => {
    return (
      <li key={item} onClick={() => copyText(item)} className={item}>
        <Icon name={item} />
        <span>
          <span style={{ opacity: 0, position: 'absolute' }}>{"<Icon name='"}</span>
          {item}
          <span style={{ opacity: 0, position: 'absolute' }}>{"' />"}</span>
        </span>
      </li>
    );
  });

  return (
    <div className="ym-icon-wrap">
      <h1 className="margin_bottom">所有图标</h1>
      <ul>{viewIcon}</ul>
    </div>
  );
};

export default IconExample;
