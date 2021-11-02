import React, { useState } from "react";
import Dialog from "lib/Dialog/dialog";
import Button from "lib/Button/button";

const DialogText = () => {
  const [visible, setVisible] = useState(false);

  const handleCancel = () => {
    console.log("我是取消");
    setVisible(false);
  };

  const handleOk = () => {
    console.log("我是确定");
    setVisible(false);
  };

  return (
    <>
      <Button level="primary" onClick={() => setVisible(!visible)}>
        修改默认按钮的文字
      </Button>

      <Dialog visible={visible} onOkText="ok" onCancelText="cancel" onOk={handleOk} onCancel={handleCancel}>
        <p>这是一段文字</p>
        <p>这是一段文字</p>
        <p>这是一段文字</p>
      </Dialog>
    </>
  );
};

export default DialogText;
