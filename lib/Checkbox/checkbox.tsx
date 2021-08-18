import React, { FC } from "react";
import { addPrefixAndscopedClassMarker } from "../utils/classes";
import "./checkbox.scss";

const prefix = addPrefixAndscopedClassMarker("yui-checkbox");

interface ICheckBoxProps {
  value: string | number;
  defaultChecked?: boolean;
  disabled?: boolean;
}

const Checkbox: FC<ICheckBoxProps> = props => {
  const { value, defaultChecked = false, disabled = false, children } = props;
  console.log(value, "23232");

  return (
    <label className={prefix({ wrapper: true, disabled })}>
      <span className={prefix("")}>
        <input className={prefix("input")} type="checkbox" value={value} />
        <span
          className={prefix({ inner: true, checked: defaultChecked })}
        ></span>
      </span>
      <span className={prefix("label")}>{value || children}</span>
    </label>
  );
};

export default Checkbox;
