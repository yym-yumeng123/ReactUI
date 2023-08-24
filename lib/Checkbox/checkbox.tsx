import React, {
  FC,
  useState,
  useEffect,
  ChangeEvent,
  ChangeEventHandler,
} from "react";
import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
import "./checkbox.scss";

const mergeClass = addPrefixAndMergeClass("yui-checkbox");

interface ICheckBoxProps {
  // group
  selected?: string[];
  name?: string;
  // 单个
  value?: string;
  children?: string | number;
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean; // 不完全选择
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: FC<ICheckBoxProps> = (props) => {
  const {
    selected = [],
    name = "",
    value = "",
    children = "",
    checked = false,
    disabled = false,
    indeterminate = false,
    onChange,
  } = props;

  // 当前是否选中
  const [currentChecked, setCurrentChecked] = useState<boolean>(checked);

  useEffect(() => {
    // 当 group 选中时
    if (
      name === "group" &&
      selected.length > 0 &&
      selected.indexOf(value) > -1
    ) {
      setCurrentChecked(true);
    }
  }, []);

  useEffect(() => {
    // 当被其他 checkbox 设置时
    if (name === "") {
      setCurrentChecked(checked);
    }
  }, [checked]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
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
            indeterminate: indeterminate,
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
