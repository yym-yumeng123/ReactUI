import React from "react";
import ReactDOM from "react-dom";
import Dialog from "./dialog";

/**
 * 函数的方法使用这个 Alert
 * ReactDOM.render
 */
const Alert = (content: string) => {
  const component = (
    <Dialog
      visible={true}
      onCancel={() => {
        // visible 变为false
        ReactDOM.render(React.cloneElement(component, { visible: false }), div);
        // 卸载 div
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
      }}
      footer={null}
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

export default Alert
