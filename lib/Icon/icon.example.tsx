import React from "react";
import Icon from "./icon";

const IconExample: React.FunctionComponent = () => {
  const fn = (e: React.MouseEvent) => {
    console.log(e);
    console.log(e.target);

    // as 把某个东西当做什么类处理
    console.log((e.target as SVGUseElement).href);
    console.log((e.target as HTMLDivElement).style);
  }

  return (
    <div>
      <Icon name="qq" />
      <Icon name="alipay" />
      <Icon name="wechat" />
      <Icon name="view" />
      <Icon name="view_off" />
      <Icon name="upload" onClick={fn} />
    </div>
  );
};

export default IconExample;
