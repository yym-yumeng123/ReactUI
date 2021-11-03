import React from "react";
import toast from "lib/Toast/toast";
import Button from "lib/Button/button";

const ToastExample = () => {
  const onclick = () => {
    toast("我是Taost", {});
  };

  const onclick1 = () => {
    toast("我是Taost", {
      autoClose: false
    });
  };

  const onclick2 = () => {
    toast(
      "我是Taost我是Taost我是Taost我是Taost我是Taost我是Taost我是Taost我是",
      {
        autoClose: false,
        position: 'bottom'
      }
    );
  };

  const onclick3 = () => {
    toast("我是Taost", {
      position: "middle",
      autoClose: false
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

      <Button level="primary" onClick={onclick3}>
        toast位置
      </Button>
    </div>
  );
};

export default ToastExample;
