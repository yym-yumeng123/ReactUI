import React, { FC, ReactElement, ReactNode } from "react";
import ReactDOM from "react-dom";
import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
import Icon from "lib/Icon/icon";
import Button from "lib/Button/button";
import { alert, confirm, modal } from "./_common_modal";
import "./dialog.scss";

const mergeClass = addPrefixAndMergeClass("yui-dialog");

interface DialogProps {
  children: ReactNode;
  visible: boolean; // 是否可见
  title?: string;
  footer?: ReactElement | null;
  onCancel?: () => void;
  onOk?: () => void;
  onOkText?: string;
  onCancelText?: string;
  maskClosable?: boolean; // 遮罩点击是否关闭, 默认点击关闭
  closable?: boolean; // 右上角 关闭 是否存在
}

const Dialog: FC<DialogProps> = (props) => {
  const {
    visible = false,
    closable = true,
    maskClosable = true,
    title = "标题",
    onOkText = "确定",
    onCancelText = "取消",
    onOk,
    onCancel,
    footer,
    children,
  } = props;

  // 确定回调
  const handlerOk = () => onOk && onOk();

  // 关闭回调
  const handlerClose = () => onCancel && onCancel();

  const handlerCloseMask = () => maskClosable && handlerClose();

  const DialogPor = visible ? (
    <>
      {/* 弹框 */}
      <div className={mergeClass("")}>
        {closable ? (
          <div className={mergeClass("close")} onClick={handlerClose}>
            <Icon name="close" size="12" />
          </div>
        ) : null}
        <header className={mergeClass("header")}>{title}</header>
        <main className={mergeClass("main")}>{children}</main>
        {/* footer 可设置 null, 或者自己来画 */}
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
      {/* 遮罩 */}
      <div className={mergeClass("mask")} onClick={handlerCloseMask}></div>
    </>
  ) : null;

  // 传送门到 body 元素里
  return ReactDOM.createPortal(DialogPor, document.body);
};

export default Dialog;
export { default as Alert } from "./alert";
export { default as Confirm } from "./confirm";
export { default as Modal } from "./modal";
export { alert, confirm, modal };
