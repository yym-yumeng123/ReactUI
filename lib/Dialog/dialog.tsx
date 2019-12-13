import React, { Fragment } from 'react';
import './dialog.scss';
import Icon from '../Icon/icon'

interface DialogProps {
  visible: boolean;
}

const Dialog: React.FunctionComponent<DialogProps> = props => {
  return props.visible ? (
    <Fragment>
      <div className="yui-dialog">
        <div className="yui-dialog-close">
          <Icon name="close" />
        </div>
        <header className="yui-dialog-header">提示标题</header>
        <main className="yui-dialog-main">
          {props.children}
        </main>
        <footer className="yui-dialog-footer">
          <button>确定</button>
          <button>取消</button>
        </footer>
      </div>
      <div className="yui-dialog-mask"></div>
    </Fragment>
  ) : null;
};

export default Dialog;
