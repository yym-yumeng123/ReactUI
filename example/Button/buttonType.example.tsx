import React from "react";
import Button from "lib/Button/button";

const ButtonExample: React.FunctionComponent = () => {
  return (
    <div>
      <h2>按钮类型</h2>
      <Button>普通按钮</Button>
      <Button level="primary">提醒按钮</Button>
      <Button level="danger">危险按钮</Button>
      <Button level="link" href="baidu.com">
        链接按钮
      </Button>
    </div>
  );
};

export default ButtonExample;
