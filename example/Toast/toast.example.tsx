import React from "react";
import toast from "lib/Toast/toast";
import Button from "lib/Button/button";

const ToastExample = () => {
  const onclick = () => {
    toast({ content: "我是Taost" });
  };

  const onclick1 = () => {
    toast({
      content: "我是Taost",
      autoClose: false
    });
  };

  const onclick2 = () => {
    toast({
      content:
        "我是Taost我是Taost我是Taost我是Taost我是Taost我是Taost我是Taost我是是Taost我是是Taost我是是Taost我是是Taost我是"
    });
  };

  return (
    <div>
      <Button level="primary" onClick={onclick}>
        toast
      </Button>
      <Button level="primary" onClick={onclick1}>
        toast不自动关闭
      </Button>

      <Button level="primary" onClick={onclick2}>
        toast大量内容
      </Button>
    </div>
  );
};

export default ToastExample;
