import React from "react";
import Icon from "lib/Icon/icon";

const IconExample: React.FunctionComponent = () => {
  const fn = () => {
    console.log('我被点击了');

  }
  return (
    <div>
      <h1 className="margin_bottom">代码演示</h1>
      <Icon name="refresh" spin />
      <Icon name="refresh" color="red" />
      <Icon name="refresh" size="20" />
      <Icon name="user" size="20" onClick={fn} />
    </div>
  )
};

export default IconExample;
