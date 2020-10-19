import React from "react";
import Button from "./button";

const ButtonExample: React.FunctionComponent = () => {
  return (
    <div>
      <Button>按钮</Button>
      <Button lever="primary">提醒按钮</Button>
      <Button lever="danger">提醒按钮</Button>
      <Button lever="link" href="baidu.com">链接按钮</Button>
      <Button lever="primary" disabled>链接按钮</Button>

      <div>
        <br/>
        <Button lever="primary" block>block 按钮</Button>
      </div>
    </div>
  );
};

export default ButtonExample;
