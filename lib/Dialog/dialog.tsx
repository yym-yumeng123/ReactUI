import React, { Fragment } from 'react';
import './dialog.scss';
import { Icon } from '../index';
import { scopedClassMaker } from '../utils/classes';

interface DialogProps {
  visible: boolean;
}

const scopedClass = scopedClassMaker('yui-dialog');

const Dialog: React.FunctionComponent<DialogProps> = props => {
  return !props.visible ? (
    <Fragment>
      <div className={scopedClass()}>
        <div className={scopedClass('close')}>
          <Icon name="close" />
        </div>
        <header className={scopedClass('header')}>提示标题</header>
        <main className={scopedClass('main')}>
          {props.children}
        </main>
        <footer className={scopedClass('footer')}>
          <button>确定</button>
          <button>取消</button>
        </footer>
      </div>
      <div className={scopedClass('mask')}></div>
    </Fragment>
  ) : null;
};

export default Dialog;
