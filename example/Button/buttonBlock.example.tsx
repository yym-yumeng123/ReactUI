import React from "react";
import Button from "lib/Button/button";

const ButtonExample: React.FunctionComponent = () => {
  const fn = () => {
    console.log("我被点击了...");
  };
  return (
    <div>
      <h2>Block按钮</h2>
      <Button level="primary" block onClick={fn}>
        block 按钮
      </Button>
    </div>
  );
};

export default ButtonExample;
