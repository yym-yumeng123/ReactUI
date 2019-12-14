import React, { Fragment, ReactElement } from 'react';
import './dialog.scss';
import { Icon } from '../index';
import { scopedClassMaker } from '../utils/classes';

interface DialogProps {
  visible: boolean;
  buttons: Array<ReactElement>;
  onClose: React.MouseEventHandler;
}

const scopedClass = scopedClassMaker('yui-dialog');

const Dialog: React.FunctionComponent<DialogProps> = props => {
  const handlerClose: React.MouseEventHandler = (event) => {
    props.onClose(event);
  };

  return !props.visible ? (
    <Fragment>
      <div className={scopedClass()}>
        <div className={scopedClass('close')} onClick={handlerClose}>
          <Icon name="close" />
        </div>
        <header className={scopedClass('header')}>提示标题</header>
        <main className={scopedClass('main')}>
          {props.children}
        </main>
        <footer className={scopedClass('footer')}>
          {props.buttons}
        </footer>
      </div>
      <div className={scopedClass('mask')}></div>
    </Fragment>
  ) : null;
};

export default Dialog;
