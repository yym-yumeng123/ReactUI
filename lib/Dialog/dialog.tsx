import React, { FC, Fragment, ReactElement } from "react";
import ReactDOM from "react-dom";
import Icon from "lib/Icon/icon";
import Button from "lib/Button/button";
import "./dialog.scss";

import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClass = addPrefixAndMergeClass("yui-dialog");
interface DialogProps {
  visible: boolean; // 是否可见
  footer?: ReactElement | null;
  onCancel?: React.MouseEventHandler;
  onOk?: React.MouseEventHandler;
  onOkText?: string;
  onCancelText?: string;
  maskClosable?: boolean; // 遮罩点击是否关闭
  closable?: boolean; // 右上角 关闭 是否存在
  title?: string;
}

const Dialog: FC<DialogProps> = props => {
  const {
    visible = false,
    closable = true,
    maskClosable = true,
    title = "标题",
    onOkText = "确定",
    onCancelText = "取消",
    onOk,
    onCancel,
    footer
  } = props;
  // 确定回调
  const handlerOk: React.MouseEventHandler = event => {
    onOk && onOk(event);
  };

  // 关闭回调
  const handlerClose: React.MouseEventHandler = event => {
    onCancel && onCancel(event);
  };

  const handlerCloseMask: React.MouseEventHandler = event => {
    if (maskClosable) {
      onCancel && onCancel(event);
    }
  };

  const DialogPor = visible ? (
    <Fragment>
      <div className={mergeClass("")}>
        {closable ? (
          <div className={mergeClass("close")} onClick={handlerClose}>
            <Icon name="close" size="12" />
          </div>
        ) : null}
        <header className={mergeClass("header")}>{title}</header>
        <main className={mergeClass("main")}>{props.children}</main>
        {footer === null ? null : (
          <footer className={mergeClass("footer")}>
            {footer ? (
              footer
            ) : (
              <>
                <Button level="primary" onClick={handlerOk}>
                  {onOkText}
                </Button>
                <Button onClick={handlerClose}>{onCancelText}</Button>
              </>
            )}
          </footer>
        )}
      </div>
      <div className={mergeClass("mask")} onClick={handlerCloseMask}></div>
    </Fragment>
  ) : null;

  // 传送门到 body 元素里
  return ReactDOM.createPortal(DialogPor, document.body);
};

export default Dialog;
export { default as Alert } from "./alert";
export { default as Confirm } from "./confirm";
export { default as Modal } from "./modal";
