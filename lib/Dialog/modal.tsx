import React, { ReactFragment, ReactNode } from "react";
import ReactDOM from "react-dom";
import Dialog from "./dialog";

const Modal = (
  content: ReactNode | ReactFragment,
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
    <Dialog visible={true} onOk={onOk} onCancel={onNo}>
      {content}
    </Dialog>
  );

  const div = document.createElement("div");
  document.body.appendChild(div);
  ReactDOM.render(component, div);

  return {
    onOk,
    onNo
  };
};

export default Modal;
