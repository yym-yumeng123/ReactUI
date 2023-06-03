import React, { useState } from "react";
import Dialog from "lib/Dialog/dialog";
import Button from "lib/Button/button";

const DialogBasic = () => {
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
        基本 Dialog
      </Button>

      <Dialog visible={visible} onOk={handleOk} onCancel={handleCancel}>
        <p>这是一段文字</p>
        <p>这是一段文字</p>
        <p>这是一段文字</p>
      </Dialog>
    </>
  );
};

export default DialogBasic;
