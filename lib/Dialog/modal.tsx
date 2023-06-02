import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import Dialog from "./dialog";

const Modal = (
  content: ReactNode,
) => {
  const onOk = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };

  const onNo = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };

  const component = (
    <Dialog title="模态框" visible={true} onOk={onOk} onCancel={onNo} footer={null}>
      {content}
    </Dialog>
  );

  const div = document.createElement("div");
  document.body.appendChild(div);
  ReactDOM.render(component, div);

  // 暴露出去, 可以给外面的元素用
  return {
    onOk,
    onNo
  };
};

export default Modal;
