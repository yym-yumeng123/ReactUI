import React, {FC, InputHTMLAttributes, ReactElement} from "react";
import {addPrefixAndscopedClassMarker} from "../utils/classes";
// import Icon from "lib/Icon/icon";

import "./input.scss";

const prefix = addPrefixAndscopedClassMarker("yui-input");

// 定义 size
type InputSize = "lg" | "md" | "sm" | "xs";

/**
 * 希望几个 HTML input 所有属性
 * 原有属性已经有 size, 我们再次定义, 会有冲突, 怎么解决?
 * 1. 修改名称
 * 2. 使用 Omit
 */
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, "size"> {
  disabled?: boolean;
  size?: InputSize;
  icon?: string;
  prepand?: string | ReactElement;
  append?: string | ReactElement;
}

const Input: FC<InputProps> = (props) => {
  const {disabled, size, icon, prepand, append, ...restProps} = props;
  // 根据属性计算不同的 className

  const classes = {
    "": true,
    [`${size}`]: !!size,
    ["disabled"]: !!disabled
  };

  return (
    <>
      <input className={prefix(classes)} type="text" {...restProps}/>
    </>
  );
};

export default Input;
