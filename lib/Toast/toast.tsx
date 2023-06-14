import React from "react";
import ReactDOM from "react-dom/client";
import Icon from "lib/Icon/icon";
import "./toast.scss";

import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClass = addPrefixAndMergeClass("yui-toast");

const primaryColor = "#2a9af4";

interface ToastProps {
  content: string;
  autoClose?: boolean;
  autoCloseDelay?: number;
  onClose?: () => void;
}

const toast = (options: ToastProps) => {
  if (!document.querySelector("#yui-toast-wrapper")) {
    const div = document.createElement("div");
    div.setAttribute("id", "yui-toast-wrapper");
    document.body.appendChild(div);
  }

  createToast(options);
};

const createToast = (props: ToastProps) => {
  const { content, autoClose = true, autoCloseDelay = 3, onClose } = props;

  // 是否自动关闭 & 时间
  autoClose && setTimeout(() => closeToast(), autoCloseDelay * 1000);

  const closeToast = () => {
    rootDiv.unmount();
    div.remove();

    // id 为 wrapper 的 div 去掉
    document.querySelectorAll(".yui-toast").length === 0 &&
      document.querySelector("#yui-toast-wrapper")!.remove();
  };

  const handleClose = () => {
    closeToast();
    onClose && onClose();
  };

  const component = (
    <div className={mergeClass("")}>
      <span>{content}</span>
      {!autoClose && (
        <span className={mergeClass("close")}>
          <Icon
            name="close_no_around"
            size="8"
            color={primaryColor}
            onClick={handleClose}
          />
        </span>
      )}
    </div>
  );

  const div = document.createElement("div");
  const wrapper = document.querySelector("#yui-toast-wrapper");
  wrapper?.appendChild(div);
  const rootDiv = ReactDOM.createRoot(div);
  rootDiv.render(component);
};

export default toast;
