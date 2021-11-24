import React, { ChangeEventHandler, FC, useState } from "react";

import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClass = addPrefixAndMergeClass("yui-radio");

import "./radio.scss";
interface RadioProps {
  // radio value
  value?: string | number;
  children?: string | number;
  checked?: boolean;
  disabled?: boolean;

  // 是否是组 radio-group -> group
  name?: string;
  // 一组选中的value, 当处于 radio-group
  selectedValue?: string | number;

  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Radio: FC<RadioProps> = props => {
  const {
    value,
    children,
    checked = false,
    disabled = false,
    name,
    selectedValue,
    onChange
  } = props;
  const [defaultChecked, setDefaultChecked] = useState(checked);

  const handleRadioChange: ChangeEventHandler<HTMLInputElement> = e => {
    if (disabled) return;
    setDefaultChecked(true);
    onChange && onChange(e);
  };

  return (
    <label className={mergeClass({ wrapper: true, disabled })}>
      <span className={mergeClass("")}>
        {/* 模拟单选框 */}
        <span
          className={mergeClass({
            inner: true,
            checked:
              name === "group"
                ? selectedValue === value || selectedValue === children
                : defaultChecked
          })}
        ></span>
        {/* 默认不可见 */}
        <input
          type="radio"
          onChange={handleRadioChange}
          className={mergeClass("input")}
          value={value || children}
          name={name}
        />
      </span>
      <span className={mergeClass("label")}>{children || value}</span>
    </label>
  );
};

Radio.displayName = "Radio";

export default Radio;
