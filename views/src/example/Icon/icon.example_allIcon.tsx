import React from "react";
import Icon from "lib/Icon/icon";
import toast from "lib/Toast/toast";
import "./icon.demo.scss";
import { iconNames } from "./config";

const IconExample_AllIcon: React.FunctionComponent = () => {
  const copyText = (item: string) => {
    navigator.clipboard.writeText(`<Icon name="${item}" />`).then(() => {
      toast({
        content: `<Icon name="${item}" /> 已复制`
      });
    });
  };
  const viewIcon = iconNames.map(item => {
    return (
      <li key={item} onClick={() => copyText(item)} className={item}>
        <Icon name={item} />
        <span>
          <span style={{ opacity: 0, position: "absolute" }}>
            {"<Icon name='"}
          </span>
          {item}
          <span style={{ opacity: 0, position: "absolute" }}>{"' />"}</span>
        </span>
      </li>
    );
  });

  return (
    <div className="ym-icon-wrap">
      <ul>{viewIcon}</ul>
    </div>
  );
};

export default IconExample_AllIcon;
