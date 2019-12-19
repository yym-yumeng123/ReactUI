import React, { Fragment, ReactElement } from "react";
import ReactDOM from "react-dom";
import "./dialog.scss";
import { Icon } from "../index";
import { scopedClassMaker } from "../utils/classes";

interface DialogProps {
  visible: boolean;
  footer?: ReactElement | null;
  onCancel: React.MouseEventHandler;
  onOk: React.MouseEventHandler;
  onOkText?: string;
  onCancelText?: string;
  maskClosable?: boolean;
  closable?: boolean;
  title?: string;
}

const scopedClass = scopedClassMaker("yui-dialog");

const Dialog: React.FunctionComponent<DialogProps> = props => {
  const handlerOk: React.MouseEventHandler = event => {
    props.onOk(event);
  };

  const handlerClose: React.MouseEventHandler = event => {
    props.onCancel(event);
  };

  const handlerCloseMask: React.MouseEventHandler = event => {
    if (props.maskClosable) {
      props.onCancel(event);
    }
  };

  const DialogPor = props.visible ? (
    <Fragment>
      <div className={scopedClass()}>
        {props.closable ? (
          <div className={scopedClass("close")} onClick={handlerClose}>
            <Icon name="close" />
          </div>
        ) : null}
        <header className={scopedClass("header")}>{props.title}</header>
        <main className={scopedClass("main")}>{props.children}</main>
        {props.footer === null ? null : (
          <footer className={scopedClass("footer")}>
            {props.footer ? (
              props.footer
            ) : (
              <>
                <button onClick={handlerOk}>{props.onOkText}</button>
                <button onClick={handlerClose}>{props.onCancelText}</button>
              </>
            )}
          </footer>
        )}
      </div>
      <div className={scopedClass("mask")} onClick={handlerCloseMask}></div>
    </Fragment>
  ) : null;

  return ReactDOM.createPortal(DialogPor, document.body);
};

Dialog.defaultProps = {
  maskClosable: true,
  closable: true,
  title: "标题",
  onOkText: "确定",
  onCancelText: "取消"
};

const Alert = (content: string) => {
  const component = (
    <Dialog
      visible={true}
      onOk={() => {}}
      onCancel={() => {
        ReactDOM.render(React.cloneElement(component, { visible: false }), div);
        // 卸载
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
      }}
      footer={null}
    >
      {content}
    </Dialog>
  );
  const div = document.createElement("div");
  document.body.append(div);
  ReactDOM.render(component, div);
};

const Confirm = (content: string, yes?: () => void, no?: () => void) => {
  const onYes = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
    yes && yes();
  };

  const onNo = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
    no && no();
  };

  const component = (
    <Dialog
      visible={true}
      onCancel={onNo}
      onOk={() => {}}
      footer={
        <>
          <button onClick={onYes}>ok</button>
          <button onClick={onNo}>cancel</button>
        </>
      }
    >
      {content}
    </Dialog>
  );

  const div = document.createElement("div");
  document.body.appendChild(div);
  ReactDOM.render(component, div);
};

export { Alert, Confirm };

export default Dialog;
