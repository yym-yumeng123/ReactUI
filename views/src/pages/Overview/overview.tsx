import React from "react";
import { Outlet } from "react-router-dom";

import Icon from "lib/Icon/icon";
import Button from "lib/Button/button";

export default function Overview() {
  const onClickButton = () => {
    console.log("点击");
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
      </div>
    </>
  );
}
