import React, {
  ChangeEvent,
  ChangeEventHandler,
  FC,
  useEffect,
  useState
} from "react";
import "./checkbox.scss";

import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClass = addPrefixAndMergeClass("yui-checkbox");

interface ICheckBoxProps {
  // group
  selected?: string[];
  // 单个
  value?: string;
  children?: string | number;
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean; // 不完全选择
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: FC<ICheckBoxProps> = props => {
  const {
    selected = [],
    value = '',
    children = '',
    checked = false,
    disabled = false,
    indeterminate = false,
    onChange
  } = props;

  // 当前是否选中
  const [currentChecked, setCurrentChecked] = useState<boolean>(checked);

  useEffect(() => {
    if (selected.length > 0 && selected.indexOf(value) > -1) {
      setCurrentChecked(true);
    }
  }, []);

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
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
          value={value}
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
