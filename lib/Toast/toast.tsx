import React from "react";
import ReactDOM from "react-dom";
import Icon from "lib/Icon/icon";
import "./toast.scss";

import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClass = addPrefixAndMergeClass("yui-toast");

interface Options {
  autoClose?: boolean;
  autoCloseDelay?: number;
  type?: "success" | "danger" | "info";
  onClose?: () => void;
}

const toast = (content: string, options: Options) => {
  const { autoClose = true, autoCloseDelay = 3, onClose } = options;

  const closeToast = () => {
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };

  if (autoClose) {
    setTimeout(() => {
      closeToast();
    }, autoCloseDelay * 1000);
  }

  const handleClose = () => {
    closeToast();
    onClose && onClose();
  };

  // 有几个弹框
  const count = document.body.querySelectorAll('.yui-toast-wrapper').length + 1




  const component = (
    <div className={mergeClass("")} style={{top: `${(count)* 40}px`}}>
      <span>{content}</span>
      {!autoClose && (
        <span className={mergeClass("close")}>
          <Icon
            name="close_no_around"
            size="8"
            color="#2a9af4"
            onClick={handleClose}
          />
        </span>
      )}
    </div>
  );

  const div = document.createElement("div");
  div.classList.add('yui-toast-wrapper')
  document.body.appendChild(div);
  ReactDOM.render(component, div);


};

export default toast;
