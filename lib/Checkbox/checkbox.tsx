import React, { ChangeEvent, FC, useState } from "react";
import "./checkbox.scss";

import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClass = addPrefixAndMergeClass("yui-checkbox");

interface ICheckBoxProps {
  value?: string | number;
  children?: string | number;
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean; // 不完全选择
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: FC<ICheckBoxProps> = props => {
  const {
    value,
    children,
    checked = false,
    disabled = false,
    indeterminate = false,
    onChange
  } = props;

  // 当前是否选中
  const [currentChecked, setCurrentChecked] = useState<boolean>(checked);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    setCurrentChecked(!currentChecked);
    onChange && onChange(e);
  };

  return (
    <label className={mergeClass({ wrapper: true, disabled })}>
      <span className={mergeClass("")}>
        <span
          className={mergeClass({
            inner: true,
            checked: currentChecked,
            indeterminate: indeterminate
          })}
        ></span>
        <input
          className={mergeClass("input")}
          type="checkbox"
          value={value || children}
          checked={currentChecked}
          onChange={handleChange}
        />
      </span>
      {/* 有 children 就显示 children, 无则显示 value */}
      <span className={mergeClass("label")}>{children || value}</span>
    </label>
  );
};

export default Checkbox;
