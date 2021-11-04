import React from "react";
import toast from "lib/Toast/toast";
import Button from "lib/Button/button";

const ToastExample = () => {
  const onclick = () => {
    toast({ content: "恭喜你, 添加成功" });
  };

  const onclick1 = () => {
    toast({
      content: "恭喜你, 添加成功",
      autoClose: false
    });
  };

  const onclick2 = () => {
    toast({
      content:
        "恭喜你, 这是一个不错的决定;恭喜你, 这是一个不错的决定;恭喜你, 这是一个不错的决定;恭喜你, 这是一个不错的决定"
    });
  };

  return (
    <div>
      <Button level="primary" onClick={onclick}>
        我是默认的toast
      </Button>

      <Button style={{marginLeft: '8px'}} level="primary" onClick={onclick1}>
        我是不自动关闭的toast
      </Button>

      <Button style={{marginLeft: '8px'}} level="primary" onClick={onclick2}>
        我是里面有很多内容toast
      </Button>
    </div>
  );
};

export default ToastExample;
