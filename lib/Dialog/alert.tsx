import React from "react";
import ReactDOM from "react-dom";
import Dialog from "./dialog";
import Button from "lib/Button/button";

/**
 * 函数的方法使用这个 Alert
 * ReactDOM.render
 */
const Alert = (content: string) => {
  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  const component = (
    <Dialog
      title="提示"
      visible={true}
      onCancel={onClose}
      footer={
        <Button level="primary" onClick={onClose}>
          确定
        </Button>
      }
    >
      {content}
    </Dialog>
  );
  // 创建一个 div
  const div = document.createElement("div");
  // 放入 body
  document.body.append(div);
  ReactDOM.render(component, div);
};

export default Alert;
