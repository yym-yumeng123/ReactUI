import React from "react";
import Button from "lib/Button/button";

const ButtonDisabledExample = () => {
  const onClick = () => {
    console.log("点击按钮");
  };
  return (
    <div className="button_wrap">
      <Button onClick={onClick} disabled>
        普通按钮(disabled)
      </Button>
      <Button onClick={onClick} level="primary" disabled>
        提醒按钮(disabled)
      </Button>
      <Button level="danger" onClick={onClick} disabled>
        危险按钮(disabled)
      </Button>
      <Button level="dashed" onClick={onClick} disabled>
        虚线按钮(disabled)
      </Button>
      <Button level="link" onClick={onClick} disabled>
        链接按钮(disabled)
      </Button>
    </div>
  );
};

export default ButtonDisabledExample;
