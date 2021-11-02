/**
 * 这里 是对 Alert Confirm Modal 的公用部分提取, 然后优化的地方
 * 因为 Alert Confirm Modal 都有大量相同的代码, 所以可以创建一个函数, 都是用这个, 简化代码
 */

import React, { ReactElement, ReactNode } from "react";
import ReactDOM from "react-dom";
import Dialog from "./dialog";
import Button from "lib/Button/button";

const modal = (content: ReactNode, footer: ReactElement | null) => {
  // alert confrirm modal 都有 close, 提取出来
  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  // 三个简化的 函数 都有 component 这个, 只是 footer 不一样
  const component = (
    <Dialog visible={true} footer={footer} onCancel={onClose}>
      {content}
    </Dialog>
  );

  // 把这个组件放入 div, 并把 onClose return 出去
  const div = document.createElement("div");
  document.body.append(div);
  ReactDOM.render(component, div);

  return onClose;
};

// Alert  => ./alert.tsx
const alert = (content: string) => {
  const footer = (
    <>
      <Button level="primary" onClick={() => onClose()}>
        确定
      </Button>
    </>
  );
  const onClose = modal(content, footer);
};

// confirm => ./confirm.tsx
const confirm = (content: string, yes?: () => void, no?: () => {}) => {
  const onOk = () => {
    close();
    yes && yes();
  };
  const onNo = () => {
    close;
    no && no();
  };
  const footer = (
    <>
      <Button level="primary" onClick={onOk}>
        确定
      </Button>
      <Button onClick={onNo}>取消</Button>
    </>
  );
  const close = modal(content, footer);
};

export { alert, confirm, modal };
