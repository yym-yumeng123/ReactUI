import React, { FC, useState } from "react";

import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClasss = addPrefixAndMergeClass("yui-switch");

import "./switch.scss";
interface SwitchProps {
  checked?: boolean;
  disabled?: boolean;
  size?: "sm" | "lg";
  onChange?: (value: boolean) => void;
}

const Switch: FC<SwitchProps> = props => {
  const { checked = false, disabled = false, size, onChange } = props;
  const [toggle, setToggle] = useState(checked);

  const handleToggle = () => {
    if (disabled) return;
    onChange && onChange(!checked);
    setToggle(!toggle);
  };

  const wrapClasses = {
    wrap: true,
    checked: onChange ? checked : toggle,
    disabled: disabled,
    [`${size}`]: !!size
  };
  return (
    <button className={mergeClasss(wrapClasses)} onClick={handleToggle}>
      <span className={mergeClasss("square")}></span>
    </button>
  );
};

Switch.displayName = "switch";
Switch.defaultProps = {
  checked: false,
  disabled: false
};

export default Switch;
