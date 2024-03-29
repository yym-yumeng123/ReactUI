import React from "react";
import Button from "lib/Button/button";

const ButtonTypeExample = () => {
  const onClickButton = () => {
    console.log("点击按钮");
  };

  return (
    <div className="button_wrap">
      <Button>普通按钮</Button>
      <Button level="primary">提醒按钮</Button>

      <Button level="danger">危险按钮</Button>
      <Button level="dashed">虚线按钮</Button>
      <Button level="link" href="baidu.com">
        链接按钮
      </Button>
      <Button loading>普通按钮</Button>
      <Button
        level="primary"
        loading
        loadingText="Loading"
        onClick={onClickButton}
      >
        提醒按钮
      </Button>
      <Button level="danger" loading>
        危险按钮
      </Button>
      <Button level="dashed" loading>
        虚线按钮
      </Button>
    </div>
  );
};

export default ButtonTypeExample;
