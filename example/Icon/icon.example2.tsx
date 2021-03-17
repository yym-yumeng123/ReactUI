import React from "react";
import Icon from "lib/Icon/icon";

const IconExample: React.FunctionComponent = () => {
  return (
    <div>
      <Icon name="refresh" spin />
      <Icon name="refresh" color="red" />
      <Icon name="refresh" size="20" />
    </div>
  )
};

export default IconExample;
