import React from 'react';

interface DialogProps {
  visible: boolean
}

const Dialog: React.FunctionComponent<DialogProps> = (props) => {
  return <div>
    { props.visible ? '1' : '2' }
  </div>;
};

export default Dialog
