import React from "react";
import Icon from "lib/Icon/icon";

const IconExampleCode = () => {
  const fn = () => {
    console.log("我被点击了");
  };

  return (
    <div>
      <Icon name="refresh" spin />
      <Icon name="refresh" color="red" />
      <Icon name="refresh" size="20" />
      <Icon name="user" size="20" onClick={fn} />
    </div>
  );
};

export default IconExampleCode;
