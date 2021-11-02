import React from "react";
import { Alert, Confirm, Modal } from "lib/Dialog/dialog";
import Button from "lib/Button/button";

const DialogSimpleAPI = () => {
  const handlerAlert = () => {
    Alert("我是Alert, 继承 Dialog, 简易使用");
  };

  const handlerConfirm = () => {
    Confirm("我是Confirm, 继承 Dialog, 简易使用", () => {
      console.log("我是确认回调");
    });
  };
  const handlerModal = () => {
    const close = Modal(
      <h1>
        <p>我是Modal, 继承 Dialog, 简易使用</p>
        <Button onClick={() => close.onOk()}>关闭</Button>
      </h1>
    );
  };

  return (
    <>
      <Button level="primary" onClick={handlerAlert}>
        alert
      </Button>
      <Button
        style={{ marginLeft: "8px" }}
        level="primary"
        onClick={handlerConfirm}
      >
        confirm
      </Button>
      <Button
        style={{ marginLeft: "8px" }}
        level="primary"
        onClick={handlerModal}
      >
        modal
      </Button>
    </>
  );
};

export default DialogSimpleAPI;
