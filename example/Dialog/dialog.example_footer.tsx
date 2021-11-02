import React, { useState } from "react";
import Dialog from "lib/Dialog/dialog";
import Button from "lib/Button/button";

const DialogFooter = () => {
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);

  const handleCancel = () => {
    console.log("我是取消");
    setVisible(false);
  };

  const handleCancel1 = () => {
    console.log("我是取消没有底部的");
    setVisible1(false);
  };

  return (
    <>
      <Button level="primary" onClick={() => setVisible(!visible)}>
        Dialog 底部多个button
      </Button>
      <Button
        style={{ marginLeft: "8px" }}
        level="primary"
        onClick={() => setVisible1(!visible1)}
      >
        Dialog 没有底部
      </Button>

      <Dialog
        visible={visible}
        onCancel={handleCancel}
        footer={
          <>
            <Button level="primary" onClick={() => setVisible(false)}>
              确定
            </Button>
            <Button onClick={handleCancel}>cancel</Button>
            <Button level="danger">footer</Button>
          </>
        }
      >
        <p>这是一段文字</p>
        <p>这是一段文字</p>
        <p>这是一段文字</p>
      </Dialog>

      {/* footer = null */}
      <Dialog visible={visible1} onCancel={handleCancel1} footer={null}>
        <p>这是一段文字</p>
        <p>这是一段文字</p>
        <p>这是一段文字</p>
      </Dialog>
    </>
  );
};

export default DialogFooter;
