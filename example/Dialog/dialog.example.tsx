import React, { useState } from "react";
import Dialog, { Alert, Confirm } from "lib/Dialog/dialog";
import Button from "lib/Button/button";

export default function() {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);

  const handlerAlert = () => {
    Alert("我是alert");
  };

  const handlerConfirm = () => {
    Confirm("我是Confirm");
  };

  return (
    <>
      <Button level="primary" onClick={() => setVisible(!visible)}>按钮</Button>
      <Button level="primary" onClick={() => setVisible2(true)}>按钮2</Button>
      <Button level="primary" onClick={() => setVisible3(true)}>按钮3</Button>
      <Button level="primary" onClick={handlerAlert}>alert</Button>
      <Button level="primary" onClick={handlerConfirm}>confirm</Button>
      <Dialog
        visible={visible}
        onOk={() => {
          setVisible(false);
        }}
        footer={null}
        onCancel={() => {
          setVisible(false);
        }}
      >
        <strong>hi</strong>
        <p>这是一段文字</p>
        <p>这是一段文字</p>
        <p>这是一段文字</p>
      </Dialog>

      <Dialog
        visible={visible2}
        footer={
          <>
            <Button level="primary" onClick={() => setVisible2(false)}>ok</Button>
            <Button>cancel</Button>
          </>
        }
        onCancel={() => {
          setVisible2(false);
        }}
        maskClosable={false}
      >
        <strong>hi</strong>
        <p>这是一段文字</p>
        <p>这是一段文字</p>
        <p>这是一段文字</p>
      </Dialog>

      <Dialog
        visible={visible3}
        onCancel={() => {
          setVisible3(false);
        }}
        onOk={() => {
          setVisible3(false);
        }}
      >
        <strong>hi</strong>
        <p>这是一段文字</p>
        <p>这是一段文字</p>
        <p>这是一段文字</p>
      </Dialog>
    </>
  );
}
