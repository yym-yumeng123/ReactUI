import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Icon from "lib/Icon/icon";
import Button from "lib/Button/button";
import Dialog, { Modal, alert, confirm } from "lib/Dialog/dialog";
import Layout, { Header, Footer, Content, SideBar } from "lib/Layout/layout";

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
  const hanleClick = () => {
    // Alert('我是弹框')
    // Confirm(
    //   "我还在吗",
    //   () => console.log("yes"),
    //   () => console.log("no")
    // );
    alert("我是提示框");
    confirm("你好啊");
  };
  const hanleClick1 = () => {
    // Alert('我是弹框')
    const { onOk } = Modal(
      <h1>
        我是Modal<Button onClick={() => onOk()}>按钮</Button>
      </h1>
    );
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
        <Button level="primary" onClick={hanleClick}>
          Alert
        </Button>
        <Button level="primary" onClick={hanleClick1}>
          Modal
        </Button>

        <Dialog
          maskClosable={false}
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>这是一段文字</p>
          <p>这是一段文字</p>
          <p>这是一段文字</p>
        </Dialog>

        <hr />

        <Layout style={{ height: 300 }}>
          <SideBar>我是侧边</SideBar>
          <Layout>
            <Header>header</Header>
            <Content>content</Content>
            <Footer>footer</Footer>
          </Layout>
        </Layout>
      </div>
    </>
  );
}
