import React, { useState } from "react";
import Dialog from "lib/Dialog/dialog";
import Button from "lib/Button/button";

const DialogClosable = () => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);

  const handleCancel = () => {
    console.log("我是取消");
    setVisible(false);
  };

  const handleOk = () => {
    console.log("我是确定");
    setVisible(false);
  };

  const handleCancel2 = () => {
    console.log("我是取消");
    setVisible2(false);
  };

  return (
    <>
      <Button level="primary" onClick={() => setVisible(!visible)}>
        点击遮罩不关闭
      </Button>
      <Button style={{marginLeft: '8px'}} level="primary" onClick={() => setVisible2(!visible2)}>
        没有关闭 icon
      </Button>

      {/* maskClosable =false */}
      <Dialog
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        maskClosable={false}
      >
        <p>点击遮罩关闭不了</p>
      </Dialog>

      {/* closable = false */}
      <Dialog visible={visible2} onCancel={handleCancel2} closable={false}>
        <p>我没有右上角关闭 icon</p>
      </Dialog>
    </>
  );
}

export default DialogClosable
