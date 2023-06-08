import React from "react";
import ReactDOM from "react-dom/client";
import Dialog from "./dialog";

const Confirm = (content: string, ok?: () => void, no?: () => void) => {
  // 创建一个 div
  const div = document.createElement("div");
  const rootDiv = ReactDOM.createRoot(div);

  const onOk = () => {
    rootDiv.render(React.cloneElement(component, { visible: false }));
    rootDiv.unmount();
    div.remove();
    ok && ok();
  };

  const onNo = () => {
    rootDiv.render(React.cloneElement(component, { visible: false }));
    rootDiv.unmount();
    div.remove();
    no && no();
  };

  // 用户调用 dialog, 创建一个组件
  const component = (
    // dialog 默认看得见
    <Dialog title="确认" visible={true} onOk={onOk} onCancel={onNo}>
      {content}
    </Dialog>
  );

  rootDiv.render(component);
};

export default Confirm;
