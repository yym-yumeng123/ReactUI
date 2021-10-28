import React from "react";
import Button from "lib/Button/button";

const ButtonDisabledExample: React.FunctionComponent = () => {
  return (
    <div className="button_wrap">
      <Button disabled>普通按钮(disabled)</Button>
      <Button level="primary" disabled>提醒按钮(disabled)</Button>
      <Button level="danger" disabled>危险按钮(disabled)</Button>
      <Button level="link" disabled>
        链接按钮(disabled)
      </Button>
    </div>
  );
};

export default ButtonDisabledExample;
