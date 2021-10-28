import React from "react";
import Button from "lib/Button/button";

const ButtonTypeExample: React.FunctionComponent = () => {
  return (
    <div className="button_wrap">
      <Button>普通按钮</Button>
      <Button level="primary">提醒按钮</Button>
      <Button level="danger">危险按钮</Button>
      <Button level="link" href="baidu.com">
        链接按钮
      </Button>
    </div>
  );
};

export default ButtonTypeExample;
