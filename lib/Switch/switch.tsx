import React, { FC, useState } from "react";
import { addPrefixAndscopedClassMarker } from "../utils/classes";
import "./switch.scss";

const prefix = addPrefixAndscopedClassMarker("yui-switch");

interface SwitchProps {
  checked: boolean;
  disabled?: boolean;
  size?: 'sm' | 'lg'
  onChange?: (value: boolean) => void;
}

const Switch: FC<SwitchProps> = props => {
  const { checked, disabled, size, onChange } = props;
  const [toggle, setToggle] = useState(checked);

  const handleToggle = () => {
    onChange && onChange(!checked);
    setToggle(!toggle);
  };

  const wrapClasses = {
    wrap: true,
    checked: onChange ? checked : toggle,
    disabled: !!disabled,
    [`${size}`]: !!size
  };
  return (
    <button className={prefix(wrapClasses)} onClick={handleToggle}>
      <span className={prefix("square")}></span>
    </button>
  );
};

Switch.displayName = "switch";
Switch.defaultProps = {
  checked: false,
  disabled: false
};

export default Switch;
