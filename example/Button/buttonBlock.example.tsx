import React from "react";
import Button from "lib/Button/button";

const ButtonBlockExample: React.FunctionComponent = () => {
  const fn = () => {
    console.log("我被点击了...");
  };
  return (
    <div className="button_wrap">
      <Button level="primary" block onClick={fn}>
        block 按钮
      </Button>
      <br />
      <br />

      <Button level="danger" block onClick={fn}>
        block 按钮
      </Button>
    </div>
  );
};

export default ButtonBlockExample;
