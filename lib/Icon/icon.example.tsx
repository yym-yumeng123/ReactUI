import React from "react";
import Icon from "./icon";

const IconExample: React.FunctionComponent = () => {
  const fn: React.MouseEventHandler = (e) => {
    console.log(e);
    console.log(e.target);
  }

  return (
    <div>
      <Icon name="message" color="blue" />
      <Icon name="view" />
      <Icon name="view_off" className="icon" />
      <Icon name="edit" className="icon" color="red" />
      <Icon name="close" className="icon" color="red" size="20px" />
      <Icon name="upload" onClick={fn} />
    </div>
  );
};

export default IconExample;
