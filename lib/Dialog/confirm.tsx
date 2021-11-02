import React from "react";
import ReactDOM from "react-dom";
import Dialog from "./dialog";

const Confirm = (content: string, ok?: () => void, no?: () => void) => {
  const onOk = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
    ok && ok();
  };

  const onNo = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
    no && no();
  };

  // 用户调用 dialog, 创建一个组件
  const component = (
    // dialog 默认看得见
    <Dialog visible={true} onOk={onOk} onCancel={onNo}>
      {content}
    </Dialog>
  );

  const div = document.createElement("div");
  document.body.appendChild(div);
  ReactDOM.render(component, div);
};

export default Confirm;
