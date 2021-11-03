import React from "react";
import ReactDOM from "react-dom";
import Icon from "lib/Icon/icon";
import "./toast.scss";

import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClass = addPrefixAndMergeClass("yui-toast");

interface Options {
  autoClose?: boolean;
  autoCloseDelay?: number;
  position?: "top" | "middle" | "bottom";
  type?: "success" | "danger" | "info";
  onClose?: () => void;
}

let currentToast: any
const toast = (content: string, options: Options) => {
  if(currentToast) {
    console.log(currentToast, '东风');
    currentToast()
  }
  currentToast = createToast(content, options);
};

const createToast = (content: string, options: Options) => {
  const {
    autoClose = true,
    autoCloseDelay = 3,
    position = "top",
    onClose
  } = options;

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

  const component = (
    <div
      className={mergeClass({ "": true, [`posotion-${position}`]: !!position })}
    >
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
  document.body.appendChild(div);
  ReactDOM.render(component, div);

  return closeToast
};

export default toast;
