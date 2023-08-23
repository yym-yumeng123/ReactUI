import React, { ChangeEventHandler, FC, useContext, useState } from "react";
import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
import { GroupContext } from  './group'
import "./radio.scss";

const mergeClass = addPrefixAndMergeClass("yui-radio");

interface RadioProps {
  // radio value
  value?: string | number;
  children?: string | number;
  checked?: boolean;
  disabled?: boolean;

  // 一组选中的value, 当处于 radio-group
  selectedValue?: string | number;

  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Radio: FC<RadioProps> = (props) => {
  const {
    value,
    children,
    checked = false,
    disabled = false,
    selectedValue,
    onChange,
  } = props;
  const [defaultChecked, setDefaultChecked] = useState(checked);
  const name = useContext(GroupContext)

  const handleRadioChange: ChangeEventHandler<HTMLInputElement> = (e) => {
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
                : defaultChecked,
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

export default Radio;
