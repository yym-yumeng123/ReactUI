import React, {
  FC,
  useRef,
  ChangeEventHandler,
  FocusEventHandler,
  InputHTMLAttributes,
  ReactElement
} from "react";
import Icon from "lib/Icon/icon";

import "./input.scss";

import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
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
  icon?: string;
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

const Input: FC<InputProps> = props => {
  const {
    disabled,
    size,
    icon,
    prepend,
    append,
    value,
    onChange,
    onFocus,
    onBlur,
    onClear,
    closable = false,
    ...restProps
  } = props;
  const isShow = useRef(closable);

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    onChange && onChange(e);
  };
  // 有焦点时, 设置样式
  const handleFocus: FocusEventHandler<HTMLInputElement> = e => {
    onFocus && onFocus(e);

    // console.log(e.currentTarget.parentElement?.parentElement);

    // e.currentTarget.parentElement!.parentElement!.style.boxShadow =
      // "0 0 0 3px rgba(52,152,255,0.25)";
    // e.currentTarget.parentElement!.parentElement!.style.border = '1px solid #3498ff'
    // e.currentTarget.parentElement!.parentElement!.style.borderRadius = "6px";
  };
  const handleBlur: FocusEventHandler<HTMLInputElement> = e => {
    onBlur && onBlur(e);
    // e.currentTarget.parentElement!.parentElement!.style.boxShadow = "none";
    // e.currentTarget.parentElement!.parentElement!.style.border = '1px solid #e5e5ea'
    // e.currentTarget.parentElement!.parentElement!.style.borderRadius = "none";
  };
  const handleClear = () => {
    onClear && onClear();
  };

  const parentClasses = {
    wrapper: true,
    prepend: !!prepend,
    append: !!append,
    [`${size}`]: !!size,
    disabled: !!disabled
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
          {...restProps}
        />
        {isShow.current && value!.length > 0 && (
          <span className={mergeClass("icon")}>
            <Icon name="close_no_around" size="8" color="#a6a6a6" onClick={handleClear} />
          </span>
        )}
      </span>
      {append && <span className={mergeClass("right")}>{append}</span>}
    </div>
  );
};

export default Input;
