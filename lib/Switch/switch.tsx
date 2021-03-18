import React, { FC } from "react";
import {addPrefixAndscopedClassMarker} from "../utils/classes";
import './switch.scss'

const prefix = addPrefixAndscopedClassMarker('yui-switch')

interface SwitchProps {
  checked: boolean;
  onChange?: (value: boolean) => void
}

const Switch: FC<SwitchProps> = props => {
  const { checked, onChange } = props

  const handleToggle = () =>{
    console.log(onChange)
    onChange(!checked)
  }

  const wrapClasses = {
    'wrap': true,
    'checked': checked || false
  }
  return (
    <button className={prefix(wrapClasses)} onClick={handleToggle}>
      <span className={prefix('square')}></span>
    </button>
  );
};

Switch.displayName = "switch";
Switch.defaultProps = {
  checked: false
};

export default Switch;
