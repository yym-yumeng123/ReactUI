import React from "react";
import Icon from "../../lib/Icon/icon";

const IconExample: React.FunctionComponent = () => {
  const fn: React.MouseEventHandler = (e) => {
    console.log(e);
    console.log(e.target);
  }

  return (
    <div>
      <Icon name="message" color="blue" />
      <Icon name="renew" />
      <Icon name="view_off" className="icon" />
      <Icon name="time" className="icon" color="red" />
      <Icon name="view" className="icon" color="red" size="30" />
      <Icon name="record" onClick={fn} />
    </div>
  );
};

export default IconExample;
