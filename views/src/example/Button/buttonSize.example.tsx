import React from "react";
import Button from "lib/Button/button";

const ButtonSizeExample = () => {
  return (
    <div className="button_wrap">
      <div>
        <Button level="primary" size="lg">
          large按钮
        </Button>
      </div>
      <div>
        <Button level="primary" size="sm">
          sm按钮
        </Button>
      </div>
      <div>
        <Button level="primary" size="xs">
          xs按钮
        </Button>
      </div>
    </div>
  );
};

export default ButtonSizeExample;
