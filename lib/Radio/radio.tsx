import React, { FC, useState } from "react";
import { addPrefixAndscopedClassMarker } from "../utils/classes";
import "./radio.scss";

const prefix = addPrefixAndscopedClassMarker("yui-radio");

interface RadioProps {
  value?: string;
  children?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Radio: FC<RadioProps> = props => {
  const {
    value,
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
          className={prefix({ inner: true, checked: defaultChecked })}
        ></span>
        {/* 默认不可见 */}
        <input
          type="radio"
          checked={defaultChecked}
          onChange={handleRadioChange}
          className={prefix("input")}
          value={value || children}
        />
      </span>
      <span className={prefix("label")}>{value || children}</span>
    </label>
  );
};

Radio.displayName = "Radio";

export default Radio;
