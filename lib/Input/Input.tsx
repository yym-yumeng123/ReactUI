import React, {
  FC,
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
  // 添加前缀
  prepend?: string | ReactElement;
  // 添加后缀
  append?: string | ReactElement;
}

const Input: FC<InputProps> = props => {
  const { disabled, size, icon, prepend, append, value, ...restProps } = props;
  // 根据属性计算不同的 className

  // 有焦点时, 设置样式
  // const handleFocus: FocusEventHandler<HTMLInputElement> = e => {
  //   e.currentTarget.parentElement!.style.boxShadow =
  //     "0 0 0 3px rgba(52,152,255,0.25)";
  //   e.currentTarget.parentElement!.style.borderRadius = "6px";
  // };
  // const handleBlur: FocusEventHandler<HTMLInputElement> = e => {
  //   e.currentTarget.parentElement!.style.boxShadow = "none";
  //   e.currentTarget.parentElement!.style.borderRadius = "none";
  // };

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
          // onFocus={handleFocus}
          // onBlur={handleBlur}
          {...restProps}
        />
        <span className={mergeClass("icon")}>
          <Icon name="close" size="10" />
        </span>
      </span>
      {append && <span className={mergeClass("right")}>{append}</span>}
    </div>
  );
};

export default Input;
