import React, { Fragment, ReactElement } from 'react';
import ReactDOM from 'react-dom';
import './dialog.scss';
import { Icon } from '../index';
import { scopedClassMaker } from '../utils/classes';

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

const scopedClass = scopedClassMaker('yui-dialog');

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
          <div className={scopedClass('close')} onClick={handlerClose}>
            <Icon name="close" />
          </div>
        ) : null}
        <header className={scopedClass('header')}>{props.title}</header>
        <main className={scopedClass('main')}>{props.children}</main>
        {props.footer === null ? null : (
          <footer className={scopedClass('footer')}>
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
      <div className={scopedClass('mask')} onClick={handlerCloseMask}></div>
    </Fragment>
  ) : null;

  return ReactDOM.createPortal(DialogPor, document.body);
};

Dialog.defaultProps = {
  maskClosable: true,
  closable: true,
  title: '标题',
  onOkText: '确定',
  onCancelText: '取消'
};

const alert = (content: string) => {};

export { alert };

export default Dialog;
