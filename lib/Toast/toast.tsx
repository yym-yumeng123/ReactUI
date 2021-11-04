import React from "react";
import ReactDOM from "react-dom";
import Icon from "lib/Icon/icon";
import "./toast.scss";

import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClass = addPrefixAndMergeClass("yui-toast");

interface Options {
  content: string;
  autoClose?: boolean;
  autoCloseDelay?: number;
  type?: "success" | "danger" | "info";
  onClose?: () => void;
}

const toast = (options: Options) => {
  const div = document.createElement("div");
  div.id = "yui-toast-wrapper";
  document.body.appendChild(div);

  createToast(options);
};

const createToast = (options: Options) => {
  const { content, autoClose = true, autoCloseDelay = 3, onClose } = options;

  const closeToast = () => {
    ReactDOM.unmountComponentAtNode(div);
    div.remove();

    // 把多余的 id 为 wrapper 的div 去掉
    const element = document.querySelectorAll(".yui-toast");
    if (element.length === 0) {
      const wrapper = document.querySelectorAll("#yui-toast-wrapper");
      wrapper.forEach(item => {
        ReactDOM.unmountComponentAtNode(item);
        item.remove();
      });
    }
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

  const component = (
    <div className={mergeClass({ "": true })}>
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
  const wrapper = document.querySelector("#yui-toast-wrapper");
  wrapper?.appendChild(div);
  ReactDOM.render(component, div);

};

export default toast;
