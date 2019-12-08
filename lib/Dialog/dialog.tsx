import React, { Fragment } from "react";
import "./dialog.scss";

interface DialogProps {
  visible: boolean;
}

const Dialog: React.FunctionComponent<DialogProps> = props => {
  return props.visible ? (
    <Fragment>
      <div className="yui-dialog">{props.children}</div>
      <div className="yui-dialog-mask"></div>
    </Fragment>
  ) : null;
};

export default Dialog;
