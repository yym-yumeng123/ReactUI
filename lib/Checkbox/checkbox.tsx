import React, { ChangeEvent, FC, useState } from "react";
import { addPrefixAndscopedClassMarker } from "../utils/classes";
import "./checkbox.scss";

const prefix = addPrefixAndscopedClassMarker("yui-checkbox");

interface ICheckBoxProps {
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  children?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: FC<ICheckBoxProps> = props => {
  const {
    children = "多选框",
    defaultChecked = false,
    checked = false,
    disabled = false,
    // 当checked 为true, 并且 indeterminate 为true 才会样式显示
    indeterminate = false,
    onChange
  } = props;
  // 当前是否选中 ==> 只要 default & checked 有一个为 true 就是true
  const [currentChecked, setCurrentChecked] = useState<boolean>(
    checked || defaultChecked
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    setCurrentChecked(!currentChecked);
    onChange && onChange(e);
  };

  return (
    <label className={prefix({ wrapper: true, disabled })}>
      <span className={prefix("")}>
        <input
          className={prefix("input")}
          type="checkbox"
          value={children}
          checked={currentChecked}
          onChange={handleChange}
        />
        <span
          className={prefix({
            inner: true,
            checked: currentChecked,
            indeterminate: currentChecked && indeterminate
          })}
        ></span>
      </span>
      <span className={prefix("label")}>{children}</span>
    </label>
  );
};

export default Checkbox;
