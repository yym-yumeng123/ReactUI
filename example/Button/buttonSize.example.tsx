import React from "react";
import Button, { ButtonSize } from "lib/Button/button";

const ButtonExample: React.FunctionComponent = () => {
  return (
    <div>
      <h2>按钮尺寸</h2>
      <Button level="primary" size="lg">
        large按钮
      </Button>
      <Button level="primary" size="sm">
        sm按钮
      </Button>
      <Button level="primary" size="xs">
        xs按钮
      </Button>
      <Button level="primary" size={ButtonSize.Large}>
        ButtonSize 使用
      </Button>
    </div>
  );
};

export default ButtonExample;
