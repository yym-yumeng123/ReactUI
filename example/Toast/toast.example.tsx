import React from "react";
import toast from "lib/Toast/toast";
import Button from "lib/Button/button";

const ToastExample = () => {
  const onclick = () => {
    toast({ content: "我是Taost" });
  };
  return (
    <div>
      <Button level="primary" onClick={onclick}>
        toast
      </Button>
    </div>
  );
};

export default ToastExample;
