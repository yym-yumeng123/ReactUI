import React, { FC, useRef, useState } from "react";
import PropTypes from "prop-types";
import {addPrefixAndscopedClassMarker} from "../utils/classes";
import './switch.scss'

const prefix = addPrefixAndscopedClassMarker('yui-switch')

interface SwitchProps {
  checked?: boolean;
}

const Switch: FC<SwitchProps> = props => {
  const { checked } = props;
  const [toggle, setToggle] = useState(false);

  const handleToggle = () =>{
    setToggle(!toggle)
  }

  const wrapClasses = {
    'wrap': true,
    'checked': toggle
  }
  return (
    <button className={prefix(wrapClasses)} onClick={handleToggle}>
      <span className={prefix('square')}></span>
    </button>
  );
};

Switch.displayName = "switch";
Switch.defaultProps = {
  checked: true
};
Switch.propTypes = {
  checked: PropTypes.bool
};

export default Switch;
