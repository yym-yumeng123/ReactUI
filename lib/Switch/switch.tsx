import React, { FC } from "react";
import { addPrefixAndscopedClassMarker } from "../utils/classes";
import "./switch.scss";

const prefix = addPrefixAndscopedClassMarker("yui-switch");

interface SwitchProps {
  checked: boolean;
  disabled?: boolean;
  onChange?: (value: boolean) => void;
}

const Switch: FC<SwitchProps> = props => {
  const { checked, disabled, onChange } = props;

  const handleToggle = () => {
    onChange && onChange(!checked);
  };

  const wrapClasses = {
    wrap: true,
    checked: checked,
    disabled: !!disabled
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
