import React, {
  FC,
  useRef,
  ChangeEventHandler,
  FocusEventHandler,
  InputHTMLAttributes,
  ReactElement,
} from "react";
import Icon from "lib/Icon/icon";
import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";

import "./input.scss";

const mergeClass = addPrefixAndMergeClass("yui-input");

// 定义 size
type InputSize = "lg" | "sm" | "xs";

/**
 * 希望几个 HTML input 所有属性
 * 原有属性已经有 size, 我们再次定义, 会有冲突, 怎么解决?
 * 1. 修改名称
 * 2. 使用 Omit
 */
export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, "size"> {
  value?: string | "";
  disabled?: boolean;
  size?: InputSize;
  // 清空按钮存在不
  closable?: boolean;
  // 添加前缀
  prepend?: string | ReactElement;
  // 添加后缀
  append?: string | ReactElement;

  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onClear?: () => void;
}

const Input: FC<InputProps> = ({
  disabled,
  size,
  prepend,
  append,
  value,
  onChange,
  onFocus,
  onBlur,
  onClear,
  closable = false,
  ...restProps
}) => {
  const isShow = useRef(closable);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange && onChange(e);
  };

  const handleFocus: FocusEventHandler<HTMLInputElement> = (e) => {
    onFocus && onFocus(e);
  };

  const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    onBlur && onBlur(e);
  };

  const handleClear = () => onClear && onClear();

  const parentClasses = {
    wrapper: true,
    prepend: !!prepend,
    append: !!append,
    [`${size}`]: !!size,
    disabled: !!disabled,
  };

  return (
    <div className={mergeClass(parentClasses)}>
      {prepend && <span className={mergeClass("left")}>{prepend}</span>}
      <span className={mergeClass("content")}>
        <input
          value={value}
          disabled={disabled}
          className={mergeClass("")}
          type="text"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          style={{
            padding: `8px ${isShow.current ? "26px" : "12px"} 8px 12px`,
          }}
          {...restProps}
        />
        {isShow.current && value!.length > 0 && (
          <span className={mergeClass("icon")}>
            <Icon
              name="close_no_around"
              size="8"
              color="#a6a6a6"
              onClick={handleClear}
            />
          </span>
        )}
      </span>
      {append && <span className={mergeClass("right")}>{append}</span>}
    </div>
  );
};

export default Input;
