import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Icon from "lib/Icon/icon";
import Button from "lib/Button/button";
import Dialog from "lib/Dialog/dialog";

export default function Overview() {
  const onClickButton = () => {
    console.log("点击");
  };

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
      <div id="detail">
        <Outlet />
      </div>
      <div id="sidebar">
        <Icon name="alipay"></Icon>
        <Icon name="alipay" spin></Icon>

        <hr />

        <Button>普通按钮</Button>
        <Button level="primary">提醒按钮</Button>

        <Button level="danger">危险按钮</Button>
        <Button level="dashed">虚线按钮</Button>
        <Button level="link" href="baidu.com">
          链接按钮
        </Button>
        <Button loading>普通按钮</Button>
        <Button
          level="primary"
          loading
          loadingText="Loading"
          onClick={onClickButton}
        >
          提醒按钮
        </Button>
        <Button level="danger" loading>
          危险按钮
        </Button>
        <Button level="dashed" loading>
          虚线按钮
        </Button>

        <hr />

        <Button level="primary" onClick={() => setVisible(!visible)}>
          基本 Dialog
        </Button>

        <Dialog maskClosable={false} visible={visible} onOk={handleOk} onCancel={handleCancel}>
          <p>这是一段文字</p>
          <p>这是一段文字</p>
          <p>这是一段文字</p>
        </Dialog>
      </div>
    </>
  );
}
