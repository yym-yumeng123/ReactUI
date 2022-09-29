import React from "react";
import Button from "lib/Button/button";

const ButtonSizeExample: React.FunctionComponent = () => {
  return (
    <div className="button_wrap">
      <Button level="primary" size="lg">
        large按钮
      </Button>
      <Button level="primary" size="sm">
        sm按钮
      </Button>
      <Button level="primary" size="xs">
        xs按钮
      </Button>
    </div>
  );
};

export default ButtonSizeExample;
