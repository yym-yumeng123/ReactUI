import React from "react";
import toast from "lib/Toast/toast";
import Button from "lib/Button/button";

const ToastExample = () => {
  const onclick = () => {
    toast("我是Taost", { autoCloseDelay: 1 });
  };

  const onclick1 = () => {
    toast("我是Taost", {
      autoClose: false,
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
    </div>
  );
};

export default ToastExample;
