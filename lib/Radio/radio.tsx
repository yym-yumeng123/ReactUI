import React, { FC, useState } from "react";
import { addPrefixAndscopedClassMarker } from "../utils/classes";
import "./radio.scss";

const prefix = addPrefixAndscopedClassMarker("yui-radio");

interface RadioProps {
  // radio value
  value?: string | number;
  // 一组选中的value
  selectedValue?: string | number;
  // 是否是组
  name?: string;
  children?: string | number;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Radio: FC<RadioProps> = props => {
  const {
    value,
    selectedValue,
    name,
    children = "单选框",
    onChange,
    checked = false,
    disabled = false
  } = props;
  const [defaultChecked, setDefaultChecked] = useState(checked);

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDefaultChecked(true);
    onChange && onChange(e);
  };

  return (
    <label className={prefix({ wrapper: true, disabled })}>
      <span className={prefix("")}>
        {/* 模拟单选框 */}
        <span
          className={prefix({
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
          className={prefix("input")}
          value={value || children}
          name={name}
        />
      </span>
      <span className={prefix("label")}>{value || children}</span>
    </label>
  );
};

Radio.displayName = "Radio";

export default Radio;
