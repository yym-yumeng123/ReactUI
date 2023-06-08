import React, { ReactNode } from "react";
import ReactDOM from "react-dom/client";
import Dialog from "./dialog";

const Modal = (content: ReactNode) => {
  // 创建一个 div
  const div = document.createElement("div");
  const rootDiv = ReactDOM.createRoot(div);

  const onOk = () => {
    rootDiv.render(React.cloneElement(component, { visible: false }));
    rootDiv.unmount();
    div.remove();
  };

  const onNo = () => {
    rootDiv.render(React.cloneElement(component, { visible: false }));
    rootDiv.unmount();
    div.remove();
  };

  const component = (
    <Dialog
      title="模态框"
      visible={true}
      onOk={onOk}
      onCancel={onNo}
      footer={null}
    >
      {content}
    </Dialog>
  );

  rootDiv.render(component);

  // 暴露出去, 可以给外面的元素用
  return {
    onOk,
    onNo,
  };
};

export default Modal;
