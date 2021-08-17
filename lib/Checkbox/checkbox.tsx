import React, { FC } from "react";
import { addPrefixAndscopedClassMarker } from "../utils/classes";

const prefix = addPrefixAndscopedClassMarker("yui-checkbox");

interface ICheckBoxProps {
  value: string | number
}

const Checkbox: FC<ICheckBoxProps> = props => {
  const { value, children } = props;
  console.log(value, '23232');

  return (
    <label className={prefix("wrapper")}>
      <span className={prefix("")}>
        <input type="checkbox" id="checkbox" value={value} />
        <span className={prefix("inner")}></span>
      </span>
      <span className={prefix('label')}>{value || children}</span>
    </label>
  );
};

export default Checkbox;
