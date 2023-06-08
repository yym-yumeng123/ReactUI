import React from "react";
import ReactDOM from "react-dom/client";
import Dialog from "./dialog";
import Button from "lib/Button/button";

/**
 * 函数的方法使用这个 Alert
 * ReactDOM.render
 */
const Alert = (content: string) => {
  // 创建一个 div
  const div = document.createElement("div");
  const rootDiv = ReactDOM.createRoot(div);

  const onClose = () => {
    rootDiv.render(React.cloneElement(component, { visible: false }));
    rootDiv.unmount()
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

  // 放入 body
  // document.body.append(div);
  rootDiv.render(component);
};

export default Alert;
