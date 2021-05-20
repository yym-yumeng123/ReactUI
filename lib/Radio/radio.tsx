import React, { FC, useState } from "react";
import { addPrefixAndscopedClassMarker } from "../utils/classes";
import "./radio.scss";

const prefix = addPrefixAndscopedClassMarker("yui-radio");

interface RadioProps {
  checked?: boolean;
  children: string;
  onChange?: any;
}

const Radio: FC<RadioProps> = props => {
  const { children, onChange, checked = false } = props;
  const [defaultChecked, setDefaultChecked] = useState(checked);

  const chengeStatus = () => {
    setDefaultChecked(true);
    onChange && onChange(children);
  };

  return (
    <label className={prefix("wrapper")}>
      <span className={prefix("")}>
        <span
          className={prefix({ inner: true, checked: defaultChecked })}
        ></span>
        <input
          type="radio"
          checked={defaultChecked}
          onChange={chengeStatus}
          className={prefix("input")}
        />
      </span>
      <span className={prefix("label")}>{children}</span>
    </label>
  );
};

Radio.displayName = "Radio";

export default Radio;
