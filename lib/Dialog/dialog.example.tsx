import React, { useState } from 'react';
import Dialog, { Alert, Confirm } from './dialog';

export default function() {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);

  const handlerAlert = () => {
    Alert('我是alert');
  };

  const handlerConfirm = () => {
    Confirm('我是Confirm');
  };

  return (
    <>
      <button onClick={() => setVisible(!visible)}>按钮</button>
      <button onClick={() => setVisible2(true)}>按钮2</button>
      <button onClick={() => setVisible3(true)}>按钮3</button>
      <button onClick={handlerAlert}>alert</button>
      <button onClick={handlerConfirm}>confirm</button>
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
            <button onClick={() => setVisible2(false)}>ok</button>
            <button>cancel</button>
          </>
        }
        onCancel={() => {
          setVisible2(false);
        }}
        maskClosable={false}
        onOk={() => {
          setVisible2(false);
        }}
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
