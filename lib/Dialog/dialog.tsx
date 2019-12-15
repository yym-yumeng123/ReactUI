import React, { Fragment, ReactElement } from 'react';
import './dialog.scss';
import { Icon } from '../index';
import { scopedClassMaker } from '../utils/classes';

interface DialogProps {
  visible: boolean;
  footer?: ReactElement | null;
  onCancel: React.MouseEventHandler;
  onOk: React.MouseEventHandler;
  maskClosable?: boolean;
}

const scopedClass = scopedClassMaker('yui-dialog');

const Dialog: React.FunctionComponent<DialogProps> = props => {
  const handlerOk: React.MouseEventHandler = event => {
    props.onOk(event)
  };

  const handlerClose: React.MouseEventHandler = (event) => {
    props.onCancel(event);
  };

  const handlerCloseMask: React.MouseEventHandler = (event) => {
    if(props.maskClosable) {
      props.onCancel(event);
    }
  }

  console.log(props.footer, '1121');

  return props.visible ? (
    <Fragment>
      <div className={scopedClass()}>
        <div className={scopedClass('close')} onClick={handlerClose}>
          <Icon name="close" />
        </div>
        <header className={scopedClass('header')}>提示标题</header>
        <main className={scopedClass('main')}>
          {props.children}
        </main>
        {
          props.footer === null ? null :
            <footer className={scopedClass('footer')}>
              {props.footer ? props.footer : (
                <>
                  <button onClick={handlerOk}>确定</button>
                  <button onClick={handlerClose}>取消</button>
                </>
              )}
            </footer>
        }
      </div>
      <div className={scopedClass('mask')} onClick={handlerCloseMask}></div>
    </Fragment>
  ) : null;
};

Dialog.defaultProps = {
  maskClosable: true
};

export default Dialog;
