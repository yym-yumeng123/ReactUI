import React, { ChangeEvent, FC, useState } from "react";
import { addPrefixAndscopedClassMarker } from "../utils/classes";
import "./checkbox.scss";

const prefix = addPrefixAndscopedClassMarker("yui-checkbox");

interface ICheckBoxProps {
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  children?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: FC<ICheckBoxProps> = props => {
  const {
    children = '多选框',
    defaultChecked = false,
    disabled = false,
    onChange
  } = props;
  const [selected, setSelected] = useState<boolean>(defaultChecked);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    setSelected(!selected);
    onChange && onChange(e);
  };

  return (
    <label className={prefix({ wrapper: true, disabled })}>
      <span className={prefix("")}>
        <input
          className={prefix("input")}
          type="checkbox"
          value={children}
          defaultChecked={selected}
          onChange={handleChange}
        />
        <span className={prefix({ inner: true, checked: selected })}></span>
      </span>
      <span className={prefix("label")}>{children}</span>
    </label>
  );
};

export default Checkbox;
